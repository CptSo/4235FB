import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text} from 'react-native-elements';
import {colors} from '../styles';
import RestaurantView from './RestaurantView';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ()=>{
    return (
        <ScrollView style={StyleSheet.container}>
            <RestaurantView />
        </ScrollView>
    )

};

export default HomeScreen;