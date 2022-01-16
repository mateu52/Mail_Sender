//nowy subsckrybent
//react-hook-form
// podaj:mail, imie , data:automatycznie
// zapis w Airtable, w tabelce Subscribers
import React, { useEffect, useState } from 'react';
//import { useForm } from 'react-hook-form';
import api from "../api";
//import { useParams } from 'react-router-dom';

const AddSubscriber = ( {users} ) =>{
    //const { id } = useParams();
    //const { fields } = users.find((sub) => sub.id === id )

    api.post('/Subscribers')
    //const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => {
        //api.post('/Subscribers', {name: 'Jan', email: 'jan22@onet.pl'});
        console.log(data);
    }
    console.log("example");
    //const [name, setName] = useState("ja");
    //const [email, setEmail] = useState("ja@");
    useEffect(()=> {
        api.post('/Subscribers' , {
            records:[{
                fields:{
                    "name": "users.name",
                    "email": "users.email"
                }
            }]
         })
    })
    return(
        <form >
            <h3>OK</h3>
        </form>
    )
}
export default AddSubscriber;

//przykład na zwykłym formularzu pobiera zmienne wstawia w body->fields 


//ustawić date -znaleść sposób na ustawienie przez uzytkownika --postman generuje automatcznie
//ustawić id jesli potrzebne - randomowe --- postman generuje autom.
//przejrzeć materiały z wekendu
//przyjac zmienna z zewnątrze
//ustawić tą zminną danymi które wprowadzimy
//wysłac ją do rodzica
// wyświetlić w tablicy Subscribers
//4godziny- czas do wykonania.
// po 4 godzinach- była sama nauka - w dni:2
// 1 godzina nauka routingu i obsluga hookow
// 40 min .. jeszcze jeden sposób projektowania routingu
