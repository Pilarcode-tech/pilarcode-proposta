import { proposta } from "../data/proposta";

export default function Cover() {
  return (
    <section className="relative bg-gradient-to-br from-blue-primary via-blue-dark to-blue-primary overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] bg-blue-light rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-80px] w-[400px] h-[400px] bg-blue-light rounded-full blur-[140px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-[50%] right-[15%] w-[250px] h-[250px] bg-teal rounded-full blur-[120px] opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20">
        {/* Top label */}
        <p className="font-manrope text-[11px] md:text-xs font-bold tracking-[4px] uppercase text-blue-light mb-6">
          Proposta Comercial
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6 max-w-3xl">
          {proposta.titulo}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg leading-relaxed text-white/50 max-w-2xl mb-16 md:mb-20">
          {proposta.subtitulo}
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 border-t border-white/10 pt-8">
          {[
            { label: "Cliente", value: proposta.cliente },
            { label: "Empresa", value: proposta.empresa },
            { label: "Emissão", value: proposta.emissao },
            { label: "Validade", value: proposta.validade },
            { label: "Prazo de Entrega", value: proposta.prazo, accent: true },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`${i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}`}
            >
              <dt className="font-manrope text-[10px] font-bold text-white/30 uppercase tracking-[2px] mb-2">
                {s.label}
              </dt>
              <dd
                className={`text-base md:text-lg font-bold ${s.accent ? "text-blue-light" : "text-white"}`}
              >
                {s.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
