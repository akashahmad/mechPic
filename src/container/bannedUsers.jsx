import { Col } from "antd";
import BannedUsers from "../components/templates/bannedUsers";
import { withRouter } from "react-router-dom";

const BannedUsersPage = () => {
  return (
    <Col>
      <BannedUsers />
    </Col>
  );
};
export default withRouter(BannedUsersPage);
