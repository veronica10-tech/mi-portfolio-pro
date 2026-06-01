export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans antialiased pb-12">
      {/* CABECERA HERO */}
      <header className="relative w-full h-48 md:h-64 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center text-center px-4 border-b border-gray-800">
        <h1 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
          DevOps & Cloud Engineer
        </h1>
        <p className="text-blue-400 text-xs md:text-sm tracking-widest uppercase font-mono">
          CI/CD • Containers • Kubernetes • Infrastructure as Code
        </p>
      </header>

      {/* CUERPO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-10">
        
        {/* TARJETA DE PERFIL */}
        <section className="bg-[#161b22] rounded-xl border border-gray-800 p-6 relative shadow-xl mb-8">
          {/* Avatar / Badge */}
          <div className="absolute -top-12 left-6 md:left-8">
            <div className="w-24 h-24 rounded-full border-4 border-[#161b22] bg-zinc-800 ring-2 ring-emerald-400 flex items-center justify-center font-mono font-bold text-white text-sm shadow-lg">
              DevOps
            </div>
          </div>

          {/* Información de Perfil */}
          <div className="pt-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Verónica</h2>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Disponible para proyectos / Roles
                </span>
              </div>
              
              <p className="text-sm font-mono text-gray-400 flex items-center gap-2 flex-wrap">
                📍 Remoto / España • 💻 Kubernetes, Docker y Arquitectura en la Nube
              </p>
              
              <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">
                Orientada a construir entornos reproducibles, seguros y altamente observables. Experiencia práctica empaquetando servicios web mediante <strong className="text-white">Docker</strong>, desplegando arquitecturas microservicios en <strong className="text-white">Kubernetes</strong> y automatizando flujos de despliegue para optimizar la entrega de software.
              </p>
            </div>

            {/* BOTONES ACCIÓN */}
            <div className="flex flex-col gap-2 w-full md:w-auto shrink-0 text-xs font-semibold min-w-[160px]">
              <a 
                href="/cv-veronica.pdf" 
                download="CV_Veronica_DevOps.pdf" 
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-800 shadow-sm"
              >
                Descargar CV
              </a>

              <a 
                href="https://www.linkedin.com/in/veronica-fernandez-fernandez-124257406" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-800 shadow-sm"
              >
                LinkedIn
              </a>

              <a 
                href="https://github.com/veronica10-tech" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-800 shadow-sm"
              >
                GitHub 🐙
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONOCIMIENTOS TÉCNICOS */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-emerald-400">#</span> Conocimientos Técnicos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                ☁️ Diseño Cloud
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Separación de entornos, configuración de redes privadas, mapeo de puertos y gestión de volúmenes estables.
              </p>
            </div>
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                📦 Orquestación y Contenedores
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Creación de imágenes optimizadas con Dockerfile, gestión multi-contenedor mediante Docker Compose y despliegue de Pods/Services en clústeres locales de Kubernetes.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN PROYECTOS */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-purple-400">#</span> Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Proyecto 1 */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden flex flex-col h-full">
              <div className="p-5 space-y-3 flex-1">
                <span className="inline-block bg-purple-500/10 text-purple-400 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-500/20">
                  Kubernetes • Docker
                </span>
                <h4 className="text-base font-bold text-white">Proyecto Kubernetes: Contador Web</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Despliegue integral de una arquitectura de microservicios con un contador web en Node.js y base de datos Redis. Configuración de Pods, Deployments y Services para garantizar alta disponibilidad y balanceo de carga.
                </p>
              </div>
              <div className="p-4 pt-0 flex flex-wrap gap-1.5 border-t border-gray-800/50 mt-auto bg-black/10">
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">K8s</span>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Redis</span>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Node.js</span>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden flex flex-col h-full">
              <div className="p-5 space-y-3 flex-1">
                <span className="inline-block bg-purple-500/10 text-purple-400 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-500/20">
                  CI/CD • GitHub Actions
                </span>
                <h4 className="text-base font-bold text-white">Pipeline de CI/CD Automático en la Nube</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Próximo hito: Configuración de flujos automatizados con GitHub Actions para compilar y subir imágenes a un registro de contenedores de forma segura ante cada cambio de código.
                </p>
              </div>
              <div className="p-4 pt-0 flex flex-wrap gap-1.5 border-t border-gray-800/50 mt-auto bg-black/10">
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">CI/CD</span>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Cloud</span>
              </div>
            </div>
          </div>
        </section>

        {/* PIE DE PÁGINA */}
        <footer className="w-full text-center py-6 text-gray-500 text-xs border-t border-gray-800 mt-12">
          © {new Date().getFullYear()} Verónica. Todos los derechos reservados.
        </footer>

      </main>
    </div>
  );
}