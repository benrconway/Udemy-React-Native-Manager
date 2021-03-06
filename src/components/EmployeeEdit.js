import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communcations from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };


  componentDidMount() {
    for (const prop in this.props.employee){
      this.props.employeeUpdate({ prop, value: this.props.employee[prop] })
    }
  }

  onSaveButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;

    Communcations.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.renderModal();
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
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
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this employee?
        </Confirm>
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