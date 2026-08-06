import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { EcosystemBand } from "@/components/site/ecosystem-band";
import { Problems } from "@/components/site/problems";
import { Process } from "@/components/site/process";
import { Solutions } from "@/components/site/solutions";
import { Cases } from "@/components/site/cases";
import { WhyCatafract } from "@/components/site/why-catafract";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EcosystemBand />
        <Problems />
        <Solutions />
        <Process />
        <Cases />
        <WhyCatafract />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
