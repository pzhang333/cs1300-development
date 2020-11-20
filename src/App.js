import './App.css'; // load default ant design CSS so we can override later

import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import Champion from './Champion';
import FilterBar, { SortEnum } from './FilterBar';
import AllChampData from './ChampData';

const { Sider, Content } = Layout;
const { Title } = Typography;

const Classes = [
  "Controller",
  "Fighter",
  "Mage",
  "Marksman",
  "Slayer",
  "Tank"
]

const Roles = [
  "Top",
  "Jungle",
  "Middle",
  "Bottom",
  "Support"
]

class App extends Component {
  constructor(props) {
    super(props);

    const newChamps = [...AllChampData];
    newChamps.sort((a, b) => a.name.localeCompare(b.name));

    this.state = {
      champs: newChamps,
      classes: [],
      roles: [],
      order: SortEnum.NAME_ASC
    };
  }

  onClassFilter = (checkedValues) => {
    this.setState({classes: checkedValues}, () => {
      this.filterChamps();
    })
  }

  onRoleFilter = (checkedValues) => {
    this.setState({roles: checkedValues}, () => {
      this.filterChamps();
    })
  }

  filterChamps = () => {
    let newChamps = [...AllChampData];
    if (this.state.classes.length !== 0) {
      newChamps = newChamps.filter((champ) => this.state.classes.every((target) => champ.class.includes(target)));
    }
    if (this.state.roles.length !== 0) {
      newChamps = newChamps.filter((champ) => this.state.roles.every((target) => champ.role.includes(target)));
    }
    this.setState({champs: newChamps}, () => {
      this.onSort(this.state.order);
    });
  }  

  onSort = (fakeEnum) => {
    // javascript sort mutates array, so we need to copy champs first
    const newChamps = [...this.state.champs];

    switch(fakeEnum) {
      case SortEnum.NAME_ASC:
        newChamps.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SortEnum.NAME_DESC:
        newChamps.sort((a, b) => -(a.name.localeCompare(b.name)));
        break;
      case SortEnum.COST_ASC:
        newChamps.sort((a, b) => a.price - b.price)
        break;
      case SortEnum.COST_DESC:
        newChamps.sort((a, b) => -(a.price - b.price))
        break;
      default:
        newChamps.sort((a, b) => a.name.localeCompare(b.name));
    }
    this.setState({champs: newChamps, order: fakeEnum});
  };

  render() {
    return (
      <>
        <Title className="title">
          League of Legends Champion Explorer
        </Title>
        <Layout>
          <Sider>
            <FilterBar
              classes={Classes}
              roles={Roles}
              onClassFilter={this.onClassFilter}
              onRoleFilter={this.onRoleFilter}
              onSort={this.onSort}
              defaultVal={SortEnum.NAME_ASC}
            />
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
