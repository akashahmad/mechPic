import { Col } from "antd";
import ImageApproval from "../components/templates/imageApproval";
import { withRouter } from "react-router-dom";

const ImageApprovalPage = () => {
  return (
    <Col>
      <ImageApproval />
    </Col>
  );
};
export default withRouter(ImageApprovalPage);
