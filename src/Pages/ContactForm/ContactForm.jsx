import React, { useState } from "react";
import FormInput from "../../Components/ContactForm/FormInput";
import FormTextArea from "../../Components/ContactForm/FormTextArea";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('http://localhost:5000/api/applicants/applicant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message); // Show success message or handle it as needed

      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
