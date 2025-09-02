import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function CustomerList({ customers }) {
  if (!customers || customers.length === 0) {
    return <p className="no-customers">No customers available.</p>;
  }

  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <li key={customer.id} className="customer-item">
          <Link to={`/customers/${customer.id}`}>
            {customer.first_name} {customer.last_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CustomerList;
