"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="mt-[100px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <div
          className="elfsight-app-b9772145-e55e-40d2-b6b2-8676a7a03fd0"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
