import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { Colors } from "@/constants/Colors"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
export default function HomeScreen() {
  const router = useRouter();
  const buttonBackgroundColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    "button"
  );

  return (
    <ThemedView
      style={styles.container}
      lightColor={Colors.light.backgroundSecondary}
      darkColor={Colors.dark.background}
    >
      <View style={styles.textContainer}>
        <ThemedText type="title">Administrador de Citas</ThemedText>
        <ThemedText
          type="subtitle"
          style={styles.highLightText}
          lightColor={Colors.colorPrimary}
          darkColor={Colors.colorPrimary}
        >
          {" "}
          Veterinarias
        </ThemedText>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        onPress={() => router.push("/newDate")}
      >
        <ThemedText
          type="defaultSemiBold"
          style={styles.buttonText}
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          NUEVA CITA
        </ThemedText>
      </TouchableOpacity>
      <ThemedText type="defaultSemiBold" style={styles.info}>
        No hay pacientes aún
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center", // Horizontal
  },
  textContainer: {
    alignItems: "center", // Centra el texto horizontalmente
  },
  highLightText: {
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "100%", // Ocupa todo el espacio disponible horizontalmente
  },
  buttonText: {
    textAlign: "center",
  },
  info: {
    marginTop: 20,
  },
});
