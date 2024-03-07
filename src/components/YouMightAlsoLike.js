import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.27; // 螢幕寬度的27%

const YouMightAlsoLike = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>You Might Also Like</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.RecommendArtist}>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://im.marieclaire.com.tw/m800c533h100b0/assets/mc/202308/64E654BAC0F611692816570.jpeg' }}
                        style={styles.image}
                    />
                    <Text style={styles.artisttext}>RIIZE</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://i.imgur.com/oWkzz6p.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.artisttext}>LE SSERAFIM</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://phinf.wevpstatic.net/MjAyMjA3MDlfMTMw/MDAxNjU3Mzc0NTAxNTI3.7R5N1yBHDmsWgurLr1gm3cjM21UfL54AjYpgsTnPu4cg.pqWQGu34c_Ua1dOxmPGFinFi7KcF6SzI1LlLtb7t9UUg.JPEG/35ea05337dc1425b8958f84dd720642d920.jpg?type=w670' }}
                        style={styles.image}
                    />
                    <Text style={styles.artisttext}>Seventeen</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://cc.tvbs.com.tw/img/upload/2023/09/02/20230902183307-d8c7f598.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.artisttext}>Lauv</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        source={{ uri: 'https://i.kfs.io/album/global/68150349,1v1/fit/500x500.jpg' }}
                        style={styles.image}
                    />
                    <Text style={styles.artisttext}>Halsey</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20, // 设置标题字体大小为 20
        fontWeight: 'bold', // 可选：设置标题字体加粗 
        marginBottom: 15,
    },
    container: {
        width: '100%',
        paddingTop: 22,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingLeft: '8%',
    },
    RecommendArtist: {
        flexDirection: 'row', // 水平排列
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    item: {
        width: itemWidth,
        height: 200,
        marginRight: 10, // 可选：设置 item 之间的间距
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#D2D2D0',
    },
    artisttext: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
        height: 50,
    },
})

export default YouMightAlsoLike;
