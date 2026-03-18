// src/app/components/certificates/CertificateCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Certificate } from "./types";
import { Calendar, Clock, Award, ArrowRight } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Link href={`/certificado/${certificate.id}`}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] 
                   border border-[#333] rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 
                   transition-all duration-300 h-full"
      >
        {/* Imagem do Certificado */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badge de horas */}
          {certificate.hours && (
            <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
              <Clock size={12} className="text-white" />
              <span className="text-xs font-semibold text-white">
                {certificate.hours}
              </span>
            </div>
          )}

          {/* Overlay com ícone de expandir */}
          <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-red-600 p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <ArrowRight size={24} className="text-white" />
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-red-500 transition-colors">
              {certificate.title}
            </h3>
          </div>

          <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
            <Award size={14} className="text-red-500" />
            {certificate.institution}
          </p>

          <p className="text-xs text-gray-500 mb-4 flex items-center gap-2">
            <Calendar size={14} />
            Concluído em {certificate.date}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {certificate.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-red-500/10 text-red-400 rounded-md border border-red-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
