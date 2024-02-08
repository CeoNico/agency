import Hero from "@/components/Hero";
import About from "@/components/About";
import Smallcontact from "@/components/Smallcontact";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section className="h-screen p-4">
        <Hero />
      </section>
      <section className="h-fit bg-gray-700/90 p-4 pb-20">
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
