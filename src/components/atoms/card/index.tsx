import { Card, Col } from 'antd';
const MainCard = (props: any) => {
    return (
        <Card className="shadow rounded-xl ">
            <Col xs={24} sm={24} md={24} lg={24}>
                {props.children}
            </Col>
        </Card>
    );
};

export default MainCard;
