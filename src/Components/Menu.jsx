import React from "react";

const menuItems = [
  { id: 1, name: "Pizza", price: 250 },
  { id: 2, name: "Burger", price: 150 },
  { id: 3, name: "Pasta", price: 200 },
];

const Menu = ({ onAdd }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
            <button onClick={() => onAdd(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
