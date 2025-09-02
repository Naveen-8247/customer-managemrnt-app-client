import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerList from "../CustomerList";
import { Link } from "react-router-dom";
import "./index.css";

function CustomerListPage() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers")
      .then((response) => setCustomers(response.data.data))
      .catch((error) => setError(error.response?.data?.error || "Failed to fetch customers"));
  }, []);

  return (
    <div className="page-container">
      <h1 className="heading">Customer List</h1>
      <Link to="/customers/new" className="add-btn">+ Add Customer</Link>
      {error && <p className="error">{error}</p>}
      <CustomerList customers={customers} />
    </div>
  );
}

export default CustomerListPage;
