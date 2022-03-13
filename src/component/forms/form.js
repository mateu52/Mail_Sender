import React ,{useRef} from "react";
import emailjs from '@emailjs/browser';

function Formu(){
    const forma=useRef();
    
    const hSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('gmail89', 'contact_form', forma.current, 'user_HUmnR3VVRTsQyNGd4iT0d')
            .then((result) => {
                console.log(result.text,e);
            }, (error) => {
                console.log(error.text);
            });
    }
//             potrzeba przypisania odbiorcy do formularza

    return(
        <form ref={forma} onSubmit={hSubmit}>
            <input type="hidden" name="contact_number"/>
            
            <label>to name</label>
                <input type="text" name="to_name"/>
            <label>subject</label>
                <input type="text" name="subject"/>
            <label>Message</label>
                <textarea name="message"></textarea>
            <input  type="submit" value="Send"/>
        </form>
        
    )
};

export default Formu;