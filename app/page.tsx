import Hero from "../components/Hero";
import Navbar from "../components/Nav";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#07020c] text-white">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
