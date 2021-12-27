/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

function App() {
  const [subs, setSubs] = useState([]);

  const fetchSubscribers = async () => {
    //Subscribers?maxRecords=3&view=Subscribers
    const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env
    //sciezka ktora sie powtarza zawsze na poczatku gdy mamdo czyneinia z (1)jednym api:
    const baseUrl = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`; 
    //elementy na zasadzie listy lub zespołów:
    const apiConfig = {
      subsList: `${baseUrl}/Subscribers?maxRecords=3&view=Subscribers`,
      subsDetails: `${baseUrl}/Subscribers`,
    }
    const requestConfig = {
      headers: {
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
      }
    }
    //wyswietli to co apiConfig.subsList: (https://api.airtable.com/v0/appNxuSuA6IZuPplU/Subscribers?maxRecords=3&view=Subscribers)
    const response = await fetch(apiConfig.subsList, requestConfig);
    const data = await response.json();
    console.log(data);
  }
  
  useEffect(() => {
    fetchSubscribers()
  }, []);
  
  return (
    <div className="App">
      <h2>
        {console.log({subs})}
      </h2>
    </div>
  );
}

export default App;
