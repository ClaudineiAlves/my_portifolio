/**
 * Variáveis de ambiente tipadas e validadas
 * Centraliza o acesso para evitar erros de digitação
 */

function getEnvVar(key: string): string {
  const value = process.env[key];

  if (!value) {
    // Em desenvolvimento, avisa. Em produção, usa fallback vazio
    if (process.env.NODE_ENV === "development") {
      console.warn(`[ENV] Variável ${key} não definida`);
    }
    return "";
  }

  return value;
}

export const env = {
  email: getEnvVar("NEXT_PUBLIC_EMAIL"),
  phone: getEnvVar("NEXT_PUBLIC_PHONE"),
  address: getEnvVar("NEXT_PUBLIC_ADDRESS"),
  github: getEnvVar("NEXT_PUBLIC_GITHUB"),
  linkedin: getEnvVar("NEXT_PUBLIC_LINKEDIN"),
} as const;
