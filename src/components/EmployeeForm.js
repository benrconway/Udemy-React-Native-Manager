import React, { Component } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props
    return (
      <View>
        <CardSection>
            <Input
            value={name}
            label="Name"
            placeholder="Jane"
            onChangeText={value => employeeUpdate({ prop: 'name', value })}
            />
          </CardSection>

          <CardSection>
          <Input
            value={phone}
            label="Phone #"
            placeholder="555-555-5555"
            onChangeText={value => employeeUpdate({ prop: 'phone', value })}
            />
          </CardSection>

          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.pickerLabelStyle}>Shift</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={shift}
              onValueChange={value => employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
})

const mapStateToProps = ({ employeeForm: { name, phone, shift }}) => {
  return {
    name,
    phone,
    shift,
  }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);