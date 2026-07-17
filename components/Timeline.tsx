import { Reveal, RevealGroup } from "./Reveal";
import { Divider } from "./Divider";

const SCHEDULE = [
  { time: "10:30", title: "Сбор гостей", note: "Английская набережная" },
  { time: "11:00", title: "Церемония бракосочетания", note: "Дворец бракосочетания №1" },
  { time: "12:00", title: "Фотосессия", note: "Исаакиевская площадь" },
  { time: "13:00", title: "Прогулка на катере по рекам и каналам" },
  { time: "15:30", title: "Фотосессия", note: "Владимирский дворец" },
  { time: "17:00", title: "Банкет", note: "Ресторан Percorso" },
  { time: "21:00", title: "Запуск воздушных фонариков", note: "Английская набережная" },
  { time: "22:00", title: "Завершение вечера" },
];

export function Timeline() {
  return (
    <section className="w-full bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="tracked-label text-[11px] text-taupe sm:text-xs">
            Программа дня
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-3 flex justify-center">
          <Divider />
        </Reveal>

        <RevealGroup className="mt-16 flex flex-col" stagger={0.1}>
          {SCHEDULE.map((item, i) => (
            <Reveal key={item.time} className="group">
              <div className="flex items-start gap-6 border-t border-hairline py-6 first:border-t-0 sm:gap-10">
                <span className="w-16 shrink-0 pt-1 text-right font-display text-xl font-light text-bronze sm:w-20 sm:text-2xl">
                  {item.time}
                </span>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="font-body text-lg text-espresso sm:text-xl">
                    {item.title}
                  </span>
                  {item.note && (
                    <span className="font-body text-sm italic text-taupe">
                      {item.note}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
