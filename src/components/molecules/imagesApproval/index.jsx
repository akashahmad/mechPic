import { useState } from "react";
import { Col, Row, Switch, Avatar, Menu, Dropdown } from "antd";
import {
  DeleteFilled,
  CaretDownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import BikeImage from "../../../assets/images/bike.png";
import "./style.css";

const menu = (
  <Menu>
    <Menu.Item>
      <h1>Blaziken</h1>
    </Menu.Item>
  </Menu>
);

const AllUsersTable = () => {
  const [banSwitch, setBanSwitch] = useState(false);
  return (
    <Col className="imageApproval-component px-2 lg:px-5 xl:px-5 py-5 rounded-lg">
      <Row className="w-full py-2 flex">
        {/* left-side section */}
        <Col className="w-2/12">
          <img src={BikeImage} alt="" />
        </Col>
        {/* right-side section */}
        <Col className="w-10/12 flex flex-col lg:flex-row xl:flex-row lg:py-2 xl:py-2 ">
          {/* left side */}
          {/* headings and tags */}
          <Col className="flex w-12/12 lg:w-4/12 xl:w-4/12 px-1">
            <Col className="w-full">
              {/* title */}
              <Col>
                <h1 className="px-2 text-font">Watch and Learn Tik Tokers</h1>
              </Col>
              {/* tags */}
              <Col>
                <h1 className="text-blue-300 px-2 py-2 text-font">
                  #dirtbike #biking #dirtracing #motorsports
                </h1>
              </Col>
              <Col className="hidden lg:block xl:block dropDown">
                <Row className="flex items-center px-2 pt-3">
                  <Avatar size={30} icon={<UserOutlined />} />
                  <Dropdown overlay={menu}>
                    <h3 className="ant-dropdown-link cursor-pointer px-2 font-bold clr-darkblue">
                      Blaziken <CaretDownOutlined />
                    </h3>
                  </Dropdown>
                </Row>
              </Col>
            </Col>
          </Col>
          {/* right side */}
          <Col className="w-12/12 lg:w-8/12 xl:w-8/12 flex justify-end">
            <Row className="w-12/12 flex flex justify-end">
              {/* text and switch */}
              <Col
                className={`flex px-5 ${
                  banSwitch ? "active-switch" : "banned-switch"
                }`}
              >
                <Col>
                  <h1 className="text-font text-gray-400 px-3">
                    Approve Image
                  </h1>
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
              <Col className="flex delete-button">
                <Row className=" flex">
                  <h1 className="text-font text-gray-400 hidden lg:block xl:block">
                    Deleted Uploads
                  </h1>
                  <DeleteFilled className="text-2xl text-gray-400 cursor-pointer hover:text-gray-600 pl-2 lg:pl-5 xl:pl-5 " />
                </Row>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Col>
  );
};
export default AllUsersTable;
