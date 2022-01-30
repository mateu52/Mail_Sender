//wysyłka maili do wszysckich w tabelce Subscribers
//subject - tytuł maila
//content - treść maila wysyłanego



import React,{useState} from 'react';

function NewCampaign(){
    const [subj,setSubject] = useState("")
    const [conte,setContent] = useState("")
    return(
        <form>
            <div>
                <h4>Tytuł:</h4>
                <input/>
                <h4>treść wiadomości:</h4>
                <input />

                <button onClick="submit">Zapisz</button>    
                <button onClick="submit">Wyślij</button>    

                </div>
        </form>
    )
}
export default NewCampaign;