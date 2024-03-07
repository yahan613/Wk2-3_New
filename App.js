import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import PopularSongList from './src/components/PopularSongList';
import YouMightAlsoLike from './src/components/YouMightAlsoLike';

export default function App() {
  return (
    <ScrollView style={styles.allcontainer}>
      <View style={styles.container}>
        <Header title="This is BTS" />
        <Image
          style={styles.image}
          source={{
            uri: "https://dimg.donga.com/i/620/0/90/ugc/CDB/BIG/Article/64/5e/be/d3/645ebed30ee5d2738241.jpg"
          }}
        />
        <PopularSongList/>
        <AlbumList/>
        <YouMightAlsoLike/>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  allcontainer:{
    height: '100%',
    marginBottom: 4,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  container2: {
    flex: 1,
    backgroundColor: '#D2D2D0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 300,
  }
  
});
