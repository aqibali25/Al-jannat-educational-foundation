import React from "react";
import FormField from "./FormField";

const StudentSSCDetails = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <FormField label="SSC Board" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Passing Year" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="SSC Seat Number" type="text" />
      </div>
      <div className="col-md-6">
        <FormField label="Marks Obtained" type="text" />
      </div>
    </div>
  );
};

export default StudentSSCDetails;
