"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionHeading from "@/components/ui/SectionHeading";

interface PortfolioPhoto {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface PortfolioSliceProps {
  heading?: string;
  photos: PortfolioPhoto[];
}

export default function PortfolioSlice({
  heading = "Recent Work",
  photos,
}: PortfolioSliceProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (photos.length === 0) return null;

  const cols = photos.length >= 4 ? 4 : photos.length >= 3 ? 3 : 2;

  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading>{heading}</SectionHeading>

        <div
          className={`grid gap-4 max-md:grid-cols-1 max-lg:grid-cols-2 ${
            cols === 4 ? "lg:grid-cols-4" : cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          }`}
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="cursor-pointer overflow-hidden rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] aspect-[4/3] group"
              aria-label={`Open photo: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width ?? 1200}
                height={photo.height ?? 900}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </section>
  );
}
