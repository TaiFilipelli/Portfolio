import { useState } from 'react';
import { sendEmail } from '../../emailService';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      user_subject: formData.subject,
      message: formData.message,
      to_name: 'Taiel', 
    };

    sendEmail(templateParams)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send the message. Please try again.',error);
      });
  };

  return (
    <section className='flex justify-center text-center flex-col pl-10'>
    <h1 className='text-white font-unisonBoldIthalic text-2xl my-6'>Trabajemos juntos en hacer posible tu próximo proyecto!</h1>
    <form onSubmit={handleSubmit} className='text-white w-1/2 p-10 rounded-lg bg-slate-950 gap-3'>
      <div className='p-4'>
        <label htmlFor="name" className='font-unisonLight'>Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='rounded-sm ml-4 bg-slate-800 hover:bg-slate-500'
          required
        />
      </div>
      <div className='p-4'>
        <label htmlFor="email" className='font-unisonLight'>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='rounded-sm ml-4 bg-slate-800 hover:bg-slate-500'
          required
        />
      </div>
      <div className='p-4'>
        <label htmlFor="subject" className='font-unisonLight'>Asunto</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className='rounded-sm ml-4 bg-slate-800 hover:bg-slate-500'
          required
        />
      </div>
      <div className='p-4'>
        <label htmlFor="message" className='font-unisonLight'>Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className='rounded-sm ml-4 bg-slate-800 hover:bg-slate-500'
          required
        ></textarea>
      </div>
      <div>
        <button type="submit" className='rounded-lg bg-black p-4 my-3'>Enviar</button>
      </div>
    </form>
  </section>
    
  );
}

export default Contact
