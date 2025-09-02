import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import AddressForm from "../AddressForm";
import "./index.css";

function AddressList({ customerId }) {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchAddresses = useCallback(() => {
    axios
      .get(`http://localhost:5000/api/customers/${customerId}/addresses`)
      .then((response) => setAddresses(response.data.data))
      .catch((error) => console.error(error));
  }, [customerId]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  return (
    <div className="address-container">
      <button onClick={() => setShowForm(!showForm)} className="add-btn">
        {showForm ? "Cancel" : "Add Address"}
      </button>

      {showForm && (
        <AddressForm
          customerId={customerId}
          onDone={() => setShowForm(false)}
          onAddressAdded={fetchAddresses}
        />
      )}

      <ul className="address-list">
        {addresses.map((address) => (
          <li key={address.id} className="address-item">
            {address.address_details}, {address.city}, {address.state} - {address.pin_code}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddressList;
