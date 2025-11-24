import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Source } from "@/components/sections/source";
import { USP } from "@/components/sections/usp";
import { Impressionen } from "@/components/sections/impressionen";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Mission />
      <Source />
      <USP />
      <Impressionen />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
