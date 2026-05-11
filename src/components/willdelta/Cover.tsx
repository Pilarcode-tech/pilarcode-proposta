import { willdelta } from "../../data/willdelta";

export default function Cover() {
  return (
    <section className="relative bg-gradient-to-br from-blue-primary via-blue-dark to-blue-primary overflow-hidden">
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] bg-blue-light rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-80px] w-[400px] h-[400px] bg-blue-light rounded-full blur-[140px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-[50%] right-[15%] w-[250px] h-[250px] bg-teal rounded-full blur-[120px] opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20">
        <p className="font-manrope text-[11px] md:text-xs font-bold tracking-[4px] uppercase text-blue-light mb-6">
          Proposta Comercial · {willdelta.clienteCurto}
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
          {willdelta.titulo}
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-white/50 max-w-2xl mb-14 md:mb-16">
          {willdelta.subtitulo}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border-t border-white/10 pt-8">
          {willdelta.meta.map((m, i) => (
            <div
              key={m.label}
              className={`${i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}`}
            >
              <dt className="font-manrope text-[10px] font-bold text-white/30 uppercase tracking-[2px] mb-2">
                {m.label}
              </dt>
              <dd className="text-sm md:text-base font-bold text-white leading-snug">
                {m.valor}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
