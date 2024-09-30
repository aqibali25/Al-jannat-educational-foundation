const FormTextArea = ({ id, placeholder, rows }) => {
  return (
    <div className="form-group mb-3">
      <textarea
        className="formInput custom-input"
        id={id}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
