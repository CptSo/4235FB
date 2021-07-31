import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const Mybutton = (props) => {
    return (
      <TouchableOpacity style={styles.button} onPress={props.customClick}>
          <Text style={styles.text}>
              {props.title}
          </Text>
      </TouchableOpacity>  
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#f05555',
        color: '#ffffff',
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
    },
    title: {
        color: '#ffffff'
    }
});

export default Mybutton;