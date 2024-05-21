import React, { useState } from 'react';
import app from '../Firebase'; // Make sure this path is correct
import { getDatabase, ref, set, push } from 'firebase/database';

function Write() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "Firebase/React"));
        set(newDocRef, {
            name: name,
            age: age
        })
        .then((res) => {
            console.log(res);
            alert('Data saved successfully');
        })
        .catch(err => {
            console.log(err);
            alert('Error saving data');
        });
    };

    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input 
                    type="text" 
                    name="age" 
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)} 
                />
            </div>
            <div>
                <button onClick={saveData}>Save Data</button>
            </div>
        </div>
    );
}

export default Write;
