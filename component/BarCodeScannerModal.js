import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Modal, Pressable, Alert } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function BarCodeScanner(props) {
    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <QRCodeScanner
                    onRead={props.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.torch}
                    bottomContent={
                        <>
                            <TouchableOpacity style={[styles.RentBtn]} onPress={() => { props.setModalVisible(false) }}>
                                <Text style={styles.RentWord}>Close</Text>
                            </TouchableOpacity>
                        </>
                    }
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
