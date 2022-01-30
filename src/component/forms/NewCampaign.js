//wysyłka maili do wszysckich w tabelce Subscribers
//subject - tytuł maila
//content - treść maila wysyłanego



import React from 'react';
import {useForm} from "react-hook-form";

function NewCampaign(){
    
    const {subject, content, handleSubmit, watch, formState:{errors} } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            
                <h4>Tytuł:</h4>
                <input {...subject("example")} />
                <h4>treść wiadomości:</h4>
                <input {...content("exampleRequired", {required:true})} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            
        </form>
    )
}
export default NewCampaign;