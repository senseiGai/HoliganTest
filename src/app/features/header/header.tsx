import { View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MyTouchableOpacity from '../../../shared/ui/my-touchable-opacity/my-touchable-opacity'

import MenuIcon from '../../../shared/icons/menu-icon'
import BackIcon from '../../../shared/icons/back-icon'
import MiniLogoIcon from '../../../shared/icons/mini-logo-icon'
import MiniCartIcon from '../../../shared/icons/mini-cart-icon'


export const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <MyTouchableOpacity onPress={() => navigation.navigate('Menu' as never)}>
                    <MenuIcon />
                </MyTouchableOpacity>
                <MyTouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 14 }}>
                    <BackIcon />
                </MyTouchableOpacity>
            </View>
            <View style={{ marginLeft: -32 }}>
                <View style={{ width: 140, height: 60, borderRadius: 16, backgroundColor: '#4B018C', display: 'flex', alignItems: 'center' }}>
                    <MiniLogoIcon />
                </View>
            </View>
            <View>
                <MyTouchableOpacity onPress={() => navigation.navigate('Cart' as never)}>
                    <MiniCartIcon />
                </MyTouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
