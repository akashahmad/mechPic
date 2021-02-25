import { Col, Row, Avatar } from "antd";
import { useState } from "react";
import {
  UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from "@ant-design/icons";
import Logo from "../atoms/logo";
import "./style.css";
const MobileHeader = () => {
  //   const onSearch = () => {};
  // const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Row className="items-center m-4">
      {/* <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider> */}
      <Col xs={8} sm={8} md={8} lg={8} xlg={8}>
        <img
          className="h-6 w-6"
          src="assets/hamburger.png"
          alt="hamburger"
          onClick={() => {
            toggle();
          }}
        />
      </Col>
      <Col
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xlg={8}
        className="text-center flex justify-center"
      >
        <Logo />
      </Col>
      <Col
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xlg={8}
        className="text-center flex justify-end"
      >
        <Avatar size={40} icon={<UserOutlined />} />
      </Col>
    </Row>
  );
};

export default MobileHeader;
