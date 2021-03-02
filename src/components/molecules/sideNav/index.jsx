import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";
import Heading from "../../atoms/sideNavHeading";
import EditIcon from "../../../assets/images/edit.png";
import "./style.css";

const SideNav = (props) => {
  let { history } = props;
  console.log("history", history);
  return (
    <Col className="w-12/12 px-2 sideNav-component">
      {/* link 1 All Users */}
      <Row className="pb-8">
        <Col>
          {/* <Heading heading="All Users" /> */}
          <Button
            type="primary"
            className="bg-clr-darkblue text-xl rounded-full w-full flex items-center"
          >
            <img src={EditIcon} alt="edit-button" />
            <span className="px-5">Upload</span>
          </Button>
        </Col>
      </Row>
      {/* link 1 All Users */}
      <Row className="py-2 w-6/12 lg:w-10/12 xl:w-10/12">
        <Col
          className={`${
            history?.location?.pathname === "/"
              ? " active-backgroundColor"
              : "unactive-backgroundColor"
          } cursor-pointer px-10 py-4 rounded-full w-full`}
          onClick={() => history.push("/")}
        >
          <Heading heading="All Users" />
        </Col>
      </Row>
      {/* link 2 Banned Users */}
      <Row className="py-2 w-6/12 lg:w-10/12 xl:w-10/12">
        <Col
          className={`${
            history?.location?.pathname === "/banned-users"
              ? " active-backgroundColor"
              : "unactive-backgroundColor"
          } cursor-pointer px-10 py-4 rounded-full w-full`}
          onClick={() => history.push("/banned-users")}
        >
          <Heading heading="Banned Users" />
        </Col>
      </Row>
      {/* link 3 Deleted Users */}
      <Row className="py-2 w-6/12 lg:w-10/12 xl:w-10/12">
        <Col
          className={` ${
            history?.location?.pathname === "/deleted-users"
              ? " active-backgroundColor"
              : "unactive-backgroundColor"
          } cursor-pointer px-10 py-4 rounded-full w-full`}
          onClick={() => history.push("/deleted-users")}
        >
          <Heading heading="Deleted Users" />
        </Col>
      </Row>
      {/* link 4 Images Pending Approval */}
      <Row className="py-2 w-6/12 lg:w-10/12 xl:w-10/12">
        <Col className="unactive-backgroundColor cursor-pointer px-10 py-4 rounded-full w-full">
          <Heading heading="Images Pending Approval" />
        </Col>
      </Row>
    </Col>
  );
};
export default withRouter(SideNav);
