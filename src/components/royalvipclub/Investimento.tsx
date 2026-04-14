import { royalvipclub } from "../../data/royalvipclub";
import SectionHeader from "../SectionHeader";

export default function Investimento() {
  const { investimento } = royalvipclub;
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Investimento" title="Valor do projeto" />

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-3xl">
          {investimento.justificativa}
        </p>

        <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 lg:p-14 text-white relative overflow-hidden text-center">
          <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.12] pointer-events-none" />

          <div className="relative z-10">
            <p className="font-manrope text-[11px] font-bold text-blue-200 uppercase tracking-[3px] mb-4">
              Valor Total
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
              {investimento.valor}
            </h2>
            <p className="text-sm text-blue-200/80 mb-10">
              {investimento.descricao}
            </p>

            <div className="max-w-md mx-auto bg-white/[0.08] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="font-manrope text-[11px] font-bold text-blue-light uppercase tracking-[1.5px] mb-3">
                Forma de Pagamento
              </p>
              <p className="text-2xl md:text-3xl font-extrabold mb-2">
                {investimento.pagamento.titulo}
              </p>
              <p className="text-sm text-blue-200">
                {investimento.pagamento.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
