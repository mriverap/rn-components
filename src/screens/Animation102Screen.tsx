import {StyleSheet, View} from 'react-native';
import React from 'react';

const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
    </View>
  );
};

export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#F5BC9F',
    width: 150,
    height: 150,
  },
});
