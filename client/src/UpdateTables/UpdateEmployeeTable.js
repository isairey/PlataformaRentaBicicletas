import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

function UpdateEmployeeTable() {
  const location = useLocation();
  const navigate = useNavigate();
  const props=location.state
  const [employeeUpdatedData, setUpdatedData] = useState({
    empName: props.empName,
    dob: props.dob.split('/').reverse().join('/'),
    empAddress: props.empAddress,
  });

  const [error, setError] = useState(false);


  const empID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(employeeUpdatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(employeeUpdatedData);
      await axios.put(
        `http://localhost:8080/employee/${empID}`,
        employeeUpdatedData
      );
      console.log("Axios called");
      navigate("/employee");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Employee Details Updation Form</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Full Name</label>
              <input
                type="text"
                placeholder={employeeUpdatedData.empName}
                onChange={handleChange}
                name="empName"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Address</label>
              <input
                type="text"
                placeholder={employeeUpdatedData.empAddress}
                onChange={handleChange}
                name="empAddress"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Date of Birth</label>
              <input type="date" onChange={handleChange} name="dob"></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={handleSubmit}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployeeTable;
