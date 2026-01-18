import { ScrollView, StyleSheet, Text } from "react-native"
import { useState } from "react"

import { schedules, PersonKey } from "../../data/schedule"
import ScheduleCard from "../../components/ScheduleCard"
import PersonSelector from "../../components/PersonSelector"
import { useScheduleState } from "../../hooks/useScheduleState"

export default function ScheduleScreen() {
  const [person, setPerson] = useState<PersonKey>("bapak")
  const { isChecked, toggle } = useScheduleState()

  const list = schedules?.[person] ?? []

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>📅 jadwalku</Text>

      {/* Person selector */}
      <PersonSelector value={person} onChange={setPerson} />

      {/* Schedule list */}
      {list.map(item => {
        const scheduleKey = `${item.time}-${item.title}`

        return (
          <ScheduleCard
            key={`${person}-${scheduleKey}`}
            time={item.time}
            title={item.title}
            notes={item.notes}
            checked={isChecked(person, scheduleKey)}
            onToggle={() => toggle(person, scheduleKey)}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12
  }
})
