import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 antialiased font-sans">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="bg-white text-black font-extrabold p-1.5 rounded text-xs tracking-tighter">VR</span>
          <span className="font-bold text-white text-md md:text-lg tracking-wide">Verónica | Cloud Engineer</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#perfil" className="hover:text-white transition text-gray-400">Perfil</a>
          <a href="#skills" className="hover:text-white transition text-gray-400">Skills</a>
          <a href="#proyectos" className="hover:text-white transition text-gray-400">Proyectos</a>
        </div>
        <div className="text-xs font-semibold bg-[#161b22] border border-gray-700 rounded px-2.5 py-1 text-white">
          ES | EN
        </div>
      </nav>

      {/* CONTENEDOR PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 pt-6 pb-24 space-y-16">

        {/* 2. HERO SECTION */}
        <section id="perfil" className="scroll-mt-24">
          <div className="relative h-44 md:h-60 w-full rounded-t-xl overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-gray-800 flex items-center justify-center">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="text-center z-10 space-y-1 px-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                DevOps & Cloud Engineer
              </h1>
              <p className="text-blue-400 text-xs md:text-sm tracking-widest uppercase font-mono">
                CI/CD • Containers • Kubernetes • Infrastructure as Code
              </p>
            </div>
          </div>

          <div className="bg-[#161b22] rounded-b-xl border-x border-b border-gray-800 p-6 relative">
            <div className="absolute -top-14 left-6">
              <div className="w-24 h-24 rounded-full border-4 border-[#161b22] bg-zinc-800 ring-2 ring-emerald-400 flex items-center justify-center text-white font-bold text-xs uppercase tracking-wider">
                DevOps
              </div>
            </div>

            <div className="pt-12 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Disponible para proyectos / Roles</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Verónica</h2>
                <p className="text-sm font-mono text-gray-400">
                  📍 Remoto / España • 💻 Kubernetes, Docker & Cloud Architecture
                </p>
                <p className="text-sm max-w-3xl text-gray-400 leading-relaxed">
                  Orientada a construir entornos reproducibles, seguros y altamente observables. Experiencia práctica real empaquetando servicios web mediante <strong className="text-white">Docker</strong>, desplegando arquitecturas microservicios en <strong className="text-white">Kubernetes</strong> y automatizando flujos de despliegue para optimizar la entrega de software.
                </p>
              </div>

{/* BOTONES ACCIÓN */}
      <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto shrink-0 text-xs font-semibold">
        <a 
          href="/cv-veronica.pdf" 
          download="CV_Veronica_DevOps.pdf" 
          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-700 block"
        >
          Descargar CV
        </a>
        <a href="https://www.linkedin.com/in/verónica-fernández-fernández-124257406" target="_blank" rel="noreferrer" className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-700 block">
          LinkedIn
        </a>
        <a href="https://github.com/veronica10-tech" target="_blank" rel="noreferrer" className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-700 block">
          GitHub 🐙
        </a>
      </div>           
          </div>
        </section>

        {/* 3. IDENTIDAD */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
            <div className="text-blue-400 font-bold text-lg">☁️ Diseño Cloud</div>
            <p className="text-xs text-gray-400 leading-relaxed">Separación de entornos, configuración de redes privadas, mapeo de puertos seguros y aislamiento de microservicios.</p>
          </div>
          <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
            <div className="text-emerald-400 font-bold text-lg">📦 Entrega Automatizada</div>
            <p className="text-xs text-gray-400 leading-relaxed">Creación de imágenes Docker optimizadas, versionado preciso de tags y despliegues declarativos sin intervención manual.</p>
          </div>
          <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
            <div className="text-purple-400 font-bold text-lg">📊 Operación Medible</div>
            <p className="text-xs text-gray-400 leading-relaxed">Monitoreo del estado de Pods, troubleshooting de logs en tiempo real y reenvío de puertos seguros.</p>
          </div>
        </section>

        {/* 4. SKILLS */}
        <section id="skills" className="space-y-6 scroll-mt-24">
          <div>
            <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">Skills</h3>
            <h4 className="text-2xl font-bold text-white mt-1">Habilidades y herramientas</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <span className="text-blue-400 text-lg">🌐</span>
                <span>Networking y Contenedores</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">Docker, Docker Hub, Dockerfiles optimizados, mapeo de puertos, gestión de redes virtuales bridged y aislamiento.</p>
            </div>
            <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <span className="text-indigo-400 text-lg">☸️</span>
                <span>Orquestación de Clústeres</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">Kubernetes (K8s), Despliegues declarativos (YAML), Pods, Services, Port-Forwarding, control de estados.</p>
            </div>
            <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <span className="text-green-400 text-lg">⚡</span>
                <span>Desarrollo Backend</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">Node.js, Express, desarrollo de APIs RESTful, estructuración de respuestas en formato JSON limpio, control de hosts.</p>
            </div>
          </div>
        </section>

        {/* 5. PROYECTOS */}
        <section id="proyectos" className="space-y-6 scroll-mt-24">
          <div>
            <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">Portfolio</h3>
            <h4 className="text-2xl font-bold text-white mt-1">Proyectos destacados</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden flex flex-col justify-between">
              <div className="p-5 space-y-4">
                <div className="h-40 w-full bg-gradient-to-br from-indigo-950 to-slate-900 border border-gray-800 rounded-lg flex items-center justify-center p-4">
                  <div className="text-center font-mono text-[11px] text-gray-400 space-y-1">
                    <p className="text-emerald-400">👤 User (Browser) &rarr; :8080</p>
                    <p className="text-blue-400">⬇️ [ Port-Forward Tunnel ]</p>
                    <p className="text-purple-400">☸️ K8s Service &rarr; Pod (:3000)</p>
                    <p className="text-amber-400">🐳 Image: veronica/backend-api:v3</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-500/10 text-blue-400 text-[10px] font-mono px-2 py-0.5 rounded border border-blue-500/20">Profesional</span>
                  <h5 className="text-lg font-bold text-white">Arquitectura de Microservicios Orquestada en Kubernetes</h5>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Despliegue integral de una API en Node.js empaquetada herméticamente en Docker Hub. Orquestación declarativa mediante manifiestos YAML en Kubernetes para asegurar la estabilidad, balanceo interno y aislamiento de la red.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex flex-wrap gap-1.5">
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Kubernetes</span>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Docker Hub</span>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Node.js</span>
              </div>
            </div>

            <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden flex flex-col justify-between opacity-75">
              <div className="p-5 space-y-4">
                <div className="h-40 w-full bg-zinc-900 border border-gray-800 rounded-lg flex items-center justify-center border-dashed">
                  <span className="text-xs text-gray-500 font-mono">🛠️ Próximo Proyecto Cloud</span>
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-purple-500/10 text-purple-400 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-500/20">En diseño</span>
                  <h5 className="text-lg font-bold text-white">Pipeline de CI/CD Automático en la Nube</h5>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Próximo hito: Configuración de flujos automatizados con GitHub Actions para compilar y subir imágenes a producción.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex flex-wrap gap-1.5">
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">CI/CD</span>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Cloud</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}