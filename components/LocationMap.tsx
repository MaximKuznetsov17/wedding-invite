import { Reveal, RevealGroup } from "./Reveal";
import { Divider } from "./Divider";

const LOCATIONS = [
  {
    label: "Церемония",
    name: "Дворец бракосочетания №1",
    address: "Санкт-Петербург, Английская набережная, 28",
    time: "10:30",
    lat: 59.9341,
    lon: 30.2941,
  },
  {
    label: "Банкет",
    name: "Ресторан Percorso",
    address: "Санкт-Петербург, Вознесенский проспект, 1",
    time: "17:00",
    lat: 59.9352,
    lon: 30.3075,
  },
];

function yandexRouteUrl(lat: number, lon: number) {
  return `https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`;
}

export function LocationMap() {
  return (
    <section className="relative w-full overflow-hidden bg-parchment px-6 py-24 sm:px-10 sm:py-32">
      {/* decorative line-art map, purely ambient — no real geodata rendered */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 500"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        fill="none"
      >
        <path d="M0 380 C 160 340, 240 420, 400 360 S 640 260, 800 300" stroke="#3A2E22" strokeWidth="1.5" />
        <path d="M0 120 C 180 160, 260 60, 420 110 S 660 180, 800 120" stroke="#3A2E22" strokeWidth="1.5" />
        <path d="M120 0 C 160 160, 100 260, 150 500" stroke="#3A2E22" strokeWidth="1.5" />
        <path d="M620 0 C 580 180, 660 260, 610 500" stroke="#3A2E22" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="tracked-label text-[11px] text-taupe sm:text-xs">
            Место торжества
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-3 flex justify-center">
          <Divider />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8" stagger={0.12}>
          {LOCATIONS.map((loc) => (
            <Reveal key={loc.name}>
              <div className="invite-frame flex h-full flex-col items-center px-8 py-12 text-center">
                <span className="tracked-label text-[10px] text-bronze">{loc.label}</span>
                <span className="mt-5 font-display text-2xl font-light text-espresso">
                  {loc.name}
                </span>
                <span className="mt-3 font-body text-sm text-cocoa">{loc.address}</span>
                <span className="mt-1 font-body text-sm italic text-taupe">
                  Начало в {loc.time}
                </span>

                <a
                  href={yandexRouteUrl(loc.lat, loc.lon)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracked-label mt-8 border-b border-bronze pb-1 text-[11px] text-espresso transition-colors hover:text-bronze"
                >
                  Построить маршрут
                </a>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
