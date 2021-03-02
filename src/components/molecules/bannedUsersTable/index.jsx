import { useState } from "react";
import { Col, Row, Avatar, Switch } from "antd";
import { UserOutlined, DeleteFilled } from "@ant-design/icons";
import "./style.css";

const AllUsersTable = () => {
  const [banSwitch, setBanSwitch] = useState(false);
  return (
    <Col className="bannedUser-Table px-3 py-5 rounded-lg">
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
        <Col className="flex w-3/12 items-center">
          <Col>
            <h1 className="text-font text-gray-400">Deleted Uploads</h1>
          </Col>
          <Col className="px-5 pb-2">
            <DeleteFilled className="text-3xl text-gray-400 cursor-pointer hover:text-gray-600" />
            {/* <Switch /> */}
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
