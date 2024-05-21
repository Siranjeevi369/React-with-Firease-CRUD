import React, { useState } from 'react';
import app from '../Firebase'; // Make sure this path is correct
import { getDatabase, ref, set, push, remove } from 'firebase/database';

function Delete() {
  
    const [dbId, setDBid] =useState('');

    const DeleteData = async () => {
        const db = getDatabase(app);
        const DelDocRef = (ref(db, `Firebase/React/${dbId}`));
        
        await remove(DelDocRef);
        window.location.reload()
    };

    return (
        <div>
             <div>
                <label htmlFor="id">Delete Id</label>
                <input 
                    type="text" 
                    name="id" 
                    id="id"
                    
                    onChange={(e) => setDBid(e.target.value)} 
                />
            </div>
            <div>
                <button onClick={DeleteData}>Delete Data</button>
            </div>
        </div>
    );
}

export default Delete;
