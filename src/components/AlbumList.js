import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import AlbumData from "./AlbumData.json"

const AlbumList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Album</Text>
            <ScrollView contentContainerStyle={styles.containerlist}>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>{AlbumData[0].albumName}</Text>
                    <Image
                        source={{ uri: AlbumData[0].image }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>{AlbumData[1].albumName}</Text>
                    <Image
                        source={{ uri: AlbumData[1].image }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>{AlbumData[2].albumName}</Text>
                    <Image
                        source={{ uri: AlbumData[2].image }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>{AlbumData[2].albumName}</Text>
                    <Image
                        source={{ uri: AlbumData[3].image }}
                        style={styles.image}
                    />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        paddingTop: 22,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    containerlist: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 15,
        justifyContent: "center",
    },
    item: {
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,

    },
    title: {
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    image: {
        width: '90%',
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: '#D2D2D0',
    },
    albumtext: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        height: 50,
    },

});

export default AlbumList;
