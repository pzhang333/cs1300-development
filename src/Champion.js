import React, { Component } from 'react';
import { Card, Avatar, Typography, Space } from 'antd';
import "./Champion.css";

const { Text, Title } = Typography;

class Champion extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    const z = <Text></Text>;

    return (
      <Card
        className="spacing"
        cover={<img src="./img/aatrox.jpg" />}
      >
        <Title level={4}>Name: </Title>
        <Text strong>Aatrox</Text>
        <Title level={4}>Class: </Title>
        <Space direction="vertical">
          <Space>
            <Avatar src="./img/tank.png" />
            <Text>Tank</Text>
          </Space>
          <Space>
            <Avatar src="./img/support.png" />
            <Text>Support</Text>
          </Space>
        </Space>
        <Title level={4}>Role: </Title>
        <Space direction="vertical">
          <Space>
            <Avatar src="./img/top.png" />
            <Text>Top</Text>
          </Space>
          <Space>
            <Avatar src="./img/mid.png" />
            <Text>Middle</Text>
          </Space>
        </Space>
        <Title level={4}>Cost: </Title>
        <Space direction="vertical">
          <Space>
            <Avatar src="./img/be.png" />
            <Text>3200 BE</Text>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default Champion;
