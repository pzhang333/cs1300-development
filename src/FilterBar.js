import React, { Component } from 'react';
import { Space, Checkbox, Typography, Select } from 'antd';
import "./FilterBar.css"

const { Title } = Typography;
const { Option } = Select;

// Since javascript doesn't have real enums we create a "fake enum" here
const SortEnum = {
  NAME_ASC: "1",
  NAME_DESC: "2",
  COST_ASC: "3",
  COST_DESC: "4"
}

// This component is responsible for rendering the filter and sorting bar
class FilterBar extends Component {
  render() {
    return (
      <Space direction="vertical" align="center">
        <Title level={1} className="custom-margins">Filters:</Title>
        <Title level={2} className="custom-margins">Class:</Title>
        <Checkbox.Group
          className="vertical"
          options={this.props.classes}
          onChange={this.props.onClassFilter}
        />
        <Title level={2} className="custom-margins">Role:</Title>
        <Checkbox.Group
          className="vertical"
          options={this.props.roles}
          onChange={this.props.onRoleFilter}
        />
        <Title level={2} className="custom-margins">Sort By:</Title>
        <Select defaultValue={this.props.defaultVal} onChange={this.props.onSort}>
          <Option value={SortEnum.NAME_ASC}>Name Ascending</Option>
          <Option value={SortEnum.NAME_DESC}>Name Descending</Option>
          <Option value={SortEnum.COST_ASC}>Cost Ascending</Option>
          <Option value={SortEnum.COST_DESC}>Cost Descending</Option>
        </Select>
      </Space>
    );
  }
};

export default FilterBar;
export { SortEnum };
