import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import FilterBar, { SortEnum } from './FilterBar';
import ContentGrid from './ContentGrid';
import TeamBar from './TeamBar';
import AllChampData from './ChampData';
import './App.css';

const { Sider, Content } = Layout;
const { Title } = Typography;

// These arrays hold static data that is relevant to all champions
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

// This is our "main class". This component holds all state data and is
// responsible for implementing all state change handlers. The logic for filtering
// and sorting is also here.
class App extends Component {
  constructor(props) {
    super(props);

    // We make a copy here so we don't accidentally mutate the original data array
    const newChamps = [...AllChampData];

    // Since this is the constructor, we can't use our defined sort function yet
    // and thus we need to manually sort
    newChamps.sort((a, b) => a.name.localeCompare(b.name));

    // Setting the default state of our app
    this.state = {
      champs: newChamps,
      classes: [],
      roles: [],
      order: SortEnum.NAME_ASC,
      team: []
    };
  }

  // These handlers both call another function since we need to be able to
  // filter based on multiple categories, so we delegate that work to another function
  onClassFilter = (selectedClasses) => {
    this.setState({ classes: selectedClasses }, () => {
      this.filterChamps();
    })
  }
  onRoleFilter = (selectedRoles) => {
    this.setState({ roles: selectedRoles }, () => {
      this.filterChamps();
    })
  }

  champAlreadyInTeam = (champ) => {
    // Since champion names are unique, we can check this condition based on champ name
    return this.state.team.some((champInTeam) => champInTeam.name === champ.name);
  }

  champMatchesClasses = (champ) => {
    return this.state.classes.every((targetClass) => champ.class.includes(targetClass));
  }

  champMatchesRoles = (champ) => {
    return this.state.roles.every((targetRole) => champ.role.includes(targetRole));
  }

  // This function handles filtering by both class and role
  filterChamps = () => {
    // First we get a list of all champions
    let newChamps = [...AllChampData];

    // We remove any champs that are in the cart/in our team
    newChamps = newChamps.filter((champ) => !this.champAlreadyInTeam(champ));

    // We keep only champs that match the desired classes
    if (this.state.classes.length !== 0) {
      newChamps = newChamps.filter((champ) => this.champMatchesClasses(champ));
    }

    // We keep only champs that match the desired roles
    if (this.state.roles.length !== 0) {
      newChamps = newChamps.filter((champ) => this.champMatchesRoles(champ));
    }

    this.setState({ champs: newChamps }, () => {
      // We need to sort the result since the original data (AllChampData) is unsorted
      this.onSort(this.state.order);
    });
  }

  onSort = (sortEnum) => {
    // Javascript's built-in sort mutates the array. However, we don't want to
    // directly mutate state in React. Therefore, we copy the array first.
    const newChamps = [...this.state.champs];

    switch (sortEnum) {
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

    this.setState({ champs: newChamps, order: sortEnum });
  }

  // Handler to add a champion to our cart/team
  addChamp = (targetChamp) => {
    const newChamps = this.state.champs.filter((champ) => champ.name !== targetChamp.name);
    const newTeam = [...this.state.team, targetChamp];

    this.setState({
      champs: newChamps,
      team: newTeam
    });
  }

  // Handler to remove a champion from our cart/team
  removeChamp = (targetChamp) => {
    const newTeam = this.state.team.filter(champ => champ.name !== targetChamp.name);
    
    this.setState({
      team: newTeam
    }, () => {
      this.filterChamps();
    });
  }

  render() {
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
            <ContentGrid champs={this.state.champs} addChamp={this.addChamp}/>
          </Content>
        </Layout>
        <Sider>
          <TeamBar
            team={this.state.team}
            removeChamp={this.removeChamp}
          />
        </Sider>
      </Layout>
    );
  }
}

export default App;
