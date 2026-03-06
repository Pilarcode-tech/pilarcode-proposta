import { proposta } from "../data/proposta";

export default function Assinatura() {
  return (
    <>
      {/* Aceite digital */}
      <section className="px-6 md:px-10 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="bg-bg-light border border-gray-200 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-14 h-14 bg-blue-primary/10 text-blue-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-3">
              Aceite da Proposta
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
              Pronto para começar?
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto mb-8">
              Ao aceitar esta proposta, a <strong className="text-gray-700">{proposta.cliente}</strong> concorda com os termos, valores e
              condições descritos acima. O projeto terá início após a
              confirmação do aceite e o pagamento da primeira parcela.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href={`https://wa.me/5511918958384?text=Olá!%20Aqui%20é%20da%20${encodeURIComponent(proposta.cliente)}.%20Gostaria%20de%20aceitar%20a%20proposta%20do%20${encodeURIComponent(proposta.titulo)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#211cda] hover:bg-[#060554] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                Aceitar Proposta
              </a>
              <span className="text-xs text-gray-400">ou entre em contato conosco</span>
            </div>

            <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400">
              <span>Proposta válida por {proposta.validade}</span>
              <span className="hidden sm:block">·</span>
              <span>Emissão: {proposta.emissao}</span>
              <span className="hidden sm:block">·</span>
              <span>{proposta.empresa}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — same style as LP */}
      <footer className="bg-[#060554] p-6 lg:p-10 lg:px-20 text-white relative overflow-hidden">
        {/* Decorative orb */}
        <div className="absolute top-[-100px] right-[10%] w-[400px] h-[300px] rounded-full bg-[#278deb] opacity-[0.05] blur-[120px] pointer-events-none" />

        {/* Contact header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-2 lg:gap-8">
          <h2 className="text-3xl lg:text-4xl">Entre em contato</h2>
          <div className="border-t-2 border-white flex-1 mt-2 hidden md:block" />
          <a
            href="https://wa.me/5511918958384"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl lg:text-4xl text-white/20 hover:text-white/40 transition-colors"
          >
            +55 (11) 91895-8384
          </a>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-0 pb-10 border-b border-white mt-10">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">E-mail</h3>
            <a
              href="mailto:contato@pilarcode.com.br"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              contato@pilarcode.com.br
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">WhatsApp</h3>
            <a
              href="https://wa.me/5511918958384"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              +55 (11) 91895-8384
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/pilarcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/pilarcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-6 text-xs text-white/60">
          <p>&copy; 2026 Pilarcode - Todos os direitos reservados.</p>
          <p>Proposta emitida em {proposta.emissao}</p>
        </div>
      </footer>
    </>
  );
}
