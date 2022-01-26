//Kampanie
//wyslane - brak edycji
//niewysłane - mozliwośc usuwania

import React, { useState, useEffect } from "react";


function Campaign({users}){
  const [camps, setCamps] = useState([]);
  
    const fetchSubscribers = async () => {
      //Subscribers?maxRecords=3&view=Subscribers
      const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env
      //sciezka ktora sie powtarza zawsze na poczatku gdy mamdo czyneinia z (1)jednym api:
      const baseUrl = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`; 
      //elementy na zasadzie listy lub zespołów:
      const apiConfig = {
        subsList: `${baseUrl}/Campaign?maxRecords=3&view=Grid%20view`,
        subsDetails: `${baseUrl}/Campaign`,
      }
      const requestConfig = {
        headers: {
          Authorization: `Bearer ${REACT_APP_API_KEY}`,
        }
      }
      //wyswietli to co apiConfiffg.subsList: (https://api.airtable.com/v0/appNxuSuA6IZuPplU/Subscribers?maxRecords=3&view=Subscribers)
      const response = await fetch(apiConfig.subsList, requestConfig);
      const responseData = await response.json();
      //console.log(responseData);
      const data = [];
      responseData.records.forEach((elem) => {
        data.push({
          id: elem.id,
          subject: elem.fields.subject,
          content: elem.fields.content,
          subscribers: elem.fields.Subscribers,
          status: elem.fields.status
        });
      });

      
      setCamps(data);
      //chandleUe(data)
      
      //return subs;
      
    }
    useEffect(() => {
      fetchSubscribers();
      
    }, []);
    let arr = [];

    users.map(name => 
          camps.map( id =>
            <div key={id.id, name.fields.name}>
            {console.log(name.id, id.subscribers)}
            {
              id.subscribers.map(sub=>arr.push(sub))
              //wyniki z tego mapowania wskazac w instrukcji warunkowej poniżej.
            }
              {(name.id===id.subscribers) ?
                arr.push("ok") : arr.push("nok")
              }
              </div>
            )
      )
      
    console.log(arr);
       
    return(
      <div>
        <h1>Kampanie: </h1>
        {users && users.map((user) => 
          <div key={user.id}>
            <p>{user.fields.name} {user.id} </p>
          </div>
          )}


        {camps && camps.map((sub) =>
          <div key={sub.id}>
              
              <h3>{sub.subject} dla </h3>
              <p>{sub.content}</p>
              <p>[{sub.status}] {sub.subscribers}</p>
                          
              
              ___.*.*.*.*.*.*.*.___
            </div>
          
      )}

      </div>

    )
}
  
  export default Campaign;

  