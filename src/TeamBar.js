import React, { Component } from 'react';
import { Space, Avatar, Typography, Row, Col } from 'antd';
import SmallChampionCard from './SmallChampionCard';
import './TeamBar.css';

const { Title, Text } = Typography;

class TeamBar extends Component {
  render() {
    const totalCost = this.props.team.reduce((acc, champ) => acc + champ.price, 0);

    return (
      <>
        <Row justify="center" gutter={[0, 10]}>
          <Col>
            <Title className="add-margin-top" level={2}>Total Cost:</Title>
            <Space>
              <Avatar src="./be.png" />
              <Text>{`${totalCost} BE`}</Text>
            </Space>
          </Col>
          {
            this.props.team.map((champData, i) => {
              return (
                <Col>
                  <SmallChampionCard
                    data={champData}
                    onClickRemove={this.props.onClickRemove}
                    key={i}
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
