import React, { Component } from 'react';
import { Card, Button, Typography, Space, Avatar } from 'antd';

const { Title, Text } = Typography;

class SmallChampionCard extends Component {
  getChampImage = (champName) => {
    return `./champtile/${champName.toLowerCase()}.jpg`
  }

  onClick = (event) => {
    this.props.onClickRemove(this.props.data);
  }

  render() {
    return (
      <div>
        <Space direction="vertical">
          <Title level={4}>Name: </Title>
          <Text strong>{this.props.data.name}</Text>
          <Title level={4}>Cost: </Title>
          <Space>
            <Avatar src="./be.png" />
            <Text>{`${this.props.data.price} BE`}</Text>
          </Space>
        </Space>
        <Button type="primary" onClick={this.onClick}>
          Remove From My Team
        </Button>
      </div>
    );
  }
}

export default SmallChampionCard;
