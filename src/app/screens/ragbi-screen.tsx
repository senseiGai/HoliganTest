import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'

export const RagbiScreen = () => {
    return (
        <AppLayout
            isBackground
            isBlack
            backgroundImage={require('../../../assets/image/event07.png')}
        >
            <View style={{ width: '100%', marginTop: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, textAlign: 'right', fontWeight: '500' }}>29 ноября в 18:00</Text>
            </View>
            <MyTouchableOpacity style={styles.eventButton} >
                <Text style={styles.eventTitle}>Регби-вечер</Text>
            </MyTouchableOpacity>
            <Text style={{ color: '#FFFFFF', fontSize: 16, textAlign: 'center', fontWeight: '500', marginTop: 20 }}>
                Насладитесь захватывающими трансляциями важнейших регбийных матчей в атмосфере настоящего спортивного духа
            </Text>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    eventButton: {
        backgroundColor: '#4B018C',
        borderRadius: 60,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginTop: 5,
        alignItems: 'center',
    },
    eventTitle: {
        color: '#FEB000',
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center'
    },
    cardBackground: {
        width: '100%',
        height: 300,
        alignItems: 'center'
    },
    cardImage: {
        borderRadius: 20
    },
    textContainer: {
        borderRadius: 20,
        width: '100%',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 20
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 20,
        fontWeight: '400'
    }
})
