import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';

const SigninScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Index');
        } catch (err) {
            setError(err.message);
        }
    }

    return <>
        <Text style={{fontSize: 40, textAlign: 'center', marginBottom: 16, padding: 25, justifyContent: 'center'}}>
            ABC Restaurant Reservation System
        </Text>
        <Input
            placeholder="Email"
            placeholderTextColor="#aaaaaa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
        />
        <Input
            placeholder="Password"
            placeholderTextColor='#aaaaaa'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize='none'
        />
        {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
        <Button title="SignIn" onPress={() => signIn()} />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
    </>
};

export default SigninScreen;