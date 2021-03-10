import { withRouter } from "react-router-dom";
import { Col } from "antd";
import TableHeader from "../molecules/tableHeader";
import TableBody from "../molecules/imagesApproval";
import MobileNavigation from "../molecules/mobileNavigation";

const ImageApprovalTemplate = () => {
  return (
    <Col>
      {/* header  */}
      <Col>
        <TableHeader
          heading1={"Images waiting Approval"}
          heading2={"Pause All Uploads"}
        />
      </Col>
      {/* mobile navigation  */}
      <Col className="block lg:hidden xl:hidden">
        <MobileNavigation />
      </Col>
      {/* table */}
      <Col className="py-5">
        <TableBody />
      </Col>
    </Col>
  );
};
export default withRouter(ImageApprovalTemplate);
