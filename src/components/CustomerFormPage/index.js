
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomerForm from "../CustomerForm";
import "./index.css";

const API_BASE = "https://customer-management-app-backend-production.up.railway.app";

function CustomerFormPage() {
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`${API_BASE}/api/customers/${id}`)
        .then((res) => setCustomerData(res.data.data))
        .catch((err) =>
          setError(err.response?.data?.error || "Error fetching customer")
        );
    }
  }, [id]);

  const handleSubmit = (data) => {
    if (id) {
      axios
        .put(`${API_BASE}/api/customers/${id}`, data)
        .then(() => navigate(`/customers/${id}`))
        .catch((err) =>
          setError(err.response?.data?.error || "Failed to update")
        );
    } else {
      axios
        .post(`${API_BASE}/api/customers`, data)
        .then(() => navigate("/"))
        .catch((err) =>
          setError(err.response?.data?.error || "Failed to create")
        );
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
