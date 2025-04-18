import FAQSection from "@/components/FAQSection";
import HomeSection from "@/components/HomeSection";
import ModalManager from "@/components/ModalManager";
import RegistrySection from "@/components/RegistrySection";
import RSVPSection from "@/components/RSVPSection";
import Section from "@/components/Section";
import TeamSection from "@/components/TeamSection";
import VenueSection from "@/components/VenueSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-proximity">
      <Section id="Home"><HomeSection /></Section>
      <Section id="Venue"><VenueSection /></Section>
      <Section id="FAQ"><FAQSection /></Section>
      <Section id="Team"><TeamSection /></Section>
      <Section id="Registry"><RegistrySection /></Section>
      <Section id="RSVP"><RSVPSection /></Section>
      <Suspense>
        <ModalManager />
      </Suspense>
    </main>
  )
}