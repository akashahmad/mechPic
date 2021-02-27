import { Row, Col } from "antd";

const homeTemplate = (props) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={8} xlg={8}>
        {props.children}
      </Col>
    </Row>
  );
};

export default homeTemplate;
