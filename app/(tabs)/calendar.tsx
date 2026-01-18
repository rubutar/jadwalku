import { ScrollView, Text, Pressable, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useRouter } from "expo-router"
import { getTodayKey } from "../../utils/date"

const STORAGE_KEY = "jadwalku.daily.checked"

export default function CalendarScreen() {
  const [dates, setDates] = useState<string[]>([])
  const router = useRouter()
  const today = getTodayKey()

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(value => {
      if (!value) return
      const data = JSON.parse(value)
      const uniqueDates = Array.from(
        new Set(Object.keys(data).map(k => k.split("|")[0]))
      )
      setDates(uniqueDates.sort().reverse())
    })
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📆 Riwayat</Text>

      {dates.map(date => (
        <Pressable
          key={date}
          style={styles.item}
          onPress={() => router.push(`/calendar/${date}`)}
        >
          <Text style={styles.date}>
            {date === today ? "📍 " : ""}
            {date}
          </Text>
        </Pressable>
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
    marginBottom: 12
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb"
  },
  date: {
    fontSize: 16
  }
})
