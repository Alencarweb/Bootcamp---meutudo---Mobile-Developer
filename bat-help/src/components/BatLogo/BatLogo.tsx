import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT HELP</Text>
      <Image
        source={require('../../../assets/icon.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E5BF3C',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});