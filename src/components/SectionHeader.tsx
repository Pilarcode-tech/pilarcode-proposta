interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: Props) {
  return (
    <div className="mb-6 md:mb-8">
      <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
        {label}
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-gray-500 leading-relaxed mt-4 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
