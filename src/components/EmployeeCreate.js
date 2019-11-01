import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Input
          label="Name"
          placeholder="Jane"
          />
          <Input
          label="Phone #"
          placeholder="555-555-5555"
          />
        </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  };
}

const styles = StyleSheet.create({});

export default EmployeeCreate;