import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const custapp = express();
custapp.use(express.json());
custapp.use(cors());
//Add Admin Host with all privileges granted
const db = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "",
});
//Add Customer Host with only stationview and customerview granted

const db1 = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "",
});

db.connect((err) => {
  if (err) console.log(err);

  console.log("Admin Database connected");
});

db1.connect((err) => {
  if (err) console.log(err);

  console.log("Customer Database connected");
});
//custapp corresponds to customer host
custapp.get("/", (req, res) => {
  res.send("Hello Customer");
});

//app corresponds to admin host
app.get("/", (req, res) => {
  res.send("Hello");
});

//General Query
app.get("/query", (req, res) => {
  console.log(req.body.query);
  const q = req.body.query;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.send(data);
  });
});

//Station
app.get("/station", (req, res) => {
  const q = "Select * from station;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.send(data);
  });
});

app.post("/station", (req, res) => {
  const q =
    "insert into station (`stnName`,`stnAddress`,`cycCapacity`,`empID`) values (?) ";
  const values = [
    req.body.stnName,
    req.body.stnAddress,
    req.body.cycCapacity,
    req.body.empID,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Station Created");
  });
});

app.put("/station/:id", (req, res) => {
  const stnID = req.params.id;
  const q =
    "update station set `stnName`=?,`stnAddress`=?,`cycCapacity`=?,`empID`=? where stnID=? ";
  const values = [
    req.body.stnName,
    req.body.stnAddress,
    req.body.cycCapacity,
    req.body.empID,
  ];
  db.query(q, [...values, stnID], (err, data) => {
    
    if (err) return res.status(400).send("Error");
    else return res.send("Station Updated");
  });
});

app.delete("/station/:id", (req, res) => {
  const stnID = req.params.id;
  const q = " delete from station where stnID = ? ";
  db.query(q, [stnID], (err, data) => {
    if (err) res.json(err);
    else res.send("Deleted Station Successfully!");
  });
});

//Employee
app.post("/employee", (req, res) => {
  const q =
    "insert into employee (`empName`,`empAddress`,`dob`,`stnID`,`servID`) values (?) ";
  const values = [
    req.body.empName,
    req.body.empAddress,
    req.body.dob,
    req.body.stnID,
    req.body.servID,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Employee Created");
  });
});

app.get("/employee", (req, res) => {
  const q = "Select * from employee;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else {
      data.forEach((item) => {
        item.dob = item.dob.toLocaleDateString();
      });
      return res.send(data);
    }
  });
});

app.put("/employee/:id", (req, res) => {
  const q =
    "update employee set `empName`=?,`empAddress`=?,`dob`=? where empID=? ";
  const values = [req.body.empName, req.body.empAddress, req.body.dob];
  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Employee Updated");
  });
});
app.delete("/employee/:id", (req, res) => {
  const q = "delete from employee where empID=?;";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Employee deleted");
  });
});

//Customer
app.get("/customer", (req, res) => {
  const q = "Select * from customer;";
  db.query(q, (err, data) => {
    //console.log(data)
    if (err) return res.json(err);
    else {
      data.forEach((item) => {
        item.subscribedOn = item.subscribedOn.toLocaleDateString();
        item.subscribedUpto = item.subscribedUpto.toLocaleDateString();
      });
      return res.send(data);
    }
  });
});
app.post("/customer", (req, res) => {
  const q =
    "insert into customer (`custName`,`custAddress`,`subscriptionType`,`subscribedOn`) values (?) ";
  const values = [
    req.body.custName,
    req.body.custAddress,
    req.body.subscriptionType,
    req.body.subscribedOn,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Customer Created");
  });
});

app.put("/customer/:id", (req, res) => {
  const custID = req.params.id;
  const q =
    "update customer set `custName`= ?, `custAddress`= ?, `subscriptionType`= ?, `subscribedOn`= ?, `distCycled`= ?  WHERE custID = ?";

  const values = [
    req.body.custName,
    req.body.custAddress,
    req.body.subscriptionType,
    req.body.subscribedOn,
    req.body.distCycled,
  ];

  db.query(q, [...values, custID], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Customer with ID:" + custID + " Updated");
  });
});
app.delete("/customer/:id", (req, res) => {
  const custID = req.params.id;
  const q = " delete from customer where custID = ? ";
  db.query(q, [custID], (err, data) => {
    if (err) res.json(err);
    else res.send("Deleted Customer Successfully!");
  });
});

//Cycle
app.post("/cycle", (req, res) => {
  const q =
    "insert into cycle (`cycCondition`,`serviceDate`,`isGear`) values (?) ";
  const values = [req.body.cycCondition, req.body.serviceDate, req.body.isGear];
  db.query(q, [values], (err, data) => {
    if (err) return console.log("called here cycle");
    else return res.send("Customer Created");
  });
});

app.get("/cycle", (req, res) => {
  const q = "Select * from cycle;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else {
      data.forEach((item) => {
        item.serviceDate = item.serviceDate.toLocaleDateString();
      });
      return res.send(data);
    }
  });
});
app.put("/cycle/:id", (req, res) => {
  const cycID = req.params.id;
  const value = req.body.isGear === "Yes" ? 1 : 0;
  const q =
    "update cycle set `cycCondition`=?,`serviceDate`=?,`isGear`=?,`distTravelled`=? where cycleID=? ";
  const values = [
    req.body.cycCondition,
    req.body.serviceDate,
    value,
    req.body.distTravelled,
  ];
  console.log(values);
  db.query(q, [...values, cycID], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Cycle Updated");
  });
});

app.delete("/cycle/:id", (req, res) => {
  const cycID = req.params.id;
  console.log(cycID);
  const q = " delete from cycle where cycleID = ? ";
  db.query(q, [cycID], (err, data) => {
    if (err) console.log(err);
    else {
      res.send("Deleted cycle Successfully!");
    }
  });
});

//Service
app.get("/service", (req, res) => {
  const q = "Select * from service;";

  db.query(q, (err, data) => {
    data.forEach((item) => {
      item.dueDate = item.dueDate.toLocaleDateString();
    });
    if (err) return res.json(err);
    else return res.send(data);
  });
});

app.post("/service", (req, res) => {
  const q =
    "insert into service (`empID`,`dueDate`,`sparePartsCount`,`cycID`) values (?) ";
  const values = [
    req.body.empID,
    req.body.dueDate,
    req.body.sparePartsCount,
    req.body.cycID,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Service Created");
  });
});

app.put("/service/:id", (req, res) => {
  const servID = req.params.id;
  const q =
    "update service set `empID`=?,`dueDate`=?,`sparePartsCount`=?,`cycID`=? where serviceID=? ";
  const values = [
    req.body.empID,
    req.body.dueDate,
    req.body.sparePartsCount,
    req.body.cycID,
  ];
  db.query(q, [...values, servID], (err, data) => {
    if (err) return res.json(err);
    else return res.send("Service Updated");
  });
});

app.delete("/service/:id", (req, res) => {
  const stnID = req.params.id;
  // console.log("called here")
  const q = " delete from service where serviceID = ? ";
  db.query(q, [stnID], (err, data) => {
    if (err) res.json(err);
    else res.send("Deleted Service Successfully!");
  });
});

//Tripdetails
app.get("/tripdetails", (req, res) => {
  const q = "Select * from tripdetails;";

  db.query(q, (err, data) => {
    data.forEach((item) => {
      item.beginTime =
        item.beginTime.toLocaleDateString() +
        " " +
        item.beginTime.toLocaleTimeString();
      item.endTime =
        item.endTime.toLocaleDateString() +
        " " +
        item.endTime.toLocaleTimeString();
    });
    if (err) return res.json(err);
    else return res.send(data);
  });
});

app.post("/tripdetails", (req, res) => {
  const q =
    "insert into tripdetails (`stnID_start`,`stnID_end`,`cycID`,`custID`,`distTravelled`,`beginTime`,`endTime`) values (?) ";
  const values = [
    req.body.stnID_start,
    req.body.stnID_end,
    req.body.cycID,
    req.body.custID,
    req.body.distTravelled,
    req.body.beginTime,
    req.body.endTime,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    else res.send("Tripdetails entered successfully!");
  });
});

app.put("/tripdetails/:id", (req, res) => {
  const q =
    "update tripdetails set `stnID_start`=?,`stnID_end`=?,`cycID`=?,`custID`=?,`distTravelled`=?,`beginTime`=?,`endTime`=? where tripID=? ";
  const values = [
    req.body.stnID_start,
    req.body.stnID_end,
    req.body.cycID,
    req.body.custID,
    req.body.distTravelled,
    req.body.beginTime,
    req.body.endTime,
  ];
  console.log(values);
  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) console.log("called here");
    else res.send("Tripdetails updated successfully!");
  });
});

app.delete("/tripdetails/:id", (req, res) => {
  const stnID = req.params.id;
  const q = " delete from tripdetails where tripID = ? ";
  db.query(q, [stnID], (err, data) => {
    if (err) res.json(err);
    else res.send("Deleted Trip Detail Successfully!");
  });
});

//routes defined on customer host
//customer view
custapp.get("/custview", (req, res) => {
  const q = "Select * from customerView;";

  db1.query(q, (err, data) => {
    data.forEach((item) => {
      item.subscribedUpto = item.subscribedUpto.toLocaleDateString();
    })
    if (err) return res.json(err);
    else return res.send(data);
  });
});
//station view
custapp.get("/stationview", (req, res) => {
  const q = "Select * from stations;"

  db1.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.send(data);
  });
});
//this is a demo for MySQL grant error, when customer tries to access '/cycle', MySQL denies it. 
custapp.get("/cycle", (req, res) => {
  const q = "Select * from cycle;";


  db1.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.send(data);
  });
});

//admin app runs on 8080 port
app.listen(8080, () => {
  console.log("Listening on port 8080");
});

//customer app runs on 7000 port
custapp.listen(7000, () => {
  console.log("Listening Customer on 7000");
});

