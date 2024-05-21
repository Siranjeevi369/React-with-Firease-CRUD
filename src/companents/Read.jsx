import React, { useState } from 'react';
import app from '../Firebase'; // Make sure this path is correct
import { getDatabase, ref, get, push } from 'firebase/database';

function Read() {
   
    var [person, setPerson] = useState([]);


     const getData = async () => {
        const db = getDatabase(app);
        const dbref = (ref(db, "Firebase/React"));
        const allperson =  await get(dbref)

       if(allperson.exists()){
        setPerson(Object.values(allperson.val()))

        console.log(Object.keys(allperson.val()));

       }
       else{
        alert('error')
       }

       console.log(person);
        // .then((res) => {
        //     console.log(res);
        //     alert('Data saved successfully');
        // })
        // .catch(err => {
        //     console.log(err);
        //     alert('Error saving data');
        // });
    };

    return (
        <div>
            
            <div>
                <button onClick={getData}>get Data</button>
            </div>
            <div>
                <ul>
                {
                   person.map((item,index) => (
                    <li key={index}>Name :{item.name}, Age:{item.age}</li>
                    
                   )) 
                }
                </ul>
            </div>
        </div>
    );
}

export default Read;
