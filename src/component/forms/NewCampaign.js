import api from "../api";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';

function NewCampaign({users}){
    const {register, handleSubmit, formState:{errors} } = useForm();

    const [campDraft, setDraft] =useState();
    const [campSent, setSent ] =useState();
    //const [retrn, Setreturn] = useState();
    const [subs, setSubs ] = useState();
    /////////////////////////////////////////////////////////////////////
    // funkcja zwraca nam imie gdy wpiszemy poprawne.Znajdujace sie w bazie
    function searchName(event){
        let namm = event;
        users.map((user)=> {
            if(user.fields.name===event){
                namm=user.fields.name;
                console.log("znaleziono",namm);
            }
            else{
                 console.log("Nie znaleziono");
            }
            return namm;
        })
        return namm;//musimy wstawić w rekord campani
    }
    //////////////////////////////////////////////////////////////////
    const handleDraft = data => {
        searchName(data.name);
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
        
        console.log(campDraft);
        api.post('/Campaign', campDraft);
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

