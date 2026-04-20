import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  variant = "primary",
  className = "",
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-block rounded-full px-[21px] py-[11px] text-[17px] font-bold text-white text-center whitespace-nowrap transition-transform duration-300 hover:-translate-y-[5px] active:scale-95";
  const variantClasses =
    variant === "primary"
      ? "bg-tomato shadow-[0_20px_30px_-12px_#ff846678]"
      : "bg-green-cta shadow-[0_20px_30px_-12px_#0e861578]";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
