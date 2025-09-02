import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AddressList from "../AddressList";
import "./index.css";

function CustomerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState("");

  // Fetch customer details
  useEffect(() => {
    axios.get("http://localhost:5000/api/customers/" + id)
      .then((res) => setCustomer(res.data.data))
      .catch((err) => {
        setError(err.response?.data?.error || "Error fetching customer");
      });
  }, [id]);

  // Delete customer
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
    if (!confirmDelete) return;

    axios.delete("http://localhost:5000/api/customers/" + id)
      .then(() => {
        alert("Customer deleted successfully");
        navigate("/"); // Redirect to customer list
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Failed to delete customer");
      });
  };

  if (error) return <p>{error}</p>;
  if (!customer) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <h1>{customer.first_name} {customer.last_name}</h1>
      <p><strong>Phone:</strong> {customer.phone_number}</p>

      <Link to={`/customers/${id}/edit`} className="edit-btn">Edit</Link>
      <button onClick={handleDelete} className="delete-btn">Delete</button>

      <h2>Addresses</h2>
      <AddressList customerId={id} />
    </div>
  );
}

export default CustomerDetailPage;
