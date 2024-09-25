import React from "react";
import FormField from "./FormField";

const StudentSSCDetails = () => {
  return (
    <div className="ssc-details">
      <FormField label="SSC Board" type="text" />
      <FormField label="Passing Year" type="text" />
      <FormField label="SSC Seat Number" type="text" />
      <FormField label="Marks Obtained" type="text" />
    </div>
  );
};

export default StudentSSCDetails;
