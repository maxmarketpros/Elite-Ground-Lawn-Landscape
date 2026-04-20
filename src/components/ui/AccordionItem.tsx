"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#dcdcdc] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-[15px] text-left cursor-pointer"
      >
        <div className="flex-1">
          <div className="font-[family-name:var(--font-hey-comic)] text-[20px] leading-[110%] text-black">
            {question}
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div
            className={`w-[30px] h-[30px] bg-steel-blue rounded-full flex items-center justify-center transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <Image
              src="/images/angle-small-down-free-icon-font-20-1-.svg"
              alt=""
              width={12}
              height={12}
            />
          </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-[15px] pb-[15px]">
          <p className="text-dim-grey text-[16px] leading-[140%]">{answer}</p>
        </div>
      </div>
    </div>
  );
}
