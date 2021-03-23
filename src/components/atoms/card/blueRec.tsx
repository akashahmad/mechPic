import { Card } from 'antd';
import './style.css';

interface Props {
    children?: any;
}

const blueCard = ({ children }: Props) => {
    return <Card className="blue-rec-bg">{children}</Card>;
};

export default blueCard;
