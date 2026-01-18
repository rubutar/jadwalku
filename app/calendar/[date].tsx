import { ScrollView, Text, StyleSheet } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ScheduleCard from "../../components/ScheduleCard"
import { schedules, PersonKey } from "../../data/schedule"

const STORAGE_KEY = "jadwalku.daily.checked"

type CheckedMap = Record<string, boolean>

export default function CalendarDetailScreen() {
  const { date } = useLocalSearchParams<{ date: string }>()
  const [checked, setChecked] = useState<CheckedMap>({})

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(value => {
      if (value) setChecked(JSON.parse(value))
    })
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📅 {date}</Text>

      {(["mamak", "bapak"] as PersonKey[]).map(person => (
        <Text key={person} style={styles.person}>
          {person.toUpperCase()}
        </Text>
      ))}

      {(["mamak", "bapak"] as PersonKey[]).map(person => (
        <ScrollView key={person}>
          <Text style={styles.personHeader}>
            {person.toUpperCase()}
          </Text>

          {(schedules[person] ?? []).map(item => {
            const scheduleKey = `${item.time}-${item.title}`
            const key = `${date}|${person}|${scheduleKey}`
            const isChecked = checked[key] ?? false

            return (
              <ScheduleCard
                key={key}
                time={item.time}
                title={item.title}
                notes={item.notes}
                checked={isChecked}
                onToggle={() => {}}
              />
            )
          })}
        </ScrollView>
      ))}
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
    marginBottom: 16
  },
  personHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8
  }
})
