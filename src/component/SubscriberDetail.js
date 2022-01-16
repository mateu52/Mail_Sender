//nowy subsckrybent
//react-hook-form
// podaj:mail, imie , data:automatycznie
// zapis w Airtable, w tabelce Subscribers
import React from 'react';
//import { useParams } from 'react-router-dom';

const SubscriberDetail= ( props ) => {
    
    return(
        <div>
                <h3>Name: {props.name}</h3>
                <h4>email: {props.email}</h4>
                <br></br>
        </div>
    )
}
export default SubscriberDetail;