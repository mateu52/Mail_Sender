import api from "../api";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';

function NewCampaign({users}){
    require('dotenv').config();
    const {register, handleSubmit, formState:{errors} } = useForm();
    const [campDraft, setDraft] =useState();
    const [campSent, setSent ] =useState();
    const [subs, setSubs ] = useState();
    const [ allSubdata , setallSubdata ] = useState();
    const [ mailTosend, setMailtosend] = useState();
    let one = 0;
    let two = 0;
    let ilosci = 0;
    //////////////////////////////////////////////////////////////////
    /* function Sending(data){
        Alls(data.name);
        for(let i=0; i<mailTosend.length; i++){
            emailjs.send('gmail', 'contact_form',{
                name: data.name,
                subject:data.subject,
                message:subs,
                mail_to: mailTosend[i]
                                                },'SBydpsUIUla4NFoUH')
            .then(response => {
                console.log('Success', response);
            }, error => {
                console.log('Failes...',error);
            }); return console.log("ok wysłano do ", mailTosend[i]);
        }
    } */
    //////////////////////////////////////////////////////////////////
    function Alls(name){
        var XYZ= [];
        var ABC = [];
        var oneMail = [];
        var moreMails = [];
        users.map((user)=> {
            if(user.fields.name===name){
                XYZ.push(user.id);
                ABC.push(user.id);
                oneMail.push(user.fields.email);
                moreMails.push(user.fields.email);
                console.log("hello",XYZ);
                one+=1;
                two+=1;
            }
            else{
                ABC.push(user.id);
                moreMails.push(user.fields.email);
                console.log("hej",XYZ);
                two+=1;
            }
            return XYZ;
        })
        if (XYZ.length>0){
            setallSubdata(XYZ);
            setMailtosend(oneMail);
            ilosci=one;
        }
        else{
            setallSubdata(ABC);
            setMailtosend(moreMails);
            ilosci=two;
        }
        
        console.log("1",XYZ, "2",ABC);

    }
     //////////////////////////////////////////////////////////////////
    /* function SendMail(val, data){
        for (i=1, val.length-1 >0, i+1)
    } */
    
     //////////////////////////////////////////////////////////////////
    const handleDraft = data => {
        setSubs(data.content);
        Alls(data.name);
        setDraft( 
            {records:[
                {
                fields:
                    {
                        "subject":data.subject,    
                        "content":subs,
                        "status":"draft",
                        "Subscribers":allSubdata 
                    }    
                }]
            }
        );
        console.log(campDraft);
        api.post('/Campaign', campDraft);
    }
////////////////////////////////////////////////////////////////////////////////////
    const handleSend = data => {
        //setSubs(data.content)
        // Alls(data.name);
        setSent(
            {records:[
                {
                fields:
                    {
                    "subject":data.subject,
                    "content":data.content,
                    "status":"sent",
                    "Subscribers":allSubdata                
                    }   
                }]
            }
        );
        console.log(campSent);
        api.post('/Campaign',campSent);
        //sendMail(mailTosend)
        //zapisalem kompanie, wyślę tylko do siebie wysyłając kampanie i użytkownika- mail nie zmieniony
        //Sending()
        Alls(data.name);
        console.log("3",ilosci, one, two);
        for(let i=0; i<ilosci ; i++){
            emailjs.send('gmail', 'contact_form',{
                name: data.name,
                subject:data.subject,
                message:subs,
                mail_to: mailTosend[i]
                                                },'SBydpsUIUla4NFoUH')
            .then(response => {
                console.log('Success', response);
            }, error => {
                console.log('Failes...',error);
            }); return console.log("ok wysłano do ", mailTosend[i]);
        }
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
