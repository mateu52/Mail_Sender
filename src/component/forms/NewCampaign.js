//wysyłka maili do wszysckich w tabelce Subscribers
//subject - tytuł maila
//content - treść maila wysyłanego

import api from "../api";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";

function NewCampaign({users}){
    //wyslij name IF send ..spróbować w osobnym komponencie
    const {register, handleSubmit, formState:{errors} } = useForm();

    const [campDraft, setDraft] =useState();
    const [campSent, setSent ] =useState();
    const handleSend = data => {
        setSent( 
            {records:[
                {
                fields:
                    {
                        "subject":data.subject,    
                        "content":data.content,
                        "status":"sent"
                    }    
                }]
            }
        );
        console.log(campSent);
        api.post('/Campaign', campSent);
    }
        
    
    const handleDraft = data => {
        
    }
    return(
        <form>
                <input {...register("subject" ,{required:true})} />
                {errors.subject && <span>This field is required</span>}
    {/*{name }} wstawianie w możćliwości : select +option z bazy*/}
    {/*chyba że wpisanie {{name}} i przy wysyłaniu bedzie wstawiany odpowiedni użytkownik zbazy*/}
    {/*placeholder={`type your ${name}`}*/}
                <input {...register("content", {required:true})} />
                {errors.content && <span>This field is required</span>}
                <button type="submit" name="draft" onClick={handleSubmit(handleDraft)}>Zapisz</button>
                <button type="submit" name="send" onClick={handleSubmit(handleSend)}>Wyślij</button>

        </form>
    );
}
export default NewCampaign;

