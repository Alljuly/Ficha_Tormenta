import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function Home() {
    const title = require('../../../assets/titulo.png');
    const onPressCreate = () => { } // por na rota de criar 
    const onPressRound = () => { } // rota sobre o RPG

    return (
        <View style={style.contain}>
            <LinearGradient style={style.linearGradient}
                start={{ x: 0, y: 0.6 }}
                end={{ x: 0.6, y: 0 }}
                locations={[0.4, 0.8]}
                colors={['#ff6600', '#ff8c66']} />
            <View style={style.box}>
                <Image source={title} resizeMode='center' style={{ width: 500, height: 200 }} />
                <TouchableOpacity activeOpacity={0.8} onPress={onPressCreate} style={style.button}>
                    <Text style={style.textButton}> Começar a criar </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={onPressRound} style={style.button}>
                    <Text style={style.textButton}> Sobre o Jogo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    box: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '80%',
        width: '60%',
        borderRadius: 35,
        backgroundColor: 'rgb(255, 255, 255)',
        boxshadow: '25px 25px 25px rgba(0, 0, 0, 0.363)'
    },
    contain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },
    button: {
        width: '50%',
        height: 65,
        backgroundColor: 'rgb(0, 26, 51)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    },
    textButton: {
        color: 'rgb(224, 220, 220)',
        fontsize: 20
    }
});