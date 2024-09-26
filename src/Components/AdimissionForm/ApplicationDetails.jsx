import React from "react";
import FormField from "./FormField";
import DropdownField from "./DropdownField";

const ApplicationDetails = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <FormField label="Applicant Name" type="text" />
      </div>
      <div className="col-md-12">
        <FormField label="Mother's Name" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Date of Birth" type="date" />
      </div>
      <div className="col-md-6">
        <DropdownField
          label="Is Resident of Maharashtra"
          options={["Yes", "No"]}
        />
      </div>
      <div className="col-md-12">
        <FormField label="Caste Category" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Caste" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Sub Caste" type="text" />
      </div>
      <div className="col-md-6">
        <DropdownField label="Gender" options={["Male", "Female", "Other"]} />
      </div>
      <div className="col-md-3">
        <DropdownField label="Orphan" options={["Yes", "No"]} />
      </div>
      <div className="col-md-3">
        <DropdownField label="Disabled" options={["Yes", "No"]} />
      </div>
      <div className="col-md-6">
        <DropdownField label="Is Applicant Salaried" options={["Yes", "No"]} />
      </div>
      <div className="col-md-6">
        <FormField label="Applicant's Annual Income" type="number" />
      </div>
      <div className="col-md-6">
        <FormField label="Total Annual Income" type="number" />
      </div>
      <div className="col-md-6">
        <FormField label="Marital Status" type="text" />
      </div>
    </div>
  );
};

export default ApplicationDetails;
