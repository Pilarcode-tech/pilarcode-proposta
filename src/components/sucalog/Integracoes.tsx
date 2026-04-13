import { sucalog } from "../../data/sucalog";
import SectionHeader from "../SectionHeader";

export default function Integracoes() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Ecossistema"
          title="Sistemas Integrados"
          description="O sistema se conecta às ferramentas que o grupo já usa, substituindo as que não atendem mais e mantendo o que funciona."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sucalog.integracoes.map((i) => {
            const isReplace = i.status === "replace";
            return (
              <div
                key={i.nome}
                className="flex items-start gap-4 bg-bg-light border border-gray-200 rounded-2xl p-5"
              >
                <span
                  className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${
                    isReplace ? "bg-blue-light" : "bg-emerald-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-manrope text-sm font-bold text-gray-900">
                      {i.nome}
                    </p>
                    <span
                      className={`font-manrope text-[9px] font-bold uppercase tracking-[1px] px-2 py-0.5 rounded-full ${
                        isReplace
                          ? "bg-blue-light/10 text-blue-primary"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {isReplace ? "Substituído" : "Mantido"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {i.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
