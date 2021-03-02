import { Col } from "antd";
import TableHeader from "../molecules/tableHeader";
import TableBody from "../molecules/deletedUsersTable";

const AllUsers = () => {
  return (
    <Col>
      <Col>
        <TableHeader heading1={"Deleted Users"} heading2={"Pause All Uploads"} />
      </Col>
      <Col className="py-5">
        <TableBody />
      </Col>
    </Col>
  );
};
export default AllUsers;
