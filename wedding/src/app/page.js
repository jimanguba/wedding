import FAQSection from "@/components/FAQSection";
import HomeSection from "@/components/HomeSection";
import RegistrySection from "@/components/RegistrySection";
import RSVPSection from "@/components/RSVPSection";
import Section from "@/components/Section";
import TeamSection from "@/components/TeamSection";
import VenueSection from "@/components/VenueSection";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <Section id="home"><HomeSection /></Section>
      <Section id="venue"><VenueSection /></Section>
      <Section id="faq"><FAQSection /></Section>
      <Section id="team"><TeamSection /></Section>
      <Section id="registry"><RegistrySection /></Section>
      <Section id="rsvp"><RSVPSection /></Section>
    </main>
  )
}