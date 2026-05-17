import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

function UpdateStaionTable() {  
  const location = useLocation()
  const props=location.state
  //console.log(props)
  const [stationUpdatedData, setUpdatedData] = useState({
    stnName:props.stnName,
    stnAddress: props.stnAddress,
    cycCapacity: props.cycCapacity,
    empID: props.empID,
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const stnID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    console.log(stationUpdatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(stationUpdatedData);
      await axios.put(
        `http://localhost:8080/station/${stnID}`,
        stationUpdatedData
      );
      console.log("Axios called");
      navigate("/station");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Station Details Updation Form</header>
        </div>

        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Station Name</label>
              <input
                type="text"
                placeholder={props.stnName}
                onChange={handleChange}
                name="stnName"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Address</label>
              <input
                type="text"
                placeholder={props.stnAddress}
                onChange={handleChange}
                name="stnAddress"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Cycle Capacity</label>
              <input
                type="number"
                onChange={handleChange}
                placeholder={props.cycCapacity}
                 name="cycCapacity"
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Employee ID</label>
              <input
                type="number"
                onChange={handleChange}
                placeholder={props.empID}
                name="empID"
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

export default UpdateStaionTable;
