import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function profile() {
    const { name, age } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.text}>Name: {name}</Text>
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
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
        color: "#333333",
    },
});
