import React, { Component } from 'react';
import { Card, Button, Typography, Space, Avatar } from 'antd';

const { Title, Text } = Typography;

// This component renders an abbreviated champion card. This card only contains
// the champion's name and their cost.
class SmallChampionCard extends Component {
  getChampImagePath = (champName) => {
    return `./champtile/${champName.toLowerCase()}.jpg`
  }

  onClick = (_) => {
    this.props.removeChamp(this.props.champ);
  }

  render() {
    return (
      <Card
        size="small"
        style={{ width: 190 }}
        cover={<img alt={this.props.champ.name} src={this.getChampImagePath(this.props.champ.name)} />}
      >
        <Space direction="vertical">
          <Title level={4}>Name: </Title>
          <Text strong>{this.props.champ.name}</Text>
          <Title level={4}>Cost: </Title>
          <Space>
            <Avatar src="./be.png" />
            <Text>{`${this.props.champ.price} BE`}</Text>
          </Space>
          <Button type="primary" onClick={this.onClick}>
            Remove From Team
          </Button>
        </Space>
      </Card>
    );
  }
}

export default SmallChampionCard;
