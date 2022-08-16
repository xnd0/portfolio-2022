import React, { useState } from "react";

const FORM_ENDPOINT = "mailto:xdrcode@gmail.com";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div class="center fade light-text">
        <div class="vertical-fade"></div>
        <br></br>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
        <div className="text-md">...so long as you sent the email!</div>
        <br></br>
        <div className="text-md">Follow up at xdrcode@gmail.com</div>
        <br></br>
        <div class="vertical-fade-reverse"></div>
      </div>
    );
  }

  return (
    
    <div class="center fade light-text">
      <div class="vertical-fade"></div>
      <br></br>
      <h1>Contact Me</h1>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-900 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          <h4 class="dark-text">Send Message</h4>
          
        </button>
      </div>
    </form>
    <div class="vertical-fade-reverse"></div>
    </div>
  );
};

export default ContactForm;