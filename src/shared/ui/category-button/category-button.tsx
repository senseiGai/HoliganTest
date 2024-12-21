import React from 'react'
import { Image, StyleSheet } from 'react-native'
import MyTouchableOpacity from '../my-touchable-opacity/my-touchable-opacity'
import Text from '../text/text'
import { useCategoryStore } from '../../../entities/active-button/use-category-store.ts'

interface CategoryButtonProps {
    title: string
    image: any
    onPress?: () => void
    width?: number
    height?: number
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
    title,
    image,
    onPress,
    width = 100,
    height = 100,
}) => {
    const { activeCategory, setActiveCategory } = useCategoryStore()
    const isActive = activeCategory === title

    const handlePress = () => {
        setActiveCategory(title)
        onPress?.()
    }

    return (
        <MyTouchableOpacity onPress={handlePress} style={styles.container}>
            <Image source={image} style={[styles.image, { width, height }]} resizeMode="cover" />
            <Text
                weight={isActive ? 'bold' : 'regular'}
                style={[
                    styles.text,
                    { color: isActive ? '#F3BA2F' : '#1A1A1A' },
                ]}>
                {title}
            </Text>
        </MyTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    image: {
        borderRadius: 12,
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
})

export default CategoryButton