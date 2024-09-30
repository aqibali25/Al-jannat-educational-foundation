const FormInput = ({ label, id, type, placeholder }) => {
  return (
    <span className="form-group ">
      <input
        autoComplete="off"
        type={type}
        className="formInput custom-input"
        id={id}
        placeholder={placeholder}
      />
    </span>
  );
};

export default FormInput;
