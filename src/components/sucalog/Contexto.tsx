import { sucalog } from "../../data/sucalog";

export default function Contexto() {
  const { contexto } = sucalog;

  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
          Contexto
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-8 max-w-3xl">
          O momento que vocês estão vivendo
        </h2>

        {/* Alerta MTE */}
        <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-r-2xl p-6 mb-8">
          <p className="font-manrope text-[11px] font-bold text-red-600 uppercase tracking-[1.5px] mb-2">
            {contexto.alertaTitulo}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {contexto.alertaTexto}
          </p>
        </div>

        {/* Diagnóstico numérico */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {contexto.diagnostico.map((d) => {
            const bg =
              d.nivel === "alert"
                ? "bg-gradient-to-br from-red-900 to-red-800"
                : "bg-gradient-to-br from-amber-900 to-amber-800";
            return (
              <div
                key={d.label}
                className={`${bg} rounded-2xl p-5 text-center text-white`}
              >
                <p className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  {d.valor}
                </p>
                <p className="text-[11px] text-white/70 leading-snug mt-2">
                  {d.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Texto explicativo */}
        <div className="space-y-5">
          {contexto.paragrafos.map((p, i) => (
            <p key={i} className="text-base text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
