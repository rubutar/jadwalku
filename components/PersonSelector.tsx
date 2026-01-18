import { View, Text, Pressable, StyleSheet } from "react-native"
import { PersonKey } from "../data/schedule"

type Props = {
  value: PersonKey
  onChange: (v: PersonKey) => void
}

export default function PersonSelector({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      {(["mamak", "bapak"] as PersonKey[]).map(p => (
        <Pressable
          key={p}
          onPress={() => onChange(p)}
          style={[
            styles.option,
            value === p && styles.active
          ]}
        >
          <Text
            style={[
              styles.text,
              value === p && styles.activeText
            ]}
          >
            {p.toUpperCase()}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#e5e7eb",
    borderRadius: 10
  },
  option: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  active: {
    backgroundColor: "#4f46e5"
  },
  text: {
    fontWeight: "600"
  },
  activeText: {
    color: "#fff"
  }
})
