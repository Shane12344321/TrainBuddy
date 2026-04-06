/**
 * TrainBuddy — Main Application Logic
 * Find VIT travel companions on Indian Railways trains
 */

import { auth, db, googleProvider } from './firebase-config.js';
import { signInWithPopup, signOut, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc, collection, query, where, onSnapshot, updateDoc, arrayUnion, arrayRemove, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Global user state
let currentUser = null;

// ===== DATABASE MUTATIONS =====
async function addPassenger(trainNumber, date, passenger) {
    if (!currentUser) return null;
    const journeyId = `${trainNumber}_${date}`;
    const journeyRef = doc(db, 'journeys', journeyId);
    
    passenger.uid = currentUser.uid;
    passenger.id = currentUser.uid; // One entry per user per train
    passenger.addedAt = Date.now();
    passenger.name = currentUser.name;
    passenger.whatsapp = currentUser.whatsapp;
    passenger.gender = currentUser.gender;
    
    try {
        const docSnap = await getDoc(journeyRef);
        if (!docSnap.exists()) {
            const train = TRAINS_MAP[trainNumber];
            await setDoc(journeyRef, {
                trainNumber,
                date,
                trainName: train ? train.name : 'Unknown Train',
                source: train ? train.source : '',
                sourceCode: train ? train.sourceCode : '',
                dest: train ? train.dest : '',
                destCode: train ? train.destCode : '',
                passengers: [passenger],
                createdAt: Date.now()
            });
        } else {
            // Filter out old entry if user is updating their info
            const data = docSnap.data();
            const updatedPassengers = data.passengers.filter(p => p.uid !== currentUser.uid);
            updatedPassengers.push(passenger);
            await updateDoc(journeyRef, { passengers: updatedPassengers });
        }
    } catch (error) {
        console.error("Error adding passenger:", error);
    }
}

async function removePassenger(trainNumber, date, passengerId) {
    if (!currentUser) return;
    const journeyId = `${trainNumber}_${date}`;
    const journeyRef = doc(db, 'journeys', journeyId);
    
    try {
        const docSnap = await getDoc(journeyRef);
        if (docSnap.exists()) {
            const currentPassengers = docSnap.data().passengers;
            const passengerToRemove = currentPassengers.find(p => p.id === passengerId);
            if (passengerToRemove && passengerToRemove.uid === currentUser.uid) {
                await updateDoc(journeyRef, {
                    passengers: arrayRemove(passengerToRemove)
                });
            } else {
                console.error("Cannot remove another user");
            }
        }
    } catch (error) {
        console.error("Error removing passenger:", error);
    }
}

    // ===== DOM REFS =====
    // App
    const searchInput = document.getElementById('train-search');
    const dropdown = document.getElementById('autocomplete-dropdown');
    const heroSection = document.getElementById('hero');
    const detailSection = document.getElementById('train-detail-section');
    const feedSection = document.getElementById('feed-section');
    const backBtn = document.getElementById('back-btn');
    const travelDateInput = document.getElementById('travel-date');
    const passengerForm = document.getElementById('add-passenger-form');
    const passengersList = document.getElementById('passengers-list');
    const passengersCount = document.getElementById('passengers-count');
    const emptyPassengers = document.getElementById('empty-passengers');
    const feedGrid = document.getElementById('feed-grid');
    const feedEmpty = document.getElementById('feed-empty');
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const logoBtn = document.getElementById('logo');
    const themeToggle = document.getElementById('theme-toggle');

    // Detail fields
    const detailTrainNumber = document.getElementById('detail-train-number');
    const detailTrainName = document.getElementById('detail-train-name');
    const detailSourceCode = document.getElementById('detail-source-code');
    const detailSourceName = document.getElementById('detail-source-name');
    const detailDestCode = document.getElementById('detail-dest-code');
    const detailDestName = document.getElementById('detail-dest-name');

    // User pill
    const userPill = document.getElementById('user-pill');
    const userPillAvatar = document.getElementById('user-pill-avatar');
    const userPillName = document.getElementById('user-pill-name');

    // Privacy
    const privacyRow = document.getElementById('privacy-row');
    const womenOnlyCheckbox = document.getElementById('women-only');

    // Auth & Onboarding
    const loginScreen = document.getElementById('login-screen');
    const googleLoginBtn = document.getElementById('google-login-btn');
    const guestLoginBtn = document.getElementById('guest-login-btn');
    const appContainer = document.getElementById('app-container');
    const onboardingModal = document.getElementById('onboarding-modal');
    const onboardingForm = document.getElementById('onboarding-form');

    // State
    let currentTrain = null;
    let activeDropdownIndex = -1;
    let currentPassengerListener = null;
    let dropdownItems = [];

    // ===== AVATAR COLORS =====
    const avatarColors = [
        'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'linear-gradient(135deg, #ec4899, #f43f5e)',
        'linear-gradient(135deg, #14b8a6, #22c55e)',
        'linear-gradient(135deg, #f59e0b, #ef4444)',
        'linear-gradient(135deg, #3b82f6, #6366f1)',
        'linear-gradient(135deg, #8b5cf6, #ec4899)',
        'linear-gradient(135deg, #06b6d4, #3b82f6)',
        'linear-gradient(135deg, #f97316, #f59e0b)',
    ];

    function getAvatarColor(name) {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return avatarColors[Math.abs(hash) % avatarColors.length];
    }

    function getInitials(name) {
        return name.split(' ').map(w => w[0]).join('').substring(0, 2);
    }

    // ===== LOGIN & AUTH =====
    function showApp(user) {
        currentUser = user;
        loginScreen.classList.add('hidden');
        onboardingModal.classList.add('hidden');
        appContainer.classList.remove('hidden');

        // Populate user pill
        userPillAvatar.textContent = getInitials(user.name);
        userPillAvatar.style.background = getAvatarColor(user.name);
        userPillName.textContent = user.name.split(' ')[0];

        // Show/hide women-only checkbox based on gender
        if (user.gender === 'female') {
            privacyRow.classList.add('visible');
        } else {
            privacyRow.classList.remove('visible');
            womenOnlyCheckbox.checked = false;
        }
        
        renderFeed();
    }

    function showLogin() {
        currentUser = null;
        loginScreen.classList.remove('hidden');
        appContainer.classList.add('hidden');
        onboardingModal.classList.add('hidden');
    }

    // Google Sign-In
    googleLoginBtn.addEventListener('click', async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            // onAuthStateChanged will handle the rest
        } catch (error) {
            console.error("Auth error:", error);
            showToast("Login failed. Please try again.");
        }
    });

    // Guest / Anonymous Sign-In
    guestLoginBtn.addEventListener('click', async () => {
        try {
            await signInAnonymously(auth);
            // onAuthStateChanged will handle the rest
        } catch (error) {
            console.error("Guest Auth error:", error);
            showToast("Demo login failed. Please enable Anonymous Auth in Firebase.");
        }
    });

    // Auth State Observer
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Check if user profile exists in Firestore
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                // Return user — they already completed onboarding
                showApp({ uid: user.uid, email: user.email, ...docSnap.data() });
            } else {
                // New user — need onboarding for gender and whatsapp
                loginScreen.classList.add('hidden');
                appContainer.classList.add('hidden');
                onboardingModal.classList.remove('hidden');
            }
        } else {
            showLogin();
        }
    });

    // Onboarding Form Submit
    onboardingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const gender = document.getElementById('onboard-gender').value;
        const whatsapp = document.getElementById('onboard-whatsapp').value.trim();

        if (!gender || ! whatsapp) return;
        if (!/^\d{10}$/.test(whatsapp)) {
            showToast('Enter a valid 10-digit WhatsApp number');
            return;
        }

        const user = auth.currentUser;
        if (!user) return;

        const profileData = {
            name: user.displayName || 'VIT Student',
            email: user.email,
            gender,
            whatsapp
        };

        try {
            await setDoc(doc(db, 'users', user.uid), profileData);
            showApp({ uid: user.uid, ...profileData });
            showToast(`Welcome, ${profileData.name.split(' ')[0]}! 🎓`);
        } catch (error) {
            console.error("Error saving profile:", error);
            showToast("Failed to save profile.");
        }
    });

    // Sign out via user pill click
    userPill.addEventListener('click', async () => {
        if (confirm('Sign out of TrainBuddy?')) {
            try {
                await signOut(auth);
            } catch (error) {
                console.error("Sign out error:", error);
            }
        }
    });

    // Close onboarding modal (optional - user can click overlay)
    window.closeOnboarding = function() {
        // Prevent closing - force user to complete profile
        // Uncomment below if you want to allow closing:
        // onboardingModal.classList.add('hidden');
    };

    // ===== AUTOCOMPLETE =====
    function searchTrains(query) {
        query = query.trim();
        if (!query) return [];
        
        const q = query.toLowerCase();
        return TRAINS_DB.filter(t => {
            return t.number.includes(q) ||
                   t.name.toLowerCase().includes(q) ||
                   t.source.toLowerCase().includes(q) ||
                   t.dest.toLowerCase().includes(q) ||
                   t.sourceCode.toLowerCase().includes(q) ||
                   t.destCode.toLowerCase().includes(q);
        }).slice(0, 8);
    }

    function renderDropdown(results) {
        if (results.length === 0) {
            dropdown.classList.remove('active');
            dropdownItems = [];
            activeDropdownIndex = -1;
            return;
        }

        dropdown.innerHTML = results.map((train, i) => `
            <div class="autocomplete-item" data-index="${i}" data-number="${train.number}">
                <span class="ac-number">${train.number}</span>
                <div class="ac-info">
                    <div class="ac-name">${train.name}</div>
                    <div class="ac-route">${train.sourceCode} → ${train.destCode} · ${train.source} to ${train.dest}</div>
                </div>
                <svg class="ac-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </div>
        `).join('');

        dropdownItems = dropdown.querySelectorAll('.autocomplete-item');
        activeDropdownIndex = -1;
        dropdown.classList.add('active');

        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                const num = item.dataset.number;
                selectTrain(TRAINS_MAP[num]);
            });
        });
    }

    function highlightDropdownItem(index) {
        dropdownItems.forEach(item => item.classList.remove('active'));
        if (index >= 0 && index < dropdownItems.length) {
            dropdownItems[index].classList.add('active');
            dropdownItems[index].scrollIntoView({ block: 'nearest' });
        }
    }

    searchInput.addEventListener('input', () => {
        const results = searchTrains(searchInput.value);
        renderDropdown(results);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (!dropdown.classList.contains('active')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeDropdownIndex = Math.min(activeDropdownIndex + 1, dropdownItems.length - 1);
            highlightDropdownItem(activeDropdownIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeDropdownIndex = Math.max(activeDropdownIndex - 1, 0);
            highlightDropdownItem(activeDropdownIndex);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeDropdownIndex >= 0) {
                const num = dropdownItems[activeDropdownIndex].dataset.number;
                selectTrain(TRAINS_MAP[num]);
            }
        } else if (e.key === 'Escape') {
            dropdown.classList.remove('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            dropdown.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            goHome();
            setTimeout(() => searchInput.focus(), 100);
        }
    });

    // ===== TRAIN SELECTION =====
    function selectTrain(train) {
        if (!train) return;
        currentTrain = train;

        detailTrainNumber.textContent = train.number;
        detailTrainName.textContent = train.name;
        detailSourceCode.textContent = train.sourceCode;
        detailSourceName.textContent = train.source;
        detailDestCode.textContent = train.destCode;
        detailDestName.textContent = train.dest;

        const today = new Date().toISOString().split('T')[0];
        travelDateInput.value = today;
        travelDateInput.min = today;

        // Auto-fill departure from KPD schedule if available
        const departureInput = document.getElementById('passenger-departure');
        if (typeof KPD_DEPARTURES !== 'undefined' && KPD_DEPARTURES[train.number]) {
            departureInput.value = KPD_DEPARTURES[train.number];
        } else {
            departureInput.value = '';
        }

        heroSection.style.minHeight = '0';
        heroSection.style.paddingBottom = '20px';
        detailSection.classList.remove('hidden');
        dropdown.classList.remove('active');
        searchInput.value = `${train.number} — ${train.name}`;

        renderPassengers();
        detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function goHome() {
        currentTrain = null;
        heroSection.style.minHeight = '';
        heroSection.style.paddingBottom = '';
        detailSection.classList.add('hidden');
        searchInput.value = '';
        searchInput.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    backBtn.addEventListener('click', goHome);
    logoBtn.addEventListener('click', goHome);

    travelDateInput.addEventListener('change', () => {
        renderPassengers();
    });

    // ===== RENDER PASSENGERS =====
    function renderPassengers() {
        if (!currentTrain || !travelDateInput.value) return;

        if (currentPassengerListener) {
            currentPassengerListener(); // Unsubscribe previous
        }

        const journeyId = `${currentTrain.number}_${travelDateInput.value}`;
        const journeyRef = doc(db, 'journeys', journeyId);

        currentPassengerListener = onSnapshot(journeyRef, (docSnap) => {
            const passengers = docSnap.exists() ? docSnap.data().passengers : [];
            passengersCount.textContent = passengers.length;
            
            const user = currentUser; // Use the global user object from onAuthStateChanged


        if (passengers.length === 0) {
            passengersList.innerHTML = '';
            passengersList.appendChild(emptyPassengers);
            emptyPassengers.classList.remove('hidden');
            return;
        }

        emptyPassengers.classList.add('hidden');
        passengersList.innerHTML = passengers.map((p, i) => {
            const viewerIsMale = user && (user.gender === 'male' || user.gender === 'other' || user.gender === 'undisclosed');
            // Hard privacy constraint: Any female passenger is hidden from male viewers automatically
            const isRestricted = (p.gender === 'female' || p.womenOnly) && viewerIsMale;

            // Gender tag
            const genderTag = p.gender === 'female' ? '<span class="passenger-tag tag-female">♀ Female</span>' 
                            : p.gender === 'male' ? '<span class="passenger-tag tag-male">♂ Male</span>'
                            : '';

            if (isRestricted) {
                // Male users can't see name or number of women-only passengers
                return `
                <div class="passenger-card restricted" style="animation-delay: ${i * 60}ms">
                    <div class="passenger-avatar" style="background: var(--bg-input)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                            <rect x="3" y="11" width="18" height="11" rx="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                    </div>
                    <div class="passenger-info">
                        <div class="passenger-name" style="color: var(--text-muted)">Hidden — Women only</div>
                        <div class="passenger-meta">
                            ${p.coach ? `<span class="passenger-tag">${escapeHtml(p.coach)}</span>` : ''}
                            ${p.boarding ? `<span class="passenger-tag">📍 ${escapeHtml(p.boarding)}</span>` : ''}
                            ${p.leaving ? `<span class="passenger-tag">🏁 ${escapeHtml(p.leaving)}</span>` : ''}
                            ${p.departure ? `<span class="passenger-tag">🕐 ${escapeHtml(p.departure)}</span>` : ''}
                            <span class="passenger-tag tag-female">♀ Female</span>
                        </div>
                    </div>
                    <button class="passenger-whatsapp-btn locked" disabled>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                            <rect x="3" y="11" width="18" height="11" rx="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        Women only
                    </button>
                </div>`;
            }

            // Normal visible passenger
            const whatsappBtn = `
                <a href="https://wa.me/91${p.whatsapp}" target="_blank" rel="noopener" class="passenger-whatsapp-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 0 0 .917.918l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.728-6.388-1.97l-.344-.236-3.577 1.199 1.199-3.577-.236-.344A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    WhatsApp
                </a>`;

            return `
            <div class="passenger-card" style="animation-delay: ${i * 60}ms">
                <div class="passenger-avatar" style="background: ${getAvatarColor(p.name)}">
                    ${getInitials(p.name)}
                </div>
                <div class="passenger-info">
                    <div class="passenger-name">${escapeHtml(p.name)}</div>
                    <div class="passenger-meta">
                        ${p.coach ? `<span class="passenger-tag">${escapeHtml(p.coach)}</span>` : ''}
                        ${p.boarding ? `<span class="passenger-tag">📍 ${escapeHtml(p.boarding)}</span>` : ''}
                        ${p.leaving ? `<span class="passenger-tag">🏁 ${escapeHtml(p.leaving)}</span>` : ''}
                        ${p.departure ? `<span class="passenger-tag">🕐 ${escapeHtml(p.departure)}</span>` : ''}
                        ${genderTag}
                    </div>
                </div>
                ${whatsappBtn}
            </div>
        `;
        }).join('');
        });
    }

    window.__removePassenger = function (id) {
        if (!currentTrain || !travelDateInput.value) return;
        removePassenger(currentTrain.number, travelDateInput.value, id);
        renderPassengers();
        renderFeed();
        showToast('Removed from this journey');
    };

    // ===== ADD PASSENGER FORM =====
    passengerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!currentUser) return;

        if (!currentTrain || !travelDateInput.value) {
            showToast('Please select a travel date');
            return;
        }

        const coach = document.getElementById('passenger-coach').value;
        const boarding = document.getElementById('passenger-boarding').value.trim();
        const leaving = document.getElementById('passenger-leaving').value.trim();
        const departure = document.getElementById('passenger-departure').value;
        const womenOnly = currentUser.gender === 'female' && womenOnlyCheckbox.checked;

        await addPassenger(currentTrain.number, travelDateInput.value, {
            coach,
            boarding,
            leaving,
            departure,
            womenOnly
        });

        passengerForm.reset();
        if (currentUser.gender === 'female') {
            privacyRow.classList.add('visible');
        }
        showToast(`${currentUser.name.split(' ')[0]} added to ${currentTrain.number}! 🚂`);
    });

    // ===== FEED =====
    let feedListener = null;

    function renderFeed() {
        if (!currentUser) return;

        if (feedListener) feedListener();

        const today = new Date().toISOString().split('T')[0];
        const q = query(collection(db, 'journeys'), where('date', '>=', today));

        feedListener = onSnapshot(q, (snapshot) => {
            const journeys = [];
            snapshot.forEach(doc => {
                journeys.push({ id: doc.id, ...doc.data() });
            });

            journeys.sort((a, b) => b.createdAt - a.createdAt);

            if (journeys.length === 0) {
                feedGrid.innerHTML = '';
                feedGrid.appendChild(feedEmpty);
                feedEmpty.classList.remove('hidden');
                return;
            }

            feedEmpty.classList.add('hidden');
            feedGrid.innerHTML = journeys.map((journey, i) => {
                const displayDate = formatDate(journey.date);
                const avatarHtml = journey.passengers.slice(0, 4).map((p, pi) => `
                    <div class="feed-avatar" style="background: ${getAvatarColor(p.name)}; z-index: ${10 - pi}">
                        ${getInitials(p.name)}
                    </div>
                `).join('');

                return `
                    <div class="feed-card" style="animation-delay: ${i * 80}ms" data-train="${journey.trainNumber}" data-date="${journey.date}">
                        <div class="feed-card-header">
                            <span class="feed-train-num">${journey.trainNumber}</span>
                            <span class="feed-date">${displayDate}</span>
                        </div>
                        <div class="feed-train-name">${escapeHtml(journey.trainName)}</div>
                        <div class="feed-route">
                            <span>${journey.sourceCode}</span>
                            <span class="feed-route-dot">→</span>
                            <span>${journey.destCode}</span>
                            <span style="color: var(--text-muted); margin-left: auto; font-size: 0.78rem">${journey.source} to ${journey.dest}</span>
                        </div>
                        <div class="feed-passengers-bar">
                            <div class="feed-avatars">
                                ${avatarHtml}
                            </div>
                            <span class="feed-passenger-count"><strong>${journey.passengers.length}</strong> ${journey.passengers.length === 1 ? 'person' : 'people'}</span>
                        </div>
                    </div>
                `;
            }).join('');

            feedGrid.querySelectorAll('.feed-card').forEach(card => {
                card.addEventListener('click', () => {
                    const num = card.dataset.train;
                    const date = card.dataset.date;
                    const train = TRAINS_MAP[num];
                    if (train) {
                        selectTrain(train);
                        travelDateInput.value = date;
                        renderPassengers();
                    }
                });
            });
        }, (error) => {
            console.error("Feed error:", error);
        });
    }

    // ===== HELPERS =====
    function formatDate(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (d.getTime() === today.getTime()) return 'Today';
        if (d.getTime() === tomorrow.getTime()) return 'Tomorrow';

        return d.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: d.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
        });
    }

    function escapeHtml(str) {
        // Safe mode: escape all HTML entities
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    let toastTimer;
    function showToast(msg) {
        toastMsg.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
    }

    // ===== THEME TOGGLE =====
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
    }

    function initTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved) {
            setTheme(saved);
        } else {
            setTheme('dark');
        }
    }

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // ===== INIT =====
    function init() {
        initTheme();
        // Auth state is now managed entirely by onAuthStateChanged observer
    }

    init();
