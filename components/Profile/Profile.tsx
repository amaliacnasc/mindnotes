import { ScrollView, Text, View, StyleSheet } from "react-native";
import * as React from 'react';
import { Avatar, Button } from 'react-native-paper';

export default function Profile() {

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.profileContainer}>
                <Avatar.Image size={250} source={require('../../assets/person1.jpg')} style={styles.avatar} />
                <Text style={styles.nameText}>Ana Paula</Text>
                <Text style={styles.emailText}>anapaula@example.com</Text>
                <View style={styles.buttonContainer}>
                    <Button icon="account" mode="contained" buttonColor="#FF6600" style={styles.button}>Editar Perfil</Button>
                    <Button icon="cog" mode="contained" buttonColor="#FF6600" style={styles.button}>Configurações</Button>
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF2E6', // Laranja claro
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        width: '100%',
    },
    avatar: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    emailText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
});
