import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './common';
import { Button } from './common';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress="onAccept">Yes</Button>
          <Button onPress="onDecline">No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

export { Confirm };
