import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const recaptcha = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Please complete the CAPTCHA");
      return;
    }

    async function submitForm(event) {
      event.preventDefault()
      const captchaValue = recaptcha.current.getValue()
      if (!captchaValue) {
        toast.error('Please verify the reCAPTCHA!')
      } else {
        const res = await fetch('http://localhost:8000/verify', {
          method: 'POST',
          body: JSON.stringify({ captchaValue: recaptchaToken }),
          headers: {
            'content-type': 'application/json',
          },
        })
        const data = await res.json()
        if (data.success) {
          // make form submission
          toast.success('Form submission successful!')
        } if (!data.success) {
          toast.error('reCAPTCHA validation failed!')
        }
      }
    }

    
    emailjs
      .sendForm(
        'service_ubvhvst', 'template_u6qcjvp', form.current, 'RRY8DEaikVgd3R4sX'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Reset the reCAPTCHA token
          setRecaptchaToken(null);
          // Success toast message
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <ReCAPTCHA
              ref={recaptcha}
              sitekey={"6Lc0yWwqAAAAAJ-vrWCA5xP2tLD2cc5LpbnCHA82"}
              onChange={handleRecaptchaChange}
            />
            <button
              className="btn self-start bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank" rel="noopener noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
