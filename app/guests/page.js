import ModalManager from "@/components/ModalManager";
import Section from "@/components/Section";
import { Suspense } from "react";
import GuestHomeSection from "@/components/sections/guest/GuestHomeSection";
import Navbar from "@/components/sections/NavBar";
import ScheduleSection from "@/components/sections/guest/ScheduleSection";
import RSVPSection from "@/components/sections/guest/RSVPSection";
import VenueSection from "@/components/sections/guest/VenueSection";
import TeamSection from "@/components/sections/guest/TeamSection";
import NotificationSection from "@/components/sections/guest/NotificationSection";
import NotificationHistoryToggle from "@/components/notification/NotificationHistoryToggle";

export default function Guests() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-proximity">
      <Navbar sections={["Home", "Schedule", "RSVP", "Venue", "Team", "Notification"]} />
      <Section id="Home" full><GuestHomeSection /></Section>
      <Section id="Schedule" full><ScheduleSection /></Section>
      <Section id="RSVP" full><RSVPSection /></Section>
      <Section id="Venue" full><VenueSection /></Section>
      <Section id="Team"><TeamSection /></Section>
      <Section id="Notification" full><NotificationSection /></Section>
      <Suspense>
        <ModalManager />
      </Suspense>
      <NotificationHistoryToggle />
    </main>
  )
}