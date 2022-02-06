//wysyłka maili do wszysckich w tabelce Subscribers
//subject - tytuł maila
//content - treść maila wysyłanego

import api from "../api";
import React, {useState} from 'react';
import {set, useForm} from "react-hook-form";

function NewCampaign({users}){
    //wyslij name IF send ..spróbować w osobnym komponencie
    const {register, handleSubmit, formState:{errors} } = useForm();

    const [addCmp, setAdd ] =useState();
    const onSubmit = data => {
        console.log(data.subject);
        setAdd({"subject":data.subject,
        "content":data.content,
        "status":data.status});
        //api.post('/Campaign' , {subject: data.subject})
    }
    //console.log(watch("example"));
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
                
                <input {...register("subject" ,{required:true})} />
                {errors.subject && <span>This field is required</span>}
    {/*{name }} wstawianie w możćliwości : select +option z bazy*/}
    {/*chyba że wpisanie {{name}} i przy wysyłaniu bedzie wstawiany odpowiedni użytkownik zbazy*/}
    {/*placeholder={`type your ${name}`}*/}
                <input {...register("content", {required:true})} />
                {errors.content && <span>This field is required</span>}
                <button type="submit" name="draft">Zapisz</button>
                
        </form>
    );
}
export default NewCampaign;