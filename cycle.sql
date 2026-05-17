-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: cyc2
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `username` varchar(10) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `custID` int NOT NULL AUTO_INCREMENT,
  `custName` varchar(45) NOT NULL,
  `custAddress` varchar(120) NOT NULL,
  `subscriptionType` varchar(10) NOT NULL DEFAULT 'Basic',
  `subscribedOn` date NOT NULL,
  `subscribedUpto` date GENERATED ALWAYS AS ((`subscribedOn` + interval 1 year)) STORED,
  `distCycled` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`custID`)
) ENGINE=InnoDB AUTO_INCREMENT=3020 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`custID`, `custName`, `custAddress`, `subscriptionType`, `subscribedOn`, `distCycled`) VALUES (3010,'Anusha','Gokulam','Basic','2023-01-08',55),(3011,'Nakula','Mandya','Basic','2023-01-10',67),(3012,'Manu','Hinkal','Premium','2023-01-11',60),(3013,'Prithviraj','Vijayanagar','Basic','2023-01-07',58),(3014,'Yashas','Siddhartha Layout','Basic','2023-01-09',55),(3017,'Prashanth ','Yelandur','Basic','2023-01-12',0),(3018,'Varshitha','Kochi','Basic','2023-01-21',0),(3019,'Trial','Gokulam','Premium','2023-01-20',0);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `customerview`
--

DROP TABLE IF EXISTS `customerview`;
/*!50001 DROP VIEW IF EXISTS `customerview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `customerview` AS SELECT 
 1 AS `custName`,
 1 AS `subscribedUpto`,
 1 AS `distCycled`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `cycle`
--

DROP TABLE IF EXISTS `cycle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycle` (
  `cycleID` int NOT NULL AUTO_INCREMENT,
  `distTravelled` int NOT NULL DEFAULT '0',
  `isGear` tinyint NOT NULL DEFAULT '0',
  `serviceDate` date NOT NULL,
  `cycCondition` varchar(10) NOT NULL,
  `serviceID` int DEFAULT NULL,
  PRIMARY KEY (`cycleID`),
  KEY `servID_idx` (`serviceID`),
  CONSTRAINT `servID` FOREIGN KEY (`serviceID`) REFERENCES `service` (`serviceID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4014 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cycle`
--

LOCK TABLES `cycle` WRITE;
/*!40000 ALTER TABLE `cycle` DISABLE KEYS */;
INSERT INTO `cycle` VALUES (4002,56,0,'2023-01-15','Poor',5001),(4003,65,1,'2023-01-05','Moderate',5002),(4004,67,0,'2023-01-15','Good',5004),(4005,70,0,'2023-01-07','Good',NULL),(4008,60,1,'2023-01-01','Poor',NULL),(4009,55,0,'2023-01-29','Moderate',NULL),(4010,30,1,'2023-01-22','Good',NULL),(4011,0,1,'2023-01-11','Good',NULL),(4012,0,1,'2023-01-11','Moderate',NULL),(4013,0,0,'2023-01-12','Moderate',NULL);
/*!40000 ALTER TABLE `cycle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `empID` int NOT NULL AUTO_INCREMENT,
  `empName` varchar(45) NOT NULL,
  `empAddress` varchar(150) NOT NULL,
  `dob` date NOT NULL,
  `stnID` int DEFAULT NULL,
  `servID` int DEFAULT NULL,
  PRIMARY KEY (`empID`),
  KEY `stnID_idx` (`stnID`),
  KEY `servIDemp_idx` (`servID`),
  CONSTRAINT `servIDemp` FOREIGN KEY (`servID`) REFERENCES `service` (`serviceID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `stnID` FOREIGN KEY (`stnID`) REFERENCES `station` (`stnID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2017 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (2000,'Rajaram','Jayanagar','2001-06-08',1001,NULL),(2002,'Rajeev','Vijayanagara','1991-08-05',1002,5004),(2003,'Rajaram','Hinkal','2001-08-05',1015,NULL),(2005,'Viraj','Vijayanagar','1983-10-10',1005,NULL),(2006,'Manu','Hinkal','2002-10-10',1016,NULL),(2007,'Rajkumar','N R Mohalla','2000-08-10',1007,NULL),(2008,'Yashas','Siddhartha Layout','2002-12-21',1008,NULL),(2009,'Nakula','Siddhartha Layout','2002-12-21',1009,NULL),(2010,'Anusha','Srirampura','2001-08-15',1010,NULL),(2011,'Harshitha','Kuvempunagar','2000-09-15',1011,NULL),(2012,'Raashi','Agrahara','2001-09-15',1012,NULL),(2013,'Prajwal','Hebbal','2002-09-29',NULL,5002),(2014,'Sundeep','Hebbal','2002-12-29',1023,5001),(2016,'Surya','Naidunagar','2002-02-06',1018,NULL);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `serviceID` int NOT NULL AUTO_INCREMENT,
  `empID` int NOT NULL,
  `dueDate` date NOT NULL,
  `sparePartsCount` int NOT NULL,
  `cycID` int NOT NULL,
  PRIMARY KEY (`serviceID`),
  KEY `servempID_idx` (`empID`),
  KEY `servcycID_idx` (`cycID`),
  CONSTRAINT `servcycID` FOREIGN KEY (`cycID`) REFERENCES `cycle` (`cycleID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `servempID` FOREIGN KEY (`empID`) REFERENCES `employee` (`empID`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (5001,2014,'2023-01-10',4,4002),(5002,2013,'2023-01-11',5,4003),(5004,2002,'2023-01-13',2,4004);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`dbproject`@`localhost`*/ /*!50003 TRIGGER `servID_insertcyc` AFTER INSERT ON `service` FOR EACH ROW update cycle
set cycle.serviceID=new.serviceID
where cycle.cycleID=new.cycID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`dbproject`@`localhost`*/ /*!50003 TRIGGER `servID_insert` AFTER INSERT ON `service` FOR EACH ROW update employee
set employee.servID=new.serviceID	
where employee.empID=new.empID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `station`
--

DROP TABLE IF EXISTS `station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `station` (
  `stnID` int NOT NULL AUTO_INCREMENT,
  `stnName` varchar(45) NOT NULL,
  `stnAddress` varchar(45) NOT NULL,
  `cycCapacity` int NOT NULL,
  `empID` int NOT NULL,
  PRIMARY KEY (`stnID`),
  UNIQUE KEY `empID_UNIQUE` (`empID`),
  KEY `empID_idx` (`empID`),
  CONSTRAINT `empID` FOREIGN KEY (`empID`) REFERENCES `employee` (`empID`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1031 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `station`
--

LOCK TABLES `station` WRITE;
/*!40000 ALTER TABLE `station` DISABLE KEYS */;
INSERT INTO `station` VALUES (1001,'Agrahara','Agrahara Circle',20,2000),(1002,'Ring Road','Hinkal',20,2002),(1005,'Ring Road 3','Bogadi Junction',10,2005),(1007,'Palace 1','K R Circle',20,2007),(1008,'Palace 2','Hardinge Circle',20,2008),(1009,'Palace 3','JSS Circle',20,2009),(1010,'Chamundi Hill 1','Chamundi Temple',20,2010),(1011,'Chamundi Hill 2','Chamundi Hill foothills',20,2011),(1012,'Ring Road 2','Dattagalli',10,2012),(1015,'JSSSTU','JSS TI Campus',10,2003),(1016,'Ring road 4 ','JP Nagar',15,2006),(1018,'Vijayanagar','K D Circle',10,2016),(1023,'JLB Road','Metropole Circle',12,2014);
/*!40000 ALTER TABLE `station` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`dbproject`@`localhost`*/ /*!50003 TRIGGER `stnID_insert` AFTER INSERT ON `station` FOR EACH ROW update employee
set employee.stnID=new.stnID
where employee.empID=new.empID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`dbproject`@`localhost`*/ /*!50003 TRIGGER `stnID_update` AFTER UPDATE ON `station` FOR EACH ROW update employee
set employee.stnID=new.stnID
where employee.empID=new.empID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!50001 DROP VIEW IF EXISTS `stations`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `stations` AS SELECT 
 1 AS `stnName`,
 1 AS `stnAddress`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tripdetails`
--

DROP TABLE IF EXISTS `tripdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tripdetails` (
  `tripID` int NOT NULL AUTO_INCREMENT,
  `custID` int NOT NULL,
  `cycID` int NOT NULL,
  `stnID_start` int NOT NULL,
  `stnID_end` int NOT NULL,
  `distTravelled` int NOT NULL,
  `beginTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  PRIMARY KEY (`tripID`),
  KEY `customerID_idx` (`custID`),
  KEY `startstation_idx` (`stnID_start`),
  KEY `endstation_idx` (`stnID_end`),
  KEY `cycID_idx` (`cycID`),
  CONSTRAINT `customerID` FOREIGN KEY (`custID`) REFERENCES `customer` (`custID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cycID` FOREIGN KEY (`cycID`) REFERENCES `cycle` (`cycleID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `endstation` FOREIGN KEY (`stnID_end`) REFERENCES `station` (`stnID`) ON UPDATE CASCADE,
  CONSTRAINT `startstation` FOREIGN KEY (`stnID_start`) REFERENCES `station` (`stnID`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6013 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tripdetails`
--

LOCK TABLES `tripdetails` WRITE;
/*!40000 ALTER TABLE `tripdetails` DISABLE KEYS */;
INSERT INTO `tripdetails` VALUES (6001,3011,4002,1001,1005,14,'2023-01-10 13:10:00','2023-01-10 14:11:00'),(6006,3012,4008,1008,1011,5,'2023-01-03 20:11:21','2023-01-03 21:15:21'),(6007,3011,4005,1011,1009,12,'2023-01-12 06:15:00','2023-01-12 07:16:00'),(6008,3013,4005,1012,1015,3,'2023-01-10 06:15:00','2023-01-10 07:16:00');
/*!40000 ALTER TABLE `tripdetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`dbproject`@`localhost`*/ /*!50003 TRIGGER `tr_insert1_tripdata` BEFORE INSERT ON `tripdetails` FOR EACH ROW begin 
	declare gear int;
    declare sub varchar(10);
    select isGear into gear from cycle where cycle.cycleID=NEW.cycID;
    select subscriptionType into sub from customer where customer.custID=NEW.custID;
	if sub="Basic" AND gear=1 then
		signal sqlstate '45000' set message_text='Basic customer cant ride gear cycle';
    end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`dbproject`@`localhost`*/ /*!50003 TRIGGER `trip_cycle` AFTER INSERT ON `tripdetails` FOR EACH ROW update cycle
set cycle.distTravelled=cycle.distTravelled+new.distTravelled
where cycle.cycleID=new.cycID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`dbproject`@`localhost`*/ /*!50003 TRIGGER `trip_customer` AFTER INSERT ON `tripdetails` FOR EACH ROW update customer
set customer.distCycled=customer.distCycled+new.distTravelled
where customer.custID=new.custID */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `customerview`
--

/*!50001 DROP VIEW IF EXISTS `customerview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`dbproject`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `customerview` AS select `customer`.`custName` AS `custName`,`customer`.`subscribedUpto` AS `subscribedUpto`,`customer`.`distCycled` AS `distCycled` from `customer` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `stations`
--

/*!50001 DROP VIEW IF EXISTS `stations`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`dbproject`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `stations` AS select `station`.`stnName` AS `stnName`,`station`.`stnAddress` AS `stnAddress` from `station` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-22 17:19:23
