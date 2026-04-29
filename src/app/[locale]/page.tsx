"use client";

import { Locale, localeNames, locales } from "@/i18n.config";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Globe, Heart, Terminal } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/Fairy-Oracle-Sanctuary' : '';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const projects = [
  {
    key: "qtFluentWidgets",
    tags: ["C++", "Qt", "UI"],
    link: "https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets"
  },
  {
    key: "pysideFluentWidgetsPro",
    tags: ["Python", "PySide6", "UI"],
    link: "https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro"
  },
  {
    key: "kekkaiWorkshop",
    tags: ["Video", "Localization", "AI", "Automation"],
    link: "https://github.com/Fairy-Oracle-Sanctuary/Touhou-translate"
  },
  {
    key: "neoBotFramework",
    tags: ["Framework", "Automation", "TypeScript"],
    link: "https://github.com/Fairy-Oracle-Sanctuary/NEO-Bot-Framework"
  }
];

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{localeNames[locale as Locale]}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors cursor-pointer ${
                loc === locale ? 'font-bold text-accent' : ''
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
              <Image 
                src={`${basePath}/images/icon_128X128.png`} 
                alt="FOS Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Fairy Oracle <span className="text-accent">Sanctuary</span></span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="https://github.com/Fairy-Oracle-Sanctuary" target="_blank" className="hover:text-accent transition-colors">
              <GithubIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-5xl sm:text-7xl font-bold leading-tight mb-8">
            {t.rich('hero.title', {
              goodwill: (chunks) => <span className="text-accent underline decoration-4 underline-offset-8">{chunks}</span>
            })}
          </h1>
          <p className="text-xl text-secondary leading-relaxed mb-10 max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://github.com/Fairy-Oracle-Sanctuary" 
              target="_blank"
              className="px-8 py-4 bg-accent text-black rounded-full font-bold hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-accent/20 transition-all flex items-center gap-2 group cursor-pointer"
            >
              {t('hero.exploreButton')}
              <GithubIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
            <Link 
              href="https://github.com/Fairy-Oracle-Sanctuary/fos-docs/blob/main/fos-docs.txt" 
              target="_blank"
              className="px-8 py-4 border-2 border-primary rounded-full font-bold hover:bg-primary/5 hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              {t('hero.manifestoButton')}
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats/Nature Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-accent rounded-2xl flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold">{t('values.codeFree.title')}</h3>
            <p className="text-secondary">{t('values.codeFree.description')}</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold">{t('values.peopleMatter.title')}</h3>
            <p className="text-secondary">{t('values.peopleMatter.description')}</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold">{t('values.purePassion.title')}</h3>
            <p className="text-secondary">{t('values.purePassion.description')}</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-4">{t('projects.title')}</h2>
            <p className="text-secondary">{t('projects.subtitle')}</p>
          </div>
          <Link href="https://github.com/orgs/Fairy-Oracle-Sanctuary/repositories" target="_blank" className="hidden sm:flex items-center gap-2 text-accent font-bold hover:underline cursor-pointer">
            {t('projects.viewAll')} <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white border border-gray-200 rounded-3xl hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-heading text-2xl font-bold group-hover:text-accent transition-colors">{t(`projects.items.${project.key}.name`)}</h3>
                  <Link href={project.link} target="_blank">
                    <GithubIcon className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
                  </Link>
                </div>
                <p className="text-secondary mb-8 leading-relaxed">{t(`projects.items.${project.key}.desc`)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-xs font-bold rounded-full uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative w-16 h-16 mx-auto mb-8 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
            <Image 
              src={`${basePath}/images/icon_128X128.png`} 
              alt="FOS Logo" 
              fill
              className="object-cover"
            />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-6">Fairy Oracle Sanctuary</h2>
          <p className="text-secondary mb-10 max-w-md mx-auto italic">
            {t('footer.quote')}
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <Link href="https://github.com/Fairy-Oracle-Sanctuary" target="_blank" className="text-secondary hover:text-primary transition-colors cursor-pointer">{t('footer.github')}</Link>
            <Link href="https://github.com/Fairy-Oracle-Sanctuary/fos-docs/blob/main/fos-docs.txt" target="_blank" className="text-secondary hover:text-primary transition-colors cursor-pointer">{t('footer.manifesto')}</Link>
          </div>
          <p className="text-sm text-gray-400">{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </footer>
    </main>
  );
}
