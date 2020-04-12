import React from 'react';
import { Layout, Select,  Menu, Dropdown, Icon  } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

const menu = (
    <Menu className="language-dropdown-menu">
      <Menu.Item>
        <a  href="#">
        	<img src="https://bootstrapdashboard.netlify.com/images/us.jpg" />English
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  href="#">
			<img src="https://bootstrapdashboard.netlify.com/images/italy.jpg" />Italy
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  href="#">
			<img src="https://bootstrapdashboard.netlify.com/images/russia.jpg"/> Russia
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  href="#">
			<img src="https://bootstrapdashboard.netlify.com/images/spain.jpg"/>Spanish
        </a>
      </Menu.Item>
    </Menu>
  );

export default class Sidebar extends React.Component {
  
  render() {
    return (
		
		
		<Layout>

		<Layout>
			<Header className="header-topbar">
				<div className="logo">
					<Link to="/">Logo</Link>
				</div>
				<div className="language-menu">
					<Dropdown overlay={menu} >
						<a className="ant-dropdown-link" onClick={e => e.preventDefault()} >
							Select language	 <DownOutlined />
						</a>
					</Dropdown>
				</div>
			</Header>
		
		</Layout>	
		<Sider className="sidebar">
		  <div className="logo" />
		  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
			 <Menu.Item key="1">
			 <Link to="/">
				<UserOutlined />
				<span className="nav-text">nav 1</span>
			 </Link>
			 </Menu.Item>
			 <Menu.Item key="2">
				 <Link to="/second-page">
					<VideoCameraOutlined />
					<span className="nav-text">nav 2</span>
				 </Link>
			 </Menu.Item>
			 <Menu.Item key="3">
				 <Link to="/third-page">
					 <UploadOutlined />
					<span className="nav-text">nav 3</span>
				 </Link>
			 </Menu.Item>
			 <Menu.Item key="4">
				 <Link to="second-page">
					<BarChartOutlined />
					<span className="nav-text">nav 4</span>
				 </Link>
			 </Menu.Item>
			 <Menu.Item key="5">
				 <Link to="/">
					<CloudOutlined />
					<span className="nav-text">nav 5</span>
				</Link>
			 </Menu.Item>
			 <Menu.Item key="6">
			 	<Link to="third-page">
					<AppstoreOutlined />
					<span className="nav-text">nav 6</span>
				</Link>
			 </Menu.Item>
		  </Menu>
		</Sider>
	 </Layout>
			
      
    );
  }

}

