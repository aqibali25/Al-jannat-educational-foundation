import React from "react";

const DropdownField = ({ label, value, options, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        className="form-control"
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          --select--
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
