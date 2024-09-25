import React from "react";

const DropdownField = ({ label, options }) => {
  return (
    <div className="dropdown-field">
      <label>{label}</label>
      <select>
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
