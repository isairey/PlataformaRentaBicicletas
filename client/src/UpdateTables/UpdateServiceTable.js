import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const options = ["Basic", "Premium"];
export default function UpdateServiceTable() {
  const navigate = useNavigate();
  const location = useLocation();

  const props=location.state
  const [serviceUpdatedData, setUpdatedData] = useState({
    empID: props.empID,
    dueDate: props.dueDate.split("/").reverse().join("/"),
    sparePartsCount: props.sparePartsCount,
    cycID: props.cycID,
  });

  const [error, setError] = useState(false);
 

  const serviceID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(serviceUpdatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(serviceUpdatedData);
      await axios.put(
        `http://localhost:8080/service/${serviceID}`,
        serviceUpdatedData
      );
      console.log("Axios called");
      navigate("/service");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Service Details Updation Form</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Employee ID</label>
              <input
                type="number"
                placeholder={props.empID}
                onChange={handleChange}
                name="empID"
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Due Date</label>
              <input type="date" onChange={handleChange} name="dueDate"></input>
            </div>

            <div className="new-expense__control">
              <label>Spare Parts Count</label>
              <input
                type="number"
                placeholder={props.sparePartsCount}
                onChange={handleChange}
                name="sparePartsCount"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Cycle ID</label>
              <input
                type="number"
                placeholder={props.cycID}
                onChange={handleChange}
                name="cycID"
              ></input>
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

//export default UpdateServiceTable;
