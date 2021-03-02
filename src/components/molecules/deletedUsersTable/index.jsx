import { useState } from "react";
import { Col, Row, Avatar, Switch } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

const AllUsersTable = () => {
  const [banSwitch, setBanSwitch] = useState(false);
  const [restoreSwitch, setRestoreSwitch] = useState(false);
  return (
    <Col className="deletedUser-Table px-3 py-5 rounded-lg">
      <Row className="w-full py-2">
        {/* image and name */}
        <Col className="flex w-4/12 items-center">
          <Col>
            <Avatar size={50} icon={<UserOutlined />} />
          </Col>
          <Col>
            <h1 className="blueColor px-2 text-font">Rainbow</h1>
          </Col>
        </Col>
        {/* text and switch */}
        <Col
          className={`flex w-3/12 items-center ${
            banSwitch ? "active-switch" : "banned-switch"
          }`}
        >
          <Col>
            <h1 className="text-font text-gray-400">Remove Ban</h1>
          </Col>
          <Col className="px-5">
            <Switch
              onChange={(event) => {
                setBanSwitch(event);
              }}
            />
          </Col>
        </Col>
        {/* text and switch */}
        <Col
          className={`flex w-3/12 items-center ${
            restoreSwitch ? "active-restore-switch" : "restore-switch"
          }`}
        >
          <Col>
            <h1 className="text-font text-gray-400">Restore</h1>
          </Col>
          <Col className="px-5">
            <Switch
              onChange={(event) => {
                setRestoreSwitch(event);
              }}
            />
          </Col>
        </Col>
        {/* link */}
        <Col className="flex w-2/12 items-center">
          <Col className="w-full">
            <h1 className="text-font text-blue-300 text-right">See Uploads</h1>
          </Col>
        </Col>
      </Row>
    </Col>
  );
};
export default AllUsersTable;
