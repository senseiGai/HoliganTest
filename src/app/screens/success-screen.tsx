import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import SuccessIcon from '../../shared/icons/success'

import { Image } from 'react-native'

export const SuccessScreen = () => {
    const navigation = useNavigation()

    return (
        <AppLayout>
            <View style={styles.container}>
                <SuccessIcon />
                <Text style={styles.title}>Ваш заказ успешно размещен</Text>
                <View style={styles.qrCode}>
                    <Image source={require('../../../assets/image/qr.png')} style={styles.qrPlaceholder} />

                </View>
            </View>
            <View style={styles.footer}>
                <MyTouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Store' as never)}
                >
                    <Text style={styles.buttonText}>НА ГЛАВНУЮ</Text>
                </MyTouchableOpacity>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 14,
        marginTop: 84,
    },
    qrCode: {
        width: 200,
        height: 200,
    },
    qrPlaceholder: {
        width: '100%',
        height: '100%',
    },
    footer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#ECEBEB'
    },
    button: {
        backgroundColor: '#4B018C',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    }
})
