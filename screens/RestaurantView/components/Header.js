import React from 'react';
import { ViewBase, Text, StyleSheet, Image, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {gs} from '../../../styles'

export default function Header() {
    return (
        <View>
            <Image source={require('../../../assets/restaurant.jpeg')} style={{width: '100%', height: 400}} />
            <View style={styles.topButtons}>
                <AntDesign name='close' size={24} color='#fff' />

                <View style={gs.rowCenter}>
                    <AntDesign name='save' size={24} style={styles.topButtonRight}/>
                    <AntDesign name='sharealt' size={24} style={styles.topButtonRight}/>
                    <AntDesign name='ellipsis1' size={24} style={styles.topButtonRight}/>
                </View>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    topButtons: {
        ...gs.rowBetween,
        position: 'absolute',
        top: 25,
        left: 32,
        right: 20
},
topButtonRight: {
    marginLeft: 12, 
    color: '#fff'
}
});