import { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('ES');

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-stone-800 font-sans antialiased pb-12 pt-20">
      
      {/* MENÚ DE NAVEGACIÓN FIJO */}
      <nav className="fixed top-0 w-full bg-[#161b22]/95 backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center z-50 border-b border-gray-800">
        <span className="font-bold text-lg tracking-tight">Verónica</span>
        <div className="flex gap-6 text-sm font-medium justify-end">
          <a href="#perfil" className="hover:text-amber-500 transition">Perfil</a>
          <a href="#skills" className="hover:text-amber-500 transition">Skills</a>
          <a href="#proyectos" className="hover:text-amber-500 transition">Proyectos</a>
          <a href="#contacto" className="hover:text-amber-500 transition">Contacto</a>
        </div>
      </nav>

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
        
        <section id="perfil" className="bg-[#faf9f6] rounded-xl border border-stone-200 p-6 relative shadow-md mb-8">
          <div className="pt-12">
            <h2 className="text-2xl font-bold">Verónica</h2>
            <p className="text-sm text-gray-600 mt-2">
              {lang === 'ES' ? 'Orientada a construir entornos reproducibles y seguros.' : 'Focused on building reproducible and secure environments.'}
            </p>
          </div>
        </section>

        <section id="skills" className="mb-4">
          <h3 className="text-lg font-bold text-amber-900 mb-4"># {lang === 'ES' ? 'Conocimientos Técnicos' : 'Technical Skills'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 text-white">Cloud & Orquestación</div>
          </div>
        </section>

        <section id="proyectos" className="mb-4">
          <h3 className="text-lg font-bold text-amber-900 mb-4"># {lang === 'ES' ? 'Proyectos Destacados' : 'Featured Projects'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 text-white">Contador Web (K8s)</div>
          </div>
        </section>

        <section id="contacto" className="mb-12 p-8 text-center bg-stone-200 rounded-xl">
          <h3 className="text-xl font-bold text-stone-900 mb-4">Contacto</h3>
          <p className="text-stone-700">¿Quieres trabajar conmigo? ¡Escríbeme!</p>
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