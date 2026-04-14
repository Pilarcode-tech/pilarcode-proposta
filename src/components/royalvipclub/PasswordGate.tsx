import { useState, useEffect } from "react";
import { royalvipclub } from "../../data/royalvipclub";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [autorizado, setAutorizado] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("royalvipclub_auth") === "true") {
      setAutorizado(true);
    }
    setCarregando(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (senha === royalvipclub.senha) {
      sessionStorage.setItem("royalvipclub_auth", "true");
      setAutorizado(true);
      setErro(false);
    } else {
      setErro(true);
    }
  }

  if (carregando) {
    return (
      <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-dark via-blue-primary to-blue-dark" />
    );
  }

  if (autorizado) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-dark via-blue-primary to-blue-dark overflow-y-auto">
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] bg-blue-light rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-80px] w-[400px] h-[400px] bg-blue-light rounded-full blur-[140px] opacity-[0.06] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-16 min-h-[100dvh] flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <img src="/icon.png" alt="Pilarcode" className="h-10 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[24px] text-white tracking-tight leading-none">
              pilarcode
            </span>
            <span className="font-semibold text-[8px] text-blue-light tracking-wide uppercase leading-none mt-[6px]">
              tech
            </span>
          </div>
        </div>

        <div className="w-full bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className="text-xl font-extrabold text-white mb-2">
              Proposta Comercial · Royal Vip Club
            </h1>
            <p className="text-sm text-white/50">
              Digite a senha de acesso para visualizar esta proposta.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  setErro(false);
                }}
                placeholder="Senha de acesso"
                className="w-full bg-white/[0.08] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-base focus:outline-none focus:border-blue-light/50 focus:ring-1 focus:ring-blue-light/30 transition-all"
              />
              {erro && (
                <p className="text-red-400 text-xs mt-2">
                  Senha incorreta. Tente novamente.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-white text-blue-primary font-semibold text-sm py-3.5 rounded-xl hover:bg-white/90 transition-all duration-200"
            >
              Acessar Proposta
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Pilarcode Tech · Proposta Confidencial
        </p>
      </div>
    </div>
  );
}
