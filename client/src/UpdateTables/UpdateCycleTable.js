import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const options = ["Good", "Moderate", "Poor"];
const isGearOption = ["No", "Yes"];

function UpdateCycleTable() {

  const location = useLocation()
  const props=location.state

 console.log(props)
  const [cycleUpdatedData, setUpdatedData] = useState({
    distTravelled: props.distTravelled,
    isGear: isGearOption[0],
    serviceDate: props.serviceDate.split("/").reverse().join("/"),
    cycCondition: options[0],
  });
console.log(cycleUpdatedData)
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const cycID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(cycleUpdatedData);

      await axios.put(
        `http://localhost:8080/cycle/${cycID}`,
        cycleUpdatedData
      );
      console.log("Axios called");
      navigate("/cycle");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Cycle Details Updation Form</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form>
          <div className="new-expense__controls">
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
              <label>Service Date</label>
              <input
                type="date"
                onChange={handleChange}
                name="serviceDate"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Cycle Condition</label>
              <select
                name="cycCondition"
                onChange={handleChange}
              >
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="new-expense__control">
              <label>Is Gear</label>
              <select
                name="isGear"
                onChange={handleChange}
              >
                {isGearOption.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
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

export default UpdateCycleTable;
