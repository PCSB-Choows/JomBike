import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Modal, Pressable, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import BarCodeScanner from '../component/BarCodeScannerModal';
import RentDetailModal from '../component/RentDetailModal';

function Home({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [detailModalVisible, setdetailModalVisible] = React.useState(false);
    const [BikeNum , setBikeNum] = React.useState('');
    const BikeLocation = [
        {
            latitude: 37.79825,
            longitude: -122.4424,
            title: 'Bike 1',
            description: "Description bike 1"
        }
    ]
    const onSuccess = (e) => {
        if(e.data){
            setModalVisible(false); setdetailModalVisible(true)
        }
    }
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
            <BarCodeScanner modalVisible={modalVisible} setModalVisible={setModalVisible} onSuccess={onSuccess}/>
            <RentDetailModal detailModalVisible={detailModalVisible} setdetailModalVisible={setdetailModalVisible} navigation={navigation}/>
            
            <TouchableOpacity style={styles.RentBtn} onPress={() => { setModalVisible(true) }}>
                <Text style={styles.RentWord}>RENT A BIKE</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    rowitem: {
        flexDirection: 'row',
        width: '80%',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebe8e1'
    },
    centeredView: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
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
export default Home;