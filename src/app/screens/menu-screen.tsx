import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { View } from 'react-native'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import Text from '../../shared/ui/text/text'
import { useNavigation } from '@react-navigation/native'

import LogoIcon from '../../shared/icons/logo-icon'
import CartIcon from '../../shared/icons/cart-icon'

const buttons = [
    { link: 'Store', label: 'МАГАЗИН' },
    { link: 'Booking', label: 'БРОНЬ' },
    { link: 'Catalog', label: 'КАТАЛОГ' },
    { link: 'Events', label: 'СОБЫТИЯ РЕСТОРАНА' },
]

export const MenuScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#5E00A8', '#120338']}
                style={{ height: 200, position: 'relative' }}
            >
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <LogoIcon />
                </View>
            </LinearGradient>
            <View style={styles.content}>
                {buttons.map((button, index) => (
                    <MyTouchableOpacity key={index} onPress={() => navigation.navigate(button.link as never)}>
                        <View style={styles.button}>
                            <Text style={{
                                color: '#FFFFFF', fontSize: 20, fontWeight: '800'
                            }}>{button.label}</Text>
                        </View>
                    </MyTouchableOpacity>
                ))}
                <MyTouchableOpacity>
                    <View style={styles.cart}>
                        <CartIcon />
                    </View>
                </MyTouchableOpacity>
            </View >
        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        gap: 20
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 60,
        borderRadius: 29.94,
        backgroundColor: '#300264'
    },
    cart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 85,
        borderRadius: '100%',
        backgroundColor: '#FEB000',
        marginTop: 44
    }

})
