//prezentacja danych React-table
//Email, Imie, data.dodania

//wejscie w sybsckrybenta w klikniecie mail lub imie
// pobierze tylko ten rekord z bazy i wyswietli go na liscie
// sluzy do niego component SubscribentDetail.js

import React, {useState} from "react";
import FetchSubs from "./FetchSubs";

function SubscribersList() {
    const [user, setUser ] = useState([]);
    const ue=[];
    const handleUser=(props)=>{
        setUser({ue});
    }
    //console.log(user);
    return (
      <div className="App">
        <FetchSubs ue={setUser}/>
        {user && user.map((sub) => 
        <div key={sub.id}>
          <h2>{sub.name}, email: {sub.email}</h2>
        </div>
      )
      }
      </div>
    );
}

export default SubscribersList;