import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { Countdown } from "@/components/Countdown";
import { Timeline } from "@/components/Timeline";
import { LocationMap } from "@/components/LocationMap";
import { Finale } from "@/components/Finale";

const MAX_GUEST_NAMES = 2;

function parseGuestNames(raw: string | string[] | undefined): string[] {
  if (!raw) return [];
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .slice(0, MAX_GUEST_NAMES);
}

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const guestNames = parseGuestNames(searchParams.to);

  return (
    <main className="flex w-full flex-col">
      <Hero guestNames={guestNames} />
      <Invitation />
      <Countdown />
      <Timeline />
      <LocationMap />
      <Finale />
    </main>
  );
}