//prezentacja danych React-table
//Email, Imie, data.dodania

//wejscie w sybsckrybenta w klikniecie mail lub imie
// pobierze tylko ten rekord z bazy i wyswietli go na liscie
// sluzy do niego component SubscribentDetail.js

import React, {useState} from "react";
import FetchSubs from "./FetchSubs";
import AddSubscriber from "./forms/AddSubscriber";
//import { useTable } from 'react-table';

function SubscribersList() {
    const [user, setUser ] = useState([]);
    const [click, setClick]= useState(false)
    const handleClick=()=>{
      setClick(true);
    }
    console.log('list');
    console.log(user);
    
    return (
      <div className="App" >
        <FetchSubs ue={setUser}/>
        
        <button onClick={handleClick}></button>
        {click===true ? <AddSubscriber /> : null }
        
         <h1>Subskrybenci: </h1>
         <table>
           <tbody>
            <tr>
                  <td>Imie</td><td>email</td>
            </tr>
            {user && user.map((sub)=>
            <div key={sub.id}>
              <tr>
                <td>{sub.name}</td><td>{sub.email}</td>
              </tr>
            </div>
            )}
            </tbody>
         </table>

            {user && user.map((sub) => 
            <div key={sub.id}>
              <h2>{sub.name}, email: {sub.email}</h2>
            </div>
            )} 
      
      
      </div>
      
    );
}

export default SubscribersList;