import React, { Component } from 'react';
import { Col, Row } from 'antd';
import ChampionCard from './ChampionCard';

// This component is responsible for rendering our grid of champion cards
class ContentGrid extends Component {
  render() {
    return (
      <Row justify="space-around" gutter={[0, 20]}>
        {
          this.props.champs.map((champData, i) => {
            return (
              <Col key={i}>
                <ChampionCard
                  champ={champData}
                  addChamp={this.props.addChamp}
                />
              </Col>
            );
          })
        }
      </Row>
    );
  }
}

export default ContentGrid;
