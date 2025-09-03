import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function screen() {
    const { id, randomId } = useLocalSearchParams(); 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela do parâmetro: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffece4ff",
    },

    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
});
