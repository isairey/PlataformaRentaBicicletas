import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
import axios from "axios";
import image from "../image/bicycle2.png";
import Navbar from "../Menu/Navbar";
function TripDetailsForms() {
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredDistance, setEnteredDistance] = useState("");
  const distanceChangeHandler = (event) => {
    setEnteredDistance(event.target.value);
  };

  const [enteredCustomerId, setEntereCustomerId] = useState("");
  const CustomerChangeHandler = (event) => {
    setEntereCustomerId(event.target.value);
  };

  const [startEnterdTime, setStartEnterTime] = useState("");
  const startTimeChangeHandler = (event) => {
    setStartEnterTime(event.target.value);
  };

  const [endEnterdTime, setEndEnterTime] = useState("");
  const endTimeChangeHandler = (event) => {
    setEndEnterTime(event.target.value);
  };

  const [enteredCycId, setEnteredCycId] = useState("");
  const cycleIdChangeHandler = (event) => {
    setEnteredCycId(event.target.value);
  };

  const [enteredStartStaionId, setEnteredStartStaionId] = useState("");
  const startStationIdChangeHandler = (event) => {
    setEnteredStartStaionId(event.target.value);
  };

  const [enteredEndtStaionId, setEnteredSEndStaionId] = useState("");
  const endStationIdChangeHandler = (event) => {
    setEnteredSEndStaionId(event.target.value);
  };

  console.log(startEnterdTime + ` ` + endEnterdTime);
  const submitHandler = async (event) => {
    event.preventDefault();

    const customerData = {
      custID: enteredCustomerId,
      cycID: enteredCycId,
      stnID_start: enteredStartStaionId,
      stnID_end: enteredEndtStaionId,
      beginTime: enteredDate + ` ` + startEnterdTime + `:00`,
      endTime: enteredDate + ` ` + endEnterdTime + `:00`,
      distTravelled: enteredDistance,
    };

    try {
     const res= await axios.post("http://localhost:8080/tripdetails", customerData);
     if(res.data.errno)
     alert (res.data.sqlMessage)
    } catch (err) {
      console.log(err);
    }
    console.log(customerData);
    setEnteredDistance("");
    setEnteredDate("");
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="new-expense">
          <div className="login-header">
            <header className="titles">Trip Details</header>
            <img src={image} alt=" logo" className="trin-img" />
          </div>

          <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Date</label>
                <input
                  type="date"
                  onChange={dateChangeHandler}
                  value={enteredDate}
                  required
                ></input>
              </div>
              <div className="new-expense__control">
                <label>Customer ID</label>
                <input
                  type="number"
                  onChange={CustomerChangeHandler}
                  value={enteredCustomerId}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Distance Travelled</label>
                <input
                  type="number"
                  placeholder="Enter the distance Travelled"
                  onChange={distanceChangeHandler}
                  value={enteredDistance}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Begin Time</label>
                <input
                  type="time"
                  onChange={startTimeChangeHandler}
                  value={startEnterdTime}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>End Time</label>
                <input
                  type="Time"
                  onChange={endTimeChangeHandler}
                  value={endEnterdTime}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Cycle ID</label>
                <input
                  type="number"
                  placeholder="Enter cycle ID"
                  onChange={cycleIdChangeHandler}
                  value={enteredCycId}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Station ID Start</label>
                <input
                  type="number"
                  onChange={startStationIdChangeHandler}
                  value={enteredStartStaionId}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Station ID End</label>
                <input
                  type="number"
                  onChange={endStationIdChangeHandler}
                  value={enteredEndtStaionId}
                  required
                ></input>
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default TripDetailsForms;
