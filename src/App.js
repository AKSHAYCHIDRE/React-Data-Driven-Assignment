import React from 'react';
import './App.css';
import './css/custom.css';
import { BrowserRouter, Route } from 'react-router-dom'
import First from './components/first-page';
import Second from './components/second-page';
import Sidebar from './components/sidebar';
import Third from './components/third-page';
import { Layout } from 'antd';
const { Content } = Layout;

function App() { 
  return ( 
    <BrowserRouter > 
      <Layout className="site-layout">
         <Sidebar/>
        <Content className="content-wrapper">
          <Route exact path="/first-page" component={ First } />
          <Route exact path="/second-page" component={ Second } />
          <Route exact path="/third-page" component={ Third }></Route>
        </Content>
      </Layout>
    </BrowserRouter > 
  )     
;}

export default App;
