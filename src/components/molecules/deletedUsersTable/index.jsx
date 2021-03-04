import { useState } from "react";
import { Col, Row, Avatar, Switch } from "antd";
import { UserOutlined, EyeFilled } from "@ant-design/icons";
import "./style.css";

const AllUsersTable = () => {
  const [banSwitch, setBanSwitch] = useState(false);
  const [restoreSwitch, setRestoreSwitch] = useState(false);
  return (
    <Col className="deletedUser-Table px-2 lg:px-7 xl:px-7 py-1 rounded-lg">
      {/* table header */}
      <Row className="w-full py-2 lg:hidden xl:hidden">
        {/* image and name */}
        <Col className="flex w-6/12 lg:w-4/12 xl:w-4/12 items-center">
          <Col>
            <h1 className="text-gray-400 px-2 text-font">User Name</h1>
          </Col>
        </Col>
        {/* heading 2 */}
        <Col className="flex w-2/12 lg:w-3/12 xl:w-3/12 items-center ">
          <Col>
            <h1 className="text-font text-gray-400">Ban</h1>
          </Col>
        </Col>
        {/* heading 3 */}
        <Col className="flex w-2/12 lg:w-3/12 xl:w-3/12 items-center">
          <Col>
            <h1 className="text-font text-gray-400 pr-1 lg:pr-0 xl:pr-0">
              Restore
            </h1>
          </Col>
        </Col>
        {/* link */}
        <Col className="flex w-2/12 lg:w-2/12 xl:w-2/12 items-center">
          <Col className="w-full">
            <h1 className="text-font text-gray-400 text-right">Uploads</h1>
          </Col>
        </Col>
      </Row>
      {/* table body */}
      <Row className="w-full py-2">
        {/* image and name */}
        <Col className="flex w-6/12 lg:w-4/12 xl:w-4/12 items-center">
          <Col>
            <Avatar size={50} icon={<UserOutlined />} />
          </Col>
          <Col>
            <h1 className="blueColor px-2 text-font">Rainbow</h1>
          </Col>
        </Col>
        {/* text and switch */}
        <Col
          className={`flex w-2/12 lg:w-3/12 xl:w-3/12 items-center ${
            banSwitch ? "active-switch" : "banned-switch"
          }`}
        >
          <Col className="hidden lg:block xl:block">
            <h1 className="text-font text-gray-400">Remove Ban</h1>
          </Col>
          <Col className="lg:px-5 xl:px-5">
            <Switch
              onChange={(event) => {
                setBanSwitch(event);
              }}
            />
          </Col>
        </Col>
        {/* text and switch */}
        <Col
          className={`flex w-2/12 lg:w-3/12 xl:w-3/12 items-center ${
            restoreSwitch ? "active-restore-switch" : "restore-switch"
          }`}
        >
          <Col className="hidden lg:block xl:block">
            <h1 className="text-font text-gray-400 ">Restore</h1>
          </Col>
          <Col className="lg:px-5 xl:px-5">
            <Switch
              onChange={(event) => {
                setRestoreSwitch(event);
              }}
            />
          </Col>
        </Col>
        {/* link */}
        <Col className="flex w-2/12 lg:w-2/12 xl:w-2/12 items-center">
          {/* desktop link heading */}
          <Col className="w-full hidden lg:block xl:block">
            <h1 className="text-font text-blue-300 text-right">See Uploads</h1>
          </Col>
          {/* mobile screen icon */}
          <Col className="w-full text-right pr-3 block lg:hidden xl:hidden">
            <EyeFilled className="text-2xl text-blue-300 cursor-pointer hover:text-blue-500" />
          </Col>
        </Col>
      </Row>
    </Col>
  );
};
export default AllUsersTable;
