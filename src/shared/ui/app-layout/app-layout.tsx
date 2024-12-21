import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Header } from '../../../app/features/header/header'
import { View } from 'react-native'

interface Props {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 16 }}>
            <Header />
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default AppLayout