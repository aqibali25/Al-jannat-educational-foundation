import React from "react";
import FormField from "./FormField";

const StudentSSCDetails = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <FormField label="SSC/HSC Board" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Passing Year (9th, 10th, 11th, 12th)" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="SSC/HSC Seat Number" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Marks Obtained" type="text" />
      </div>
    </div>
  );
};

export default StudentSSCDetails;
