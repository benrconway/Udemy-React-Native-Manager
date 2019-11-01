import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentDidMount() {
    this.props.employeesFetch()
  }

  renderItem(employee) {
    return <ListItem employee={employee.item} />
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.employees}
          keyExtractor={item => item.id}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  const items = Object.entries(state.employees)
  const employees = items.map(item => {
    const { name, phone, shift } = item[1]
    return { id: item[0], name, phone, shift }
  })
  return {
    employees,
  }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);