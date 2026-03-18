// src/app/components/certificates/CertificateModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Certificate } from "./types";
import { X, ExternalLink, Calendar, Clock, Award, CheckCircle } from "lucide-react";

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#333] rounded-2xl shadow-2xl pointer-events-auto">
              
              {/* Botão Fechar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Imagem Grande */}
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-red-500" size={24} />
                  <span className="text-red-500 font-semibold">Certificado</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {certificate.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Award size={18} className="text-red-500" />
                    <span>{certificate.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} className="text-red-500" />
                    <span>Concluído em {certificate.date}</span>
                  </div>
                  {certificate.hours && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock size={18} className="text-red-500" />
                      <span>Carga horária: {certificate.hours}</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle size={20} className="text-red-500" />
                    Sobre o curso
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Todas as Tags */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                    Tecnologias/Habilidades
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botão Ver Certificado */}
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
                >
                  <ExternalLink size={20} />
                  Ver Certificado Oficial
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}