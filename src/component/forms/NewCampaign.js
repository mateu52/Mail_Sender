//wysyłka maili do wszysckich w tabelce Subscribers
//subject - tytuł maila
//content - treść maila wysyłanego
//aktualnie :DRAFT modyfikacja
import api from "../api";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";

function NewCampaign({users}){
    //wyslij name IF send ..spróbować w osobnym komponencie
    const {register, handleSubmit, formState:{errors} } = useForm();

    const [campDraft, setDraft] =useState();
    const [campSent, setSent ] =useState();
    const [retrn, Setreturn] = useState();
    const [subs, setSubs ] = useState();
    const send = false;
    const handleDraft = data => {
        setSubs(checkName(data.content));
        setDraft( 
            {records:[
                {
                fields:
                    {
                        "subject":data.subject,    
                        "content":subs,
                        "status":"sent"
                    }    
                }]
            }
        );
        console.log(campDraft);
        api.post('/Campaign', campDraft);
    }
    let result;    
    function checkName(event){
        return("czesć "+event);
        
        
        
    }
    const handleSend = data => {
       send=true;
    }
    return(
        <form>
                <input {...register("subject", {required:true})} />
                {errors.subject && <span>This field is required</span>}

                <input 
                    placeholder={"Cześć {{name}} + twój tytuł.... "}
                    {...register("content", {required:true})} />

                {errors.content && <span>This field is required</span>}
                {/*Działa po podwójnm kliknięciu*/}
                <button type="submit" name="draft" 
                        onClick={handleSubmit(handleDraft)}>Zapisz</button>

                <button type="submit" name="send" 
                        onClick={handleSubmit(handleSend)}>Wyślij</button>

        </form>
    );
}
export default NewCampaign;

