import re

with open('scripts/app.js', 'r') as f:
    content = f.read()

# Replace addPassenger
add_regex = r'function addPassenger\(trainNumber, date, passenger\) \{.*?return journey;\n    \}'
add_repl = '''async function addPassenger(trainNumber, date, passenger) {
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
            showToast("Failed to join train.");
        }
    }'''
content = re.sub(add_regex, add_repl, content, flags=re.DOTALL)

# Replace removePassenger
rem_regex = r'function removePassenger\(trainNumber, date, passengerId\) \{.*?saveJourneys\(journeys\);\n    \}'
rem_repl = '''async function removePassenger(trainNumber, date, passengerId) {
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
                    showToast("You can only remove yourself.");
                }
            }
        } catch (error) {
            console.error("Error removing passenger:", error);
        }
    }'''
content = re.sub(rem_regex, rem_repl, content, flags=re.DOTALL)

with open('scripts/app.js', 'w') as f:
    f.write(content)
