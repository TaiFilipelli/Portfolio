import { useState } from 'react';
import { sendEmail } from '../../emailService';
import { PaperPlaneRight } from 'phosphor-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      message: formData.message,
      to_name: 'Taiel', 
    };

    sendEmail(templateParams)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send the message. Please try again.',error);
      });
  };

  return (
    <section className='flex flex-wrap justify-between items-center pl-10 h-80vh'>
      <div className='flex-1 p-4 border-spacing-px text-white'>
        <h1 className='font-unisonBoldIthalic text-6xl mb-10'>Let's work <br /> in your new project <span className='bg-gradient-to-r from-pink-800 to-yellow-500 bg-clip-text text-transparent'>together!</span></h1>
        <h3 className='font-unisonBoldIthalic text-2xl my-3'>Complete the message and i will <br />answer as soon as possible!</h3>
      </div>
    <form onSubmit={handleSubmit} className='text-white w-1/2 p-10 rounded-lg gap-3'>
      <h1 className='text-3xl font-unisonLightRound'>Hi! My name is<input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='rounded-sm ml-4 bg-transparent hover:bg-slate-500 w-2/5 text-2xl p-2 border-transparent underline-offset-0 focus:outline-none border-b-2 border-slate-200'
          required
          placeholder='Your name'
          
        />
      and i have a <input
        type="text"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className='rounded-sm ml-4 bg-transparent hover:bg-slate-500 w-3/5 text-2xl p-2 border-transparent underline-offset-0 focus:outline-none border-b-2 border-slate-200'
        required
        placeholder='Your project/website'
      /> that needs help. If you wish to be part of it, you can reach me anytime at <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className='rounded-sm ml-4 bg-transparent hover:bg-slate-500 w-3/5 text-2xl p-2 border-transparent underline-offset-0 focus:outline-none border-b-2 border-slate-200'
      required
      placeholder='your email adress'/> so we can talk about it!</h1>
      <div className='w-full flex flex-row'>
        <button type="submit" className='rounded-lg bg-transparent p-4 text-xl my-3 font-unisonBold'>Let's get started!<PaperPlaneRight size={30}/></button>
      </div>
    </form>
  </section>
    
  );
}

export default Contact
