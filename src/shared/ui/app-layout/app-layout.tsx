import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Header } from '../../../features/header/header'
import { View, ImageBackground, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
    children: React.ReactNode
    isBackground?: boolean
    backgroundImage?: any
    isBlack?: boolean
}

const AppLayout = ({ children, isBackground = false, backgroundImage, isBlack = false }: Props) => {
    if (isBackground && backgroundImage) {
        return (
            <View style={styles.fullScreen}>
                <LinearGradient
                    colors={isBlack ? ['#000000', 'rgba(0, 0, 0, 0)'] : ['#F3F3F3', 'rgba(243, 243, 243, 0)']}
                    style={[styles.gradient, { height: isBlack ? '100%' : 300 }]}
                    locations={[0, 1]}
                />
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <SafeAreaView style={[styles.safeArea, { backgroundColor: 'transparent' }]}>
                        <Header isBackground={true} />
                        <View style={styles.content}>
                            {children}
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.safeArea, styles.container]}>
            <Header isBackground={false} />
            <View style={styles.content}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        opacity: 1
    },
    fullScreen: {
        flex: 1,
        backgroundColor: '#000',
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 16,
        zIndex: 2

    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    content: {
        flex: 1
    }
})

export default AppLayout