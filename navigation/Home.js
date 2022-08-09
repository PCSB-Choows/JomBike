import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


function Home({ navigation }) {
    const BikeLocation = [
        {
            latitude: 37.79825,
            longitude: -122.4424,
            title: 'Bike 1',
            description: "Description bike 1"
        }
    ]
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
    }
});
export default Home;