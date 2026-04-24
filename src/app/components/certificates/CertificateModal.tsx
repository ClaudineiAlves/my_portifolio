// src/app/components/certificates/CertificateModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Certificate } from "./types";
import {
  X,
  ExternalLink,
  Calendar,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
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
            className="fixed inset-0 bg-bg-primary/90 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-bg-secondary to-bg-primary border border-bg-tertiary rounded-2xl shadow-card pointer-events-auto">
              {/* Botão Fechar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-bg-tertiary hover:bg-primary-600 rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="Fechar modal"
              >
                <X size={20} className="text-content-primary" />
              </button>

              {/* Imagem Grande */}
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary-500" size={24} />
                  <span className="text-primary-400 font-semibold text-body">
                    Certificado
                  </span>
                </div>

                <h2 className="text-headline font-bold text-content-primary mb-4">
                  {certificate.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-body text-content-secondary">
                    <Award
                      size={18}
                      className="text-primary-500 flex-shrink-0"
                    />
                    <span>{certificate.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-body text-content-secondary">
                    <Calendar
                      size={18}
                      className="text-primary-500 flex-shrink-0"
                    />
                    <span>Concluído em {certificate.date}</span>
                  </div>
                  {certificate.hours && (
                    <div className="flex items-center gap-2 text-body text-content-secondary">
                      <Clock
                        size={18}
                        className="text-primary-500 flex-shrink-0"
                      />
                      <span>Carga horária: {certificate.hours}</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-body-large font-semibold text-content-primary mb-2 flex items-center gap-2">
                    <CheckCircle size={20} className="text-primary-500" />
                    Sobre o curso
                  </h3>
                  <p className="text-body text-content-secondary leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Todas as Tags */}
                <div className="mb-8">
                  <h3 className="text-caption text-content-subtle mb-3 uppercase tracking-wider">
                    Tecnologias/Habilidades
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-primary-500/10 text-primary-400 rounded-lg border border-primary-500/20 text-body-small hover:bg-primary-500/20 hover:border-primary-500/40 transition-all cursor-default"
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
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  <ExternalLink
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
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
