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
            
            <input defaultValue="text"{...register("example")} />
            <input {...register("exampleRequired", {required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}    
            
            <input type="submit" />
        </form>
    )
}
export default AddSubscriber;