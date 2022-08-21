import * as React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Modal, Pressable, Alert, Dimensions, ImageBackground } from 'react-native';

function IntroPage({ navigation }) {
    return (
        <ImageBackground resizeMode='cover' source={require('../images/background.png')} style={styles.container}>
            <Text style={styles.SungaiLongWording}>Utar Sungai Long Campus</Text>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
            <Text style={styles.minor}>An Hourly Bicycle Rental Platform</Text>
            <TouchableOpacity style={styles.RentBtn2} onPress={() => { setModalVisible(true) }}>
                <Text style={styles.RentWord2}>Learn More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.RentBtn} onPress={() => { navigation.navigate('Home')}}>
                <Text style={styles.RentWord}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    SungaiLongWording:{
        width:'100%',
        textAlign:'left',
        padding:'10%',
        color:'black',
        fontSize:15,
        fontWeight:'bold'
    },
    logo:{
        resizeMode:'contain',
        height:'30%'
    },
    minor:{
        width:'100%',
        textAlign:'center',
        padding:'10%',
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        marginBottom:'40%'
    },
    RentBtn: {
        position: 'absolute',
        bottom: '10%',
        backgroundColor: '#5642C2',
        width: '90%',
        padding: 10,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RentBtn2: {
        position: 'absolute',
        bottom: '20%',
        backgroundColor: 'white',
        width: '90%',
        padding: 10,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RidingView: {
        position: 'absolute',
        height: '15%',
        bottom: 0,
        backgroundColor: '#5642C2',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    RentWord: {
        color: 'white'
    },
    RentWord2:{
        color:'black'
    }
});
export default IntroPage;