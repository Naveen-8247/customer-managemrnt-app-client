
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomerForm from "../CustomerForm";
import "./index.css";

function CustomerFormPage() {
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/customers/${id}`)
        .then((res) => setCustomerData(res.data.data))
        .catch((err) => setError(err.response?.data?.error || "Error fetching customer"));
    }
  }, [id]);

  const handleSubmit = (data) => {
    if (id) {
      axios
        .put(`http://localhost:5000/api/customers/${id}`, data)
        .then(() => navigate(`/customers/${id}`))
        .catch((err) => setError(err.response?.data?.error || "Failed to update"));
    } else {
      axios
        .post("http://localhost:5000/api/customers", data)
        .then(() => navigate("/"))
        .catch((err) => setError(err.response?.data?.error || "Failed to create"));
    }
  };

  return (
    <div className="form-container">
      <h1>{id ? "Edit Customer" : "Add Customer"}</h1>
      {error && <p className="error">{error}</p>}
      <CustomerForm initialData={customerData || {}} onSubmit={handleSubmit} />
    </div>
  );
}

export default CustomerFormPage;
