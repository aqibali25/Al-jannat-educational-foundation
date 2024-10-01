const FormInput = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <span className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete="off"
        type={type}
        className="formInput custom-input"
        id={id}
        placeholder={placeholder}
        value={value}        // Add the value prop
        onChange={onChange}  // Add the onChange prop
      />
    </span>
  );
};

export default FormInput;
