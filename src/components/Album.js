import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Card from './Card';
import albumPage from '../../assets/data/albumPage';
import { StatusBar } from 'expo-status-bar';

const Album = ({navigation}) => {
    return (
        <>
            <ScrollView>
                <View style={styles.albumContainer}>
                    {albumPage.map((item, index) => 
                        <View style={styles.container} key={index}>
                            <Card item={item} navigation={navigation} />
                        </View>
                    )}
                </View>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    albumContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Album