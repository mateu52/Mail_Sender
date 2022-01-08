//nowy subsckrybent
//react-hook-form
// podaj:mail, imie , data:automatycznie
// zapis w Airtable, w tabelce Subscribers
import React from 'react';
import { useForm } from 'react-hook-form';

function AddSubscriber(){
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    console.log("example");
    return(
        <form onSubmit={handleSubmit(onSubmit) }>
            
            <input {...register("name", { required: true })} placeholder="name" />
            <input {...register("email", {required: true })} placeholder="email" />
            {errors.exampleRequired && <span>This field is required</span>}    
            
            <input type="submit" />
        </form>
    )
}
export default AddSubscriber;

//ustawić date -znaleść sposób na ustawienie przez uzytkownika
//ustawić id jesli potrzebne - randomowe
//przejrzeć materiały z wekendu
//przyjac zmienna z zewnątrze
//ustawić tą zminną danymi które wprowadzimy
//wysłac ją do rodzica
// wyświetlić w tablicy Subscribers
//4godziny- czas do wykonania.
