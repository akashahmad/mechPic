import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import './style.css';

const { Option } = Select;

interface Props {
    history?: any;
}

const mobileNavigation = ({ history }: Props) => {
    const handleChange = (event: any) => {
        history.push(event);
    };

    return (
        <Col className="w-12/12 pt-2 mobileNav-component">
            {/* select option for links */}
            <Row className="w-full">
                <Col className="w-full">
                    <Select
                        className="w-full"
                        defaultValue={history?.location?.pathname}
                        onChange={handleChange}
                    >
                        <Option value="/">All Users</Option>
                        <Option value="/banned-users">Banned Users</Option>
                        <Option value="/deleted-users">Deleted Users</Option>
                        <Option value="/images-pending-approval">Images Pending Approval</Option>
                    </Select>
                </Col>
            </Row>
        </Col>
    );
};
export default withRouter(mobileNavigation);
