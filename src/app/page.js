import Hero from "@/components/Hero";
import About from "@/components/About";
import Smallcontact from "@/components/Smallcontact";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Test from "@/components/Test";

export default function Home() {
  return (
    <>
      <section className="h-fit lg:h-[650px] p-4">
        <Hero />
      </section>
      <section className="h-fit bg-slate-950 p-4 pb-20">
        <About />
      </section>
      <section >
        <Smallcontact />
      </section>
      <section className="h-fit bg-gray-700/90 " >
        <Services />
      </section>
      <section className="h-fit bg-gray-700/90 " >
        <Contact />
      </section>
    </>
  );
}
