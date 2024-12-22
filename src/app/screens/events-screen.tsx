import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import Text from '../../shared/ui/text/text'

const events = [
    { title: 'Вечер Игр и Развлечений', date: '', link: 'Games' },
    { title: 'Вечер Кино с Ужином', date: '', link: 'Movie' },
    { title: 'Регби-вечер', date: '', link: 'Ragbi' },
    { title: 'Крикетный день', date: '', link: 'Cricket' },
]

export const EventsScreen = () => {
    const navigation = useNavigation()

    return (
        <>
            <AppLayout
                isBackground
                backgroundImage={require('../../../assets/image/event01.png')}
            >
                <View style={styles.container}>
                    {events.map((event, index) => (
                        <View key={index} style={styles.eventContainer}>
                            <MyTouchableOpacity style={styles.eventButton} onPress={() => navigation.navigate(event.link as never)}>
                                <Text style={styles.eventTitle}>{event.title}</Text>
                                {event.date && (
                                    <Text style={styles.eventDate}>{event.date}</Text>
                                )}
                            </MyTouchableOpacity>
                        </View>
                    ))}
                </View>
            </AppLayout>
        </>
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 200,
        zIndex: 20,
        opacity: 0.9
    },
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
