"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PromoBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white pb-12 pt-4">
      <Container>
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? "/images/promo/pro.gif" : "/images/promo/pro.jpg"}
            alt="10.10 Super Sale - ลดสูงสุด 70% เสื้อแบรนด์เนมแท้"
            width={1200}
            height={400}
            className="h-auto w-full rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
            unoptimized={isHovered}
          />
        </div>
      </Container>
    </section>
  );
}
