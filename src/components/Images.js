import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import SharedAlbumCard from './SharedAlbumCard'

const Images = (item, navigation) => {
  return (
    <ScrollView style={styles.viewWrapper}>
        <SharedAlbumCard />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  albumContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default Images