import { useState } from 'react';
import certificate from '../assets/certificate.png';

function CertificationSection() {
  const [isZoom, setIsZoom] = useState<boolean>(false);
  return (
    <section id="certification">
      <div className="mt-16">
        <h1 className="text-lg font-semibold"> Certification & Certificate </h1>
        <div className="grid grid-cols-2">
          <div className="ms-3 mt-5">
            <div className="relative inline-block overflow-hidden border border-slate-100 cursor-zoom-in">
              <img alt="Vocational competency assessment" className="w-60 h-auto hover:opacity-90 transition-opacity" />
            </div>
            <p className="text-sm">Achieved a "highly competent" rating for applying clean architecture in an application development task.</p>
            <p className="text-sm">2026</p>
          </div>
          <div className="ms-3 mt-5">
            <div className="relative inline-block overflow-hidden border border-slate-100 cursor-zoom-in">
              <img src={certificate} alt="Industrial visit certificate" className="w-60 h-auto hover:opacity-90 transition-opacity" onClick={() => setIsZoom(true)} />
            </div>
            <p className="text-sm">Industrial visit</p>
            <p className="text-sm">2024</p>
          </div>
        </div>
        {isZoom && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setIsZoom(false)}>
            <img src={certificate} alt="Industrial visit certificate zoomed" className="max-w-full max-h-[85vh] shadow-2xl object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}

export default CertificationSection;
