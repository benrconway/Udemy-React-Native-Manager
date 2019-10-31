import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange.bind(this)}
            label="Email"
            placeholder="email@example.com"
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry
            label="Password"
            placeholder="password1"
            value={password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);