import { Col, Row } from "antd";
import { Route, Switch, withRouter } from "react-router-dom";
import SideNav from "./components/molecules/sideNav";
import AllUsers from "./container/allUsers";
import BannedUsers from "./container/bannedUsers";
import DeletedUsers from "./container/deletedUsers";

const Layout = () => {
  return (
    <Col>
      <Row className="sm:flex sm:flex-col md:flex-col lg:flex-row xl:flex-row py-5">
        <Col xs={24} sm={24} md={24} lg={7} xlg={7}>
          <SideNav />
        </Col>
        <Col xs={24} sm={24} md={24} lg={17} xlg={25} className="pr-8">
          <Switch>
            <Route path="/" exact component={AllUsers} />
            <Route path="/banned-users" exact component={BannedUsers} />
            <Route path="/deleted-users" exact component={DeletedUsers} />
          </Switch>
        </Col>
      </Row>
    </Col>
  );
};

export default withRouter(Layout);
