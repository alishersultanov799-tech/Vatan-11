import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function CompletedProjects() {
  return (
    <section id="completed-projects" className="py-24 bg-[#edf6fd] relative overflow-hidden border-b border-sky-100">
      
      {/* Background ambient lights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Muvaffaqiyatli topshirilgan 6 ta loyiha galereyasi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Amaldagi portfelimiz</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Muvaffaqiyatli topshirilgan 6 ta yirik loyiha
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Har bir loyiha o‘z vaqtida, sifatli qurilish materiallari va to‘liq kadastr hujjatlari bilan topshirilgan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_DETAILS.completedProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group rounded-3xl bg-white border border-sky-200 hover:border-sky-400 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Rasm qismi */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sky-100">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold backdrop-blur-md flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{project.status}</span>
                </div>

                {/* Yili */}
                <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-lg bg-black/70 border border-white/20 text-white text-[11px] font-bold">
                  Topshirilgan yili: {project.year}
                </div>
              </div>

              {/* Tavsif qismi */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {project.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
