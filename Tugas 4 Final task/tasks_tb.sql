-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2021 at 03:56 PM
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
-- Table structure for table `tasks_tb`
--

CREATE TABLE `tasks_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_done` varchar(50) NOT NULL,
  `collections_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks_tb`
--

INSERT INTO `tasks_tb` (`id`, `name`, `is_done`, `collections_id`) VALUES
(5, 'Justice League', 'green', 'Game'),
(6, 'Interstellar', 'green', 'Game'),
(7, 'Pikachu', 'green', 'Game'),
(8, 'Residence Evil', 'green', 'Game'),
(9, 'CTR', 'white', 'Game'),
(10, 'GTA V', 'white', 'Game'),
(15, 'Wake Up', 'green', 'Personal'),
(16, 'Take a Bath', 'green', 'Personal'),
(17, 'Breakfast', 'green', 'Personal'),
(18, 'Go to Work', 'white', 'Personal'),
(19, 'Junk Food', 'green', 'Eat'),
(20, 'Gado-Gado', 'green', 'Eat'),
(21, 'Ketoprak', 'white', 'Eat'),
(22, 'Nasi Goreng', 'white', 'Eat'),
(23, 'Muaythai', 'green', 'Hobbies'),
(24, 'MMA', 'green', 'Hobbies'),
(25, 'Swimming', 'white', 'Hobbies'),
(26, 'Cooking', 'white', 'Hobbies'),
(27, 'Orange Juice', 'white', 'Drink'),
(28, 'Coca Cola', 'white', 'Drink'),
(29, 'Pepsi', 'green', 'Drink'),
(30, 'Review Content', 'green', 'Drink'),
(31, '', 'white', 'Drink'),
(32, 'Input Data', 'green', 'Work'),
(34, 'Research Content', 'green', 'Work'),
(35, 'Review Content', 'white', 'Work'),
(36, 'Go Home', 'white', 'Personal'),
(37, 'Bachelor Dergree', 'white', 'school');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks_tb`
--
ALTER TABLE `tasks_tb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `collections_id` (`collections_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks_tb`
--
ALTER TABLE `tasks_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks_tb`
--
ALTER TABLE `tasks_tb`
  ADD CONSTRAINT `tasks_tb_ibfk_1` FOREIGN KEY (`collections_id`) REFERENCES `collections_tb` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
