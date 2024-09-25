import React from "react";

const FormField = ({ label, type }) => {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default FormField;
