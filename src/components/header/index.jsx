import { Layout, Col, Input, Row, Avatar, Menu, Dropdown } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import Logo from "../atoms/logo";
import "./style.css";
const { Header } = Layout;
const { Search } = Input;
const PageHeader = () => {
  const onSearch = () => {};
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">1st menu item</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header>
      <Row className="items-center mt-4">
        <Col xs={8} sm={8} md={8} lg={8} xlg={8}>
          <Logo />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xlg={8}>
          <Search
            prefix={<SearchOutlined />}
            placeholder="search"
            allowClear
            onSearch={onSearch}
          />
        </Col>
        <Col
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xlg={8}
          className="text-center flex justify-center items-center"
        >
          <Avatar size={50} icon={<UserOutlined />} />
          <Dropdown overlay={menu}>
            <p
              className="ant-dropdown-link cursor-pointer px-2 clr-darkblue"
              href="#"
            >
              Joe Doe <CaretDownOutlined />
            </p>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default PageHeader;
