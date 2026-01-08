import spotifyWrappedImg from "../assets/spotify_wrap_temp.png"
import mLImg from "../assets/ml_temp.png"
import stormscapeImg from "../assets/stormscape_inv_left.png"
import cellPoweredImg from "../assets/cell_powered_temp.png"

export const projects = [
   {
      title: "Spotify Wrapped App",
      description: "An Android app that recreates a Spotify Wrapped-style experience.",
      tech: ["Android Studio", "Kotlin"],
      imageSrc: spotifyWrappedImg,
      links: {
         repo: "https://github.com/davis-haden/SchedulerApp",
         demo: "https://www.apple.com",
      },
   },
   {
      title: "ML Liver Cancer Prediction",
      description: "Built and evaluated several models from scratch to predict liver cancer risk using publicly available data.",
      tech: ["Python", "NumPy", "Metrics"],
      imageSrc: mLImg,
      links: {
         repo: "https://github.com/noahgree/ml-liver-cancer",
         demo: "https://www.apple.com",
      },
   },
   {
      title: "Stormscape",
      description: "Top-down, open-world pixel art shooter game built in Godot.",
      tech: ["Godot", "GDScript"],
      imageSrc: stormscapeImg,
      links: {
         repo: "https://github.com/noahgree/StormScape",
         demo: "https://www.apple.com",
      },
   },
   {
      title: "Cell Powered",
      description: "Stylized battery monitoring app that lives in your MacOS menubar.",
      tech: ["Swift"],
      imageSrc: cellPoweredImg,
      links: {
         product: "/cell-powered"
      },
   },
]
