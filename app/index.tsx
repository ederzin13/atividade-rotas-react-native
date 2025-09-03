import { View, Text, StyleSheet, Button } from "react-native";
import { Link, useRouter } from "expo-router";
import React from "react";

export default function index() {
    const router = useRouter();

    const user = {
        id: 12,
        name: "Boberson",
        age: 20,
    };

    const handleLinkWithParams = () => {
        router.push({
            pathname: "/details/profile",
            params: { name: user.name, age: user.age },
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela inicial INDEX</Text>
            <Link style={styles.link} href={`/details/${user.id}`}>
                Ir para a tela do ID
            </Link>
            <Link
                style={styles.link}
                href={`/details/${Math.floor(Math.random() * 10)}`}
            >
                Ir para a tela do ID ALEATÓRIO
            </Link>
            <Button onPress={handleLinkWithParams} title="Perfil!" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffece4ff",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
    link: {
        fontSize: 25,
        color: "#2d92ffff",
    },
});
