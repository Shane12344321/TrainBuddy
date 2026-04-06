import re

with open('scripts/app.js', 'r') as f:
    content = f.read()

# Add unsubscribe variable to state section
content = content.replace('let activeDropdownIndex = -1;', 'let activeDropdownIndex = -1;\n    let currentPassengerListener = null;')

# Replace renderPassengers
regex_render_pass = r'function renderPassengers\(\) \{.*?passengersCount\.textContent = passengers\.length;'
repl_render_pass = '''function renderPassengers() {
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
'''
content = re.sub(regex_render_pass, repl_render_pass, content, flags=re.DOTALL)

# Add closing bracket for the onSnapshot callback at the end of renderPassengers
regex_end_render = r'(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">.*?class="delete-btn".*?<\/div>`;\n        }\)\.join\(\'\'\);\n    \}'
# Wait, let's just find the end of renderPassengers using a more robust search. We know `passengerForm.addEventListener` is right after it.
content = re.sub(r'(\}\)\.join\(\'\'\);\n    \})', r'\1\n        });\n    }', content, count=1) 


with open('scripts/app.js', 'w') as f:
    f.write(content)
