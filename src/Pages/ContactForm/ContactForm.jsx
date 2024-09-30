import FormInput from "../../Components/ContactForm/FormInput";
import FormTextArea from "../../Components/ContactForm/FormTextArea";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="custom-container">
      <form>
        <div className="col-12 inputGroupMain">
          <FormInput label="Name" id="name" type="text" placeholder="Name" />
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <FormTextArea id="message" placeholder="Message" rows="5" />
        <button type="submit" className="custom-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
