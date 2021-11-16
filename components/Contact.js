import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
      const serviceId = "service_kre2z1m";
      const templateId = "template_hr1le3u";
      const userId = "user_uoHjGJrbqOjU4Cipfh657";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields. Thanks !");
    }
  };

  return (
    <div>
      <Header />
      <div className="relative z-10 px-5 lg:max-w-6xl mx-auto -mt-4">
        <h1 className=" font-semibold text-2xl">Lets get in touch!</h1>
        <span className="font-light text-base mt-2">
          Fill in the details and I will get back to you ASAP 🚀
        </span>

        <form className="form rounded-lg flex flex-col gap-y-4 pt-4 max-w-full">
          <TextField
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="dark: bg-gray-100"
          />

          <TextField
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="dark: bg-gray-100"
          />
          <TextField
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="dark: bg-gray-100"
            multiline
            rows={8}
            maxRows={10}
          />
          <Button
            onClick={submit}
            variant="contained"
            size="small"
            className="hover:110"
          >
            Send Message
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
