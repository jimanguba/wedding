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
      <Section id="Home"><HomeSection /></Section>
      <div id="Story" className="snap-start flex items-center justify-center"><StorySection /></div>
      <Section id="Registry"><RegistrySection /></Section>
      <Section id="Guest"><GuestSection /></Section>
    </main>
  )
}