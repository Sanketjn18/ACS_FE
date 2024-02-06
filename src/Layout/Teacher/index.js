import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";

const Teacherlayout = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <NavBar />
        <Layout>
          <SideBar />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default Teacherlayout;
