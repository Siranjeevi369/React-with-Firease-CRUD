import React, { useState } from 'react';
import app from '../Firebase'; // Make sure this path is correct
import { getDatabase, ref, set, push } from 'firebase/database';

function Update() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [dbId, setDBid] =useState('');

    const UpdateData = async () => {
        const db = getDatabase(app);
        const newDocRef = (ref(db, `Firebase/React/${dbId}`));
        set(newDocRef, {
            name: name,
            age: age
        })
        .then((res) => {
            console.log(res);
            alert('Data Update successfully');
        })
        .catch(err => {
            console.log(err);
            alert('Error saving data', err.message);
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
                <label htmlFor="id">Update Id</label>
                <input 
                    type="text" 
                    name="id" 
                    id="id"
                    
                    onChange={(e) => setDBid(e.target.value)} 
                />
            </div>
            <div>
                <button onClick={UpdateData}>Update Data</button>
            </div>
        </div>
    );
}

export default Update;
