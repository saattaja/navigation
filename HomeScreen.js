import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { AntDesing } from '@expo/vector-icons'

export default function HomeScreen({navigation}){
const [message, setMessage] = useState('Testing');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
            headerRight: () => (
                <AntDesing
                style={styles.navButton}
                name="arrowright"
                size={24}
                onPress={()=> navigation.navigate('Second', {message: message})}>
                </AntDesing>
            )
        })
    },[message])
    return (
        <View style={styles.container}>
            <Text>Homer screen {message}</Text>
            <TextInput onChange={text=>setMessage(text)} value={message} placeholder="Type message here"></TextInput>
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