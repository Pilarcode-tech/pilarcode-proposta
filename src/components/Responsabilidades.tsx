import { proposta } from "../data/proposta";
import SectionHeader from "./SectionHeader";

export default function Responsabilidades() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Responsabilidades"
          title="Responsabilidades do Cliente"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposta.responsabilidades.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-6"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-light to-blue-primary rounded-full font-manrope text-xs font-bold text-white shrink-0">
                {i + 1}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
