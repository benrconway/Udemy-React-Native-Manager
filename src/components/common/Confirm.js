import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles;
  return(
    <Modal
      visible={visible}
      animationType={"slide"}
      onRequestClose={() => {}}
      transparent
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>
            Yes
          </Button>
          <Button onPress={onDecline}>
            No
          </Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex:1,
    justifyContent: 'center',
  },
  textStyle:{
    flex: 1,
    fontSize: 18,
    textAlign: 'center'
  }
});

export { Confirm };