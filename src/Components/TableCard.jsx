// components/TableCard.jsx
import React from "react";
const [tables, setTables] = useState([
  { id: 1, number: 1, status: "available", orders: [] },
  { id: 2, number: 2, status: "occupied", orders: [{ item: "Burger", qty: 2 }] }
]);


const TableCard = ({ table, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(table)}
      className={`p-4 border rounded-xl cursor-pointer ${
        table.status === "occupied" ? "bg-red-300" : "bg-green-200"
      }`}
    >
      <h3 className="text-xl font-bold">Table {table.number}</h3>
      <p>Status: {table.status}</p>
    </div>
  );
};

export default TableCard;
