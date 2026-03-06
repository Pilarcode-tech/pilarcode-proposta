import { proposta } from "../data/proposta";
import SectionHeader from "./SectionHeader";

const icons: Record<string, React.ReactNode> = {
  Frontend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="white" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1.5" fill="none" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" /></svg>
  ),
  Backend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="white" strokeWidth="1.5" fill="none" /><path d="M12 22V12" stroke="white" strokeWidth="1.5" /><path d="M3 7l9 5 9-5" stroke="white" strokeWidth="1.5" /></svg>
  ),
  "Banco de Dados": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="9" ry="5" stroke="white" strokeWidth="1.5" /><path d="M12 7v10" stroke="white" strokeWidth="1.5" /><path d="M7 9.5h10" stroke="white" strokeWidth="1.5" /><path d="M8 14.5h8" stroke="white" strokeWidth="1.5" /></svg>
  ),
  Hospedagem: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="white" strokeWidth="1.5" rx="2" fill="none" /><path d="M8 12h8M12 8v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
  ),
  Monitoramento: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 18h4V10H3v8zM10 18h4V6h-4v12zM17 18h4v-5h-4v5z" fill="white" /></svg>
  ),
  "Segurança": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="white" strokeWidth="1.5" fill="none" /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

export default function Tecnologia() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
          {/* Orb */}
          <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-blue-light rounded-full blur-[120px] opacity-[0.1] pointer-events-none" />

          <div className="relative z-10">
            <p className="font-manrope text-[11px] font-bold text-blue-light uppercase tracking-[3px] mb-4">
              Arquitetura Tecnológica
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-10 max-w-xl">
              Tecnologia de ponta para o seu projeto
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {proposta.tecnologias.map((t) => (
                <div
                  key={t.camada}
                  className="flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    {icons[t.camada]}
                  </div>
                  <div>
                    <p className="font-manrope text-[10px] font-bold text-white/40 uppercase tracking-[1px]">
                      {t.camada}
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {t.tecnologia}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
