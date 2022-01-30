//nowy subsckrybent
//react-hook-form
// podaj:mail, imie , data:automatycznie
// zapis w Airtable, w tabelce Subscribers
import React, {  useState } from 'react';
//import { useForm } from 'react-hook-form';
import api from "../api";
//import { useParams } from 'react-router-dom';

const AddSubscriber = ( {users} ) =>{
   
    console.log("example");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let date = new Date().toDateString();

    const data = { records:[{
                    fields:{
                        "email": email,
                        "name": name,
                        "created": date
                    },
                    }] 
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log({name})
        console.log({email});
        console.log(date);
        api.post('/Subscribers', data)
    }
    const handleClick=(event)=>{
        if (event.target.name==="name"){
            setName(event.target.value);
        }
        else if (event.target.name==="email"){
            setEmail(event.target.value);
        }
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Imie: 
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Name"
                        onChange={handleClick} 
                    />
                <input 
                        name="email"
                        type="text" 
                        placeholder="email"
                        onChange={handleClick} 
                    />
                </label>
                <input type="submit" value="Wyślij" onClick={handleSubmit} />
            </form>
        </div>
    )
}
export default AddSubscriber;


//ustawic hooki i w wysyłce przekzać do api
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
