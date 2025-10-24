import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <FeaturedCategories />
      <FinalCTA />
    </>
  );
}
