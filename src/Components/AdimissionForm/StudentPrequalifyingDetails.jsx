import React from "react";
import FormField from "./FormField";

const StudentPrequalifyingDetails = () => {
  return (
    <div className="prequalifying-details">
      <FormField label="Last Attended School/College/Institute" type="text" />
      <FormField label="Last Exam Passed" type="text" />
      <div className="row">
        <div className="col-md-6">
          <FormField label="Last Exam Passed Year" type="text" />
        </div>
        <div className="col-md-6">
          <FormField label="Last Exam Marks" type="text" />
        </div>
      </div>
    </div>
  );
};

export default StudentPrequalifyingDetails;
