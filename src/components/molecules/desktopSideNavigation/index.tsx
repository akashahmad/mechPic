import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Heading from '../../atoms/sideNavHeading';
import './style.css';

const SideNav = (props: any) => {
    let { history } = props;
    return (
        <Col className="w-12/12 px-2 sideNav-component">
            {/* link 1 All Users */}
            <Row className="py-2 w-6/12 lg:w-11/12 xl:w-11/12">
                <Col
                    className={`${
                        history?.location?.pathname === '/'
                            ? ' active-backgroundColor'
                            : 'unactive-backgroundColor'
                    } cursor-pointer px-10 py-4 rounded-full w-full`}
                    onClick={() => history.push('/')}
                >
                    <Heading heading="All Users" />
                </Col>
            </Row>
            {/* link 2 Banned Users */}
            <Row className="py-2 w-6/12 lg:w-11/12 xl:w-11/12">
                <Col
                    className={`${
                        history?.location?.pathname === '/banned-users'
                            ? ' active-backgroundColor'
                            : 'unactive-backgroundColor'
                    } cursor-pointer px-10 py-4 rounded-full w-full`}
                    onClick={() => history.push('/banned-users')}
                >
                    <Heading heading="Banned Users" />
                </Col>
            </Row>
            {/* link 3 Deleted Users */}
            <Row className="py-2 w-6/12 lg:w-11/12 xl:w-11/12">
                <Col
                    className={` ${
                        history?.location?.pathname === '/deleted-users'
                            ? ' active-backgroundColor'
                            : 'unactive-backgroundColor'
                    } cursor-pointer px-10 py-4 rounded-full w-full`}
                    onClick={() => history.push('/deleted-users')}
                >
                    <Heading heading="Deleted Users" />
                </Col>
            </Row>
            {/* link 4 Images Pending Approval */}
            <Row className="py-2 w-6/12 lg:w-11/12 xl:w-11/12">
                <Col
                    className={` ${
                        history?.location?.pathname === '/images-pending-approval'
                            ? ' active-backgroundColor'
                            : 'unactive-backgroundColor'
                    } cursor-pointer px-10 py-4 rounded-full w-full`}
                    onClick={() => history.push('/images-pending-approval')}
                >
                    <Heading heading="Images Pending Approval" />
                </Col>
            </Row>
        </Col>
    );
};
export default withRouter(SideNav);
