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

    //api.post('/Subscribers')//body  <============------
    //const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => {
        //api.post('/Subscribers', {name: 'Jan', email: 'jan22@onet.pl'});
        console.log(data);
    }
    console.log("example");
    const [name, setName] = useState([]);
    //const [email, setEmail] = useState("ja@");
    /* useEffect(()=> {
        api.post('/Subscribers' , {
            records:[{
                fields:{
                    "name": "users.name",
                    "email": "users.email"
                }
            }]
         })
    },[]) */

    /* const handleName=(event)=>{
        setName(event);
    }
    const handleSubmit=(event)=>{
        alert('Podano imie:  ', {name})
        event.preventDefault();
    } */
    const handleClick=(e)=>{
        e.preventDefault();
        console.log("hello");
    }
    return(
        <div>
            <form>
                <label>Imie: 
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Wyślij" onClick={handleClick} />
            </form>
        </div>
    )
}
export default AddSubscriber;

//przykład na zwykłym formularzu pobiera zmienne wstawia w body->fields 
// ustawienie na sztywno w body nowego indeksu

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
