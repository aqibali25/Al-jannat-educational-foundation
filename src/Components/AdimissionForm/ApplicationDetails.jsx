import React from "react";
import FormField from "./FormField";
import DropdownField from "./DropdownField.jsx";

const ApplicationDetails = () => {
  return (
    <div className="application-details">
      <FormField label="Applicant Name" type="text" />
      <FormField label="Mother's Name" type="text" />
      <FormField label="Date of Birth" type="date" />
      <DropdownField
        label="Is Resident of Maharashtra"
        options={["Yes", "No"]}
      />
      <FormField label="Caste Category" type="text" />
      <FormField label="Caste" type="text" />
      <FormField label="Sub Caste" type="text" />
      <DropdownField label="Gender" options={["Male", "Female", "Other"]} />
      <DropdownField label="Orphan" options={["Yes", "No"]} />
      <DropdownField label="Disabled" options={["Yes", "No"]} />
      <FormField label="Applicant's Annual Income" type="number" />
      <FormField label="Total Annual Income" type="number" />
      <FormField label="Marital Status" type="text" />
    </div>
  );
};

export default ApplicationDetails;
