import { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('ES');

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-stone-800 font-sans antialiased pb-12">
      
      {/* Selector de idioma */}
      <div className="language-selector" style={{ position: 'absolute', top: '15px', right: '30px', display: 'flex', gap: '10px', fontSize: '14px', fontWeight: 'bold', zIndex: 1000 }}>
        <span onClick={() => setLang('ES')} style={{ cursor: 'pointer', color: lang === 'ES' ? '#000' : '#a0a0a0' }}>ES</span>
        <span>|</span>
        <span onClick={() => setLang('EN')} style={{ cursor: 'pointer', color: lang === 'EN' ? '#000' : '#a0a0a0' }}>EN</span>
      </div>

      {/* CABECERA HERO */}
      <header className="relative w-full h-48 md:h-64 bg-gradient-to-r from-[#eaddcf] via-[#f1eae1] to-[#eaddcf] flex flex-col justify-center px-6 md:px-12 rounded-b-2xl shadow-sm">
        <h1 className="text-2xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-2">
          {lang === 'ES' ? 'Verónica Fernández' : 'Verónica Fernández'}
        </h1>
        <p className="text-amber-800 text-xs md:text-sm tracking-widest uppercase font-mono">
          DevOps & Cloud Engineer
        </p>
      </header>

      {/* CUERPO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-10">
        
        {/* TARJETA DE PERFIL */}
        <section className="bg-[#faf9f6] rounded-xl border border-stone-200 p-6 relative shadow-md mb-8">
          <div className="absolute -top-8 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-[#faf9f6] bg-stone-100 flex items-center justify-center overflow-hidden shadow-sm">
              <img src="/perfil.jpeg" alt="Foto de perfil" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Verónica Fernández</h2>
              <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">
                {lang === 'ES' 
                  ? "Orientada a construir entornos reproducibles, seguros y altamente observables. Experiencia en Docker, Kubernetes y automatización CI/CD." 
                  : "Focused on building reproducible, secure, and highly observable environments. Experience with Docker, Kubernetes, and CI/CD automation."}
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto shrink-0 text-xs font-semibold">
              <a href="/cv-veronica-devops.pdf" className="w-full bg-stone-800 text-stone-100 px-4 py-2.5 rounded-lg text-center">CV</a>
              <a href="https://linkedin.com/in/veronica-fernandez-fernandez-124257406" target="_blank" rel="noreferrer" className="w-full bg-zinc-800 text-white px-4 py-2.5 rounded-lg text-center">LinkedIn</a>
            </div>
          </div>
        </section>

        {/* PIE DE PÁGINA */}
        <footer className="w-full text-center py-6 text-gray-500 text-xs border-t border-gray-800 mt-12">
          © {new Date().getFullYear()} Verónica Fernández. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}