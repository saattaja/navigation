import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen({navigation}){
    const [message, setMessage] = useState('Testing');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
            headerRight: () => (
                <AntDesign
                style={styles.navButton}
                name="arrowright"
                size={24}
                onPress={()=> navigation.navigate('Second', {message: message})}>
                </AntDesign>
            )
        })
    },[message])
    return (
        <View style={styles.container}>
            <Text>Homer screen {message}</Text>
            <TextInput onChangeText={text=>setMessage(text)} value={message} placeholder="Type message here"></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    navButton:{
        marginRight: 5,
        padding: 4,
    }
});