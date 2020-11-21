import React, { Component } from 'react';
import { Col, Row } from 'antd';
import ChampionCard from './ChampionCard';

class ContentGrid extends Component {
  render() {
    return (
      <Row justify="space-around" gutter={[0, 20]}>
        {
          this.props.champs.map((champData, i) => {
            return (
              <Col>
                <ChampionCard
                  data={champData}
                  onClickAdd={this.props.onClickAdd}
                  key={i}
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
