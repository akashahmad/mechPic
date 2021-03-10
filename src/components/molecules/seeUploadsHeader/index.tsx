import { Row, Col, Switch, Avatar } from "antd";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import Heading from "../../atoms/tableHeading";
import "./style.css";

const SeeUploadsHeader = (props: any) => {
  let { heading2, history } = props;
  const [pauseSwitch, setPauseSwitch] = useState(false);
  return (
    <Row className="flex-col flex-col-reverse  lg:flex-row xl:flex-row lg:justify-between xl:justify-between seeUploadHeader py-4">
      {/* heading */}
      <Row
        className="w-12/12 lg:w-5/12 xl:w-5/12 flex items-center justify-between lg:justify-start xl:justify-start pt-8 lg:pt-0 xl:pt-0 "
        onClick={() => {
          history.goBack();
        }}
      >
        <Col className="flex items-center">
          <ArrowLeftOutlined className="text-blue-300 text-1xl" />
          <h3 className="cursor-pointer px-3 font-bold text-blue-300 text-1xl">
            Back
          </h3>
        </Col>
        <Col className="flex items-center px-3">
          <Avatar size={30} icon={<UserOutlined />} />
          <h3 className="ant-dropdown-link cursor-pointer px-2 font-bold clr-darkblue">
            Blaziken
          </h3>
        </Col>
      </Row>
      {/* heading and Switch */}
      <Row
        className={`flex items-center justify-between lg:justify-end xl:justify-end w-full lg:w-7/12 xl:w-7/12 ${
          pauseSwitch ? "active-switch" : "title-and-switch"
        }`}
      >
        <Col>
          <Heading heading={heading2} />
        </Col>
        <Col className="pl-5">
          <Switch
            onChange={(event) => {
              setPauseSwitch(event);
            }}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default withRouter(SeeUploadsHeader);
