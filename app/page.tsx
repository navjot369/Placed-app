import NavMenu from "./ui/home/navbar";
import HeroSection from "./ui/home/heroSec";
import VideoSec from "./ui/home/videoSec";
import Section1 from "./ui/home/section1";
import Section2 from "./ui/home/section2";
import Section3 from "./ui/home/section3";
import Section4 from "./ui/home/section4";
import Section5 from "./ui/home/section5";
import Section6 from "./ui/home/section6";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div>
      <NavMenu login="Simran"/>
      <HeroSection />
      <VideoSec />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}
