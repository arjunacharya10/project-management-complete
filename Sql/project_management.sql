-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 04, 2019 at 01:48 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `bugs`
--

CREATE TABLE `bugs` (
  `bugtitle` text NOT NULL,
  `bugtext` text NOT NULL,
  `bugstatus` varchar(30) DEFAULT NULL,
  `bugid` int(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bugs`
--

INSERT INTO `bugs` (`bugtitle`, `bugtext`, `bugstatus`, `bugid`) VALUES
('Arjun', 'khudsaf', 'done', 1),
('Arjun', 'khudsaf', 'done', 2),
('Arjun', 'khudsaf', 'done', 3),
('Arjun', 'khudsaf', 'done', 4),
('Arjun', 'khudsaf', 'done', 5),
('Arjun', 'khudsaf', 'done', 6),
('Arjun', 'khudsaf', 'done', 7),
('Arjun', 'khudsaf', 'done', 8),
('Abhinav', 'college', 'done', 9),
('amber', 'waste fellow', 'done', 10),
('Akshay', 'waste body', 'not done', 11),
('testing failed', 'main menu not working', 'not done', 12),
('Random', 'asdf', '', 13),
('New bug', 'kasdgfkasjdf dasjfhksjafdh  jsfdahs dkfj asdf', '', 14),
('New bug', 'kasdgfkasjdf dasjfhksjafdh  jsfdahs dkfj asdf', 'not done', 15),
('New bug', 'kasdgfkasjdf dasjfhksjafdh  jsfdahs dkfj asdf', 'not done', 16),
('New bug', 'kasdgfkasjdf dasjfhksjafdh  jsfdahs dkfj asdf', 'done', 17);

-- --------------------------------------------------------

--
-- Table structure for table `mentor`
--

CREATE TABLE `mentor` (
  `mid` int(11) NOT NULL,
  `musn` varchar(255) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mentor`
--

INSERT INTO `mentor` (`mid`, `musn`, `name`, `password`, `email`) VALUES
(1, 'M123456', 'Varun', 'aksdhgaksjdhaksjdhqasd', 'aa@gmail.com'),
(2, 'M111111', 'Abhinav', 'sakfgsdoaifuagsud', 'bb@gmail.com'),
(3, 'M222222', 'Arjun', 'asasdasdakmdf', 'cc@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `pid` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL,
  `deadline` datetime NOT NULL,
  `mid` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pid`, `name`, `status`, `deadline`, `mid`) VALUES
(1, 'Project1', 'workin', '2019-03-13 00:00:00', ''),
(2, 'Project2', 'not workibng', '2019-03-16 00:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `uid` int(30) NOT NULL,
  `usn` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`uid`, `usn`, `email`, `name`, `password`) VALUES
(1, '1RV16IS009', 'arjunchangeeacharya1998@gmail.com', 'Arjun', '$2b$10$M.aLKEFxl.WdgX7j8k6tsuM5CZj7csOmORBcZD5u17cubwJhFXprW'),
(2, '1rv16is002', 'ab@gmail.com', 'Abhinav', '$2b$10$1bH.lXqJ3euFZEidxQJYYOIG9aCs0ZIoA8p5DlX9dGvoJFeXqgtzG');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `tid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `info` varchar(30) NOT NULL,
  `deadline` datetime NOT NULL,
  `state` varchar(30) NOT NULL,
  `review` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usertasks`
--

CREATE TABLE `usertasks` (
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bugs`
--
ALTER TABLE `bugs`
  ADD PRIMARY KEY (`bugid`);

--
-- Indexes for table `mentor`
--
ALTER TABLE `mentor`
  ADD PRIMARY KEY (`mid`),
  ADD UNIQUE KEY `musn` (`musn`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`pid`);
ALTER TABLE `project` ADD FULLTEXT KEY `mid` (`mid`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`tid`),
  ADD KEY `fk_pid` (`pid`);

--
-- Indexes for table `usertasks`
--
ALTER TABLE `usertasks`
  ADD KEY `fk_uid` (`uid`),
  ADD KEY `tid` (`tid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bugs`
--
ALTER TABLE `bugs`
  MODIFY `bugid` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `mentor`
--
ALTER TABLE `mentor`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `uid` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
