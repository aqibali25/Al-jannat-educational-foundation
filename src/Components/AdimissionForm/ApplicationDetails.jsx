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
        <FormField label="Father's Name" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Date of Birth" type="date" />
      </div>
      <div className="col-md-6">
        <DropdownField
          label="Resident of"
          options={["Ghotki", "Khanpur", "Mirpur", "Daharki", "Ubauro"]}
        />
      </div>
      <div className="col-md-12">
        <FormField label="Father's CNIC" type="Number" />
      </div>
      <div className="col-md-6">
        <FormField label="Caste" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Religion" type="text" />
      </div>
      <div className="col-md-6">
        <DropdownField label="Gender" options={["Male", "Female", "Other"]} />
      </div>
      <div className="col-md-3">
        <FormField label="Age" type="text" />
      </div>
      <div className="col-md-3">
        <DropdownField label="Disabled" options={["Yes", "No"]} />
      </div>
      <div className="col-md-6">
        <FormField label="Address" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Mobile No:" type="number" />
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
