import { royalvipclub } from "../../data/royalvipclub";
import SectionHeader from "../SectionHeader";

export default function Premissas() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Premissas"
          title="O que precisamos de vocês"
          description="Para que o desenvolvimento frontend avance sem interrupções, algumas condições são importantes."
        />

        <div className="space-y-3">
          {royalvipclub.premissas.map((p) => (
            <div
              key={p.titulo}
              className="flex items-start gap-4 bg-bg-light border border-gray-200 rounded-2xl p-5"
            >
              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-light shrink-0" />
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {p.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
