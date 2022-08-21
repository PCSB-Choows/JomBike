import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Modal, Pressable, Alert, Dimensions } from 'react-native';

function WhereToPark({ navigation }) {
    return (
        <View style={styles.container}>
            <MapView
                style={{ height: '100%', width: '100%' }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker title='Bike 1' coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
                <Marker title='Bike 2' coordinate={{
                    latitude: 37.78925,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
            </MapView>
            <TouchableOpacity style={styles.RentBtn} onPress={()=>{navigation.navigate('NearestParkingPoint')}}>
                <Text style={styles.RentWord}>Search Nearest Parking Point</Text>
            </TouchableOpacity>
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
        backgroundColor: '#ebe8e1'
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
export default WhereToPark;

