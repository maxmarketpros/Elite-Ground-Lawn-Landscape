import PrimaryButton from "./PrimaryButton";

interface ButtonGroupProps {
  className?: string;
}

export default function ButtonGroup({ className = "" }: ButtonGroupProps) {
  return (
    <div className={`flex flex-col gap-4 xs:flex-row ${className}`}>
      <PrimaryButton href="#contact">📝 Free Quote</PrimaryButton>
      <PrimaryButton href="tel:5015038577" variant="secondary">
        🤙 501-503-8577
      </PrimaryButton>
    </div>
  );
}
