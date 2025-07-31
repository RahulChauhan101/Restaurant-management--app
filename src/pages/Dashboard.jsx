import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Restaurant Dashboard</h1>
      <h2>Select a Table</h2>
      <ul>
        {tables.map((table) => (
          <li key={table}>
            <button onClick={() => navigate(`/table/${table}`)}>
              Table {table}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
