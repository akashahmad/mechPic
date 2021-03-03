import { withRouter } from "react-router-dom";
import { Col, Row, Avatar } from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";

const ImagesApprovalHeader = (props) => {
  let { history } = props;
  return (
    <Row className="w-12/12 flex justify-between">
      {/* left side */}
      <Col
        className="flex items-center"
        onClick={() => {
          history.push("/");
        }}
      >
        <ArrowLeftOutlined className="text-blue-300 text-1xl" />
        <h3 className="cursor-pointer px-3 font-bold text-blue-300 text-1xl">
          Back
        </h3>
      </Col>
      {/* right side */}
      <Row className="flex items-center">
        <Avatar size={30} icon={<UserOutlined />} />
        <h3 className="ant-dropdown-link cursor-pointer px-2 font-bold clr-darkblue">
          Blaziken
        </h3>
      </Row>
    </Row>
  );
};
export default withRouter(ImagesApprovalHeader);
