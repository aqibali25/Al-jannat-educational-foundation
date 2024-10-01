const FormTextArea = ({ id, placeholder, rows, value, onChange }) => {
  return (
    <div className="form-group mb-3">
      <textarea
        className="formInput custom-input"
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}    
        onChange={onChange}  
      ></textarea>
    </div>
  );
};

export default FormTextArea;
