import { gabinetevirtual } from "../../data/gabinetevirtual";
import SectionHeader from "../SectionHeader";

export default function Sobre() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Quem Somos" title={gabinetevirtual.sobre.titulo} />

        <div className="bg-bg-light border border-gray-200 rounded-3xl p-8 md:p-10">
          <p className="text-base text-gray-600 leading-relaxed">
            {gabinetevirtual.sobre.texto}
          </p>
        </div>
      </div>
    </section>
  );
}
