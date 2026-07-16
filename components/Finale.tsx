import { Reveal } from "./Reveal";

export function Finale() {
  return (
    <section className="flex min-h-[80svh] w-full flex-col items-center justify-center bg-cream px-6 py-24 sm:px-10">
      <Reveal className="invite-frame flex w-full max-w-xl flex-col items-center px-10 py-16 text-center sm:px-16 sm:py-20">
        <span className="font-display text-2xl italic text-bronze">М · А</span>

        <p className="mt-8 font-display text-3xl font-light leading-snug text-espresso sm:text-4xl">
          До встречи 15 августа
        </p>

        <div className="mt-8 flex items-center gap-3 text-cocoa">
          <span className="h-px w-8 bg-hairline" />
          <p className="tracked-label text-xs">Максим и Александра</p>
          <span className="h-px w-8 bg-hairline" />
        </div>
      </Reveal>
    </section>
  );
}
