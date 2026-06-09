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

<section id="enfoque" className="mb-12">
  <h3 className="text-xl font-bold text-amber-900 mb-6">Enfoque Profesional</h3>
  <div className="grid grid-cols-1 gap-4">
    {[
      { 
        title: "Estrategias de Branching y CI/CD", 
        desc: "Diseño de pipelines con disparadores automatizados basados en ramas Feature y GitFlow, controlando la compilación, testing y versionado dinámico.",
        icon: "⚙️" 
      },
      { 
        title: "Orquestación y Resiliencia", 
        desc: "Administración avanzada de clústeres Kubernetes: gestión de namespaces, deployments, configuración de Ingress, certificados SSL y troubleshooting con k9s.",
        icon: "🚀" 
      },
      { 
        title: "Seguridad e Inmutabilidad", 
        desc: "Aislamiento de red (VPC), automatización con Terraform y abstracción de credenciales críticas mediante inyección dinámica de Kubernetes Secrets.",
        icon: "🛡️" 
      }
    ].map((item, index) => (
      <div 
        key={index}
        className="flex items-start p-6 bg-[#0a192f] border border-stone-800 rounded-xl transition-all duration-300 hover:border-amber-600 hover:bg-[#112240] cursor-pointer group"
      >
        <div className="text-3xl mr-6 mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
        <div>
          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
          <p className="text-sm text-stone-400 leading-relaxed">{item.desc}</p>
        </div>
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