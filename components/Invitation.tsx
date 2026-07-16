import { Reveal } from "./Reveal";
import { Divider } from "./Divider";

export function Invitation() {
  return (
    <section className="w-full bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-prose2 text-center">
        <Reveal>
          <Divider />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <p className="font-body text-lg leading-loose text-cocoa sm:text-xl">
            Дорогие друзья и родные, с трепетом приглашаем вас разделить
            с нами один из самых важных дней нашей жизни — день, когда мы
            произнесём друг другу «да».
          </p>
        </Reveal>

        <Reveal delay={0.22} className="mt-8">
          <p className="font-display text-xl italic text-espresso sm:text-2xl">
            Ваше присутствие — лучший подарок для нас.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
