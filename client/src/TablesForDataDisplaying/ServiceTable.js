import React, { useEffect, useState } from "react";
import "./TableStyle.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Menu/Navbar";

function ServiceTable() {
  const [contents, setContent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/service");
        if(res.data.errno)
        alert (res.data.sqlMessage)
        setContent(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/service/" + id);
      navigate("/service")
      console.log("called");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <table className="content-table">
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Employee ID</th>
              <th>Due Date</th>
              <th>Spare Parts Count</th>
              <th>Cycle ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr>
                <td>{content.serviceID}</td>
                <td>{content.empID}</td>
                <td>{content.dueDate}</td>
                <td>{content.sparePartsCount}</td>
                <td>{content.cycID}</td>
                <td>
                  <div className="buttonContainer">
                    <Link to={`/service/${content.serviceID}`} state={content}>
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
                        handleDelete(content.serviceID);
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

export default ServiceTable;
