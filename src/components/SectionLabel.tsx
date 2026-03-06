interface Props {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: Props) {
  return (
    <span className="inline-block bg-blue-primary text-white font-manrope text-[10px] md:text-[11px] font-bold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full mb-4">
      {number} — {label}
    </span>
  );
}
