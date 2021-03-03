import { Col } from "antd";
import { withRouter } from "react-router-dom";
import AllUsers from "../components/templates/allUsers";

const AllUsersPage = () => {
  return (
    <Col>
      <AllUsers />
    </Col>
  );
};
export default withRouter(AllUsersPage);
