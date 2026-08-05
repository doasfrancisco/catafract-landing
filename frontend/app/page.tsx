import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Challenges } from "@/components/site/challenges";
import { EcosystemBand } from "@/components/site/ecosystem-band";
import { Services } from "@/components/site/services";
import { Cases } from "@/components/site/cases";
import { Process } from "@/components/site/process";
import { WhyCatafract } from "@/components/site/why-catafract";
import { NetworkBand } from "@/components/site/network-band";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <EcosystemBand />
        <Services />
        <Cases />
        <Process />
        <WhyCatafract />
        <NetworkBand />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
