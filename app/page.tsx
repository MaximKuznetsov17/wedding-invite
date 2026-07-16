import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { Countdown } from "@/components/Countdown";
import { Timeline } from "@/components/Timeline";
import { LocationMap } from "@/components/LocationMap";
import { Finale } from "@/components/Finale";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Invitation />
      <Countdown />
      <Timeline />
      <LocationMap />
      <Finale />
    </main>
  );
}
