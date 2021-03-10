import { Card } from "antd";
import "./style.css";
const blueCard = (props:any) => {
  return <Card className="blue-rec-bg">{props.children}</Card>;
};

export default blueCard;
