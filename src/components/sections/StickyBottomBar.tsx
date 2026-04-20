import Image from "next/image";

export default function StickyBottomBar() {
  return (
    <a
      href="tel:5015038577"
      className="fixed bottom-0 left-0 right-0 z-50 bg-purple-nav shadow-[0_0_5px_2px_#a24bff59] block"
    >
      <div className="max-w-[1160px] mx-auto px-5 py-3 flex items-center justify-between max-md:flex-col max-md:gap-2">
        <div className="text-white text-[16px] font-medium">
          🚀 Trusted by Little Rock – Let&apos;s Clean Up Your Yard!
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/arrow-201.png"
            alt=""
            width={16}
            height={16}
            className="max-md:hidden"
          />
          <div className="text-yellow-nav text-[16px] font-medium">
            Contact us at 🤙 501-503-8577
          </div>
        </div>
      </div>
    </a>
  );
}
