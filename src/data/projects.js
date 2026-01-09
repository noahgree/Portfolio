import spotifyWrappedImg from "../assets/spotify_wrap_temp.png"
import mLImg from "../assets/ml_temp.png"
import stormscapeImg from "../assets/stormscape_char.png"
import cellPoweredImg from "../assets/cell_powered_temp.png"

export const projects = [
   {
      title: "Spotify Wrapped App",
      description: "An Android app that recreates a Spotify Wrapped-style experience, talking to the Spotify API for real-time data.",
      tech: ["Kotlin", "Android Studio"],
      imageSrc: spotifyWrappedImg,
      links: {
         repo: "https://github.com/noahgree/SpotifyWrapped",
      },
   },
   {
      title: "ML Liver Cancer Prediction",
      description: "Built and evaluated several machine learning models from scratch to predict liver cancer risk using publicly available data.",
      tech: ["Python", "NumPy", "Matplotlib"],
      imageSrc: mLImg,
      links: {
         repo: "https://github.com/noahgree/ml-liver-cancer",
      },
   },
   {
      title: "Stormscape",
      description: "Top-down, open-world pixel art shooter game built in Godot. Explore, craft, and defend your base from the creatures of the mist.",
      tech: ["GDScript", "Godot", "GLSL"],
      imageSrc: stormscapeImg,
      links: {
         repo: "https://github.com/noahgree/StormScape",
      },
   },
   {
      title: "Cell Powered",
      description: "Stylized battery monitoring app that lives in your MacOS menubar. Built using SwiftUI for a native experience.",
      tech: ["Swift", "Xcode"],
      imageSrc: cellPoweredImg,
      links: {
         product: "/cell-powered"
      },
   },
   {
      title: "SoloMe",
      description: "SwiftUI GroupMe client for viewing messages in a farmiliar iOS style. Includes a custom backend server for generating Apple Push Notifications from GroupMe events.",
      tech: ["Swift", "Python", "Xcode", "Heroku", "REST"],
      imageSrc: cellPoweredImg,
      links: {
         repo: "https://github.com/noahgree/SoloMe"
      },
   },
   {
      title: "SchedulerApp",
      description: "An Android app made for simple, no-bloat scheduling and assignment tracking.",
      tech: ["Kotlin", "Android Studio"],
      imageSrc: cellPoweredImg,
      links: {
         repo: "https://github.com/davis-haden/SchedulerApp"
      },
   },
]
