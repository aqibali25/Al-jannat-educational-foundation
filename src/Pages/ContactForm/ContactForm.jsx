import React, { useState } from "react";
import FormInput from "../../Components/ContactForm/FormInput";
import FormTextArea from "../../Components/ContactForm/FormTextArea";
import "./ContactForm.css";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="custom-container">
      <form onSubmit={handleSubmit}>
        <div className="col-12 inputGroupMain">
          <FormInput
            label="Name"
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <FormTextArea
          id="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="custom-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
