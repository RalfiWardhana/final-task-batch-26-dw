-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2021 at 03:57 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `collections_tb`
--

CREATE TABLE `collections_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `collections_tb`
--

INSERT INTO `collections_tb` (`id`, `name`, `user_id`) VALUES
(2, 'Work', 'Ralfi'),
(8, 'Personal', 'Ralfi'),
(13, 'Hobbies', 'Clarrence'),
(14, 'Eat', 'Clarrence'),
(15, 'Drink', 'Clarrence'),
(16, 'Game', 'Ralfi'),
(17, 'school', 'rara');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `collections_tb`
--
ALTER TABLE `collections_tb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collections_tb`
--
ALTER TABLE `collections_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `collections_tb`
--
ALTER TABLE `collections_tb`
  ADD CONSTRAINT `collections_tb_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_tb` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
