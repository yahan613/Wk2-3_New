import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PopularSongList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular Songs</Text>
            <View style={styles.containerlist}>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/zh/6/6f/BTS_Proof_album_cover_art.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.songtext}>Yet To Come</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/zh/8/84/BTS_-_WINGS%E5%A4%96%E5%82%B3%EF%BC%9AYou_Never_Walk_Alone.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.songtext}>Spring Day</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/8/88/Love_Yourself_Tear_Cover.jpeg' }}
                        style={styles.image}
                    />
                    <Text style={styles.songtext}>Fake Love</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/zh/9/9a/BTS_-_Map_of_the_Soul_7.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.songtext}>Black Swan</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/3/3f/BTS%2C_Wings.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.songtext}>Blood Sweat & Tears</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 15,
    },
    container: {
        width: '100%',
        paddingTop: 22,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingLeft: '8%',
    },
    containerlist: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        
    },
    image: {
        width: 50,
        height: 50,
        
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: '#D2D2D0', 
    },
    songtext: {
        fontSize: 18,
    },
    
});

export default PopularSongList;
