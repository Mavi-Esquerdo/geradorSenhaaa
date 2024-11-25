import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function SavedPasswords({ route }) {
    const { savedPasswords } = route.params; // Recebendo as senhas salvas via parametro de navegação

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Senhas Salvas</Text>
            <FlatList 
            data={savedPasswords}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>{item}</Text>
                </View>
            )}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4B2FF',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    passwordContainer: {
        backgroundColor: '#9D8FFF',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
    },
    passwordText: {
        fontSize: 16,
        color: '#000'
    },
});