// src/app/certificado/not-found.tsx
import Link from "next/link";
import { Award, ArrowLeft } from "lucide-react";

export default function CertificateNotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full mb-6">
          <Award size={40} className="text-red-500" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Certificado não encontrado
        </h1>
        <p className="text-gray-400 mb-8">
          O certificado que você está procurando não existe ou foi removido.
        </p>

        <Link
          href="/#certificates"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
        >
          <ArrowLeft size={20} />
          Voltar para Certificados
        </Link>
      </div>
    </main>
  );
}
