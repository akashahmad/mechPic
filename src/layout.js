import { Col, Row } from "antd";
import { Route, Switch, withRouter } from "react-router-dom";
import LayoutComponent from "./components/templates/layout";
import SideNav from "./components/molecules/desktopSideNavigation";
import AllUsers from "./container/allUsers";
import BannedUsers from "./container/bannedUsers";
import DeletedUsers from "./container/deletedUsers";
import ImageApproval from "./container/imageApproval";
import { getBreakPoint } from "./utils/functions";
import { Grid } from "antd";

const LayoutPage = () => {
  const { useBreakpoint } = Grid;
  const isMobile = !getBreakPoint(useBreakpoint()).includes("lg");
  return (
    <Col>
      <LayoutComponent isMobile={isMobile}>
        <Row className="sm:flex sm:flex-col md:flex-col lg:flex-row xl:flex-row py-6 lg:py-12 xl:py-12 lg:px-3 xl:px-3">
          <Col xs={24} sm={24} md={24} lg={7} xlg={7}>
            {/* desktop navigation component */}
            <Col className="hidden lg:block xl:block">
              <SideNav />
            </Col>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={17}
            xlg={25}
            className="px-2 md:px-3 lg:px-5 xl:px-5"
          >
            <Switch>
              <Route path="/" exact component={AllUsers} />
              <Route path="/banned-users" exact component={BannedUsers} />
              <Route path="/deleted-users" exact component={DeletedUsers} />
              <Route
                path="/images-pending-approval"
                exact
                component={ImageApproval}
              />
            </Switch>
          </Col>
        </Row>
      </LayoutComponent>
    </Col>
  );
};

export default withRouter(LayoutPage);
