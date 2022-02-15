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
    const [subs, setSubs ] = useState();
    const handleDraft = data => {
        setSubs(checkName(data.content));
        setDraft( 
            {records:[
                {
                fields:
                    {
                        "subject":data.subject,    
                        "content":subs+data.content,
                        "status":"sent"
                    }    
                }]
            }
        );
        console.log(campDraft);
        api.post('/Campaign', campDraft);
    }
    let result;    
    function checkName(props){
        const savers=[];
        //const result=props;
        users.map((user)=>{
            result=props.search(user.fields.name)?user.fields.name:"tak";
            /* if(result==="nie"){
                savers.push(user.fields.name);
            } */
        })

        
        return result;
    }
    const handleSend = data => {
       
    }
    return(
        <form>
                <input placeholder={"czesc {{name}} "}{...register("subject", {required:true})} />
                {errors.subject && <span>This field is required</span>}
    {/*{name }} wstawianie w możćliwości : select +option z bazy*/}
    {/*chyba że wpisanie {{name}} i przy wysyłaniu bedzie wstawiany odpowiedni użytkownik zbazy*/}
    {/*placeholder={`type your ${name}`}*/}
                <input {...register("content", {required:true})} />
                {errors.content && <span>This field is required</span>}
                {/*Działa po podwójnm kliknięciu*/}
                <button type="submit" name="draft" onClick={handleSubmit(handleDraft)}>Zapisz</button>
                <button type="submit" name="send" onClick={handleSubmit(handleSend)}>Wyślij</button>

        </form>
    );
}
export default NewCampaign;

