//wysyłka maili do wszysckich w tabelce Subscribers
//subject - tytuł maila
//content - treść maila wysyłanego


import React from 'react';
import {useForm} from "react-hook-form";

function NewCampaign(){
    
    const {register, handleSubmit, watch, formState:{errors} } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
                
                <input {...register("subject" ,{required:true})} />
                {errors.subject && <span>This field is required</span>}
    {/*{name }} wstawianie w możćliwości : select +option z bazy*/}
    {/*chyba że wpisanie {{name}} i przy wysyłaniu bedzie wstawiany odpowiedni użytkownik zbazy*/}
                <input {...register("content", {required:true})} />
                {errors.content && <span>This field is required</span>}
                <input type="submit" />
            
        </form>
    );
}
export default NewCampaign;