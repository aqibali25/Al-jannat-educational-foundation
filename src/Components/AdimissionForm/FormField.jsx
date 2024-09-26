import React from "react";

const FormField = ({ label, type }) => {
  return (
    <div className="form-group col-12">
      <label>{label}</label>
      <input type={type} className="form-control" />
    </div>
  );
};

export default FormField;
