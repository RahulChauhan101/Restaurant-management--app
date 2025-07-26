import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = ({ order, setOrder }) => {
  const navigate = useNavigate();

  // Group items by name with quantity
  // Group items by name with quantity
  // Group items by name with quantity
  // Group items by name with quantity
  // Group items by name with quantity
  // Group items by name with quantity
  // Group items by name with quantity
  // Group items by name with quantity
  const groupedOrder = Object.values(
    order.reduce((acc, item) => {
      if (!acc[item.name]) {
        acc[item.name] = { ...item, quantity: 1 };
      } else {
        acc[item.name].quantity += 1;
      }
      return acc;
    }, {})
  );

  // Increment quantity
  const incrementQty = (itemName) => {
    const item = order.find((i) => i.name === itemName);
    if (item) {
      setOrder([...order, item]);
    }
  };

  // Decrement quantity
  const decrementQty = (itemName) => {
    const idx = order.findIndex((i) => i.name === itemName);
    if (idx !== -1) {
      const updated = [...order];
      updated.splice(idx, 1);
      setOrder(updated);
    }
  };

  // Calculate total price
  const getTotal = () =>
    groupedOrder.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

      const handleGenerateBill = () => {
    navigate("/billing", {
      state: { order: groupedOrder, total: getTotal() },
    });
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {order.length === 0 ? (
        <p>No items selected yet.</p>
      ) : (
        <>
          <ul>
            <li>
              <span>Item</span>
              <span>Qty</span>
              <span>Price</span>
            </li>
            {groupedOrder.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <div className="qty-controls">
                  <button className="dec-btn" onClick={() => decrementQty(item.name)}>-</button>
                  <span className="qty-number">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => incrementQty(item.name)}>+</button>
                </div>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <p className="Total">
            <strong>Total: ₹{getTotal()}</strong>
          </p>
          <button className="btn" onClick={handleGenerateBill}>
            Generate Bill
          </button>
        
        </>
      )}
      <button className="btn" onClick={() => navigate("/")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default OrderSummary;
