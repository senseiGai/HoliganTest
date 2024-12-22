import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'

export const CricketScreen = () => {
    return (
        <AppLayout
            isBackground
            isBlack
            backgroundImage={require('../../../assets/image/event07.png')}
        >
            <View style={{ width: '100%', marginTop: 20 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, textAlign: 'right', fontWeight: '500' }}>30 ноября в 18:00</Text>
            </View>
            <MyTouchableOpacity style={styles.eventButton} >
                <Text style={styles.eventTitle}>Крикетный день</Text>
            </MyTouchableOpacity>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 40, width: '100%', height: 160, backgroundColor: '#FEB000', borderRadius: 50 }}>
                <Text style={{ textAlign: 'center', fontSize: 16, width: '80%', fontWeight: '400' }}><Text style={{ fontStyle: 'italic' }}>Погрузитесь в мир увлекательных</Text> <Text style={{ fontWeight: '500' }}>крикетных матчей</Text> в атмосфере, созданной специально для любителей этой игры, и насладитесь изысканными блюдами!</Text>
            </View>
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
