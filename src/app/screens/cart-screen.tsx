import React from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'

import { useCartStore } from '../../entities/cart/use-cart-store'
import EmojiIcon from '../../shared/icons/emoji-icon'

export const CartScreen = () => {
    const navigation = useNavigation()

    const { items, incrementQuantity, decrementQuantity, getTotal, clearCart } = useCartStore()

    const handleCheckout = () => {
        navigation.navigate('Success' as never)
        clearCart()
    }

    return (
        <AppLayout>
            <ScrollView style={styles.container}>
                {items.length === 0 ? (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartText}>КОРЗИНА ПУСТА</Text>
                        <View style={{ marginTop: 64 }}><EmojiIcon /></View>
                    </View>
                ) : (
                    items.map((item, index) => (
                        <View key={index} style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 16 }}>
                            <View style={styles.foodCard}>
                                <View style={styles.container}>
                                    <Image
                                        source={item.image}
                                        style={styles.image}
                                        resizeMode="cover"
                                    />
                                    <View style={styles.priceTag}>
                                        <Text style={styles.priceText}>{item.price} $</Text>
                                    </View>
                                </View>
                                <Text style={{ marginTop: 8, fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                                <Text style={{ marginTop: 8, fontSize: 12, fontWeight: '500', color: '#565353' }}>{item.weight}</Text>
                            </View>
                            <View style={styles.quantityControl}>
                                <MyTouchableOpacity
                                    onPress={() => decrementQuantity(item.id)}
                                    style={styles.quantityButton}
                                >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </MyTouchableOpacity>
                                <Text style={styles.quantity}>{item.quantity}</Text>
                                <MyTouchableOpacity
                                    onPress={() => incrementQuantity(item.id)}
                                    style={styles.quantityButton}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </MyTouchableOpacity>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
            {items.length === 0 ? (
                <View style={styles.footer}>
                    <MyTouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Store' as never)}>
                        <Text style={styles.checkoutText}>НА ГЛАВНУЮ</Text>
                    </MyTouchableOpacity>
                </View>
            ) : (
                <View style={styles.footer}>
                    <MyTouchableOpacity
                        style={styles.checkoutButton}
                        onPress={handleCheckout}
                    >
                        <Text style={styles.checkoutText}>ИТОГО {getTotal()} $</Text>
                    </MyTouchableOpacity>
                </View>
            )}
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        marginTop: 16,
    },
    foodCard: {
        padding: 8,
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
    },
    image: {
        width: '100%',
        height: 90,
        borderRadius: 8,
    },
    itemInfo: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    weight: {
        fontSize: 12,
        color: '#565353',
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4B018C',
    },
    priceTag: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        backgroundColor: '#4B018CCC',
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 12,
    },
    priceText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    quantityControl: {
        width: 40,
        height: 140,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    quantityButton: {
        width: 32,
        height: 32,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        color: '#4B018C',
        fontSize: 24,
        fontWeight: '600',
    },
    quantity: {
        backgroundColor: '#4B018C',
        width: 32,
        height: 32,
        borderRadius: 4,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
        lineHeight: 32,
    },
    footer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#ECEBEB',
    },
    checkoutButton: {
        backgroundColor: '#4B018C',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    checkoutText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    emptyCartText: {
        fontSize: 32,
        fontWeight: '900',
        color: '#32026866',
    },
})
