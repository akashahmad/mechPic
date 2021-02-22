import { Row, Col } from "antd";
const LoginTemplates = (props) => {
  return (
    <Row className="justify-center">
      <Col xs={24} sm={24} md={24} lg={8} xlg={8}>
        {props.children}
      </Col>
    </Row>
  );
};

export default LoginTemplates;
