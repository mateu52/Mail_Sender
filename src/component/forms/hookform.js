import React  from "react";
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';

function HookForm(){
    const {register, handleSubmit, formState:{errors} } = useForm();

     const handleSent = (data, e) => {
        // emailjs.sendForm('gmail89', 'contact_form', data, 'user_HUmnR3VVRTsQyNGd4iT0d')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        console.log(data,e);

    }

    return(
        <form>
                <input {...register("subject", {required:true})} />
                {errors.subject && <span>This field is required</span>}

                <input 
                    placeholder={"Cześć {{name}} + twój tytuł.... "}
                    {...register("content", {required:true})} />

                <input 
                    placeholder={"Cześć {{name}} + twój tytuł.... "}
                    {...register("to_name", {required:true})} />

                <input 
                    placeholder={"Cześć {{name}} + twój tytuł.... "}
                    {...register("from_name", {required:true})} />

                <input {...register("user_email", {required:true})} />
                    {errors.subject && <span>This field is required</span>}    

                {errors.content && <span>This field is required</span>}
                {/*Działa po podwójnm kliknięciu*/}
                <button type="submit" name="draft" 
                        onClick={handleSubmit(handleSent)}>Zapisz</button>

                
        </form>
    )
}

export default HookForm;