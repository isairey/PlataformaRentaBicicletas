import React, { useEffect, useState } from "react";
import "./TableStyle.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Menu/Navbar";
function EmployeeTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/employee");
        console.log(res.data);
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
      await axios.delete("http://localhost:8080/employee/" + id);
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
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Address</th>
              <th>Date of Birth</th>
              <th>Station ID</th>
              <th>Service ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr>
                {console.log(content)}
                <td>{content.empID}</td>
                <td>{content.empName}</td>
                <td>{content.empAddress}</td>
                <td>{content.dob}</td>
                <td>{content.stnID === null ? "-" : content.stnID}</td>
                <td>{content.servID === null ? "-" : content.servID}</td>
                <td>
                  <td>
                    <div className="buttonContainer">
                      <Link to={`/employee/${content.empID}`} state={content}>
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
                          handleDelete(content.empID);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeTable;
