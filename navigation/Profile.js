import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Modal, Pressable, Alert } from 'react-native';

function Profile({navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTitleText}>NAME</Text>
                <View style={styles.rowTitleCol}>
                    <Text style={styles.TextInsideBox}>Sample Name</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTitleText}>BIRTHDAY</Text>
                <View style={styles.rowTitleCol}>
                    <Text style={styles.TextInsideBox}>12/12/2022</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTitleText}>PHONE</Text>
                <View style={styles.rowTitleCol}>
                    <Text style={styles.TextInsideBox}>0123456789</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.rowTitleText}>POINTS</Text>
                <View style={styles.rowTitleCol}>
                    <Text style={styles.TextInsideBox}>500 POINTS</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    rowContainer:{
        height:'15%',
        backgroundColor:'white',
        width:'100%',
        padding:20
    },
    rowTitleText:{
        color:'black',
        fontWeight:'bold'
    },
    rowTitleCol:{
        backgroundColor:'#ebedf0',
        width:'100%',
        padding:10,
        borderRadius:10,
        marginTop:'3%'
    },
    TextInsideBox:{
        color:'black'
    }
});

export default Profile;