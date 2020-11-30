import React, { Component } from 'react';
import { Space, Avatar, Typography, Row, Col } from 'antd';
import SmallChampionCard from './SmallChampionCard';
import './TeamBar.css';

const { Title, Text } = Typography;

// This component renders the champions in the cart and calculates their total cost
class TeamBar extends Component {
  render() {
    // calculating total cost using functional programming, total starts at 0
    const totalCost = this.props.team.reduce((total, champ) => total + champ.price, 0);

    return (
      <>
        <Row justify="center" gutter={[0, 10]}>
          <Col>
            <Title className="add-margin-top" level={1}>My Team:</Title>
            <Title className="add-margin-top" level={2}>Total Cost:</Title>
            <Space>
              <Avatar src="./be.png" />
              <Text>{`${totalCost} BE`}</Text>
            </Space>
          </Col>
          {
            this.props.team.map((champData, i) => {
              return (
                <Col key={i}>
                  <SmallChampionCard
                    champ={champData}
                    removeChamp={this.props.removeChamp}
                  />
                </Col>
              );
            })
          }
        </Row>
      </>
    );
  }
};

export default TeamBar;
