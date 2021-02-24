import { Row, Col } from "antd";
import Header from "../header";
import MobileHeader from "../header/mobileHeader";
import UploadImgSec from "../molecules/uploadImgae";

const HomePageTemplates = (props) => {
  return (
    <>
      {!props?.isMobile ? <Header /> : <MobileHeader />}
      <Row className="mt-6">
        <Col xs={24} sm={24} md={24} lg={4} xlg={4}></Col>
        <Col xs={24} sm={24} md={24} lg={20} xlg={20}>
          <UploadImgSec />
        </Col>
      </Row>
    </>
  );
};

export default HomePageTemplates;
