import api from "../api";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
//import emailjs from '@emailjs/browser';

            

function NewCampaign({users}){
    require('dotenv').config();
    const {register, handleSubmit, formState:{errors} } = useForm();
    //const { SENDGRID_API_KEY } = process.env;
    //const sgMail = require('@sendgrid/mail')
    //sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //const apiKey =process.env.SENDGRID_API_KEY;
    //sgMail.setApiKey(apiKey);
    //console.log("SendGrid", apiKey);
    const [campDraft, setDraft] =useState();
    const [campSent, setSent ] =useState();
    const [name, setName ] = useState(); 
    const [userCamp, SetUserCamp] = useState();
    const [subs, setSubs ] = useState();
    /////////////////////////////////////////////////////////////////////
    // funkcja zwraca nam imie gdy wpiszemy poprawne.Znajdujace sie w bazie
    function searchName(imie){
        //var usID = 0;
        console.log(name)
        users.map((user)=> {
            if(user.fields.name===imie){
                
                console.log("znaleziono",user.id);
            }
            else{
                 console.log("Nie znaleziono",imie);
            }
            return imie;
        })
        
    }
    //////////////////////////////////////////////////////////////////
    

     //////////////////////////////////////////////////////////////////
    const handleDraft = data => {
        setName(data.name)
        searchName(name);
        setSubs(data.content);
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
        //dodac rekord campani do imienia
        //api get = pobrac id campani a pozniej dodac do rekordu w subscribers
        SetUserCamp(
            {records:[
                {
                    fields:{
                        "Campaign":""
                    }
                }
            ]

            }
        )
        console.log(campDraft);
        api.post('/Campaign', campDraft);
        api.get('/Campaign')
    }
////////////////////////////////////////////////////////////////////////////////////
    const handleSend = data => {
        setSubs(data.content)
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
        console.log(campSent);
        api.post('/Campaign',campSent);
        //zapisalem kompanie, wyślę tylko do siebie wysyłając kampanie i użytkownika- mail nie zmieniony
        //jak ją wysłać do ludzi ?
            // using Twilio SendGrid's v3 Node.js Library
            // https://github.com/sendgrid/sendgrid-nodejs javascript
        //  const msg = {
        //     to: 'wuoelte@gmail.com', // Change to your recipient
        //     from: 'mat89walter@gmail.com', // Change to your verified sender
        //     subject: data.subject,
        //     text: 'and easy to do anywhere, even with Node.js',
        //     html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
        //     }
        //     sgMail
        //     .send(msg)
        //     .then(() => {
        //         console.log('Email sent')
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //    }) 
            //  emailjs.send('gmail', 'contact_form',{
            //      name: data.name,
            //      subject:data.subject,
            //      message:subs,
            //                                         },'SBydpsUIUla4NFoUH')
            //     .then(response => {
            //         console.log('Success', response);
            //     }, error => {
            //         console.log('Failes...',error);
            //     });
            
    } 

///////////////////////////////////////////////////////////////////////////////////////////
    return(
        <form>
            <h3>tytuł maila</h3>
                <input {...register("subject", {required:true})} />
                {errors.subject && <span>This field is required</span>}
            <h3>aaTwoje imię</h3>
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

