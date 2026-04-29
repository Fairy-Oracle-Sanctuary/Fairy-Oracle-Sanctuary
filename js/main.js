// Internationalization messages
const messages = {
  en: {
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) is a developer collective with the spirit of free software at its core and open-source collaboration as its method.",
    "hero.exploreButton": "Explore Repositories",
    "hero.manifestoButton": "Our Manifesto",
    "values.codeFree.title": "Code is Free",
    "values.codeFree.description": "We prefer Copyleft licenses such as GPL or AGPL to ensure that software grants freedom to users rather than depriving them of it.",
    "values.peopleMatter.title": "People Matter",
    "values.peopleMatter.description": "Regardless of background, we value the code and the person behind it. No hate, only growth.",
    "values.purePassion.title": "Pure Passion",
    "values.purePassion.description": "We are willing to share what we create with you without prerequisites or expectations of anything in return.",
    "projects.title": "Core Repositories",
    "projects.subtitle": "A glimpse into our sanctuary's digital output.",
    "projects.viewAll": "View all projects",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "A fluent design component library for Qt/PySide6.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "A fluent design component library for PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Video localization assistant with project management, subtitle extraction, video downloading, AI translation, and video encoding.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "A modern, high-performance bot framework.",
    "footer.quote": '"Connect the world, connect every person who believes in freedom and goodwill."',
    "footer.github": "Github",
    "footer.manifesto": "Manifesto",
    "footer.copyright": "© {year} Fairy Oracle Sanctuary"
  },
  zh: {
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) 是一个以自由软件精神为内核、以开源协作为方式的开发者团体。",
    "hero.exploreButton": "探索仓库",
    "hero.manifestoButton": "阅读简章",
    "values.codeFree.title": "代码自由",
    "values.codeFree.description": "我们倾向于使用 GPL 或 AGPL 等 Copyleft 许可证，确保软件赋予用户自由，而非剥夺自由。",
    "values.peopleMatter.title": "以人为本",
    "values.peopleMatter.description": "无论贡献者是新手还是老手、来自哪个国家、说什么语言——在代码面前，我们只认代码本身。",
    "values.purePassion.title": "纯粹热爱",
    "values.purePassion.description": "我们愿意把自己创造的东西分享给你，不设前提，不求回报。",
    "projects.title": "核心仓库",
    "projects.subtitle": "一窥我们的数字产出。",
    "projects.viewAll": "查看全部项目",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "适用于 Qt 的 Fluent Design 组件库。",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "适用于 PySide6 的 Fluent Design 组件库。",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "视频汉化辅助工具，支持项目管理、视频下载、字幕提取、AI 翻译、视频压制。",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "现代化、高性能的机器人框架。",
    "footer.quote": '"连接世界，连接每一个相信自由与善意的人。"',
    "footer.github": "Github",
    "footer.manifesto": "简章",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  }
};

// Language names for display
const languageNames = {
  en: "English",
  zh: "中文"
};

// Current locale
let currentLocale = 'en';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set copyright year
  const copyrightEl = document.getElementById('copyright');
  if (copyrightEl) {
    const year = new Date().getFullYear();
    copyrightEl.textContent = messages[currentLocale]["footer.copyright"].replace('{year}', year);
  }

  // Language switcher
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const currentLangSpan = document.getElementById('currentLang');

  if (langBtn && langDropdown) {
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });

    // Language option click handlers
    const langOptions = langDropdown.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const newLocale = option.dataset.lang;
        if (newLocale !== currentLocale) {
          // Update active state
          langOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');

          // Update current locale
          currentLocale = newLocale;

          // Update display
          currentLangSpan.textContent = languageNames[newLocale];

          // Update all translatable elements
          updateTranslations();
        }
        langDropdown.classList.remove('show');
      });
    });
  }

  // Detect browser language on first visit
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale && messages[savedLocale]) {
    currentLocale = savedLocale;
    currentLangSpan.textContent = languageNames[currentLocale];
    langDropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLocale);
    });
    updateTranslations();
  } else {
    const browserLang = navigator.language.split('-')[0];
    if (messages[browserLang]) {
      currentLocale = browserLang;
      currentLangSpan.textContent = languageNames[currentLocale];
      langDropdown.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLocale);
      });
      updateTranslations();
    }
  }
});

// Scroll-triggered animations for project cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});

// Update all translations
function updateTranslations() {
  // Save locale preference
  localStorage.setItem('locale', currentLocale);

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = messages[currentLocale][key];
    if (translation) {
      // Check if translation contains HTML
      if (translation.includes('<')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update copyright with year
  const copyrightEl = document.getElementById('copyright');
  if (copyrightEl) {
    const year = new Date().getFullYear();
    copyrightEl.textContent = messages[currentLocale]["footer.copyright"].replace('{year}', year);
  }

  // Update html lang attribute
  document.documentElement.lang = currentLocale;
}
