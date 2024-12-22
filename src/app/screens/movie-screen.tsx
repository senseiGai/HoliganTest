import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'

export const MovieScreen = () => {
    return (
        <AppLayout
            isBackground
            backgroundImage={require('../../../assets/image/event05.png')}
        >
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../../assets/image/event06.png')}
                    style={styles.cardBackground}
                    imageStyle={styles.cardImage}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            Приглашаем вас на уникальный{'\n'}
                            Вечер Кино с Ужином
                        </Text>
                        <Text style={styles.description}>
                            Окунитесь в мир кино и{'\n'}
                            гастрономии и проведите вечер{'\n'}
                            в атмосфере волшебства и{'\n'}
                            вкусных открытий!
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
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
        color: '#4B018C',
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 20
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#000000',
        marginTop: 20,
        fontWeight: '400'
    }
})
