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
          DevOps & Cloud Engineer
        </h1>
        <p className="text-amber-800 text-xs md:text-sm tracking-widest uppercase font-mono">
          CI/CD • Containers • Kubernetes • Infrastructure as Code
        </p>
      </header>

      {/* CUERPO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-10">
        
        {/* TARJETA DE PERFIL */}
        <section className="bg-[#faf9f6] rounded-xl border border-stone-200 p-6 relative shadow-md mb-8">
          <div className="absolute -top-8 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-[#faf9f6] bg-stone-100 flex items-center justify-center overflow-hidden shadow-sm">
              <img src="/perfil.jpeg" alt="Foto de perfil de Verónica" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Verónica</h2>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {lang === 'ES' ? 'Disponible para proyectos' : 'Available for projects'}
                </span>
              </div>
              
              <p className="text-sm font-mono text-gray-400 flex items-center gap-2 flex-wrap">
                📍 {lang === 'ES' ? 'Remoto / España' : 'Remote / Spain'} • 💻 Kubernetes, Docker y Arquitectura en la Nube
              </p>
              
              <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">
                {lang === 'ES' 
                  ? 'Orientada a construir entornos reproducibles, seguros y altamente observables. Experiencia práctica empaquetando servicios web mediante Docker, desplegando arquitecturas microservicios en Kubernetes y automatizando flujos de despliegue para optimizar la entrega de software.'
                  : 'Focused on building reproducible, secure, and highly observable environments. Practical experience packaging web services using Docker, deploying microservice architectures in Kubernetes, and automating deployment flows to optimize software delivery.'}
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto shrink-0 text-xs font-semibold min-w-[160px]">
              <a href="/cv-veronica-devops.pdf" download className="w-full bg-stone-800 hover:bg-stone-700 text-stone-100 px-4 py-2.5 rounded-lg transition text-center border border-zinc-700">CV</a>
              <a href="https://www.linkedin.com/in/veronica-fernandez-fernandez-124257406" target="_blank" rel="noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center">LinkedIn</a>
              <a href="https://github.com/veronica10-tech" target="_blank" rel="noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center">GitHub 🐙</a>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONOCIMIENTOS TÉCNICOS */}
        <section className="mb-4">
          <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span className="text-amber-700">#</span>{lang === 'ES' ? 'Conocimientos Técnicos' : 'Technical Skills'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-white text-sm">☁️ {lang === 'ES' ? 'Diseño Cloud' : 'Cloud Design'}</h4>
              <p className="text-xs text-gray-400">{lang === 'ES' ? 'Separación de entornos, redes privadas y gestión de volúmenes.' : 'Environment separation, private networks, and volume management.'}</p>
            </div>
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-white text-sm">📦 {lang === 'ES' ? 'Orquestación' : 'Orchestration'}</h4>
              <p className="text-xs text-gray-400">Docker, Docker Compose y Kubernetes.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN PROYECTOS */}
        <section className="mb-4">
          <h3 className="text-lg font-bold text-amber-900 mb-4"># {lang === 'ES' ? 'Proyectos Destacados' : 'Featured Projects'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5">
              <h4 className="text-base font-bold text-white">Kubernetes: Contador Web</h4>
              <p className="text-xs text-gray-400 mt-2">{lang === 'ES' ? 'Microservicios con Node.js y Redis.' : 'Microservices with Node.js and Redis.'}</p>
            </div>
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5">
              <h4 className="text-base font-bold text-white">Pipeline de CI/CD</h4>
              <p className="text-xs text-gray-400 mt-2">GitHub Actions.</p>
            </div>
          </div>
        </section>

        <footer className="w-full text-center py-6 text-gray-500 text-xs border-t border-gray-800 mt-12">
          © {new Date().getFullYear()} Verónica.
        </footer>
      </main>
    </div>
  );
}