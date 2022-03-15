import React ,{useRef} from "react";
import emailjs from '@emailjs/browser';

function Formu(){
    const form=useRef();
    
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_form', form.current, 'user_HUmnR3VVRTsQyNGd4iT0d')
            .then((result) => {
                console.log(result.text,e);
            }, (error) => {
                console.log(error.text);
            });
        console.log(form);
    }
//             potrzeba przypisania odbiorcy do formularza

return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="To_Email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        
    )
};

export default Formu;