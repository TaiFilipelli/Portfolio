import emailjs from "@emailjs/browser";

const SERVICE_ID= import.meta.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID=import.meta.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY=import.meta.env.EMAILJS_PUBLIC_KEY;

const sendEmail=(templateParams)=>{
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams,PUBLIC_KEY)
    .then((response)=>{
        console.log('EXITO!',response.status, response.text);
        return response;
    })
    .catch((error)=>{
        console.error('FAILED...',error);
        throw error;
    });
};

export {sendEmail};