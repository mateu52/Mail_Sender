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
        return ("Cześć {{name}}, "+ event);
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
        // 'user_HUmnR3VVRTsQyNGd4iT0d'
        console.log(campDraft);
        api.post('/Campaign',campSent);
        //zapisalem kompanie
        //jak ją wysłać do ludzi ?
            //  emailjs.send('gmail89', 'contact_form',{
            //      from_name:"MateWu",
            //      to_name:"Mateusz",
            //      To_Email:'mat89walter@gmail.com',
            //      message:"heey",
            //                                         },'user_HUmnR3VVRTsQyNGd4iT0d')
            //     .then(response => {
            //         console.log('Success', response);
            //     }, error => {
            //         console.log('Failes...',error);
            //     });
            
    } 

///////////////////////////////////////////////////////////////////////////////////////////
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

