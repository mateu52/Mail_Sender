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
    //const send = false;
    const handleDraft = data => {
        setSubs(inputname(data.content));
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
    const handleSend = data => {
        
        const sending=true;
        setSubs(inputname(data.content, sending))
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
             emailjs.send('gmail89', 'template_jhz0j9m',{
                 from_name:"MateWu",
                 to_name:"Mateusz",
                 To_Email:'mat89walter@gmail.com',
                 message:"heey",
                                                    },'user_HUmnR3VVRTsQyNGd4iT0d')
                .then(response => {
                    console.log('Success', response);
                }, error => {
                    console.log('Failes...',error);
                });
            
    } 
    function inputname(event, sending=false){
        let mailPush=0;
        const sendBack=sending;
        if(sendBack){    
            // eslint-disable-next-line array-callback-return
            users.map((user) => {
                if(event.includes("{{"+user.fields.name+"}}")){
                    
                    return mailPush=1 && console.log("tak, udało się",{mailPush});

                }
                if (1===2){
                    return console.log("nie podano");
                }
            }
            )
        }
        console.log(sendBack);
        return ("Cześć {{name}}, "+ event);
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

