import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, StatusBar, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Header from './RestaurantView/components/Header';
import Mytextinput from './RestaurantView/components/Mytextinput';
import { gs, colors } from '../styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';
import Mybutton from './RestaurantView/components/Mybutton';
import {fire} from '../firebase/fire';

const restaurant = {
    name: 'Miku Restaurant',
    location: 'Vancouver',
    hours: '11:30a.m.-10p.m.',
};

export default function Createuser(props) {

    const [userName, setUserName] = useState('')
    const [userContact, setUserContact] = useState('')
    this.dbRef = fire.firestore().collection('client');
    this.state = { title: '', nummber: '', isLoading: false};

    

    return (
        <KeyboardAwareScrollView
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <Header style={{ width: '100%', height: 400 }} />
                    <View style={styles.container}>

                        <StatusBar barStyle='dark-content' />

                        <Text style={gs.title}>{restaurant.name}</Text>
                        <Text style={styles.info}>
                            {restaurant.hours} &#8226; {restaurant.location}
                        </Text>
                        <View style={gs.divider} />

                        <View>
                            <Mytextinput
                                placeholder='Name'
                                onChangeText={(userName) => setUserName(userName)}
                                maxLength={10}
                                style={{ padding: 10 }}
                            />
                            <Mytextinput
                                placeholder='Contact No.'
                                onChangeText={(userContact) => setUserContact(userContact)}
                                maxLength={10}
                                keyboardType='numeric'
                                style={{ padding: 10 }}
                            />
                        </View>
                        <Mybutton title="Submit" onPress={() => navigation.navigate(database())}/>

                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>

    );

}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
        marginBottom: 48
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
    info: {
        color: colors.textSec,
        fontWeight: '600',
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    },
});
