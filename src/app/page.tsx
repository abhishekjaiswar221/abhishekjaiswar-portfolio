import React, { FC } from "react";
import Hero from "@/components/hero";

const Home: FC = () => {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center gap-10">
      <section id="hero">
        <Hero />
      </section>
    </main>
  );
};

export default Home;
