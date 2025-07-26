import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import OrderSummary from "../Components/OrderSummary";
import "./TableDetail.css";

const menuItems = [
  { id: 1, name: "Paneer Butter Masala", price: 180, image: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg" },
  { id: 2, name: "Veg Manchurian", price: 150, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/11/veg-manchurian-recipe-1.jpg" },
  { id: 3, name: "Veg Biryani", price: 200, image: "https://www.indianveggiedelight.com/wp-content/uploads/2021/05/vegetable-biryani-featured.jpg" },
  { id: 4, name: "Jeera Rice", price: 120, image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Jeera-Rice-2-3.jpg" },
  { id: 5, name: "Tandoori Roti", price: 20, image: "https://pallibangla.com/wp-content/uploads/2024/06/tandoori-roti-1-600x450.jpg" },
  { id: 6, name: "Butter Naan", price: 30, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/butter-naan-1.jpg" },
  { id: 7, name: "Masala Dosa", price: 100, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/masala-dosa.jpg" },
  { id: 8, name: "Pav Bhaji", price: 100, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/09/Mumbai-Pav-Bhaji-Recipe.jpg" },
  { id: 9, name: "Samosa", price: 25, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/samosa-recipe.jpg" },
  { id: 10, name: "Cold Coffee", price: 80, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5Ra7skakKsdxy_kO17uSjGNZDNdpDuMYf7nzPADaGWjfcMg8SP6jUm_q9vP0qaClZqR1wYRIviKUnaWtriwBo-sFBCas23IUtm-Xaj1o" },
  { id: 11, name: "Lassi", price: 60, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/lassi-recipe-1.jpg" },
  { id: 12, name: "Lemon Soda", price: 50, image: "https://www.ticklingpalates.com/wp-content/uploads/2022/05/Nimbu-Soda-Recipe.jpg" },
];

const TableDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const table = location.state || { number: id };
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder((prev) => [...prev, item]);
  };

  return (
    <div className="table">
      <div className="table-item">
        <h1>Table {table.number}</h1>
        <p>Select items for this table:</p>
        {/* <p>Select items for this table:</p> */}
        {/* <p>Select items for this table:</p> */}
      </div>

      <div className="table-detail">
        <div className="menu">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <span>{item.id}</span>
              <img src={item.image} alt={item.name} />
              <span>{item.name} - ₹{item.price}</span>
              <button onClick={() => addToOrder(item)}>Add</button>
            </div>
          ))}
        </div>

        <OrderSummary order={order} setOrder={setOrder} />
      </div>
    </div>
  );
};

export default TableDetail;
