import { royalvipclub } from "../../data/royalvipclub";
import SectionHeader from "../SectionHeader";

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  compass: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  palette: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  discount: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
};

export default function Beneficios() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Inclusos no Projeto"
          title="Benefícios exclusivos"
          description="Além do desenvolvimento completo, esta proposta inclui benefícios pensados para garantir segurança, qualidade e continuidade ao Royal Vip Club."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {royalvipclub.beneficios.map((b) => (
            <div
              key={b.titulo}
              className="bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-light to-blue-primary" />
              <div className="w-11 h-11 bg-blue-primary/10 text-blue-primary rounded-xl flex items-center justify-center mb-4">
                {icons[b.icone]}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {b.titulo}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {b.desc}
              </p>
              <span className="inline-block font-manrope text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 uppercase tracking-[1px] px-2.5 py-1 rounded-md">
                {b.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
