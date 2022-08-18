import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Modal, Pressable, Alert } from 'react-native';

export default function RentDetailModal(props) {
    const [Total, setTotal] = React.useState('0');
    const [RentTime, setRentTime] = React.useState('0');
    const PerMinPriceSample = 0.7;
    const onChanged = (text) => {
        setRentTime(text.replace(/[^0-9]/g, ''))
        let Price = parseInt(text.replace(/[^0-9]/g, ''));
        setTotal(PerMinPriceSample * Price);
        if (text.replace(/[^0-9]/g, '') == '')
            setTotal('0');
    }
    const onConfirm=()=>{
        if(parseInt(Total) <=0)
            return;
        props.setdetailModalVisible(false);
        props.navigation.navigate('RentDetail', {
            itemId: 86,
            otherParam: 'anything you want here',
            header : 'ON GOING RIDE',
            Renttime : RentTime
          });
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.detailModalVisible}
            onRequestClose={() => {
                props.setdetailModalVisible(!props.detailModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.rowitem}>
                    <Text style={{ width: '30%', textAlign: 'right' }}>Price per Min</Text>
                    <Text style={{ width: '70%', textAlign: 'center' }}> RM 0.70</Text>
                </View>
                <View style={styles.rowitem}>
                    <Text style={{ width: '30%', textAlign: 'right' }}>Time(Min)</Text>
                    <View style={{ width: '70%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TextInput style={{ width: '70%', borderWidth: 1, padding: 3 }} textAlign='center' value={RentTime} onChangeText={onChanged} />
                    </View>
                </View>
                <View style={styles.rowitem}>
                    <Text style={{ width: '30%', textAlign: 'right' }}>Total </Text>
                    <Text style={{ width: '70%', textAlign: 'center' }}> RM {Total.toString()}</Text>
                </View>
                <TouchableOpacity style={[styles.RentBtn, { bottom: 80 }]} onPress={() => { onConfirm() }}>
                    <Text style={styles.RentWord}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.setdetailModalVisible(false) }} style={styles.RentBtn}>
                    <Text style={styles.RentWord}>Close</Text>
                </TouchableOpacity>
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
    rowitem: {
        flexDirection: 'row',
        width: '80%',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
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
