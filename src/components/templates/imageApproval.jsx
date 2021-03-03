import { withRouter } from "react-router-dom";
import { Col } from "antd";
import TableHeader from "../molecules/tableHeader";
import TableBody from "../molecules/imagesApproval";
import ImageApprovalHeader from "../molecules/imagesApprovalHeader";

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
        <ImageApprovalHeader />
      </Col>
      {/* table */}
      <Col className="py-5">
        <TableBody />
      </Col>
    </Col>
  );
};
export default withRouter(ImageApprovalTemplate);
