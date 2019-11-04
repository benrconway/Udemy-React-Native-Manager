import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communcations from 'react-native-communications';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  componentDidMount() {
    for (const prop in this.props.employee){
      this.props.employeeUpdate({ prop, value: this.props.employee[prop] })
    }
  }

  onSaveButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onDeleteButtonPress() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;

    Communcations.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onSaveButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextButtonPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onDeleteButtonPress.bind(this)}>
            Delete
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift }}) => {
  return { name, phone, shift };
}

export default connect(
  mapStateToProps,
  {
    employeeSave,
    employeeUpdate,
    employeeDelete,
  }
  )(EmployeeEdit);