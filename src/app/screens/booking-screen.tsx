import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import MyTouchableOpacity from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'

export const BookingScreen = () => {
    const navigation = useNavigation()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        table: '',
        time: '',
        date: ''
    })

    return (
        <AppLayout>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#4B018C', borderRadius: 12, width: '80%', marginVertical: 24, marginLeft: 'auto', marginRight: 'auto', }}>
                    <Text style={styles.title}>Зарезервировать столик</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Имя...</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.name}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Номер телефона</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.phone}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Столик</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.table}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, table: text }))}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Время</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.time}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, time: text }))}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Дата</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.date}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, date: text }))}
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
