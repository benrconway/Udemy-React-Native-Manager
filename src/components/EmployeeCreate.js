import React, { Component } from 'react';
import { StyleSheet, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const  { name, phone, shift, employeeCreate } = this.props;
    employeeCreate({ name, phone, shift: shift || 'Monday'});
  }

  render() {
    return(
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >
            Create
          </Button>
        </CardSection>
      </Card>
    );
  };
}

const styles = StyleSheet.create({});

const mapStateToProps = ({ employeeForm: { name, phone, shift }}) => {
  return {
    name,
    phone,
    shift
  };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);