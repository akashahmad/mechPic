import { Row, Col } from "antd";
import Header from "../header";
import MobileHeader from "../header/mobileHeader";
// import UploadImgSec from "../molecules/uploadImgae";
import CardRow from "../molecules/cardRow";
import Head from "../atoms/heading/h2";

const HomePageTemplates = (props) => {
  return (
    <>
      {!props?.isMobile ? <Header /> : <MobileHeader />}
      <Row className="mt-6">
        <Col xs={24} sm={24} md={24} lg={4} xlg={4}></Col>
        <Col xs={24} sm={24} md={24} lg={18} xlg={18}>
          {/* <UploadImgSec /> */}
          {/* my uploads  */}
          <Head heading="My Uploads" />
          <CardRow />
        </Col>
      </Row>
    </>
  );
};

export default HomePageTemplates;
