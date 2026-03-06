interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: Props) {
  return (
    <>
      <h2 className="text-2xl md:text-[32px] lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3 leading-tight">
        {children}
      </h2>
      <div className="w-12 h-[3px] bg-gradient-to-r from-blue-light to-blue-primary rounded-full mb-6" />
    </>
  );
}
