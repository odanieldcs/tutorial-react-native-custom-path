import React from 'react';
import {View, Text} from 'react-native';
import CardProfile from '@components/CardProfile';

const HomeScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      <CardProfile />
    </View>
  );
};

export default HomeScreen;
