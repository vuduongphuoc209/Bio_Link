export interface Hobby {
  id: number
  title: string
  description: string
  type: "music" | "guitar" | "sport" | "workspace"
  embed?: string
  image?: string
  video?: string
}

export const hobbies: Hobby[] = [
  {
    id: 1,
    title: "🎧 Chill Music",
    description:
      "hobby_item_1_description",
    type: "music",
    embed:
      "https://open.spotify.com/embed/playlist/3rsZDUMlVEukq5yvRSAqEF?utm_source=generator",
  },
  {
    id: 2,
    title: "🎸 Guitar",
    description:
      "hobby_item_2_description",
    type: "guitar",
    video: "videos/guitar.mp4",
  },
  {
    id: 3,
    title: "⚽ Football",
    description:
      "hobby_item_3_description",
    type: "sport",
    image: "images/football.jpg"
  },
  {
    id: 4,
    title: "❄️ Chill Workspace",
    description:
      "hobby_item_4_description",
    type: "workspace",
    image: "images/room.jpg"
  },
]

