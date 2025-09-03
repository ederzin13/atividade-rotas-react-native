import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
    return (
        <Stack screenOptions={{ animation: "slide_from_right" }}>
            <Stack.Screen name="index" options={{ title: "Tela Inicial" }} />
            <Stack.Screen
                name="details/[id]"
                options={{ title: "Segunda tela" }}
            />
            <Stack.Screen
                name="details/profile"
                options={{ title: "Perfil" }}
            />
        </Stack>
    );
}
