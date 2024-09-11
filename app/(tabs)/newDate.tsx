import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { ThemedView } from "@/components/ThemedView"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function NewDate() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const buttonBackgroundColor = useThemeColor(
    { light: Colors.colorSecondary, dark: Colors.colorSecondary },
    "button"
  );

  const addButtonBackgroundColor = useThemeColor(
    { light: Colors.colorTertiary, dark: Colors.colorTertiary },
    "button"
  );

  const placeholderColor = useThemeColor(
    { light: Colors.light.placeholder, dark: Colors.dark.placeholder },
    "placeholder"
  );

  return (
    <ThemedView
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <ThemedText
        type="title"
        style={styles.title}
        lightColor={Colors.light.textLight}
        darkColor={Colors.dark.textLight}
      >
        Nueva Cita
      </ThemedText>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        onPress={() => {}}
      >
        <ThemedText
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
          type="defaultSemiBold"
        >
          X CANCELAR
        </ThemedText>
      </TouchableOpacity>
      <View style={styles.form}>
        <ThemedText
          type="default"
          style={styles.label}
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          Nombre de paciente
        </ThemedText>
        <TextInput
          style={[styles.input, { backgroundColor: placeholderColor }]}
          placeholder="Nombre de paciente"
        />

        <ThemedText
          type="default"
          style={styles.label}
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          Nombre propietario
        </ThemedText>
        <TextInput
          style={[styles.input, { backgroundColor: placeholderColor }]}
          placeholder="Nombre propietario"
        />

        <ThemedText
          type="default"
          style={styles.label}
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          Email propietario
        </ThemedText>
        <TextInput
          style={[styles.input, { backgroundColor: placeholderColor }]}
          placeholder="Email propietario"
        />

        <ThemedText
          type="default"
          style={styles.label}
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          Teléfono propietario
        </ThemedText>
        <TextInput
          style={[styles.input, { backgroundColor: placeholderColor }]}
          placeholder="Teléfono propietario"
        />
        <ThemedText
          type="default"
          style={styles.label}
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          Fecha Alta
        </ThemedText>
        <TouchableOpacity
          style={[
            styles.datePickerButton,
            { backgroundColor: placeholderColor },
          ]}
          onPress={() => setShowDatePicker(true)}
        >
          <View>
            <ThemedText type="default">{date.toLocaleDateString()}</ThemedText>
          </View>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        <ThemedText
          type="default"
          style={styles.label}
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          Síntomas
        </ThemedText>
        <TextInput
          style={[
            styles.input,
            styles.symptomsInput,
            { backgroundColor: placeholderColor },
          ]}
          placeholder="Síntomas"
          multiline
        />
      </View>
      <TouchableOpacity
        style={[
          styles.addButton,
          { backgroundColor: addButtonBackgroundColor },
        ]}
        onPress={() => {}}
      >
        <ThemedText
          type="defaultSemiBold"
          lightColor={Colors.light.textLight}
          darkColor={Colors.dark.textLight}
        >
          AGREGAR PACIENTE
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
  },
  form: {
    flex: 1,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  symptomsInput: {
    height: 80,
  },
  button: {
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 16,
    marginBottom: 20,
  },
  addButton: {
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 16,
  },
  datePickerButton: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
});
