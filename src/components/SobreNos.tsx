import SectionHeader from "./SectionHeader";

export default function SobreNos() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Quem Somos"
          title="Conheça a Pilarcode"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bg-light border border-gray-100 rounded-3xl p-8 md:p-10">
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              A <strong className="text-gray-900">Pilarcode Tech</strong> é uma
              empresa de tecnologia especializada no desenvolvimento de soluções
              digitais sob medida para empresas que buscam eficiência, automação
              e inovação em seus processos.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Atuamos desde <strong className="text-gray-900">2019</strong>,
              combinando design moderno, engenharia de software robusta e
              proximidade com o cliente para entregar sistemas que realmente
              fazem a diferença no dia a dia das operações.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { valor: "2019", desc: "Atuando no mercado" },
              { valor: "100%", desc: "Foco em soluções sob medida" },
              { valor: "Web & Mobile", desc: "Plataformas completas" },
              { valor: "AWS", desc: "Infraestrutura escalável" },
            ].map((item) => (
              <div
                key={item.desc}
                className="bg-bg-light border border-gray-100 rounded-2xl p-6 flex flex-col justify-center"
              >
                <p className="text-xl md:text-2xl font-extrabold text-blue-primary mb-1">
                  {item.valor}
                </p>
                <p className="text-xs text-gray-500 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
