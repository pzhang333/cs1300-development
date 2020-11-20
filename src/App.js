import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import Champion from './Champion';
import FilterBar from './FilterBar';
import AllChampData from './ChampData';
import './App.css';

const { Sider, Content } = Layout;
const { Title } = Typography;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {champs: AllChampData};
  }

  render() {
    return (
      <>
        <Title className="title">League of Legends Champion Explorer</Title>
        <Layout>
          <Sider>
            <FilterBar />
          </Sider>
          <Content className="flex">
            {
              this.state.champs.map((champData, i) => {
                return (<Champion key={i} data={champData}/>)
              })
            }
          </Content>
          <Sider>Cart</Sider>
        </Layout>
      </>
    );
  }
}

export default App;
