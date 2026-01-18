export type ScheduleItem = {
  time: string
  title: string
  notes: string[]
}

export type PersonKey = "mamak" | "bapak"

export const schedules: Record<PersonKey, ScheduleItem[]> = {
  mamak: [
    {
      time: "08:00",
      title: "Pagi – 15 menit sebelum makan",
      notes: [
        "Baking soda ½ sdt + segelas air",
        "Alternatif: natrium bikarbonat 2 tablet"
      ]
    },
    {
      time: "08:00",
      title: "Setelah makan",
      notes: [
        "Probiotik 1 kapsul",
        "Glutathione 1 kapsul",
        "Astaxanthin",
        "Omega 3 fish oil"
      ]
    },
    {
      time: "08:30",
      title: "30 menit kemudian",
      notes: [
        "D3K2 10.000 IU",
        "MCT Oil 2 softgel"
      ]
    },
    {
      time: "12:00",
      title: "Siang – saat makan",
      notes: ["Enzym 1 kapsul"]
    },
    {
      time: "12:00",
      title: "Setelah makan",
      notes: [
        "D Harmony 1 kapsul",
        "Zinc Pico 1 kapsul",
        "Grassfed Kidney 2 kapsul"
      ]
    },
    {
      time: "17:00",
      title: "Sore – 15 menit sebelum makan",
      notes: [
        "Baking soda ½ sdt + segelas air",
        "Alternatif: natrium bikarbonat 2 tablet"
      ]
    },
    {
      time: "17:00",
      title: "Saat makan",
      notes: ["Enzym 1 kapsul"]
    },
    {
      time: "17:00",
      title: "Setelah makan",
      notes: ["Grassfed Kidney 2 kapsul"]
    },
    {
      time: "21:00",
      title: "1 jam sebelum tidur",
      notes: [
        "D Harmony 1 kapsul",
        "Magnesium",
        "Probiotik 1 kapsul"
      ]
    }
  ],

  bapak: [
    {
      time: "07:45",
      title: "Sebelum makan pagi",
      notes: [
        "Berberine Now 1 softgel",
        "Kyolic Blood Sugar 1 kapsul"
      ]
    },
    {
      time: "08:00",
      title: "Setelah makan pagi",
      notes: [
        "Benfotiamine ALA 1 kapsul",
        "Stinging Nettle 1 kapsul",
        "Magnesium Citrate 1 kapsul"
      ]
    },
    {
      time: "08:30",
      title: "Jeda 30 menit",
      notes: ["D3K2 20.000 IU / 2 softgel"]
    },
    {
      time: "12:45",
      title: "Sebelum makan siang",
      notes: ["Baking soda ½ sdt + segelas air"]
    },
    {
      time: "13:00",
      title: "Setelah makan siang",
      notes: [
        "Potassium Chloride 1 sdt + segelas air",
        "Benfotiamine ALA 1 kapsul",
        "Stinging Nettle 1 kapsul",
        "Magnesium Citrate 1 kapsul"
      ]
    },
    {
      time: "17:30",
      title: "Sebelum makan sore",
      notes: ["Baking soda ½ sdt + segelas air"]
    },
    {
      time: "17:45",
      title: "Jeda 15 menit",
      notes: [
        "Berberine Now 1 softgel",
        "Kyolic Blood Sugar 1 kapsul"
      ]
    },
    {
      time: "18:00",
      title: "Setelah makan sore",
      notes: [
        "Potassium Chloride 1 sdt + segelas air",
        "Magnesium Citrate 1 kapsul"
      ]
    }
  ]
}