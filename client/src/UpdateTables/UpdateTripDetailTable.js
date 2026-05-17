import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

function UpdateTripDetailTable() {
  const location = useLocation();
  const props=location.state
  console.log(props.beginTime)
  const [tripUpdatedData, setUpdatedData] = useState({
    stnID_start: props.stnID_start,
    stnID_end: props.stnID_end,
    distTravelled: props.distTravelled,
    beginTime: props.beginTime,
    endTime: props.endTime,
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const tripID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(tripUpdatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(tripUpdatedData);
      const res =await axios.put(
        `http://localhost:8080/tripdetails/${tripID}`,
        tripUpdatedData
      )      
      if(res.data.errno)
      alert (res.data.sqlMessage)
      console.log("Axios called");
      navigate("/tripdetails");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Customer Details Updation Form</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Station ID start</label>
              <input
                type="number"
                placeholder={props.stnID_start}
                onChange={handleChange}
                name="stnID_start"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Station ID end</label>
              <input
                type="number"
                placeholder={props.stnID_end}
                onChange={handleChange}
                name="stnID_end"
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Distance Travelled</label>
              <input
                type="number"
                placeholder={props.distTravelled}
                onChange={handleChange}
                name="distTravelled"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Begin Time</label>
              <input
                type="time"
                onChange={handleChange}
                name="beginTime"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>End Time</label>
              <input type="time" onChange={handleChange} name="endTime"></input>
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

export default UpdateTripDetailTable;
