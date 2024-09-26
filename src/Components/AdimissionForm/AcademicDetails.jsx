import React from "react";
import FormField from "./FormField";
import ImageInput from "./ImageInput";

const AcademicDetails = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-4 d-flex justify-content-center">
        <ImageInput />
      </div>
      <div className="col-md-8">
        <FormField label="Academic Year" type="text" />
        <FormField label="Application date" type="date" />
        <FormField label="College Name" type="text" />
        <FormField label="Course Name" type="text" />
      </div>
    </div>
  );
};

export default AcademicDetails;
