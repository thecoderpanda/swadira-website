import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Milestones } from "@/components/Milestones";
import { Services } from "@/components/Services";
import { MenuSelection } from "@/components/MenuSelection";
import { Darbar } from "@/components/Darbar";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <Milestones />
      <Services />
      <MenuSelection />
      <Darbar />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
