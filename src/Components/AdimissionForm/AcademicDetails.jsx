import React from "react";
import FormField from "./FormField";

const AcademicDetails = () => {
  return (
    <div className="academic-details">
      <FormField label="Academic Year" type="text" />
      <FormField label="Application Date" type="date" />
      <FormField label="College Name" type="text" />
      <FormField label="Course Name" type="text" />
      {/* Optional image upload component */}
      <div className="image-upload">
        <label>Profile Picture</label>
        <input type="file" />
      </div>
    </div>
  );
};

export default AcademicDetails;
