import React from 'react'
import "../styles/Contact.css"
// ANIMATIONS
import {motion} from "framer-motion"
import {pageAnimation} from "../components/Animations"
// EMAIL VALIDATION
import {useForm} from "react-hook-form";
// EMAILJS
import emailjs from "emailjs-com"

export default function Contact( {nightIcon}) {

    // EMAIL VALIDATION 
    const {register, handleSubmit, errors} = useForm( {mode: "onBlur"});


    const onSubmit = (values, e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_yynadzv', 'template_d37unee', e.target, 'user_3z29t3BfL1L4Fh6Nhdhi0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert("Your email has been sent!")
    }


    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <div className={nightIcon ? "contact" : "light-contact"}>
           <div className="contact-text">
               <h1>Let's connect</h1>
               <h1>Email me</h1>
               <p>If you came up here, please drop me an e-mail.
                   I will take my time to respond to all of your inquiries!
               </p>
           </div>
           <div className="contact-form">
               <form onSubmit={handleSubmit(onSubmit)} >
                   <div className="name">
                        <label htmlFor="name">Your name</label>
                        <input name="name" id="name" type="text" ref={register({required: true})}/>
                        {errors.name  && <small>Your name is required</small>}
                   </div>
                   <div className="email">
                       <label htmlFor="email">Your email</label>
                       <input name="email" id="email" type="text" ref={register({ required: "Your email is required", pattern: {value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid Email Address."}})}/>
                       {errors.email && <small>{errors.email.message}</small>}
                   </div>
                   <div className="message">
                       <label htmlFor="message">Your message</label>
                   <textarea  name="message" id="message" cols="50" rows="10" ref={register({ required: true})}></textarea>
                   { errors.message && <small>Message field is required</small>}
                   </div>
                   <div className="btn">
                       <button type="submit"><span>Send</span></button>
                   </div>

               </form>
           </div>
        </div>
        </motion.div>  
    )
}
