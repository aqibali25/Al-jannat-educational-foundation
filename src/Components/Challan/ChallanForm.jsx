import React from "react";
import "../Styles/ChallanForm.css";
import logoImage from "./assets/Al-jannat-educational-foundation.jpg";

const ChallanForm = ({ label, copyTag }) => {
  return (
    <div className="challan-form">
      {/* Header Section */}
      <div className="header">
        <div className="copyTag">
          <label>{label}</label> {copyTag} Copy
        </div>
        <div className="foundation-details">
          <img src={logoImage} alt="Logo" className="logo" />
          <h2>AL-JANNAT EDUCATION FOUNDATION</h2>
          <p>Address: Main to Block Near University of Kids School Okada</p>
          <p>Contact: 03xx-xxxxxxx</p>
          <p>Email: ajannateducationfoundation@gmail.com</p>
        </div>
      </div>

      {/* Challan Number */}
      <div className="challan-info">
        <label>Challan No:</label>
        <p className="fields"></p>
      </div>

      {/* Challan Details */}
      <div className="challan-details">
        <div className="row">
          <label>School:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Due Date:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Reg/Roll No:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Name:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Class:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Scholarship Processing Fee:</label>
          <p className="fields"></p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="summary">
        <div className="row">
          <label>Discount:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Scholarships:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Loan:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Payment:</label>
          <p className="fields"></p>
        </div>
        <div className="row">
          <label>Total Receivable:</label>
          <p className="fields"></p>
        </div>
      </div>

      {/* Depositor Details */}
      <div className="depositor-details">
        <label>In Words:</label>
        <p className="fields"></p>
        <label>Depositor Name:</label>
        <p className="fields"></p>
        <label>Depositor's CNIC:</label>
        <p className="fields"></p>
        <label>Tel/Mobile No:</label>
        <p className="fields"></p>
      </div>

      {/* Signature Section */}
      <div className="signature-section">
        <label>Signature of Depositor:</label>
        <p className="fields"></p>
      </div>

      {/* Instruction Section */}
      <div className="instruction-section">
        <p>
          This Challan form/Deposit Slip is only for Cash Deposit (Applicable
          where collection is restricted through cash mode only). "Cash/Cheque"
          should always be deposited at the respective counter, and a
          computer-generated receipt printed through the computer system should
          be obtained before leaving the counter. Please be sure to check the
          receipt and verify the details, including the Challan number.
        </p>
        <p className="urdu-text">
          اپنی رسید چیک کریں اور یقینی بنائیں کہ اس میں تمام تفصیلات درست ہیں۔
        </p>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-sign">
          <label>Authorized Signatory:</label>
        </div>
        <div className="footer-stamp">
          <label>Authorized Stamp:</label>
        </div>
        <div className="footer-paid">
          <label>Paid Date:</label>
          <p className="fields"></p>
        </div>
      </div>
    </div>
  );
};

export default ChallanForm;
