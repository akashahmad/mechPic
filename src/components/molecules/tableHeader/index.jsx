import { Row, Col, Switch } from "antd";
import { useState } from "react";
import Heading from "../../atoms/tableHeading";
import "./style.css";

const TableHeader = (props) => {
  let { heading1, heading2 } = props;
  const [pauseSwitch, setPauseSwitch] = useState(false);
  return (
    <Row className="flex justify-between tableHeader py-4">
      {/* heading */}
      <Col>
        <Heading heading={heading1} />
      </Col>
      {/* heading and Switch */}
      <Col
        className={`flex items-center ${
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
