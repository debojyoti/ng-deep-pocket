-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2018 at 11:13 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `deep_pocket`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_legend`
--

CREATE TABLE `account_legend` (
  `type` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bank_accounts_details`
--

CREATE TABLE `bank_accounts_details` (
  `pid` int(11) NOT NULL,
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `acc_no` int(11) NOT NULL,
  `holder_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `credit_logs`
--

CREATE TABLE `credit_logs` (
  `pid` int(11) NOT NULL,
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `amount` float NOT NULL,
  `to_acc` varchar(64) NOT NULL,
  `reason` text NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `debit_logs`
--

CREATE TABLE `debit_logs` (
  `pid` int(11) NOT NULL,
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `amount` float NOT NULL,
  `from_acc` varchar(64) NOT NULL,
  `reason` text NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `normal_accounts`
--

CREATE TABLE `normal_accounts` (
  `pid` int(11) NOT NULL,
  `id` varchar(64) NOT NULL DEFAULT '',
  `user_id` varchar(64) NOT NULL,
  `type` int(32) NOT NULL,
  `current_balance` float DEFAULT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `pid` int(11) NOT NULL,
  `id` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `otp` varchar(8) DEFAULT NULL,
  `date_of_opening` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`pid`, `id`, `email`, `name`, `password`, `otp`, `date_of_opening`) VALUES
(1, '5e7b1a3d3389f4eb41c1eeec6d5b3efa', 'dsahapersonal@gmail.com', 'Debojyoti Saha', '9609146312', NULL, '2018-07-18 18:08:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_legend`
--
ALTER TABLE `account_legend`
  ADD PRIMARY KEY (`type`);

--
-- Indexes for table `bank_accounts_details`
--
ALTER TABLE `bank_accounts_details`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `credit_logs`
--
ALTER TABLE `credit_logs`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `debit_logs`
--
ALTER TABLE `debit_logs`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `normal_accounts`
--
ALTER TABLE `normal_accounts`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_legend`
--
ALTER TABLE `account_legend`
  MODIFY `type` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bank_accounts_details`
--
ALTER TABLE `bank_accounts_details`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `credit_logs`
--
ALTER TABLE `credit_logs`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `debit_logs`
--
ALTER TABLE `debit_logs`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `normal_accounts`
--
ALTER TABLE `normal_accounts`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
