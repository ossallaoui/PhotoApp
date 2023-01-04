import { View, Image, StyleSheet} from 'react-native';
import React from 'react';

const Avatars = ({ avatars }) => {
    return (
        <View>
            {
                avatars.map((item, index) =>
                    <Image key={index} source={item.image} style={[styles.pic,
                        { zIndex: index-1, marginLeft: (index * 16) },
                        index !== (avatars.length - 1) && { position: 'absolute' }]} />
                ) 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    pic: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: "#FFF",
        borderRadius: 40,
    },
});
export default Avatars