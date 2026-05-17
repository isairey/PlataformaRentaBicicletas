import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerDetailsForms from "./Components/CustomerDetailsForms";
import CycleDetailsForms from "./Components/CycleDetailsForms";
import EmployeeDetailsForms from "./Components/EmployeeDetailsForms";
import ServiceStationForms from "./Components/ServiceStationForms";
import StationDetailsForms from "./Components/StationDetailsForms";
import TripDetailsForms from "./Components/TripDetailsForms";
import CustomerTable from "./TablesForDataDisplaying/CustomerTable";
import CycleTable from "./TablesForDataDisplaying/CycleTable";
import EmployeeTable from "./TablesForDataDisplaying/EmployeeTable";
import StationTable from "./TablesForDataDisplaying/StationTable";
import ServiceTable from "./TablesForDataDisplaying/ServiceTable";
import UpdateCustomerTable from "./UpdateTables/UpdateCustomerTable";
import UpdateCycleTable from "./UpdateTables/UpdateCycleTable";
import UpdateEmployeeTable from "./UpdateTables/UpdateEmployeeTable";
import UpdateServiceTable from "./UpdateTables/UpdateServiceTable";
import UpdateStationTable from "./UpdateTables/UpdateStationTable";
import UpdateTripDetailTable from "./UpdateTables/UpdateTripDetailTable";
import TripDetailTable from "./TablesForDataDisplaying/TripDetailTable";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerTable />} />
        <Route path="/addcustomer" element={<CustomerDetailsForms />} />
        <Route path="/customer/:id" element={<UpdateCustomerTable />} />

        <Route path="/cycle" element={<CycleTable />} />
        <Route path="/addcycle" element={<CycleDetailsForms />} />
        <Route path="/cycle/:id" element={<UpdateCycleTable />} />

        <Route path="/employee" element={<EmployeeTable />} />
        <Route path="/addemployee" element={<EmployeeDetailsForms />} />
        <Route path="/employee/:id" element={<UpdateEmployeeTable />} />

        <Route path="/tripdetails" element={<TripDetailTable />} />
        <Route path="/addtripdetails" element={<TripDetailsForms />} />
        <Route path="/tripdetails/:id" element={<UpdateTripDetailTable />} />

        <Route path="/station" element={<StationTable />} />
        <Route path="/addstation" element={<StationDetailsForms />} />
        <Route path="/station/:id" element={<UpdateStationTable />} />

        <Route path="/service" element={<ServiceTable />} />
        <Route path="/addservice" element={<ServiceStationForms />} />
        <Route path="/service/:id" element={<UpdateServiceTable />} />

        <Route path="/stationview" element={<StationTable />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
