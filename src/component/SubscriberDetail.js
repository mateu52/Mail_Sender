//nowy subsckrybent
//react-hook-form
// podaj:mail, imie , data:automatycznie
// zapis w Airtable, w tabelce Subscribers
import React from 'react';
//import { useParams } from 'react-router-dom';

const SubscriberDetail= ( props ) => {
    //const { id } = useParams();
    //const { name, email } = props.find((user)) => user.id === id )
    return(
        <div>
            <h3>name:{props.name}</h3>
            <h4>{props.email}</h4>
        </div>
    )
}
export default SubscriberDetail;