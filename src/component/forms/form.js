import React ,{useRef} from "react";
import emailjs from '@emailjs/browser';

function Formu(){
    const forma=useRef();
    
    const hSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('gmail89', 'template_jhz0j9m', forma.current, 'user_HUmnR3VVRTsQyNGd4iT0d')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <form ref={forma} onSubmit={hSubmit}>
            <input type="hidden" name="contact_number"/>
            <label>subject</label>
                <input type="text" name="subject"/>
            <label>subject</label>
                <input type="text" name="subject"/>
            <label>subject</label>
                <input type="text" name="subject"/>
            <label>content</label>
                <input type="text" name="content"/>
            <label>Email</label>
                <input type="email" name="user_email"/>
            <label>Message</label>
                <textarea name="message"></textarea>
            <input  type="submit" value="Send"/>
        </form>
    )
};

export default Formu;