import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

interface Props {
    children?: any;
}

const LoginTemplate = ({ children }: Props) => {
    return (
        <Row className="justify-center pt-5">
            <Col
                xs={22}
                sm={22}
                md={22}
                lg={6}
                // xlg={8}
            >
                {children}
            </Col>
        </Row>
    );
};

export default withRouter(LoginTemplate);
