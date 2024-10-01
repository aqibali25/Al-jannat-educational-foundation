import React from "react";

const DropdownField = ({ label, options }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select className="form-control" required>
        <option value="" disabled selected>
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
