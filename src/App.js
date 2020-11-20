import React from 'react';
import { Layout, Typography } from 'antd';
import Champion from './Champion';
import './App.css';

const { Sider, Content } = Layout;
const { Title } = Typography;

const App = () => (
  <>
    <Title className="title">League of Legends Champion Explorer</Title>
    <Layout>
      <Sider>Filter Settings</Sider>
      <Content className="flex">
        <Champion />
        <Champion />
        <Champion />
        <Champion />
        <Champion />
        <Champion />
        <Champion />
        <Champion />
      </Content>
      <Sider>Cart</Sider>
    </Layout>
  </>
);

export default App;
