// src/components/certificates/types.ts
export interface Certificate {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  hours?: string;
}