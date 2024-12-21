import AppLayout from '../../shared/ui/app-layout/app-layout'
import { View } from 'react-native'
import Text from '../../shared/ui/text/text'
import FoodCard from '../../features/food-card/food-card'
import { ScrollView } from 'react-native'

import { StyleSheet } from 'react-native'
import CategoryButton from '../../shared/ui/category-button/category-button'

import { useCategoryStore } from '../../entities/active-button/use-category-store'

const categories = [
    {
        title: 'Обед',
        image: require('../../../assets/image/obed.png'),
    },
    {
        title: 'Ланч',
        image: require('../../../assets/image/lanch.png'),
        width: 102,
        height: 102,
    },
    {
        title: 'Десерт',
        image: require('../../../assets/image/dessert.png'),
    },
]

const lanch = [
    {
        title: 'Домашний бульон из равиоли',
        weight: '250г',
        price: 45,
        image: require('../../../assets/image/lanch01.png'),
    },
    {
        title: 'Французский крем-суп',
        weight: '280г',
        price: 30,
        image: require('../../../assets/image/lanch02.png'),
    },
    {
        title: 'Уха из семги',
        weight: '300г',
        price: 50,
        image: require('../../../assets/image/lanch03.png'),
    },
    {
        title: 'Paмен',
        weight: '350г',
        price: 30,
        image: require('../../../assets/image/lanch04.png'),
    }
]

const obed = [
    {
        title: 'Котлетки из говядины',
        weight: '200г',
        price: 25,
        image: require('../../../assets/image/obed01.png'),
    },
    {
        title: 'Паханка',
        weight: '350г',
        price: 30,
        image: require('../../../assets/image/obed02.png'),
    },
    {
        title: 'Курочка в сливочном соусе',
        weight: '280г',
        price: 55,
        image: require('../../../assets/image/obed03.png'),
    }
]

const dessert = [
    {
        title: 'Французский макрони',
        weight: '200г',
        price: 60,
        image: require('../../../assets/image/dessert01.png'),
    },
    {
        title: 'Шоколадник',
        weight: '400г',
        price: 70,
        image: require('../../../assets/image/dessert02.png'),
    }
]




export const StoreScreen = () => {
    const { activeCategory } = useCategoryStore()

    const renderContent = () => {
        switch (activeCategory) {
            case 'Обед':
                return (
                    <>
                        {obed.map((food, index) => (
                            <FoodCard
                                key={index}
                                title={food.title}
                                weight={food.weight}
                                price={food.price}
                                image={food.image}
                            />
                        ))}
                    </>
                )
            case 'Ланч':
                return (
                    <>
                        {lanch.map((food, index) => (
                            <FoodCard
                                key={index}
                                title={food.title}
                                weight={food.weight}
                                price={food.price}
                                image={food.image}
                            />
                        ))}
                    </>
                )
            case 'Десерт':
                return (
                    <>
                        {dessert.map((food, index) => (
                            <FoodCard
                                key={index}
                                title={food.title}
                                weight={food.weight}
                                price={food.price}
                                image={food.image}
                            />
                        ))}
                    </>
                )
            default:
                return null
        }
    }

    return (
        <AppLayout>
            <View style={{ flex: 1, marginTop: 32, alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    {categories.map((category, index) => (
                        <CategoryButton
                            key={index}
                            title={category.title}
                            image={category.image}
                            width={category.width}
                            height={category.height}
                        />
                    ))}
                </View>
                <View style={styles.button}>
                    <Text style={{
                        color: '#FFFFFF', fontSize: 18, fontWeight: '500'
                    }}>{activeCategory || 'Выберите категорию'}</Text>
                </View>
                <ScrollView style={{ width: '100%', marginTop: 12 }}>
                    {renderContent()}
                </ScrollView>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 35,
        borderRadius: 29.94,
        backgroundColor: '#4B018C'
    },
})