import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import { Image } from 'react-native'




export const GamesScreen = () => {
    return (
        <>
            <AppLayout
                isBackground
                backgroundImage={require('../../../assets/image/event02.png')}
            >
                <View style={{ position: 'absolute', bottom: 100, left: -18, justifyContent: 'center', alignItems: 'center', width: 400, height: 500 }}>
                    <Image source={require('../../../assets/image/event03.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={{ position: 'relative', bottom: -400, left: 40, justifyContent: 'center', alignItems: 'center', width: 340, height: 340 }}>
                    <Image source={require('../../../assets/image/event04.png')} style={{ width: '100%', height: '100%' }} />
                    <Text style={{ position: 'absolute', bottom: 100, left: 75, justifyContent: 'center', alignItems: 'center', fontSize: 14, color: '#000000', width: '58%', textAlign: 'center', fontWeight: '600' }}><Text style={{ fontWeight: '800' }}>Не упустите шанс</Text> провести незабываемый вечер в веселой и дружеской атмосфере нашего ресторана!</Text>
                </View>
            </AppLayout>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        gap: 16,
        zIndex: 2,
        paddingHorizontal: 14,
        paddingBottom: 16
    },
    eventContainer: {
        width: '100%'
    },
    eventButton: {
        backgroundColor: '#4B018C',
        borderRadius: 60,
        paddingVertical: 12,
        paddingHorizontal: 8,
        alignItems: 'center',
    },
    eventTitle: {
        color: '#FEB000',
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center'
    },
    eventDate: {
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 4,
        opacity: 0.8
    }
})
