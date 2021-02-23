import { Divider, Form, Input, Button, Row, Col, Checkbox } from "antd";
import { withRouter, Link } from "react-router-dom";
import Logo from "../components/atoms/logo";
import Heading from "../components/atoms/heading";
import Card from "../components/atoms/card";
import LoginTemplates from "../components/templates/loginTemplates";
import "./style.css";
const SignUp = (props) => {
  const [form] = Form.useForm();
  const onFinish = () => {
    form.validateFields().then((values) => {
      values.shareImage = values?.shareImage || false;
      values.downloadImage = values?.downloadImage || false;
    });
  };
  return (
    <LoginTemplates className="signup-form">
      <div className="flex justify-center">
        <Logo />
      </div>
      <Divider
        style={{
          borderTop: "white",
        }}
      />
      <Heading heading="Sign Up" />
      <Divider
        style={{
          borderTop: "white",
        }}
      />
      <Card>
        <Form form={form} name="Login " onFinish={onFinish}>
          <Form.Item
            label=""
            name="name"
            rules={[
              { required: true, message: "Please input your user name!" },
            ]}
          >
            <Input
              className="rounded-3xl font-weight-bold"
              placeholder="user name"
            />
          </Form.Item>
          <Form.Item
            label=""
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              className="rounded-3xl font-weight-bold"
              placeholder="email address"
            />
          </Form.Item>
          <Row className="justify-between">
            <Col xs={11} sm={11} md={11} lg={11} xlg={11}>
              <Form.Item
                label=""
                name="city"
                rules={[{ required: true, message: "Please input your city!" }]}
              >
                <Input
                  className="rounded-3xl font-weight-bold"
                  placeholder="City"
                />
              </Form.Item>
            </Col>

            <Col xs={11} sm={11} md={11} lg={11} xlg={11}>
              <Form.Item
                label=""
                name="postalCode"
                rules={[
                  { required: true, message: "Please input your Postal Code!" },
                ]}
              >
                <Input
                  className="rounded-3xl font-weight-bold"
                  placeholder="Postal Code"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label=""
            name="country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input
              className="rounded-3xl font-weight-bold"
              placeholder="Country"
            />
          </Form.Item>
          <Row className="justify-between">
            <Col xs={11} sm={11} md={11} lg={11} xlg={11}>
              <Form.Item
                label=""
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  className="rounded-3xl font-weight-bold"
                  placeholder="Create Password"
                />
              </Form.Item>
            </Col>

            <Col xs={11} sm={11} md={11} lg={11} xlg={11}>
              <Form.Item
                label=""
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                ]}
              >
                <Input.Password
                  className="rounded-3xl font-weight-bold"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </Col>
          </Row>
          <p className="text-base clr-darkblue cursor-pointer my-3">
            By Signing Up, You Must Agree to:
          </p>
          <Form.Item name="shareImage" valuePropName="checked">
            <Checkbox>
              <p>
                Only share images that they took or created themselves or have
                permission to share freely and that they agree that their images
                can be freely shared with attribution.
              </p>
            </Checkbox>
          </Form.Item>
          <Form.Item name="downloadImage" valuePropName="checked">
            <Checkbox>
              <p>
                All users who download images must agree to abide by creative
                commons share-alike rules.
              </p>
            </Checkbox>
          </Form.Item>
          <div className="text-center my-4">
            <Button
              type="primary"
              className="bg-clr-darkblue rounded-3xl py-1 px-24"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </div>
          <Link to="/login">
            <p className="text-center text-base clr-darkblue cursor-pointer my-3">
              Already had an account?
            </p>
          </Link>
          <div className="text-center my-4">
            <Button
              type="primary"
              className="bg-clr-skyblue rounded-3xl py-1 px-24"
              htmlType="submit"
              onClick={() => props?.history?.push("/login")}
            >
              Login
            </Button>
          </div>
        </Form>
      </Card>
      <Divider
        style={{
          borderTop: "white",
        }}
      />
    </LoginTemplates>
  );
};

export default withRouter(SignUp);
