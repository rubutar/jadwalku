import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { getTodayKey } from "../utils/date"

type CheckedMap = Record<string, boolean>
const STORAGE_KEY = "jadwalku.daily.checked"

export function useScheduleState() {
  const [checked, setChecked] = useState<CheckedMap>({})
  const today = getTodayKey()

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(value => {
      if (value) setChecked(JSON.parse(value))
    })
  }, [])

  const makeKey = (
    person: string,
    scheduleKey: string,
    date = today
  ) => `${date}|${person}|${scheduleKey}`

  const isChecked = (person: string, scheduleKey: string) =>
    checked[makeKey(person, scheduleKey)] ?? false

  const toggle = (person: string, scheduleKey: string) => {
    const key = makeKey(person, scheduleKey)

    setChecked(prev => {
      const updated = { ...prev, [key]: !prev[key] }
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  return { isChecked, toggle, today }
}
