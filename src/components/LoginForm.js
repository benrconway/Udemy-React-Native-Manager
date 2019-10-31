import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError() {
    const { errorContainerStyle, errorTextStyle } = styles;
    const { error } = this.props;

    if (error){
      return (
        <View style={errorContainerStyle}>
          <Text style={errorTextStyle}>{error}</Text>
        </View>
      )
    }
  }

  render() {
    const { email, password, error } = this.props;
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
           { this.renderError() }
        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorContainerStyle:{
    backgroundColor: 'white',
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  }
});

const mapStateToProps = ({ auth: { email, password, loading, error, user }}) => {
  return {
    email,
    password,
    loading,
    user,
    error,
  }
}

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  }
  )(LoginForm);