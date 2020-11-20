import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';
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

function renderImageAndText(set, lookupMap) {
  return (
    <Space direction="vertical">
      {
        [...set].map((setData, i) => {
          return (
            <Space key={i}>
              <Avatar src={lookupMap[setData]} />
              <Text>{setData}</Text>
            </Space>
          )
        })
      }
    </Space>
  )
};

const Champion = ({ data }) => {
  const classText = (data.class.size > 1) ? "Classes:" : "Class:";
  const roleText = (data.role.size > 1) ? "Roles:" : "Role:";

  return (
    <Card
      className="spacing"
      cover={<img alt={data.name} src={getChampImage(data.name)} />}
    >
      <Title level={4}>Name: </Title>
      <Text strong>{data.name}</Text>
      <Title level={4}>{classText}</Title>
      {renderImageAndText(data.class, ClassMap)}
      <Title level={4}>{roleText}</Title>
      {renderImageAndText(data.role, RoleMap)}
      <Title level={4}>Cost: </Title>
      <Space direction="vertical">
        <Space>
          <Avatar src="./be.png" />
          <Text>{`${data.price} BE`}</Text>
        </Space>
      </Space>
    </Card>
  );
};

export default Champion;
