import React, { useEffect, useState } from "react";
import "./style.css";
// data from "./MockData.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Menu/Navbar";

function StationTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:7000/stationview");
        //console.log(res.data);
        setContent(res.data);
        //console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
  // const handleDelete = async (id) => {
  //   try {
  //     const res=await axios.delete("http://localhost:8080/station/" + id);
  //     if(res.data.errno)
  //     alert (res.data.sqlMessage)
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const handleUpdate = async (content) => {

  // <Link to={`/station/${content.stnID}`} state={content}> </Link>

  //   // try {
  //   //   await axios.delete("http://localhost:8080/station/" + id);
  //   //   console.log("called");
  //   //   window.location.reload();
  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  // };
  return (
    <>
      <Navbar />
      <h1 className="h1">Station Details </h1>
      <div className="container">
        <table className="content-table">
          <thead>
            <tr>
              <th>Station Name</th>
              <th>Station Address</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr>
                <td>{content.stnName}</td>
                <td>{content.stnAddress}</td>
                {/* <td>
                 <Link to={`/station/${content.stnID}`}> 
               // ce.log(content)
                 <div className="buttonContainer">
                <Link to={`/station/${content.stnID}`} state={content}> 
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
                    handleDelete(content.stnID);
                  }}
                >
                  Delete
                </button>
                </div>
              </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StationTable;
