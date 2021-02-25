import { Layout, Col, Row, Button } from "antd";
import Card from "../atoms/card";
import {
  FormOutlined,
  PictureOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
const { Content, Sider } = Layout;

const HomePage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
      <Sider
      style={{ }} className="bg-white">
        <Row className="items-center mt-4">
          <Col xs={8} sm={8} md={8} lg={8} xlg={8}>
            
              <Button
                className="bg-clr-darkblue rounded-3xl  px-14"
                type="primary"
                icon={<FormOutlined />}
                onClick={() => ""}
              >
                {" "}
                Upload{" "}
              </Button>

              <Button
                className="bg-white rounded-3xl  px-11"
                type="primary"
                icon={<PictureOutlined />}
                onClick={() => ""}
              >
                {" "}
                My Images{" "}
              </Button>

              <Button
                className="bg-white rounded-3xl  px-8"
                type="primary"
                icon={<DownloadOutlined />}
                onClick={() => ""}
              >
                {" "}
                My Downloads{" "}
              </Button>
           
          </Col>
        </Row>
        </Layout>
        
      </Sider>
      <Content className="bg-white">
        <Row className="items-center mt-4">
          <Col xs={8} sm={8} md={8} lg={8} xlg={8}>
            <Card></Card>
          </Col>
        </Row>
      </Content>
      <Sider className="bg-white">
        <Row className="items-center mt-4">
          <Col xs={8} sm={8} md={8} lg={8} xlg={8}>
            <Button
              className="bg-clr-darkblue rounded-3xl  px-14"
              type="primary"
              icon={<FormOutlined />}
              onClick={() => ""}
            >
              {" "}
              Upload Left{" "}
            </Button>

            <Button
              className="bg-clr-darkblue rounded-3xl  px-14"
              type="primary"
              icon={<FormOutlined />}
              onClick={() => ""}
            >
              {" "}
              Download Upload{" "}
            </Button>
          </Col>
        </Row>
      </Sider>
    </Layout>
  );
};

export default HomePage;
