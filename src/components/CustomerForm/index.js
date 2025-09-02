import React, { useState, useEffect } from "react";
import "./index.css";

function CustomerForm({ initialData, onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Update form fields when initialData changes
  useEffect(() => {
    setFirstName(initialData.first_name || "");
    setLastName(initialData.last_name || "");
    setPhoneNumber(initialData.phone_number || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ first_name: firstName, last_name: lastName, phone_number: phoneNumber });
  };

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <input type="text" placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
      <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
      <button type="submit" className="submit-btn">Save</button>
    </form>
  );
}

export default CustomerForm;
