import { Col } from 'antd';
import TableHeader from '../molecules/tableHeader';
import TableBody from '../molecules/bannedUsersTable';
import MobileNavigation from '../molecules/mobileNavigation';
import { withRouter } from 'react-router-dom';

const BannedUsers = () => {
    return (
        <Col>
            {/* header  */}
            <Col>
                <TableHeader heading1="Banned Users" heading2="Pause All Uploads" />
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
export default withRouter(BannedUsers);
