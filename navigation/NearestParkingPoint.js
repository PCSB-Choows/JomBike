import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Modal, Pressable, Alert } from 'react-native';

function NearestParkingPoint({navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.RowView}> 
                <View style={styles.Wording}>
                    <Text style={[styles.DetailWord , {textAlign:'left',alignSelf:'flex-start'}]}>KA Block</Text>
                </View>
                <View style={styles.Wording}>
                    <Text style={styles.DetailWord}>0.8 KM</Text>
                </View>
            </View>
            <View style={styles.RowView}> 
                <View style={styles.Wording}>
                    <Text style={[styles.DetailWord , {textAlign:'left',alignSelf:'flex-start'}]}>KB Block</Text>
                </View>
                <View style={styles.Wording}>
                    <Text style={styles.DetailWord}>0.8 KM</Text>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignContent:'center',
        alignItems:'center'
    },
    RowView:{
        width:'100%',
        height:'10%',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#adadac'
    },
    Wording:{
        width:'50%',
        padding:20,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    DetailWord:{
        fontSize:15,
        color:'black',
        fontWeight:'bold'
    },
    RentBtn: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#5642C2',
        width: '90%',
        padding: 10,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RentWord: {
        color: 'white'
    }
});
export default NearestParkingPoint;