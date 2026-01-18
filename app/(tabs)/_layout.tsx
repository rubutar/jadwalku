import { Tabs } from "expo-router"
import { Text } from "react-native"

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4f46e5"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>🏠</Text>
          )
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: "Riwayat",
          tabBarIcon: ({ color }) => (
            <Text style={{ color }}>📆</Text>
          )
        }}
      />
    </Tabs>
  )
}
