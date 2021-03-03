import { Col, Row } from "antd";

const Footer = () => {
  return (
    <Row className="flex justify-center py-4">
      {/* Terms of User */}
      <Col className="px-8">
        <h3 className="text-gray-400 font-medium">Terms of User</h3>
      </Col>
      {/* line */}
      <Col className="border border-gray-300"></Col>
      {/* Privacy Policy */}
      <Col className="px-8">
        <h3 className="text-gray-400 font-medium">Privacy Policy</h3>
      </Col>
      {/* line */}
      <Col className="border border-gray-300"></Col>
      {/* Report Abuse */}
      <Col className="px-8">
        <h3 className="text-gray-400 font-medium">Report Abuse</h3>
      </Col>
    </Row>
  );
};
export default Footer;
