import React, { Component } from 'react';
import { Space, Checkbox, Typography, Select } from 'antd';
import "./FilterBar.css"

const { Title } = Typography;
const { Option } = Select;

const SortEnum = {
  NAME_ASC: "1",
  NAME_DESC: "2",
  COST_ASC: "3",
  COST_DESC: "4"
}

class FilterBar extends Component {
  render() {
    return (
      <Space direction="vertical" align="center">
        <Title level={2} className="custom-margins">Classes:</Title>
        <Checkbox.Group
          className="vertical"
          options={this.props.classes}
          onChange={this.props.onClassFilter}
        />
        <Title level={2} className="custom-margins">Roles:</Title>
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
