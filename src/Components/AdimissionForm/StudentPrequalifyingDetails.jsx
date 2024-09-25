import React from "react";
import FormField from "./FormField";

const StudentPrequalifyingDetails = () => {
  return (
    <div className="prequalifying-details">
      <FormField label="Last Attended School/College/Institute" type="text" />
      <FormField label="Last Exam Passed" type="text" />
      <FormField label="Last Exam Passes Year" type="text" />
      <FormField label="Last Exam Marks" type="text" />
    </div>
  );
};

export default StudentPrequalifyingDetails;
