import { Col } from 'antd';
import DeletedUsers from '../components/templates/deletedUsers';
import { withRouter } from 'react-router-dom';

const DeletedUsersPage = () => {
    return (
        <Col>
            <DeletedUsers />
        </Col>
    );
};
export default withRouter(DeletedUsersPage);
