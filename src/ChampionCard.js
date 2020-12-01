import React, { Component } from 'react';
import { Card, Avatar, Typography, Space, Button } from 'antd';
import "./ChampionCard.css";

const { Text, Title } = Typography;

// These maps return an image path given a specific key/property
const ClassMap = {
  "Controller": "./class/controller.png",
  "Fighter": "./class/fighter.png",
  "Mage": "./class/mage.png",
  "Marksman": "./class/marksman.png",
  "Slayer": "./class/slayer.png",
  "Tank": "./class/tank.png"
};
const RoleMap = {
  "Top": "./role/top.png",
  "Jungle": "./role/jungle.png",
  "Middle": "./role/mid.png",
  "Bottom": "./role/bot.png",
  "Support": "./role/support.png",
};

// This component renders a champion card given the correct data. This card
// displays properties such as name, role, classes, and price.
class ChampionCard extends Component {
  getChampImagePath = (champName) => {
    return `./champ/${champName.toLowerCase()}.jpg`;
  }

  renderImageAndText = (array, map) => {
    return (
      <>
        {
          array.map((data, i) => {
            return (
              <Space key={i}>
                <Avatar src={map[data]} />
                <Text>{data}</Text>
              </Space>
            )
          })
        }
      </>
    )
  }

  onClick = (_) => {
    this.props.addChamp(this.props.champ);
  }

  render() {
    const classText = (this.props.champ.class.size > 1) ? "Classes:" : "Class:";
    const roleText = (this.props.champ.role.size > 1) ? "Roles:" : "Role:";

    return (
      <Card
        className="card"
        cover={<img alt={this.props.champ.name} src={this.getChampImagePath(this.props.champ.name)} />}
      >
        <Space direction="vertical">
          <Title level={4}>Name: </Title>
          <Text strong>{this.props.champ.name}</Text>
          <Title level={4}>{classText}</Title>
          {this.renderImageAndText(this.props.champ.class, ClassMap)}
          <Title level={4}>{roleText}</Title>
          {this.renderImageAndText(this.props.champ.role, RoleMap)}
          <Title level={4}>Cost: </Title>
          <Space className="spacing">
            <Avatar src="./be.png" />
            <Text>{`${this.props.champ.price} BE`}</Text>
          </Space>
        </Space>
        <Button className="button" type="primary" onClick={this.onClick}>
          Add To My Team
        </Button>
      </Card>
    );
  }
}

export default ChampionCard;
