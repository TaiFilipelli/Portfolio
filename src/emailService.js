import emailjs from "@emailjs/browser";

const sendEmail=(templateParams)=>{
    return emailjs.send('service_x74pslb', 'template_z8prfil', templateParams,'MWluRYfKeY6ugAwmT')
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