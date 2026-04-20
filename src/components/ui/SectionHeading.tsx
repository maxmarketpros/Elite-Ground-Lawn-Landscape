import Image from "next/image";

interface SectionHeadingProps {
  children: React.ReactNode;
  showDecoration?: boolean;
}

export default function SectionHeading({
  children,
  showDecoration = false,
}: SectionHeadingProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="relative inline-block text-center">
        {showDecoration && (
          <Image
            src="/images/heading-20bg.svg"
            alt=""
            width={200}
            height={50}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-0"
          />
        )}
        <h2 className="relative z-10">{children}</h2>
      </div>
    </div>
  );
}
