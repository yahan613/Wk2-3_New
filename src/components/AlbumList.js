import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const AlbumList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Album</Text>
            <ScrollView contentContainerStyle={styles.containerlist}>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>Proof</Text>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/zh/6/6f/BTS_Proof_album_cover_art.jpg' }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>BE</Text>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/zh/f/f5/Bts_be_cover.jpg' }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>Map of the Soul: Persona</Text>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/zh/3/36/Map_of_the_Soul_-_Persona.png' }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.albumtext}>花樣年華 Young Forever</Text>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/zh/thumb/9/94/BTS_Hwayang-yeonhwa_Young_Forever.jpg/220px-BTS_Hwayang-yeonhwa_Young_Forever.jpg' }}
                        style={styles.image}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.google.com/search?q=bts+album&rlz=1C1CHBF_zh-TWTW1000TW1000&oq=BTS&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIOCAEQRRgnGDsYgAQYigUyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGEHSAQgzMjgwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#wgvs=e')}>
                <Text style={{
                    backgroundColor: '#D2D2D0',
                    fontSize: 18,
                    width: '100%',
                    height: 40,
                    textAlignVertical: "center",
                    textAlign: "center",
                    color: '#fff',
                    fontWeight: 'bold',
                }}>View More Album</Text>
            </TouchableOpacity>
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
        justifyContent:"center",
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
