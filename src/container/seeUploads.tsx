import { Col } from 'antd';
import SeeUploadsComponent from '../components/templates/seeUploads';
import { withRouter } from 'react-router-dom';

const seeUploadsPage = () => {
    return (
        <Col>
            <SeeUploadsComponent />
        </Col>
    );
};
export default withRouter(seeUploadsPage);
