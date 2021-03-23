import { Card, Col } from 'antd';

interface Props {
    children?: any;
}

const MainCard = ({ children }: Props) => {
    return (
        <Card className="shadow rounded-xl ">
            <Col xs={24} sm={24} md={24} lg={24}>
                {children}
            </Col>
        </Card>
    );
};

export default MainCard;
