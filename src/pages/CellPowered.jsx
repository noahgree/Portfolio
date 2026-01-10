import Navbar from "../components/cell-powered/Navbar"
import Hero from "../components/cell-powered/Hero"
import BodyClassHelper from "../components/BodyClassHelper";

export default function CellPowered() {
  return (
    <>
      <BodyClassHelper className="bg-black" title="Cell Powered" />
      <div className="grain">
        <main className="mx-auto max-w-4xl px-4 py-10 min-h-screen min-w-screen bg-black">
          <Navbar />
          <Hero />
        </main>
      </div>
    </>
  );
}
