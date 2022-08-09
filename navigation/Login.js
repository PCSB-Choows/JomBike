import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native';

function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.MainLabel}>Jom Bike</Text>
            <View style={styles.row_item}>
                <Text style={styles.TitleView}>User Name</Text>
                <TextInput style={styles.TextInputStyle}/>
            </View>
            <View style={styles.row_item}>
                <Text style={styles.TitleView}>Password</Text>
                <TextInput style={styles.TextInputStyle} secureTextEntry={true}/>
            </View>
            <Button title='Login' style={styles.buttonview} onPress={()=>{navigation.navigate('Home')}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ebe8e1'
    },
    MainLabel:{
        fontSize:40,
        marginBottom:40
    },
    row_item :{
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    TextInputStyle:{
        borderColor:'grey',
        borderWidth:1,
        width:'50%',
        padding:0.5,
        paddingHorizontal:10
    },
    TitleView:{
        width:'20%'
    },
    buttonview:{
        marginTop:200
    }
});
export default LoginScreen;