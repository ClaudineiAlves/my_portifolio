import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Otimização habilitada — Next.js comprime e converte para WebP/AVIF automaticamente.
    // Adicione aqui os domínios externos de imagens que você usa, se houver:
    // remotePatterns: [
    //   { protocol: "https", hostname: "exemplo.com" },
    // ],
  },
  trailingSlash: true,
};

const nextConfigFunction = async (phase: string) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
      register: true,
      disable: phase === PHASE_DEVELOPMENT_SERVER,
    });

    return withPWA(nextConfig);
  }

  return nextConfig;
};

export default nextConfigFunction;
