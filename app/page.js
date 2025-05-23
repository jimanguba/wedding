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
    <main className="h-screen overflow-y-scroll overflow-x-hidden scroll-smooth snap-y snap-proximity">
      <Navbar sections={["Home", "Story", "Registry", "Guest"]}/>
      <Section id="Home" full><HomeSection /></Section>
      <Section id="Story"><StorySection /></Section>
      <Section id="Registry" full><RegistrySection /></Section>
      <Section id="Guest" full><GuestSection /></Section>
    </main>
  )
}