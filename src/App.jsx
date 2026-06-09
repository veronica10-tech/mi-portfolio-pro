import { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('ES');

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-stone-800 font-sans antialiased pb-12 pt-20">
      
      {/* MENÚ DE NAVEGACIÓN FIJO */}
      <nav className="fixed top-0 w-full bg-[#161b22]/95 backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center z-50 border-b border-gray-800">
        <span className="font-bold text-lg tracking-tight">Verónica</span>
        <div className="flex items-center gap-8">
          <div className="flex gap-2 text-xs font-bold border-r border-gray-700 pr-6">
            <span onClick={() => setLang('ES')} style={{ cursor: 'pointer', color: lang === 'ES' ? '#fff' : '#a0a0a0' }}>ES</span>
            <span className="text-gray-700">|</span>
            <span onClick={() => setLang('EN')} style={{ cursor: 'pointer', color: lang === 'EN' ? '#fff' : '#a0a0a0' }}>EN</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#perfil" className="hover:text-amber-500 transition">Perfil</a>
            <a href="#skills" className="hover:text-amber-500 transition">Skills</a>
            <a href="#proyectos" className="hover:text-amber-500 transition">Proyectos</a>
            <a href="#contacto" className="hover:text-amber-500 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* CABECERA HERO */}
      <header className="relative w-full h-48 md:h-64 bg-gradient-to-r from-[#eaddcf] via-[#f1eae1] to-[#eaddcf] flex flex-col justify-center px-6 md:px-12 rounded-b-2xl shadow-sm">
        <h1 className="text-2xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-2">
          DevOps & Cloud Engineer
        </h1>
      </header>

      {/* CUERPO PRINCIPAL - Contiene todo el contenido */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <section id="perfil" className="bg-[#faf9f6] rounded-xl border border-stone-200 p-6 -mt-8 shadow-md mb-8">
          <h2 className="text-2xl font-bold">Verónica</h2>
          <p className="text-sm text-gray-600 mt-2">
            {lang === 'ES' ? 'Orientada a construir entornos reproducibles...' : 'Focused on building reproducible and secure environments.'}
          </p>
          <section id="perfil" className="bg-[#faf9f6] rounded-xl border border-stone-200 p-6 -mt-8 shadow-md mb-8">
  <h2 className="text-2xl font-bold">Verónica</h2>
  <p className="text-sm text-gray-600 mt-2">
    {lang === 'ES' ? 'Orientada a construir entornos reproducibles, seguros y altamente observables. Experiencia práctica empaquetando servicios web mediante Docker, desplegando arquitecturas microservicios en kubernetes y automatizando flujos de despliegue.' : 'Focused on building reproducible and secure environments.'}
  </p>

  {/* NUEVO BLOQUE DE ENLACES */}
  <div className="flex flex-wrap gap-4 mt-6 border-t border-stone-100 pt-6">
    <a href="/cv-veronica-devops.pdf" target="_blank" className="text-xs font-bold bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition">
      {lang === 'ES' ? 'Descargar CV' : 'Download CV'}
    </a>
    <a href="https://github.com/veronicafdezf-collab/mi-portfolio-pro" target="_blank" className="text-xs font-bold bg-stone-800 text-white px-4 py-2 rounded-lg hover:bg-black transition">
      GitHub
    </a>
    <a href="https://linkedin.com/in/verónica-fernández-fernández-124257406" target="_blank" className="text-xs font-bold bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
      LinkedIn
    </a>
  </div>
</section>
        </section>

        <section id="skills" className="mb-12">
          <h3 className="text-xl font-bold text-amber-900 mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aquí irían tus tarjetas de skills */}
          </div>
        </section>

        <section id="proyectos" className="mb-12">
          <h3 className="text-xl font-bold text-amber-900 mb-6">Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 text-white">
              Contador Web (K8s)
            </div>
          </div>
        </section>

        <section id="contacto" className="mb-12 p-8 text-center bg-stone-200 rounded-xl">
          <h3 className="text-xl font-bold text-stone-900 mb-4">Contacto</h3>
          <a href="mailto:veronicafdezf@gmail.com" className="text-amber-800 font-bold hover:underline">
            veronicafdezf@gmail.com
          </a>
        </section>
        
        <footer className="w-full text-center py-6 text-gray-500 text-xs border-t border-gray-800 mt-12">
          © {new Date().getFullYear()} Verónica.
        </footer>
      </main>
    </div>
  );
}