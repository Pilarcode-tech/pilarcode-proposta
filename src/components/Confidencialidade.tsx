import SectionHeader from "./SectionHeader";

export default function Confidencialidade() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Termos"
          title="Confidencialidade e Propriedade Intelectual"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-bg-light border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="w-12 h-12 bg-blue-primary/10 text-blue-primary rounded-xl flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Confidencialidade
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Todas as informações compartilhadas durante o projeto serão tratadas
              com total sigilo. A Pilarcode compromete-se a não divulgar, copiar ou
              utilizar dados do cliente para qualquer finalidade além do
              desenvolvimento do sistema contratado.
            </p>
          </div>

          <div className="bg-bg-light border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="w-12 h-12 bg-blue-primary/10 text-blue-primary rounded-xl flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Propriedade Intelectual
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Após a quitação integral do projeto, todo o código-fonte, documentação
              técnica e artefatos produzidos serão de propriedade exclusiva do
              cliente. A Pilarcode reserva-se o direito de utilizar o projeto como
              referência em portfólio, mediante autorização prévia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
