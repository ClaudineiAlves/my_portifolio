"use client";

import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithoutCaptcha from "./contact-without-captcha";
import RevealText from "../RevealText";
import { MapPin, Send, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// ✅ Dados de contato via variáveis de ambiente (não expostos no GitHub)
const CONTACT_DATA = {
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  address: process.env.NEXT_PUBLIC_ADDRESS || "",
  github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/ClaudineiAlves",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN ||
    "https://linkedin.com/in/claudinei-alves",
} as const;

interface ContactLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  value: string;
  colorClass: string;
}

const ContactInfoCard = ({
  href,
  icon: Icon,
  label,
  value,
  colorClass,
}: ContactLinkProps) => (
  <Link
    href={href}
    target="_blank"
    className="group relative flex items-center gap-4 p-4 rounded-2xl border border-bg-tertiary bg-bg-secondary/50 hover:bg-bg-secondary hover:border-primary-500/30 transition-all duration-300 shadow-card hover:shadow-glow-sm"
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary-500/10 group-hover:bg-primary-500/20`}
    >
      <Icon
        className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${colorClass}`}
      />
    </div>
    <div className="flex flex-col">
      <span className="text-caption text-content-subtle mb-1">{label}</span>
      <span className="text-body text-content-primary font-medium group-hover:text-primary-400 transition-colors">
        {value}
      </span>
    </div>
    {/* Hover Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none blur-xl bg-primary-500" />
  </Link>
);

function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative z-50 py-24 lg:py-48 overflow-hidden"
    >
      {/* Background Decorative Elements - novas cores */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-20">
          <RevealText>
            <div className="flex items-center gap-3 text-primary-500">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                <MessageSquare className="w-5 h-5 text-primary-400" />
              </div>
              <span className="text-caption text-primary-400">
                {t("contact.section_label")}
              </span>
            </div>
          </RevealText>

          <RevealText delay={100}>
            <h2 className="text-headline font-bold text-content-primary tracking-tight text-center">
              {t("contact.title_word1")}{" "}
              <span className="title-gradient">{t("contact.title_word2")}</span>
            </h2>
          </RevealText>

          <RevealText delay={200}>
            <p className="text-body-large text-content-secondary max-w-2xl text-center">
              {t("contact.subtitle")}
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Side: Form */}
          <div className="lg:col-span-7">
            <RevealText direction="right" delay={300}>
              <div className="bg-bg-secondary/30 border border-bg-tertiary rounded-3xl p-8 shadow-card">
                <ContactWithoutCaptcha />
              </div>
            </RevealText>
          </div>

          {/* Right Side: Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <RevealText direction="left" delay={400}>
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-content-primary flex items-center gap-3">
                  <Send className="w-5 h-5 text-primary-500" />
                  {t("contact.direct_title")}
                </h3>
                <div className="flex flex-col gap-4">
                  <ContactInfoCard
                    href={
                      CONTACT_DATA.email ? `mailto:${CONTACT_DATA.email}` : "#"
                    }
                    icon={MdAlternateEmail}
                    label="Email"
                    value={
                      CONTACT_DATA.email || t("contact.email_not_available")
                    }
                    colorClass="text-primary-500"
                  />
                  <ContactInfoCard
                    href={
                      CONTACT_DATA.phone ? `tel:${CONTACT_DATA.phone}` : "#"
                    }
                    icon={IoMdCall}
                    label={t("contact.phone_label")}
                    value={
                      CONTACT_DATA.phone || t("contact.phone_not_available")
                    }
                    colorClass="text-primary-600"
                  />
                  <ContactInfoCard
                    href="#"
                    icon={MapPin}
                    label={t("contact.location_label")}
                    value={
                      CONTACT_DATA.address || t("contact.address_not_available")
                    }
                    colorClass="text-primary-700"
                  />
                </div>
              </div>
            </RevealText>

            <RevealText direction="left" delay={500}>
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-content-primary">
                  {t("contact.social_title")}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={CONTACT_DATA.github}
                    target="_blank"
                    className="w-14 h-14 rounded-2xl border border-bg-tertiary bg-bg-secondary flex items-center justify-center hover:bg-bg-tertiary hover:border-primary-500/30 hover:scale-110 hover:shadow-glow-sm transition-all duration-300 text-content-secondary hover:text-primary-400"
                    aria-label="GitHub"
                  >
                    <IoLogoGithub className="w-6 h-6" />
                  </Link>
                  <Link
                    href={CONTACT_DATA.linkedin}
                    target="_blank"
                    className="w-14 h-14 rounded-2xl border border-bg-tertiary bg-bg-secondary flex items-center justify-center hover:bg-bg-tertiary hover:border-primary-500/30 hover:scale-110 hover:shadow-glow-sm transition-all duration-300 text-content-secondary hover:text-primary-400"
                    aria-label="LinkedIn"
                  >
                    <BiLogoLinkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
