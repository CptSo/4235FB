import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import {colors} from '../../styles';
import Header from './components/Header';
import Bookmark from './components/Bookmark';
import About from './components/About';
import Stats from './components/Stats';
import Serviceoptions from './components/Serviceoptions';

import firebase from 'firebase';
import { templateSettings } from 'lodash';

export default function index( {navigation}) {

    return (
        <ScrollView>
        <View style={StyleSheet.container}>
            <StatusBar barStyle='dark-content' />

            <Header />

            <View>
                <Bookmark />
                <About />  
                <Stats />     
                <Serviceoptions />    
                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Create Reservation')}>
                    <Text>Create Reservation</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#f05555',
        color: '#ffffff',
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
    },
});