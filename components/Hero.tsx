"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const COUPLE_PHOTO_SRC: string | null = "/couple.jpeg"; // place an image path here, e.g. "/couple.jpg" — layout stays premium either way

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 sm:px-10">
      {/* soft ambient wash, stands in for a photographic backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 18%, rgba(169,129,76,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(58,46,34,0.06), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="invite-frame relative z-10 flex w-full max-w-3xl flex-col items-center px-8 py-14 sm:px-16 sm:py-20"
      >
        <Reveal delay={0.15}>
          <p className="tracked-label text-center text-[11px] text-taupe sm:text-xs">
            Приглашение на свадьбу
          </p>
        </Reveal>

        {/* Portrait plate — holds a real photograph when supplied, otherwise
            a quiet engraved monogram keeps the hero premium without one. */}
        <Reveal delay={0.3} className="mt-10 w-full">
          <div className="mx-auto aspect-[4/5] w-48 overflow-hidden rounded-full border border-hairline sm:w-56">
            {COUPLE_PHOTO_SRC ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={COUPLE_PHOTO_SRC}
                alt="Максим и Александра"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-parchment">
                <span className="font-display text-3xl italic text-bronze">М · А</span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.45} className="mt-10 w-full text-center">
          <h1 className="font-display text-balance text-5xl font-light leading-[1.1] text-espresso sm:text-7xl">
            Максим
            <span className="mx-3 italic text-bronze sm:mx-5">&amp;</span>
            Александра
          </h1>
        </Reveal>

        <Reveal delay={0.6} className="mt-8">
          <div className="flex items-center justify-center gap-3 text-cocoa">
            <span className="h-px w-8 bg-hairline" />
            <p className="tracked-label text-xs sm:text-sm">15 августа 2026</p>
            <span className="h-px w-8 bg-hairline" />
          </div>
        </Reveal>

        <Reveal delay={0.75} className="mt-10 max-w-md">
          <p className="text-center font-body text-base italic leading-relaxed text-cocoa sm:text-lg">
            Просим оказать нам честь и разделить день, в который два пути
            станут одним.
          </p>
        </Reveal>
      </motion.div>

      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <span className="block h-10 w-px bg-hairline" />
        </motion.div>
      )}
    </section>
  );
}
