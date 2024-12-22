import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'

export const ContactScreen = () => {
    const navigation = useNavigation()
    const [formData, setFormData] = useState({
        phone: '',
        address: '',
        data: '',
        index: ''
    })

    return (
        <AppLayout>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#4B018C', borderRadius: 12, width: '80%', marginVertical: 24, marginLeft: 'auto', marginRight: 'auto', }}>
                    <Text style={styles.title}>Контакты</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Номер</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.phone}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Адрес</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.address}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, address: text }))}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Данные</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.data}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, data: text }))}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Индекс</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.index}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, index: text }))}
                            keyboardType="number-pad"
                        />
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <MyTouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Store' as never)}
                >
                    <Text style={styles.buttonText}>НА ГЛАВНУЮ</Text>
                </MyTouchableOpacity>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        padding: 4,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    form: {
        gap: 14
    },
    inputContainer: {
        gap: 8
    },
    label: {
        marginLeft: 12,
        fontSize: 12,
        color: '#000000'
    },
    input: {
        borderWidth: 1,
        borderColor: '#4B018C',
        borderRadius: 54.77,
        padding: 8,
        fontSize: 16
    },
    footer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#ECEBEB'
    },
    button: {
        backgroundColor: '#4B018C',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    }
})
