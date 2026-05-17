import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Menu/Navbar";

function CycleTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:7000/cycle");
        if (res.data.errno) alert(res.data.sqlMessage);

        setContent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete("http://localhost:8080/cycle/" + id);
      console.log("called");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <h1 className="h1">Cycle Details </h1>
      <div className="container">
        <table className="content-table">
          <thead>
            <tr>
              <th>Cycle ID</th>
              <th>Distance Travelled</th>
              <th>Is Gear</th>
              <th>Service Date</th>
              <th>Cycle Condition</th>
              <th>Service ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr>
                <td>{content.cycleID}</td>
                <td>{content.distTravelled}</td>
                <td>{content.isGear ? "Yes" : "No"}</td>
                <td>{content.serviceDate}</td>
                <td>{content.cycCondition}</td>
                <td>{content.serviceID}</td>
                <td>
                  <div className="buttonContainer">
                    <Link to={`/cycle/${content.cycleID}`} state={content}>
                      <button
                        className="edit-delete-buttons"
                        variant="tertiary"
                        size="xs"
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      className="edit-delete-buttons"
                      variant="tertiary"
                      size="xs"
                      onClick={() => {
                        handleDelete(content.cycleID);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CycleTable;
