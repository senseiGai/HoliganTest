import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useCartStore } from '../../entities/cart/use-cart-store'

interface FoodCardProps {
    title: string
    weight: string
    price: number
    image: any
}

const FoodCard: React.FC<FoodCardProps> = ({
    title,
    weight,
    price,
    image,
}) => {
    const { addItem } = useCartStore()

    const handleAddToCart = () => {
        addItem({ title, weight, price, image })
    }

    return (
        <View style={{ backgroundColor: '#ECEBEB', padding: 8, borderRadius: 14, display: 'flex', flexDirection: 'column', marginTop: 16 }}>
            <View style={styles.container}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.priceTag}>
                    <Text style={styles.priceText}>{price} $</Text>
                </View>
                <MyTouchableOpacity onPress={handleAddToCart} style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>В КОРЗИНУ</Text>
                </MyTouchableOpacity>
            </View>
            <Text style={{ marginTop: 8, fontSize: 18, fontWeight: '500' }}>{title}</Text>
            <Text style={{ marginTop: 8, fontSize: 12, fontWeight: '500', color: '#565353' }}>{weight}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    priceTag: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        backgroundColor: '#4B018CCC',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
    priceText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    cartButton: {
        position: 'absolute',
        bottom: 10,
        right: 32,
        backgroundColor: '#4B018C',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 12,
    },
    cartButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    infoContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    weight: {
        color: '#FFFFFF',
        fontSize: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
})

export default FoodCard