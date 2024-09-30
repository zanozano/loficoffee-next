import { DinamicBackground } from "@/components/DinamicBackground";
import { Timer } from "@/components/Timer";
import Image from "next/image";
import background from '../assets/background.jpg';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">

      <DinamicBackground />

      <div className="relative z-10 flex items-center justify-center h-full">
        <Timer />
      </div>
    </main>
  );
}
