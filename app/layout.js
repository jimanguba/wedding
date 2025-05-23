import "./globals.css";
import SakuraPetals from "@/components/SakuraPetals";
import ScrollToHashOnLoad from "@/components/ScrollToHashOnLoad";
import { AppProvider } from "@/context/AppContext";
import "@/public/petals/sakura.css";

export const metadata = {
  title: "Jillian and Braedens Wedding",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground" suppressHydrationWarning={true}>
        <ScrollToHashOnLoad />
        <SakuraPetals />
        <audio
          id="bg-music"
          src="/audio/piano-moment-9835.mp3"
          loop
          preload="auto"
        />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
