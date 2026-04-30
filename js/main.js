// Project data - add new projects here
const projectsData = [
  {
    id: 'qtFluentWidgets',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485902/qtFluentWidgets_qeb25t.png',
    tags: ['C++', 'Qt', 'UI']
  },
  {
    id: 'pysideFluentWidgetsPro',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485867/pysideFluentWidgetsPro_eido2b.png',
    tags: ['Python', 'PySide6', 'UI']
  },
  {
    id: 'kekkaiWorkshop',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/Touhou-translate',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485917/kekkaiWorkshop_gbpg4k.png',
    tags: ['Video', 'Localization', 'AI', 'Automation']
  },
  {
    id: 'neoBotFramework',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/NEO-Bot-Framework',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485866/neoBotFramework_lqa1v4.jpg',
    tags: ['Framework', 'Automation', 'TypeScript']
  },
  {
    id: "EX-FMBE-simulator",
    url: "https://github.com/Fairy-Oracle-Sanctuary/EX-FMBE-simulator",
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485867/EX-FMBE-simulator_p3djr7.png',
    tags: ["simulator", "Minecraft", "Command"]
  },
  {
    id: "BB-CVT-FMBE",
    url: "https://github.com/Fairy-Oracle-Sanctuary/BB-CVT-FMBE",
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777486058/BB-CVT-FMBE_xlgkee.png',
    tags: ["simulator", "Minecraft", "Command"]
  }
];

// GitHub icon SVG
const githubIconSVG = `<svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
</svg>`;

// Render projects
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectsData.map(project => {
    const imageHtml = project.image
      ? `<div class="project-image-wrapper"><img class="project-image" src="${project.image}" alt="${project.id}"></div>`
      : `<div class="project-image-wrapper"><div class="project-image-fallback" style="display: flex;">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </div></div>`;
    return `
    <a href="${project.url}" target="_blank" class="project-card">
      ${imageHtml}
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title" data-i18n="projects.items.${project.id}.name">${messages[currentLocale][`projects.items.${project.id}.name`] || project.id}</h3>
          ${githubIconSVG}
        </div>
        <p class="project-description" data-i18n="projects.items.${project.id}.desc">${messages[currentLocale][`projects.items.${project.id}.desc`] || ''}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </a>
  `;
  }).join('');

  // Re-observe new cards for animation
  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
}

// Internationalization messages
const messages = {
  en: {
    "nav.values": "Values",
    "nav.projects": "Projects",
    "nav.contributors": "Contributors",
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
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Minecraft Bedrock Edition FMBE simulator.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Minecraft Bedrock Edition model converter.",
    "contributors.title": "Contributors",
    "contributors.subtitle": "The people who make it all possible.",
    "contributors.supportersTitle": "Friends & Supporters",
    "contributors.supportersSubtitle": "Those who share our spirit, even without code.",
    "contributors.thanksTitle": "Special Thanks",
    "contributors.thanksSubtitle": "Organizations and communities that inspire and support us.",
    "footer.quote": '"Connect the world, connect every person who believes in freedom and goodwill."',
    "footer.github": "Github",
    "footer.manifesto": "Manifesto",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  zh: {
    "nav.values": "价值观",
    "nav.projects": "项目",
    "nav.contributors": "贡献者",
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
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Minecraft 基岩版FMBE模拟器。",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Minecraft 基岩版模型转换器。",
    "contributors.title": "贡献者",
    "contributors.subtitle": "让一切成为可能的人们",
    "contributors.supportersTitle": "朋友与支持者",
    "contributors.supportersSubtitle": "即便没有代码贡献，也与我们精神同在",
    "contributors.thanksTitle": "特别感谢",
    "contributors.thanksSubtitle": "启发和支持我们的组织与社区",
    "footer.quote": '"连接世界，连接每一个相信自由与善意的人。"',
    "footer.github": "Github",
    "footer.manifesto": "简章",
    "footer.copyright": "🄯 {year} 天机阁"
  },
  ja: {
    "nav.values": "価値",
    "nav.projects": "プロジェクト",
    "nav.contributors": "貢献者",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) は、自由ソフトウェアの精神を核とし、オープンソースのコラボレーションを手法とする開発者集団です。",
    "hero.exploreButton": "リポジトリを探索",
    "hero.manifestoButton": "私たちのマニフェスト",
    "values.codeFree.title": "コードは自由",
    "values.codeFree.description": "私たちは、ソフトウェアがユーザーから自由を奪うのではなく、自由を与えることを保証するために、GPLやAGPLなどのコピーレフト・ライセンスを好みます。",
    "values.peopleMatter.title": "人が大切",
    "values.peopleMatter.description": "背景に関わらず、私たちはコードとその背後にいる人を大切にします。憎しみはなく、成長だけがあります。",
    "values.purePassion.title": "純粋な情熱",
    "values.purePassion.description": "私たちは、前提条件や見返りを期待することなく、私たちが創り出したものをあなたと共有することを厭いません。",
    "projects.title": "コアリポジトリ",
    "projects.subtitle": "私たちのサンクチュアリのデジタル成果物を垣間見ることができます。",
    "projects.viewAll": "すべてのプロジェクトを表示",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Qt 用の Fluent Design コンポーネント ライブラリ。",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "PySide6 用の Fluent Design コンポーネント ライブラリ。",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "ビデオのローカライズを支援するツール。プロジェクト管理、ビデオのダウンロード、字幕の抽出、AI 翻訳、ビデオのエンコードをサポートします。",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "モダンで高性能なボットフレームワーク。",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Minecraft Bedrock Edition FMBE シミュレーター。",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Minecraft Bedrock Edition モデルコンバーター。",
    "contributors.title": "貢献者",
    "contributors.subtitle": "すべてを可能にする人々。",
    "contributors.supportersTitle": "友人 ＆ サポーター",
    "contributors.supportersSubtitle": "コードがなくても私たちの精神を共有する人々。",
    "contributors.thanksTitle": "スペシャルサンクス",
    "contributors.thanksSubtitle": "私たちにインスピレーションとサポートを与えてくれる組織とコミュニティ。",
    "footer.quote": '“世界を繋ぎ、自由と善意を信じるすべての人を繋ぐ。”',
    "footer.github": "Github",
    "footer.manifesto": "マニフェスト",
    "footer.copyright": "🄯 {year} 天机阁 (Fairy Oracle Sanctuary)"
  },
  ko: {
    "nav.values": "가치",
    "nav.projects": "프로젝트",
    "nav.contributors": "기여자",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "천기각 (Fairy Oracle Sanctuary)은 자유 소프트웨어 정신을 핵심으로 하고 오픈 소스 협업을 방법으로 하는 개발자 집단입니다.",
    "hero.exploreButton": "저장소 탐색",
    "hero.manifestoButton": "우리의 매니페스토",
    "values.codeFree.title": "코드는 자유",
    "values.codeFree.description": "우리는 소프트웨어가 사용자에게 자유를 박탈하는 것이 아니라 자유를 보장하기 위해 GPL 또는 AGPL과 같은 카피레프트 라이선스를 선호합니다.",
    "values.peopleMatter.title": "사람이 중요",
    "values.peopleMatter.description": "배경에 상관없이 우리는 코드와 그 뒤에 있는 사람을 소중히 여깁니다. 증오는 없고 성장만 있습니다.",
    "values.purePassion.title": "순수한 열정",
    "values.purePassion.description": "우리는 어떠한 전제 조건이나 보답에 대한 기대 없이 우리가 만든 것을 여러분과 공유할 준비가 되어 있습니다.",
    "projects.title": "핵심 저장소",
    "projects.subtitle": "우리 성역의 디지털 결과물을 살짝 엿보세요.",
    "projects.viewAll": "모든 프로젝트 보기",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Qt용 Fluent Design 구성 요소 라이브러리.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "PySide6용 Fluent Design 구성 요소 라이브러리.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "프로젝트 관리, 비디오 다운로드, 자막 추출, AI 번역 및 비디오 인코딩을 지원하는 비디오 현지화 도구입니다.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "현대적이고 고성능의 봇 프레임워크.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "마인크래프트 베드락 에디션 FMBE 시뮬레이터.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "마인크래프트 베드락 에디션 모델 변환기.",
    "contributors.title": "기여자",
    "contributors.subtitle": "이 모든 것을 가능하게 하는 사람들.",
    "contributors.supportersTitle": "친구 및 후원자",
    "contributors.supportersSubtitle": "코드 없이도 우리의 정신을 공유하는 사람들.",
    "contributors.thanksTitle": "특별 감사",
    "contributors.thanksSubtitle": "우리에게 영감과 지지를 주는 조직과 커뮤니티.",
    "footer.quote": '“세상을 연결하고, 자유와 선의를 믿는 모든 사람을 연결합니다.”',
    "footer.github": "Github",
    "footer.manifesto": "매니페스토",
    "footer.copyright": "🄯 {year} 천기각 (Fairy Oracle Sanctuary)"
  }
};

// Language names for display
const languageNames = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  ko: "한국어"
};

// Current locale
let currentLocale = 'en';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const navEntry = performance.getEntriesByType?.('navigation')?.[0];
  const isReload = navEntry?.type === 'reload';
  if (isReload && window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

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
          localStorage.setItem('locale', newLocale);

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
  let detectedLocale = 'en';

  if (savedLocale && messages[savedLocale]) {
    detectedLocale = savedLocale;
  } else {
    const browserLang = navigator.language.split('-')[0];
    if (messages[browserLang]) {
      detectedLocale = browserLang;
    }
  }

  currentLocale = detectedLocale;
  if (currentLangSpan) {
    currentLangSpan.textContent = languageNames[currentLocale];
  }
  if (langDropdown) {
    langDropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLocale);
    });
  }
  updateTranslations();

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  
  // Apply saved theme or detect system preference
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Render projects
  renderProjects();
  // Render contributors
  renderContributors();
  // Render supporters
  renderSupporters();
  // Render thanks
  renderThanks();
  // Particle background
  initParticles();

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random horizontal position
    particle.style.left = `${Math.random() * 100}%`;
    
    // Random duration between 15s and 25s
    const duration = Math.random() * 10 + 15;
    particle.style.setProperty('--duration', `${duration}s`);
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 200;
    particle.style.setProperty('--drift', `${drift}px`);
    
    // Random delay so they don't all start at once
    particle.style.animationDelay = `${Math.random() * 20}s`;
    
    container.appendChild(particle);
  }
}

// Contributor data - add new contributors here
const contributorsData = [
  { login: "baby-2016" },
  { login: "K2cr2O1" },
  { login: "Allah-Ethan" },
  { login: "YaozhengyuSBZWX" },
  { login: "HIllya51" },
  { login: "zhaojinhui114514-coder" },
  { login: "EillesWan" },
  { login: "deldelayredo" },
  { login: "MetallicAllex" },
  { login: "TaiBai52007" },
  { login: "LiFyrid" },
  { login: "Happy2018New" },
  { login: "superme1515" },
];

function renderContributors() {
  const grid = document.getElementById('contributors-grid');
  if (!grid) return;

  grid.innerHTML = contributorsData.map(c => `
    <a href="https://github.com/${c.login}" target="_blank" class="contributor-avatar" data-tooltip="${c.login}">
      <img src="https://avatars.githubusercontent.com/${c.login}" alt="${c.login}" loading="lazy">
    </a>
  `).join('');
}

// Supporters data - Discord friends who share our spirit
const supportersData = [
  { name: "AxisesEMG(China)", image: "images/contributors/axisesemg.jpg" },
  { name: "Saloth Sar(China)", image: "images/contributors/salothsar.jpg" },
  { name: "Pea Smoothie(China)", image: "images/contributors/peasmoothie.jpg" },
  { name: "QingQingHan(China)", image: "images/contributors/qqh.jpg" },
  { name: "awedwd(China)", image: "images/contributors/awedwd.jpg" },
  { name: "AI(China)", image: "images/contributors/ai.png" },
  { name: "jeanmajid(British)", image: "images/contributors/jeanmajid.webp" },
  { name: "Base(Japan)", image: "images/contributors/base.webp" },
  { name: "Strs2(Japan)", image: "images/contributors/strs2.webp" },
  { name: "Vi(Vietnam)", image: "images/contributors/vi.webp" },
  { name: "pudding(Philippine)", image: "images/contributors/pudding.webp" },
];

function renderSupporters() {
  const grid = document.getElementById('supporters-grid');
  if (!grid) return;

  grid.innerHTML = supportersData.map(s => `
    <div class="contributor-avatar supporter" data-tooltip="${s.name}">
      <img src="${s.image}" alt="${s.name}" loading="lazy">
    </div>
  `).join('');
}

// Thanks data - organizations and communities we want to thank
// type: 'github' = GitHub org (auto avatar + link), 'community' = local image, no link
const thanksData = [
  { type: "github", name: "YingLunTown & DreamLand Development Group", github: "YingLunTown-DreamLand" },
  { type: "github", name: "Minecraft Muti-Media Organization", github: "TriM-Organization" },
  { type: "github", name: "Command_Simulator", github: "missing244" },
  { type: "community", name: "Bedrock Commands Community", image: "images/teams/bcc.webp" },
  { type: "community", name: "コマンダーの集い", image: "images/teams/japancc.webp" },
  { type: "community", name: "MCBE动画研究室", image: "images/teams/mcbea.png" },
  { type: "community", name: "萌芽工作室", image: "images/teams/my.png" },
  { type: "community", name: "海龟壳工作室", image: "images/teams/hgk.png" },
  { type: "community", name: "幻想入的观测所", image: "images/teams/gcs.png" },
];

function renderThanks() {
  const grid = document.getElementById('thanks-grid');
  if (!grid) return;

  grid.innerHTML = thanksData.map(t => {
    if (t.type === 'github') {
      return `
        <a href="https://github.com/${t.github}" target="_blank" class="contributor-avatar" data-tooltip="${t.name}">
          <img src="https://avatars.githubusercontent.com/${t.github}" alt="${t.name}" loading="lazy">
        </a>
      `;
    } else {
      return `
        <div class="contributor-avatar supporter" data-tooltip="${t.name}">
          <img src="${t.image}" alt="${t.name}" loading="lazy">
        </div>
      `;
    }
  }).join('');
}

// Scroll-triggered animations for project cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Update all translations
function updateTranslations() {
  // Save locale preference
  localStorage.setItem('locale', currentLocale);

  // Re-render projects with new language
  renderProjects();

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
