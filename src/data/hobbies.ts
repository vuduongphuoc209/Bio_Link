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
      "I enjoy emotional late-night chill songs while coding or relaxing.",
    type: "music",
    embed:
      "https://open.spotify.com/embed/playlist/3rsZDUMlVEukq5yvRSAqEF?utm_source=generator",
  },
  {
    id: 2,
    title: "🎸 Guitar",
    description:
      "I play acoustic guitar and record soft instrumental covers.",
    type: "guitar",
    video: "videos/guitar.mp4",
  },
  {
    id: 3,
    title: "⚽ Football",
    description:
      "Playing football helps me stay active and build teamwork skills.",
    type: "sport",
    image: "images/football.jpg"
  },
  {
    id: 4,
    title: "❄️ Chill Workspace",
    description:
      "I love working in a cool, minimal, softly-lit environment for deep focus.",
    type: "workspace",
    image: "images/room.jpg"
  },
]

