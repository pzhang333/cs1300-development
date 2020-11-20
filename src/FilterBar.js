import React, { Component } from 'react';
import { Space, Checkbox, Typography, Select } from 'antd';
import "./FilterBar.css"

const { Text, Title } = Typography;
const { Option } = Select;

// fake enum since javascript doesn't have built in enums
const SortEnum = {
  NAME_ASC: "1",
  NAME_DESC: "2",
  COST_ASC: "3",
  COST_DESC: "4"
}

class FilterBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Space direction="vertical" className="flex-column">
        <Title level={2} className="no-margin">Classes:</Title>
        <Checkbox.Group options={this.props.classes} onChange={this.props.onClassFilter} />
        <Title level={2} className="no-margin">Roles:</Title>
        <Checkbox.Group options={this.props.roles} onChange={this.props.onRoleFilter} />
        <Title level={2} className="no-margin">Sort By:</Title>
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
