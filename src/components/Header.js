import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D2D2D0',
    padding: 20,
    borderBottomWidth: 2,
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    borderBottomColor: '#ddd',
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  
});

export default Header;
