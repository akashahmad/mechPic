import { Row, Col, Switch } from "antd";
import { useState } from "react";
import Heading from "../../atoms/tableHeading";
import "./style.css";

interface TableHeaderProps {
  heading1: String;
  heading2: String;
}

const TableHeader = ({ heading1, heading2 }: TableHeaderProps) => {
  // let { heading1, heading2 } = props;
  const [pauseSwitch, setPauseSwitch] = useState(false);
  return (
    <Row className="lg:flex-row xl:flex-row lg:justify-between xl:justify-between tableHeader py-4">
      {/* heading */}
      <Col className="flex items-center hidden lg:block xl:block lg:w-6/12 xl:w-6/12">
        <Heading heading={heading1} />
      </Col>
      {/* heading and Switch */}
      <Col
        className={`flex items-center justify-between lg:justify-end xl:justify-end w-full lg:w-6/12 xl:w-6/12 ${
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
      </Col>
    </Row>
  );
};

export default TableHeader;
