//wysyłka maili do wszysckich w tabelce Subscribers
//subject - tytuł maila
//content - treść maila wysyłanego
//aktualnie :DRAFT modyfikacja
import api from "../api";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';

function NewCampaign({users}){
    //wyslij name IF send ..spróbować w osobnym komponencie
    const {register, handleSubmit, formState:{errors} } = useForm();

    const [campDraft, setDraft] =useState();
    const [campSent, setSent ] =useState();
    //const [retrn, Setreturn] = useState();
    const [subs, setSubs ] = useState();
    /////////////////////////////////////////////////////////////////////
    // jeśli jest wysyłka to pojawia sie komunikat gdy tez jest znalezione imie
    function inputname(event, sending){
        let mailPush=0;
        if(sending){    
            // eslint-disable-next-line array-callback-return
            users.map((user) => {
                if(event.includes("{{"+user.fields.name+"}}")){
                   return (
                    mailPush=1 && console.log("tak, udało się",{mailPush})
                   )
                }
                else{
                    console.log("nie podano");
                }
            }
            )
        }
        console.log(sending);
        return (event);
    }
    //////////////////////////////////////////////////////////////////
    const handleDraft = data => {
        setSubs(inputname(data.content, false));
        setDraft( 
            {records:[
                {
                fields:
                    {
                        "subject":data.subject,    
                        "content":subs,
                        "status":"draft"
                    }    
                }]
            }
        );

        console.log(campDraft);
        api.post('/Campaign', campDraft);
    }
////////////////////////////////////////////////////////////////////////////////////
    const handleSend = data => {
        setSubs(inputname(data.content, true))
        setSent(
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
        // 'SBydpsUIUla4NFoUH'
        console.log(campDraft);
        api.post('/Campaign',campSent);
        //zapisalem kompanie, wyślę tylko do siebie wysyłając kampanie i użytkownika- mail nie zmieniony
        //jak ją wysłać do ludzi ?
             emailjs.send('gmail', 'contact_form',{
                 name: data.name,
                 subject:data.subject,
                 message:subs,
                                                    },'SBydpsUIUla4NFoUH')
                .then(response => {
                    console.log('Success', response);
                }, error => {
                    console.log('Failes...',error);
                });
            
    } 

///////////////////////////////////////////////////////////////////////////////////////////
    return(
        <form>
            <h3>tytuł maila</h3>
                <input {...register("subject", {required:true})} />
                {errors.subject && <span>This field is required</span>}
            <h3>Twoje imię</h3>
                <input 
                    placeholder={"podaj imię "}
                    {...register("name", {required:true})} />
                {errors.content && <span>This field is required</span>}
            <h3>treść kampani</h3>
                <input 
                    placeholder={"treść kampani.... "}
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

