import { Col, Row, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Logo from "../atoms/logo";
import "./style.css";
const MobileHeader = () => {
  //   const onSearch = () => {};
  return (
    <Row className="items-center m-4">
      <Col xs={8} sm={8} md={8} lg={8} xlg={8}>
        <img className="h-6 w-6" src="assets/hamburger.png" alt="hamburger" />
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
