import React, { Component } from 'react';
import { Card, Avatar, Typography, Space, Button } from 'antd';
import "./Champion.css";

const { Text, Title } = Typography;

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

function getChampImage(champName) {
  return `./champ/${champName.toLowerCase()}.jpg`;
};

function renderImageAndText(array, lookupMap) {
  return (
    <>
      {
        array.map((setData, i) => {
          return (
            <Space key={i}>
              <Avatar src={lookupMap[setData]} />
              <Text>{setData}</Text>
            </Space>
          )
        })
      }
    </>
  )
};

class Champion extends Component {
  onClick = (event) => {
    this.props.onClick(this.props.data);
  }

  render() {
    const classText = (this.props.data.class.size > 1) ? "Classes:" : "Class:";
    const roleText = (this.props.data.role.size > 1) ? "Roles:" : "Role:";

    return (
      <Card
        className="card"
        cover={<img alt={this.props.data.name} src={getChampImage(this.props.data.name)} />}
      >
        <Title level={4}>Name: </Title>
        <Text strong>{this.props.data.name}</Text>
        <Title level={4}>{classText}</Title>
        {renderImageAndText(this.props.data.class, ClassMap)}
        <Title level={4}>{roleText}</Title>
        {renderImageAndText(this.props.data.role, RoleMap)}
        <Title level={4}>Cost: </Title>
        <Space className="spacing">
          <Avatar src="./be.png" />
          <Text>{`${this.props.data.price} BE`}</Text>
        </Space>
        <Button className="button" type="primary" onClick={this.onClick}>Test</Button>
      </Card>
    );
  }
}

export default Champion;
