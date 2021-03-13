import { Col, Row } from 'antd';
import './style.css';

const Footer = () => {
    return (
        <Row className="flex justify-center py-4 footer-container items-end">
            <Row className="w-11/12 lg:w-6/12 xl:w-6/12 flex justify-between">
                <Col className="px-2">
                    <h3 className="text-gray-400 font-medium cursor-pointer hover:text-gray-500">
                        Terms of User
                    </h3>
                </Col>
                {/* line */}
                <Col className="border border-gray-300 h-6"></Col>
                {/* Privacy Policy */}
                <Col className="px-2">
                    <h3 className="text-gray-400 font-medium cursor-pointer hover:text-gray-500">
                        Privacy Policy
                    </h3>
                </Col>
                {/* line */}
                <Col className="border border-gray-300 h-6"></Col>
                {/* Report Abuse */}
                <Col className="px-2">
                    <h3 className="text-gray-400 font-medium cursor-pointer hover:text-gray-500">
                        Report Abuse
                    </h3>
                </Col>
            </Row>
        </Row>
    );
};
export default Footer;
