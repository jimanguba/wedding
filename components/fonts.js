import { Ephesis, Imperial_Script, Parisienne } from "next/font/google";

export const imperial = Imperial_Script({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-imperial-script",
    style: "normal"
  });
export const ephesis = Ephesis({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-ephesis",
    style: "normal"
  });

export const parisienne = Parisienne({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-ephesis",
    style: "normal"
})
