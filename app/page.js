import ModalManager from "@/components/ModalManager";
import RegistrySection from "@/components/sections/RegistrySection";
import Section from "@/components/Section";
import { Suspense } from "react";
import HomeSection from "@/components/sections/HomeSection";
import StorySection from "@/components/sections/StorySection";
import GuestSection from "@/components/sections/GuestSection";
import Navbar from "@/components/sections/NavBar";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-proximity">
      <Navbar sections={["Home", "Story", "Registry", "Guest"]}/>
      <Section id="Home"><HomeSection /></Section>
      <Section id="Story" full><StorySection /></Section>
      <Section id="Registry"><RegistrySection /></Section>
      <Section id="Guest"><GuestSection /></Section>
    </main>
  )
}