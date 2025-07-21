import HeaderTop from "@/Components/HeaderTop";
import HeaderSlider from "@/Components/HeaderSlider";
// import Image from "next/image";
import Locations from "@/Components/Locations";
import Searchbar from "@/Components/Searchbar";
import TempleteArea from "@/Components/TempleteArea";
import VideoBackground from "@/Components/VideoBackground";
import TestimonialCarousel from "@/Components/TestimonialCarousel";
import Stories from "@/Components/Stories";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <HeaderSlider />
      <Searchbar  />
      <Locations />
      <TempleteArea />
      <VideoBackground />
      <TestimonialCarousel />
      <Stories />
      <Footer />
    </div>
  );
}
