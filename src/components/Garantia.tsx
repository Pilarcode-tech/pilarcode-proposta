import SectionHeader from "./SectionHeader";

const sla = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" /></svg>
    ),
    titulo: "Garantia de 90 dias",
    desc: "Correção gratuita de bugs e falhas identificadas após a entrega do projeto em produção.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    titulo: "Suporte Técnico",
    desc: "Canal dedicado para reportar problemas durante o período de garantia, com resposta em até 24h úteis.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    titulo: "Estabilidade",
    desc: "Monitoramento proativo e ajustes de performance durante os primeiros 30 dias após o go-live.",
  },
];

export default function Garantia() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Garantia"
          title="Garantia e Suporte Pós-Entrega"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sla.map((item) => (
            <div
              key={item.titulo}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
            >
              <div className="w-12 h-12 bg-blue-primary/10 text-blue-primary rounded-xl flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {item.titulo}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
