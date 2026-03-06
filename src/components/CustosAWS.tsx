import { proposta } from "../data/proposta";
import SectionHeader from "./SectionHeader";

export default function CustosAWS() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Infraestrutura"
          title="Custos de Infraestrutura AWS"
          description="Os custos de infraestrutura são de responsabilidade exclusiva do cliente, contratados diretamente junto à AWS."
        />

        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-gradient-to-r from-blue-primary to-blue-dark text-white font-manrope text-[11px] font-bold uppercase tracking-[1.5px] text-left px-6 md:px-8 py-4">
                  Serviço
                </th>
                <th className="bg-gradient-to-r from-blue-primary to-blue-dark text-white font-manrope text-[11px] font-bold uppercase tracking-[1.5px] text-right px-6 md:px-8 py-4">
                  Estimativa Mensal
                </th>
              </tr>
            </thead>
            <tbody>
              {proposta.custosAWS.map((c, i) => (
                <tr
                  key={c.servico}
                  className={i % 2 === 1 ? "bg-bg-light" : ""}
                >
                  <td className="px-6 md:px-8 py-4 text-sm text-gray-900">
                    {c.servico}
                  </td>
                  <td className="px-6 md:px-8 py-4 text-sm text-gray-900 text-right font-medium">
                    {c.estimativa}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-primary/[0.04] border-t-2 border-blue-primary">
                <td className="px-6 md:px-8 py-4 text-sm font-bold text-blue-primary">
                  Total Estimado
                </td>
                <td className="px-6 md:px-8 py-4 text-sm font-bold text-blue-primary text-right">
                  {proposta.custosAWSTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
