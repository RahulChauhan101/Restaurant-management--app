import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Billing.css";

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order = [], total = 0 } = location.state || {};

  return (
    <div className="billing">
      <h1>Billing Summary</h1>
      <h2>Restaurant Bill</h2>
      <h2>Restaurant Bill</h2>
      <h2>Restaurant Bill</h2>
      <h2>Restaurant Bill</h2>
      {order.length === 0 ? (
        <p>No order data found.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ₹{total}</h3>
          <button onClick={() => navigate("/")}>Back to Dashboard</button>
        </>
      )}
    </div>
  );
};

export default Billing;
