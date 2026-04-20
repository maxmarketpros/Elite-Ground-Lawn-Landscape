"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const portfolioImages = [
  { src: "/images/2024-09-21-20-1-.webp", width: 1360, height: 1020 },
  { src: "/images/2023-04-10.webp", width: 1360, height: 1020 },
  { src: "/images/2024-03-21.webp", width: 1360, height: 1020 },
  { src: "/images/2024-09-21-20-3-.webp", width: 1360, height: 1020 },
  { src: "/images/2024-09-21-20-4-.webp", width: 1360, height: 1020 },
  { src: "/images/2024-09-21.webp", width: 1360, height: 1020 },
  { src: "/images/2024-07-21.webp", width: 1360, height: 1020 },
  { src: "/images/2023-05-14.webp", width: 1360, height: 1020 },
  { src: "/images/2024-09-21-20-2-.webp", width: 1360, height: 1020 },
];

// Show these as the grid thumbnails (first 4 from the lightbox set, matching the HTML)
const gridImages = [
  portfolioImages[0],
  portfolioImages[5],
  portfolioImages[6],
  portfolioImages[4],
];

export default function LightboxGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {gridImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => {
              // Map grid index to portfolio index
              const portfolioIndex = portfolioImages.findIndex(
                (p) => p.src === img.src
              );
              setIndex(portfolioIndex);
              setOpen(true);
            }}
            className="cursor-pointer overflow-hidden rounded-lg"
          >
            <Image
              src={img.src}
              alt={`Portfolio work ${i + 1}`}
              width={img.width}
              height={img.height}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={portfolioImages}
      />
    </>
  );
}
