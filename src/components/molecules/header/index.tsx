import { Layout, Col, Input, Row, Avatar, Menu, Dropdown } from 'antd';
import { SearchOutlined, UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import Logo from '../../atoms/logo';
import { withRouter } from 'react-router-dom';
import './style.css';
const { Header } = Layout;
const { Search } = Input;

const PageHeader = (props: any) => {
    let { history } = props;
    const onSearch = () => {};
    const menu = (
        <Menu>
            <Menu.Item>
                <h3
                    onClick={() => history.push('/login')}
                    onKeyPress={() => history.push('/login')}
                    role="presentation"
                >
                    Logout
                </h3>
            </Menu.Item>
        </Menu>
    );
    return (
        <Header className="header-component">
            <Row className="items-center py-5">
                <Col
                    xs={8}
                    sm={8}
                    md={8}
                    lg={6}
                    // xlg={6}
                >
                    <Logo />
                </Col>
                <Col
                    xs={8}
                    sm={8}
                    md={8}
                    lg={12}
                    // xlg={12}
                >
                    <Search
                        className="text-3xl"
                        prefix={<SearchOutlined className="text-2xl px-3 text-blue-300" />}
                        placeholder="Search"
                        allowClear
                        onSearch={onSearch}
                    />
                </Col>
                <Col
                    xs={8}
                    sm={8}
                    md={8}
                    lg={6}
                    // xlg={6}
                    className="text-center flex justify-center items-center"
                >
                    <Avatar size={50} icon={<UserOutlined />} />
                    <Dropdown overlay={menu}>
                        <p className="ant-dropdown-link cursor-pointer px-2 clr-darkblue">
                            Joe Doe <CaretDownOutlined />
                        </p>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    );
};

export default withRouter(PageHeader);
