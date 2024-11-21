import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/head.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        Alert.alert('Sucesso', 'Login efetuado com sucesso!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>MINDNOTES</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    label='Email'
                    value={email}
                    onChangeText={setEmail}
                    mode='outlined'
                    outlineColor='#FF6600'
                    style={styles.input}
                />
                <TextInput
                    label='Senha'
                    value={password}
                    onChangeText={setPassword}
                    mode='outlined'
                    outlineColor='#FF6600'
                    secureTextEntry
                    style={styles.input}
                />
                <Button mode="contained" buttonColor="#FF6600" style={styles.button} onPress={handleLogin}>
                    Login
                </Button>
                <TouchableOpacity>
                    <Text style={styles.cta}>Primeira vez por aqui? Crie uma conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF2E6',
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginBottom: 0,
        bottom: 450,
        top: 60,
        left: 0,
        right: 0,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6600',
        textTransform: 'uppercase',
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        marginBottom: 25,
    },
    button: {
        width: '60%',
        paddingVertical: 6,
    },
    cta: {
        color: 'blue',
        fontSize: 14,
        marginTop: 10,
    }
});
