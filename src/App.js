import './App.css'; // load default ant design CSS so we can override later

import React, { Component } from 'react';
import { Layout, Typography, Space, Avatar } from 'antd';
import ChampionCard from './ChampionCard';
import SmallChampionCard from './SmallChampionCard';
import FilterBar, { SortEnum } from './FilterBar';
import AllChampData from './ChampData';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

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
      order: SortEnum.NAME_ASC,
      team: []
    };
  }

  onClassFilter = (checkedValues) => {
    this.setState({ classes: checkedValues }, () => {
      this.filterChamps();
    })
  }

  onRoleFilter = (checkedValues) => {
    this.setState({ roles: checkedValues }, () => {
      this.filterChamps();
    })
  }

  filterChamps = () => {
    let newChamps = [...AllChampData];
    newChamps = newChamps.filter((champ) => !this.state.team.some((other) => other.name === champ.name));
    if (this.state.classes.length !== 0) {
      newChamps = newChamps.filter((champ) => this.state.classes.every((target) => champ.class.includes(target)));
    }
    if (this.state.roles.length !== 0) {
      newChamps = newChamps.filter((champ) => this.state.roles.every((target) => champ.role.includes(target)));
    }
    this.setState({ champs: newChamps }, () => {
      this.onSort(this.state.order);
    });
  }

  onSort = (fakeEnum) => {
    // javascript sort mutates array, so we need to copy champs first
    const newChamps = [...this.state.champs];

    switch (fakeEnum) {
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
    this.setState({ champs: newChamps, order: fakeEnum });
  };

  onClickAdd = (data) => {
    const newChamps = this.state.champs.filter((champ) => champ.name !== data.name);
    const newTeam = [...this.state.team, data];
    this.setState({
      champs: newChamps,
      team: newTeam
    });
  }

  onClickRemove = (data) => {
    const newChamps = [...this.state.champs, data];
    const newTeam = this.state.team.filter(champ => champ.name !== data.name);
    this.setState({
      champs: newChamps,
      team: newTeam
    }, () => {
      this.onSort(this.state.order);
    });
  }

  render() {
    const totalCost = this.state.team.reduce((acc, champ) => acc + champ.price, 0);
    console.log(totalCost);

    return (
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
        <Layout>
          <Title className="title">
            League of Legends Champion Explorer
          </Title>
          <Content>
            {
              this.state.champs.map((champData, i) => {
                return (<ChampionCard key={i} data={champData} onClickAdd={this.onClickAdd} />)
              })
            }
          </Content>
        </Layout>
        <Sider>
          <Space direction="vertical">
            {
              this.state.team.map((champData, i) => {
                return (<SmallChampionCard key={i} data={champData} onClickRemove={this.onClickRemove} />)
              })
            }
            <Title level={2}>Total Cost:</Title>
            <Space>
              <Avatar src="./be.png" />
              <Text>{`${totalCost} BE`}</Text>
            </Space>
          </Space>
        </Sider>
      </Layout>
    );
  }
}

export default App;
