import { Form, Input, Row, Col, Button, Tag } from "antd";
import UploadImage from "../../atoms/uploadImage";
import { PlusOutlined, ArrowRightOutlined } from "@ant-design/icons";

const UploadImageMolecule = () => {
  const [form] = Form.useForm();

  return (
    <Row>
      {/* upload img  */}
      <Col xs={24} sm={24} md={24} lg={9} xlg={9} className="mx-4">
        <UploadImage />
      </Col>
      {/* image description */}
      <Col xs={24} sm={24} md={24} lg={12} xlg={12} className="mx-4">
        <Form form={form} name="Login font-weight-bold">
          <Form.Item
            label=""
            name="text"
            rules={[{ required: true, message: "Please input text1!" }]}
          >
            <Input
              className="rounded-lg font-weight-bold"
              placeholder="Add Text 1"
              //   suffix="bold"
            />
          </Form.Item>
          <Row className="mb-5 ">
            <Col sm={24} md={24} lg={12} xlg={12}>
              <Button
                className="bg-clr-gray clr-gray px-12 font-weight-bold rounded-lg"
                size="small"
              >
                Add New Text <PlusOutlined />
              </Button>
            </Col>
            <Col sm={24} md={24} lg={12} xlg={12}>
              <Button
                className="bg-clr-gray clr-gray px-12 font-weight-bold rounded-lg "
                size="small"
              >
                Add Arrows <ArrowRightOutlined />
              </Button>
            </Col>
          </Row>
          <Form.Item
            label=""
            name="title"
            rules={[{ required: true, message: "Please input image title!" }]}
          >
            <Input
              className="rounded-lg font-weight-bold"
              placeholder="Add Image Title"
              //   suffix="bold"
            />
          </Form.Item>
          <Form.Item label="" name="tags">
            <Input
              className="rounded-lg font-weight-bold"
              placeholder="Add Tags upto 10"
            />
          </Form.Item>
          <Form.Item label="" name="tags">
            <Tag className="tag-bg-clr py-3 px-7 rounded-3xl">Fun</Tag>
          </Form.Item>
          <Row className="mb-5 justify-between">
            <Col sm={24} md={24} lg={12} xlg={12}>
              <Button
                type="primary"
                size="small"
                className="bg-clr-darkblue rounded-3xl py-1 px-24"
              >
                Save
              </Button>
            </Col>
            <Col sm={24} md={24} lg={12} xlg={12}>
              <Button
                type="primary"
                className="bg-clr-skyblue rounded-3xl py-1 px-24"
                size="small"
              >
                DownLoad
              </Button>
            </Col>
          </Row>

          <Form.Item label="" name="">
            <div>All Images will be held for review.</div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default UploadImageMolecule;
