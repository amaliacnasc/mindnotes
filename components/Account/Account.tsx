import React, { useState } from 'react';
import { Text, Image, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import axios, { AxiosError } from 'axios'; // Importando Axios e AxiosError
import { NavigationProp } from '@react-navigation/native'; // Importando o tipo NavigationProp
import logo from '../../assets/head.png';
import styles from './AccountStyle';
// Definindo a interface para as props

interface AccountProps {
    navigation: NavigationProp<any>; // Tipando a propriedade navigation
}
function Account( navigation }: AccountProps }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = async () => {
        if (!name || !email || !phone || !password || !confirmPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        try {
            const response = await axios.post('https://seu-endpoint/api/usuarios/criar', {
                name,
                email,
                phone,
                password,
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Conta criada com sucesso!');
                navigation.navigate('Login'); // Redireciona para a tela de login
            } else {
                Alert.alert('Erro', 'Falha ao criar a conta.');
            }
        } catch (error) {
            // Verificação se o erro é do tipo AxiosError
            if (axios.isAxiosError(error)) {
                // Agora 'error' é do tipo AxiosError
                Alert.alert('Erro', error.response?.data.message || 'Falha ao criar a conta.');
            } else {
                Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>MINDNOTES</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    label="Nome"
                    value={name}
                    onChangeText={setName}
                    mode="outlined"
                    style={styles.input}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    style={styles.input}
                />
                <TextInput
                    label="Celular"
                    value={phone}
                    onChangeText={setPhone}
                    mode="outlined"
                    keyboardType="phone-pad"
                    style={styles.input}
                />
                <TextInput
                    label="Senha"
                    value={password}
                    onChangeText={setPassword}
                    mode="outlined"
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput
                    label="Confirmar Senha"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    mode="outlined"
                    secureTextEntry
                    style={styles.input}
                />
                <Button
                    mode="contained"
                    buttonColor="#FF6600"
                    style={styles.button}
                    onPress={handleCreateAccount}
                >
                    Criar Conta
                </Button>
            </View>
        </ScrollView>
    );
}

export default Account;
