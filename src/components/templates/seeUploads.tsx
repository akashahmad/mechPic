import { withRouter } from 'react-router-dom';
import { Col } from 'antd';
import TableHeader from '../molecules/seeUploadsHeader';
import TableBody from '../molecules/seeUploads';
// import MobileNavigation from "../molecules/mobileNavigation";
// import ImageApprovalHeader from "../molecules/imagesApprovalHeader";

const seeUploads = () => {
    return (
        <Col>
            {/* header  */}
            <Col>
                <TableHeader
                // heading2="Pause All Uploads"
                />
            </Col>
            {/* table */}
            <Col className="py-5">
                <TableBody />
            </Col>
        </Col>
    );
};
export default withRouter(seeUploads);
