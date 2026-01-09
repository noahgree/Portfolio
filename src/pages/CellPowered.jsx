import Navbar from "../components/cell-powered/Navbar"
import Hero from "../components/cell-powered/Hero"

export default function CellPowered() {
  return (
    <div className="min-h-screen bg-black grain">
      <main className="mx-auto max-w-4xl px-4 py-10 min-h-screen bg-black">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
