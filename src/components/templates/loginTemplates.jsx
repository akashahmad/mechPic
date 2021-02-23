import { Row, Col } from "antd";
const LoginTemplates = (props) => {
  return (
    <Row className="justify-center">
      <Col xs={22} sm={22} md={22} lg={8} xlg={8}>
        {props.children}
      </Col>
    </Row>
  );
};

export default LoginTemplates;
