import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Navbar from "../Menu/Navbar";

function CustomerTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:7000/custview");
        setContent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="h1">Customer Details </h1>
      <div className="container">
        <table className="content-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Subscribed Upto</th>
              <th>Distance Cycled</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr>
                <td>{content.custName}</td>
                <td>{content.subscribedUpto}</td>
                <td>{content.distCycled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomerTable;
