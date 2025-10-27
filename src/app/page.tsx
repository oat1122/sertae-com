import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import PromoBanner from "@/components/home/PromoBanner";
import FeaturedProductsNews from "@/components/home/FeaturedProductsNews";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FinalCTA from "@/components/home/FinalCTA";
import FeaturedProductsRecommend from "@/components/home/FeaturedProductsRecommend";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PromoBanner />
      <FeaturedProductsRecommend />
      <FeaturedProductsNews />
      <FeaturedCategories />
      <FinalCTA />
    </>
  );
}
