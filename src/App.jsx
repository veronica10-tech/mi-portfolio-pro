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
              <div className="absolute -top-16 left-1">
    <div className="w-24 h-24 rounded-full border-4 border-[#faf9f6] bg-stone-100 flex items-center justify-center overflow-hidden shadow-sm">
      <img src="/perfil.jpg" alt="Foto de perfil de Verónica" className="w-full h-full object-cover" />
    </div>
  </div>
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

{/* SECCIÓN ENFOQUE - FONDO BEIGE CON TARJETAS CONTRASTADAS */}
<section id="enfoque" className="py-20 bg-[#fdfbf7] rounded-2xl p-8 mb-12 text-stone-900">
  
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
    
    {/* Columna Izquierda: Texto */}
    <div className="lg:w-1/3">
      <h3 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-4">Enfoque</h3>
      <h2 className="text-4xl font-bold mb-6">Cultura GitOps y Automatización End-to-End</h2>
      <p className="text-stone-700 leading-relaxed">
Mi trabajo se centra en diseñar arquitecturas altamente escalables sobre Microsoft Azure. Me especializo en orquestar servicios en la nube para automatizar flujos de trabajo, garantizando entornos de producción seguros, eficientes y alineados con las mejores prácticas de Azure DevOps y despliegue continuo.
      </p>
    </div>

    {/* Columna Derecha: Tarjetas */}
    <div className="lg:w-2/3 flex flex-col gap-6">
      {[
        { title: "Estrategias de Branching y CI/CD", desc: "Diseño de pipelines con disparadores automatizados basados en ramas Feature y GitFlow...", icon: "⚙️" },
        { title: "Orquestación y Resiliencia", desc: "Administración avanzada de clústeres Kubernetes: gestión de namespaces...", icon: "🚀" },
        { title: "Seguridad e Inmutabilidad", desc: "Aislamiento de red (VPC), automatización con Terraform y abstracción...", icon: "🛡️" }
      ].map((item, i) => (
        <div key={i} className="bg-[#f0ece5] p-8 rounded-xl border border-stone-300 hover:border-amber-700 transition-all duration-300 cursor-pointer flex items-start gap-6 group">
          <div className="text-3xl">{item.icon}</div>
          <div>
            <h4 className="font-bold text-xl mb-2 group-hover:text-amber-800">{item.title}</h4>
            <p className="text-sm text-stone-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* SECCIÓN DEMO VISUAL - PIPELINE GITOPS */}
<section id="pipeline" className="py-16 bg-[#0a192f] rounded-2xl p-8 mb-12 text-white">
  <div className="text-center mb-10">
    <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Demo Visual</h3>
    <h2 className="text-3xl font-bold">Simulación del Pipeline GitOps Activo</h2>
  </div>

  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 overflow-x-auto p-6">
    {[
      { label: "Push (Git)", icon: "code" },
      { label: "Build (Docker)", icon: "cog" },
      { label: "Security (Secrets)", icon: "shield" },
      { label: "K8s Deploy", icon: "cloud" }
    ].map((step, index, array) => (
      <div key={index} className="flex items-center">
        {/* Nodo del pipeline */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-[#0a192f] group-hover:bg-emerald-900/30 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
             <span className="text-2xl">✨</span> 
          </div>
          <span className="mt-3 text-xs font-semibold text-emerald-400">{step.label}</span>
        </div>

        {/* Línea conectora (no aparece tras el último) */}
        {index < array.length - 1 && (
          <div className="w-12 h-0.5 bg-emerald-700 mx-4 hidden md:block"></div>
        )}
      </div>
    ))}
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