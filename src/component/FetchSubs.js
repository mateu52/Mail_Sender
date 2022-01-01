import { useState, useEffect } from "react";


function FetchSubs({ue}){
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
      //wyswietli to co apiConfiffg.subsList: (https://api.airtable.com/v0/appNxuSuA6IZuPplU/Subscribers?maxRecords=3&view=Subscribers)
      const response = await fetch(apiConfig.subsList, requestConfig);
      const responseData = await response.json();
      //console.log(responseData);
      const data = [];
      responseData.records.forEach((elem) => {
        data.push({
          id: elem.id,
          created: elem.fields.created,
          name: elem.fields.name,
          email: elem.fields.email,
        });
      });

      
      setSubs(data);
      //chandleUe(data)
      
      //return subs;
      
    }
    console.log();
    
    
    

    useEffect(() => {
      fetchSubscribers();
      
    }, []);
    const handleUe=(props)=>{
      ue(subs);
    }

    return(
      <>
        { handleUe(subs)}
      </>

    )
}
  
  export default FetchSubs;