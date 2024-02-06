// Header.js
import React from 'react';
import { Layout, Input, Avatar } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
// import Logo from '../assets/logo.png';
import './NavBar.scss';

const { Header } = Layout;
const { Search } = Input;

const NavBar = () => {
  return (
    <Header className="header">
      <div className="logo">
        {/* <img src={Logo} alt="Company Logo" /> */}
      </div>
      <div className="search">
        <Search placeholder="Search..." prefix={<SearchOutlined />} />
      </div>
      <div className="icons">
        <BellOutlined className="icon" />
        <Avatar className="avatar" size="small" />
      </div>
    </Header>
  );
};

export default NavBar;
