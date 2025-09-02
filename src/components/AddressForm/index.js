import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function AddressForm({ customerId, onDone, onAddressAdded }) {
  const [addressDetails, setAddressDetails] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAddress = { address_details: addressDetails, city, state, pin_code: pinCode };

    axios
      .post(`http://localhost:5000/api/customers/${customerId}/addresses`, newAddress)
      .then(() => {
        onAddressAdded();
        onDone();
      })
      .catch((error) => setError(error.response?.data?.error || "Failed to add address"));
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      {error && <p className="error">{error}</p>}
      <input type="text" placeholder="Address Details" value={addressDetails} onChange={(event) => setAddressDetails(event.target.value)} required />
      <input type="text" placeholder="City" value={city} onChange={(event) => setCity(event.target.value)} required />
      <input type="text" placeholder="State" value={state} onChange={(event) => setState(event.target.value)} required />
      <input type="text" placeholder="Pin Code" value={pinCode} onChange={(event) => setPinCode(event.target.value)} required />
      <button type="submit" className="submit-btn">Save Address</button>
    </form>
  );
}

      
export default AddressForm;
