import { View, Text, Pressable, StyleSheet } from "react-native"

type Props = {
  time: string
  title: string
  notes: string[]
  checked: boolean
  onToggle: () => void
}

export default function ScheduleCard({
  time,
  title,
  notes,
  checked,
  onToggle
}: Props) {
  return (
    <Pressable
      onPress={onToggle}
      style={({ pressed }) => [
        styles.card,
        checked && styles.checked,
        pressed && styles.pressed
      ]}
    >
      {/* Header row */}
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Toggle */}
        <Pressable
          onPress={onToggle}
          style={[
            styles.toggle,
            checked && styles.toggleOn
          ]}
        >
          <View
            style={[
              styles.knob,
              checked && styles.knobOn
            ]}
          />
        </Pressable>
      </View>

      {/* Notes */}
      {notes.map((note, i) => (
        <Text key={i} style={styles.note}>
          • {note}
        </Text>
      ))}
    </Pressable>
  )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  checked: {
    backgroundColor: "#ecfdf5",
    borderColor: "#22c55e"
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }]
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6
  },
  left: {
    flex: 1,
    paddingRight: 12
  },

  time: {
    fontWeight: "700",
    color: "#4f46e5"
  },
  title: {
    fontWeight: "600",
    marginTop: 2
  },
  note: {
    fontSize: 14,
    marginLeft: 4,
    marginTop: 2
  },

  /* Toggle */
  toggle: {
    width: 46,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#e5e7eb",
    padding: 3,
    justifyContent: "center"
  },
  toggleOn: {
    backgroundColor: "#22c55e"
  },
  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignSelf: "flex-start"
  },
  knobOn: {
    alignSelf: "flex-end"
  }
})

