import React from 'react';
import { Layout, Switch, Menu, Dropdown } from 'antd';
import { HomeOutlined, BarChartOutlined, SolutionOutlined } from '@ant-design/icons';
import './SideBar.scss';

const { Sider } = Layout;

const SideBar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Report 1</Menu.Item>
      <Menu.Item key="2">Report 2</Menu.Item>
    </Menu>
  );

  return (
    <Sider className="sidenav">
      {/* <div className="switches">
        <Switch defaultChecked />
        <Switch defaultChecked />
      </div> */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
        <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
        <Menu.Item key="reports" icon={<BarChartOutlined />}>Reports</Menu.Item>
        <Menu.Item key="logs" icon={<SolutionOutlined />}>Logs</Menu.Item>
        <Menu.Item key="section1" icon={<SolutionOutlined />}>
          <Dropdown overlay={menu}>
            <span>Section 1</span>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
