import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CycleTable from "./Tables/CycleTable";
import "./App.css";
import StationTable from "./Tables/StationTable";
import CustomerTable from "./Tables/customerView";
import UpdateCustomerTable from "./Tables/UpdateCustomerTable";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stationview" element={<StationTable />} />
        <Route path="/cycle" element={<CycleTable />} />
        <Route path="/customerview" element={<CustomerTable />} />
        <Route path="/customerview/:id" element={<UpdateCustomerTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
