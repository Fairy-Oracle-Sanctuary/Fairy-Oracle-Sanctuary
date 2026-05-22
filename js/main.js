// Project data - add new projects here
const projectsData = [
  {
    id: 'qtFluentWidgets',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/Qt-Fluent-Widgets',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485902/qtFluentWidgets_qeb25t.png',
    tags: ['C++', 'Qt', 'UI'],
    category: 'ui'
  },
  {
    id: 'pysideFluentWidgetsPro',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/PySide6-Fluent-Widgets-Pro',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485867/pysideFluentWidgetsPro_eido2b.png',
    tags: ['Python', 'PySide6', 'UI'],
    category: 'ui'
  },
  {
    id: 'kekkaiWorkshop',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/Touhou-translate',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485917/kekkaiWorkshop_gbpg4k.png',
    tags: ['Video', 'Localization', 'AI', 'Automation'],
    category: 'free-software'
  },
  {
    id: 'neoBotFramework',
    url: 'https://github.com/Fairy-Oracle-Sanctuary/NEO-Bot-Framework',
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485866/neoBotFramework_lqa1v4.jpg',
    tags: ['Framework', 'Automation', 'TypeScript'],
    category: 'bot'
  },
  {
    id: "EX-FMBE-simulator",
    url: "https://github.com/Fairy-Oracle-Sanctuary/EX-FMBE-simulator",
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777485867/EX-FMBE-simulator_p3djr7.png',
    tags: ["simulator", "Minecraft", "Command"],
    category: 'minecraft'
  },
  {
    id: "BB-CVT-FMBE",
    url: "https://github.com/Fairy-Oracle-Sanctuary/BB-CVT-FMBE",
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1777486058/BB-CVT-FMBE_xlgkee.png',
    tags: ["simulator", "Minecraft", "Command"],
    category: 'minecraft'
  },
  {
    id: "FMBE-Hub",
    url: "https://github.com/Fairy-Oracle-Sanctuary/FMBE-Hub",
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1779106781/FMBE-Hub_n9uudl.png',
    tags: ["Minecraft", "Command"],
    category: 'minecraft'
  },
  {
    id: "Touhou-Chabangeki-Collect",
    url: "https://github.com/Fairy-Oracle-Sanctuary/Touhou-Chabangeki-Collect",
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1779106966/Touhou-Chabangeki-Collect_qfv16n.png',
    tags: ["Touhou"],
    category: 'touhou'
  },
  {
    id: "Touhou-translate",
    url: "https://github.com/Fairy-Oracle-Sanctuary/Touhou-translate",
    image: 'https://res.cloudinary.com/do6rggmy6/image/upload/v1779107041/%E6%98%9F%E6%9C%88%E5%A4%9C_xasjdm.jpg',
    tags: ["Touhou"],
    category: 'touhou'
  }
];

const projectCategories = [
  { id: 'free-software', i18nKey: 'projects.category.freeSoftware' },
  { id: 'bot', i18nKey: 'projects.category.bot' },
  { id: 'ui', i18nKey: 'projects.category.ui' },
  { id: 'touhou', i18nKey: 'projects.category.touhou' },
  { id: 'minecraft', i18nKey: 'projects.category.minecraft' }
];

// GitHub icon SVG
const githubIconSVG = `<svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
</svg>`;

// Render projects
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const isAllProjectsPage = document.querySelector('.all-projects-page') !== null;

  const createCardHtml = (project) => {
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
  };

  if (isAllProjectsPage) {
    // Render by categories
    grid.innerHTML = projectCategories.map(cat => {
      const catProjects = projectsData.filter(p => p.category === cat.id);
      if (catProjects.length === 0) return ''; // Skip empty categories
      
      return `
        <div class="project-category-section">
          <h2 class="project-category-title" data-i18n="${cat.i18nKey}">${messages[currentLocale][cat.i18nKey] || cat.id}</h2>
          <div class="projects-subgrid">
            ${catProjects.map(createCardHtml).join('')}
          </div>
        </div>
      `;
    }).join('');
    
    // Add grid styling to subgrids
    grid.style.display = 'block'; // the parent container becomes a block wrapper

    // Attach search logic
    const searchInput = document.getElementById('projectSearch');
    const noResultsEl = document.getElementById('no-results');
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        let anyVisible = false;

        // Iterate through all category sections
        const categorySections = grid.querySelectorAll('.project-category-section');
        categorySections.forEach(section => {
          let visibleInCategory = false;
          const cards = section.querySelectorAll('.project-card');

          cards.forEach(card => {
            const title = card.querySelector('.project-title').textContent.toLowerCase();
            const desc = card.querySelector('.project-description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.toLowerCase());
            
            const isMatch = title.includes(query) || desc.includes(query) || tags.some(tag => tag.includes(query));
            
            if (isMatch) {
              card.style.display = 'flex';
              visibleInCategory = true;
              anyVisible = true;
            } else {
              card.style.display = 'none';
            }
          });

          // Hide category header if no projects match in this category
          section.style.display = visibleInCategory ? 'block' : 'none';
        });

        // Show/hide no results message
        if (noResultsEl) {
          noResultsEl.style.display = anyVisible || query === '' ? 'none' : 'block';
        }
      });
    }
  } else {
    // Render flat list
    grid.innerHTML = projectsData.slice(0, 6).map(createCardHtml).join('');
    // Ensure parent is grid
    grid.style.display = '';
  }

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
    "hero.description": "Tianjige (Fairy Oracle Sanctuary) is a developer collective with the spirit of free software at its core and open-source collaboration as its method, and also a Touhou Project fan circle.",
    "hero.exploreButton": "Explore Repositories",
    "hero.manifestoButton": "Our Manifesto",
    "hero.discordButton": "Join Discord",
    "values.codeFree.title": "Code is Free",
    "values.codeFree.description": "We prefer Copyleft licenses such as GPL or AGPL to ensure that software grants freedom to users rather than depriving them of it.",
    "values.peopleMatter.title": "People Matter",
    "values.peopleMatter.description": "Regardless of background, we value the code and the person behind it. No hate, only growth.",
    "values.purePassion.title": "Pure Passion",
    "values.purePassion.description": "We are willing to share what we create with you without prerequisites or expectations of anything in return.",
    "projects.title": "Core Repositories",
    "projects.subtitle": "A glimpse into our sanctuary's digital output.",
    "projects.viewAll": "View all projects",
    "projects.exploreMore": "Project Details",
    "projects.backHome": "← Back Home",
    "projects.searchPlaceholder": "Search projects by name or tag...",
    "projects.noResults": "No projects found matching your criteria.",
    "projects.category.freeSoftware": "Free Software",
    "projects.category.bot": "Bot Frameworks",
    "projects.category.ui": "UI Components",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Minecraft Tools",
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
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "A collection of FMBE tools for Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "A collection website for Touhou Project tea-time dramas.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "A translation and repost project for Touhou Project tea-time dramas.",
    "contributors.title": "Contributors",
    "contributors.subtitle": "The people who make it all possible.",
    "contributors.supportersTitle": "Friends & Supporters",
    "contributors.supportersSubtitle": "Those who share our spirit, even without code.",
    "contributors.thanksTitle": "Special Thanks",
    "contributors.thanksSubtitle": "Organizations and communities that inspire and support us.",
    "footer.quote": '"Connect the world, connect every person who believes in freedom and goodwill."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Manifesto",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  zh: {
    "nav.values": "价值观",
    "nav.projects": "项目",
    "nav.contributors": "贡献者",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) 是一个以自由软件精神为内核、以开源协作为方式的开发者团体&东方Project同人社团。",
    "hero.exploreButton": "探索仓库",
    "hero.manifestoButton": "阅读简章",
    "hero.discordButton": "加入 Discord",
    "values.codeFree.title": "代码自由",
    "values.codeFree.description": "我们倾向于使用 GPL 或 AGPL 等 Copyleft 许可证，确保软件赋予用户自由，而非剥夺自由。",
    "values.peopleMatter.title": "以人为本",
    "values.peopleMatter.description": "无论贡献者是新手还是老手、来自哪个国家、说什么语言——在代码面前，我们只认代码本身。",
    "values.purePassion.title": "纯粹热爱",
    "values.purePassion.description": "我们愿意把自己创造的东西分享给你，不设前提，不求回报。",
    "projects.title": "核心仓库",
    "projects.subtitle": "一窥我们的数字产出。",
    "projects.viewAll": "查看全部项目",
    "projects.exploreMore": "项目详情",
    "projects.backHome": "← 返回首页",
    "projects.searchPlaceholder": "按名称或标签搜索项目...",
    "projects.noResults": "没有找到符合条件的项目。",
    "projects.category.freeSoftware": "自由软件",
    "projects.category.bot": "机器人框架",
    "projects.category.ui": "UI 组件 / 界面库",
    "projects.category.touhou": "东方 Project",
    "projects.category.minecraft": "Minecraft 游戏工具",
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
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Minecraft 基岩版FMBE工具合集。",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "东方Project茶番剧整合网站。",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "东方Project茶番剧翻译转载计划。",
    "contributors.title": "贡献者",
    "contributors.subtitle": "让一切成为可能的人们",
    "contributors.supportersTitle": "朋友与支持者",
    "contributors.supportersSubtitle": "即便没有代码贡献，也与我们精神同在",
    "contributors.thanksTitle": "特别感谢",
    "contributors.thanksSubtitle": "启发和支持我们的组织与社区",
    "footer.quote": '"连接世界，连接每一个相信自由与善意的人。"',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "简章",
    "footer.copyright": "🄯 {year} 天机阁"
  },
  ja: {
    "nav.values": "価値",
    "nav.projects": "プロジェクト",
    "nav.contributors": "貢献者",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) は、自由ソフトウェアの精神を核とし、オープンソースのコラボレーションを手法とする開発者集団であり、東方Project同人サークルでもあります。",
    "hero.exploreButton": "リポジトリを探索",
    "hero.manifestoButton": "私たちのマニフェスト",
    "hero.discordButton": "Discord に参加",
    "values.codeFree.title": "コードは自由",
    "values.codeFree.description": "私たちは、ソフトウェアがユーザーから自由を奪うのではなく、自由を与えることを保証するために、GPLやAGPLなどのコピーレフト・ライセンスを好みます。",
    "values.peopleMatter.title": "人が大切",
    "values.peopleMatter.description": "背景に関わらず、私たちはコードとその背後にいる人を大切にします。憎しみはなく、成長だけがあります。",
    "values.purePassion.title": "純粋な情熱",
    "values.purePassion.description": "私たちは、前提条件や見返りを期待することなく、私たちが創り出したものをあなたと共有することを厭いません。",
    "projects.title": "コアリポジトリ",
    "projects.subtitle": "私たちのサンクチュアリのデジタル成果物を垣間見ることができます。",
    "projects.viewAll": "すべてのプロジェクトを表示",
    "projects.exploreMore": "プロジェクト詳細",
    "projects.backHome": "← ホームに戻る",
    "projects.searchPlaceholder": "名前やタグでプロジェクトを検索...",
    "projects.noResults": "条件に一致するプロジェクトは見つかりませんでした。",
    "projects.category.freeSoftware": "フリーソフトウェア",
    "projects.category.bot": "ボットフレームワーク",
    "projects.category.ui": "UIコンポーネント",
    "projects.category.touhou": "東方Project",
    "projects.category.minecraft": "Minecraft ツール",
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
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Minecraft Bedrock Edition向けFMBEツール集。",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "東方Project茶番劇まとめサイト。",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "東方Project茶番劇翻訳・転載プロジェクト。",
    "contributors.title": "貢献者",
    "contributors.subtitle": "すべてを可能にする人々。",
    "contributors.supportersTitle": "友人 ＆ サポーター",
    "contributors.supportersSubtitle": "コードがなくても私たちの精神を共有する人々。",
    "contributors.thanksTitle": "スペシャルサンクス",
    "contributors.thanksSubtitle": "私たちにインスピレーションとサポートを与えてくれる組織とコミュニティ。",
    "footer.quote": '“世界を繋ぎ、自由と善意を信じるすべての人を繋ぐ。”',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "マニフェスト",
    "footer.copyright": "🄯 {year} 天机阁 (Fairy Oracle Sanctuary)"
  },
  ko: {
    "nav.values": "가치",
    "nav.projects": "프로젝트",
    "nav.contributors": "기여자",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "천기각 (Fairy Oracle Sanctuary)은 자유 소프트웨어 정신을 핵심으로 하고 오픈 소스 협업을 방법으로 하는 개발자 집단이자 동방Project 동인 서클이기도 합니다.",
    "hero.exploreButton": "저장소 탐색",
    "hero.manifestoButton": "우리의 매니페스토",
    "hero.discordButton": "Discord 참여",
    "values.codeFree.title": "코드는 자유",
    "values.codeFree.description": "우리는 소프트웨어가 사용자에게 자유를 박탈하는 것이 아니라 자유를 보장하기 위해 GPL 또는 AGPL과 같은 카피레프트 라이선스를 선호합니다.",
    "values.peopleMatter.title": "사람이 중요",
    "values.peopleMatter.description": "배경에 상관없이 우리는 코드와 그 뒤에 있는 사람을 소중히 여깁니다. 증오는 없고 성장만 있습니다.",
    "values.purePassion.title": "순수한 열정",
    "values.purePassion.description": "우리는 어떠한 전제 조건이나 보답에 대한 기대 없이 우리가 만든 것을 여러분과 공유할 준비가 되어 있습니다.",
    "projects.title": "핵심 저장소",
    "projects.subtitle": "우리 성역의 디지털 결과물을 살짝 엿보세요.",
    "projects.viewAll": "모든 프로젝트 보기",
    "projects.exploreMore": "프로젝트 세부 정보",
    "projects.backHome": "← 홈으로 돌아가기",
    "projects.searchPlaceholder": "이름이나 태그로 프로젝트 검색...",
    "projects.noResults": "조건에 맞는 프로젝트를 찾을 수 없습니다.",
    "projects.category.freeSoftware": "자유 소프트웨어",
    "projects.category.bot": "봇 프레임워크",
    "projects.category.ui": "UI 구성 요소",
    "projects.category.touhou": "동방 프로젝트",
    "projects.category.minecraft": "Minecraft 도구",
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
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "마인크래프트 베드락 에디션용 FMBE 도구 모음집입니다.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "동방 프로젝트 차반극 통합 웹사이트입니다.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "동방 프로젝트 차반극 번역 및 재게시 프로젝트입니다.",
    "contributors.title": "기여자",
    "contributors.subtitle": "이 모든 것을 가능하게 하는 사람들.",
    "contributors.supportersTitle": "친구 및 후원자",
    "contributors.supportersSubtitle": "코드 없이도 우리의 정신을 공유하는 사람들.",
    "contributors.thanksTitle": "특별 감사",
    "contributors.thanksSubtitle": "우리에게 영감과 지지를 주는 조직과 커뮤니티.",
    "footer.quote": '“세상을 연결하고, 자유와 선의를 믿는 모든 사람을 연결합니다.”',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "매니페스토",
    "footer.copyright": "🄯 {year} 천기각 (Fairy Oracle Sanctuary)"
  },
  fr: {
    "nav.values": "Valeurs",
    "nav.projects": "Projets",
    "nav.contributors": "Contributeurs",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) est un collectif de développeurs dont le noyau est l’esprit du logiciel libre et la méthode est la collaboration open source, et c’est aussi un cercle de fans de Touhou Project.",
    "hero.exploreButton": "Explorer les dépôts",
    "hero.manifestoButton": "Notre manifeste",
    "hero.discordButton": "Rejoindre Discord",
    "values.codeFree.title": "Le code est libre",
    "values.codeFree.description": "Nous privilégions les licences Copyleft telles que GPL ou AGPL pour garantir que les logiciels confèrent la liberté aux utilisateurs plutôt que de les en priver.",
    "values.peopleMatter.title": "Les gens comptent",
    "values.peopleMatter.description": "Peu importe le parcours, nous valorisons le code et la personne derrière. Pas de haine, seulement de la croissance.",
    "values.purePassion.title": "Passion pure",
    "values.purePassion.description": "Nous sommes prêts à partager ce que nous créons avec vous, sans prérequis ni attente de retour.",
    "projects.title": "Dépôts principaux",
    "projects.subtitle": "Un aperçu de la production numérique de notre sanctuaire.",
    "projects.viewAll": "Voir tous les projets",
    "projects.exploreMore": "Détails du projet",
    "projects.backHome": "← Retour à l'accueil",
    "projects.searchPlaceholder": "Rechercher des projets par nom ou tag...",
    "projects.noResults": "Aucun projet trouvé correspondant à vos critères.",
    "projects.category.freeSoftware": "Logiciel Libre",
    "projects.category.bot": "Frameworks Bot",
    "projects.category.ui": "Composants UI",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Outils Minecraft",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Une bibliothèque de composants Fluent Design pour Qt.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "Une bibliothèque de composants Fluent Design pour PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Assistant de localisation vidéo avec gestion de projet, extraction de sous-titres, téléchargement vidéo, traduction IA et encodage vidéo.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "Un framework de bot moderne et performant.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Simulateur FMBE pour Minecraft Bedrock Edition.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Convertisseur de modèle pour Minecraft Bedrock Edition.",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Une collection d'outils FMBE pour Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Un site de collection de dramas théâtraux Touhou Project.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Un projet de traduction et de republication de dramas théâtraux Touhou Project.",
    "contributors.title": "Contributeurs",
    "contributors.subtitle": "Ceux qui rendent tout cela possible.",
    "contributors.supportersTitle": "Amis & Soutiens",
    "contributors.supportersSubtitle": "Ceux qui partagent notre esprit, même sans code.",
    "contributors.thanksTitle": "Remerciements spéciaux",
    "contributors.thanksSubtitle": "Organisations et communautés qui nous inspirent et nous soutiennent.",
    "footer.quote": '"Connecter le monde, connecter chaque personne qui croit en la liberté et la bonne volonté."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Manifeste",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  es: {
    "nav.values": "Valores",
    "nav.projects": "Proyectos",
    "nav.contributors": "Colaboradores",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) es un colectivo de desarrolladores con el espíritu del software libre como núcleo y la colaboración en código abierto como método, y también es un círculo de fans de Touhou Project.",
    "hero.exploreButton": "Explorar repositorios",
    "hero.manifestoButton": "Nuestro manifiesto",
    "hero.discordButton": "Unirse a Discord",
    "values.codeFree.title": "El código es libre",
    "values.codeFree.description": "Preferimos licencias Copyleft como GPL o AGPL para garantizar que el software otorgue libertad a los usuarios en lugar de privarla.",
    "values.peopleMatter.title": "Las personas importan",
    "values.peopleMatter.description": "Sin importar el origen, valoramos el código y a la persona detrás. Sin odio, solo crecimiento.",
    "values.purePassion.title": "Pasión pura",
    "values.purePassion.description": "Estamos dispuestos a compartir lo que creamos contigo, sin requisitos ni expectativas de nada a cambio.",
    "projects.title": "Repositorios principales",
    "projects.subtitle": "Un vistazo a la producción digital de nuestro santuario.",
    "projects.viewAll": "Ver todos los proyectos",
    "projects.exploreMore": "Detalles del proyecto",
    "projects.backHome": "← Volver al inicio",
    "projects.searchPlaceholder": "Buscar proyectos por nombre o etiqueta...",
    "projects.noResults": "No se encontraron proyectos que coincidan con sus criterios.",
    "projects.category.freeSoftware": "Software Libre",
    "projects.category.bot": "Frameworks de Bots",
    "projects.category.ui": "Componentes de UI",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Herramientas de Minecraft",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Una biblioteca de componentes Fluent Design para Qt.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "Una biblioteca de componentes Fluent Design para PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Asistente de localización de vídeo con gestión de proyectos, extracción de subtítulos, descarga de vídeo, traducción IA y codificación de vídeo.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "Un framework de bot moderno y de alto rendimiento.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Simulador FMBE para Minecraft Bedrock Edition.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Convertidor de modelos para Minecraft Bedrock Edition.",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Una colección de herramientas FMBE para Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Un sitio web de recopilación de dramas de té de Touhou Project.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Un proyecto de traducción y republicación de dramas de té de Touhou Project.",
    "contributors.title": "Colaboradores",
    "contributors.subtitle": "Las personas que hacen todo posible.",
    "contributors.supportersTitle": "Amigos y colaboradores",
    "contributors.supportersSubtitle": "Quienes comparten nuestro espíritu, incluso sin código.",
    "contributors.thanksTitle": "Agradecimientos especiales",
    "contributors.thanksSubtitle": "Organizaciones y comunidades que nos inspiran y apoyan.",
    "footer.quote": '"Conectar el mundo, conectar a cada persona que cree en la libertad y la buena voluntad."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Manifiesto",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  pt: {
    "nav.values": "Valores",
    "nav.projects": "Projetos",
    "nav.contributors": "Colaboradores",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) é um coletivo de desenvolvedores com o espírito do software livre como núcleo e a colaboração em código aberto como método, e também é um círculo de fãs de Touhou Project.",
    "hero.exploreButton": "Explorar repositórios",
    "hero.manifestoButton": "Nosso manifesto",
    "hero.discordButton": "Entrar no Discord",
    "values.codeFree.title": "O código é livre",
    "values.codeFree.description": "Preferimos licenças Copyleft como GPL ou AGPL para garantir que o software conceda liberdade aos usuários em vez de privá-los dela.",
    "values.peopleMatter.title": "As pessoas importam",
    "values.peopleMatter.description": "Independentemente da origem, valorizamos o código e a pessoa por trás dele. Sem ódio, apenas crescimento.",
    "values.purePassion.title": "Paixão pura",
    "values.purePassion.description": "Estamos dispostos a compartilhar o que criamos com você, sem pré-requisitos ou expectativas de nada em troca.",
    "projects.title": "Repositórios principais",
    "projects.subtitle": "Um vislumbre da produção digital do nosso santuário.",
    "projects.viewAll": "Ver todos os projetos",
    "projects.exploreMore": "Detalhes do projeto",
    "projects.backHome": "← Voltar ao Início",
    "projects.searchPlaceholder": "Buscar projetos por nome ou tag...",
    "projects.noResults": "Nenhum projeto encontrado correspondente aos seus critérios.",
    "projects.category.freeSoftware": "Software Livre",
    "projects.category.bot": "Frameworks de Bots",
    "projects.category.ui": "Componentes de UI",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Ferramentas do Minecraft",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Uma biblioteca de componentes Fluent Design para Qt.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "Uma biblioteca de componentes Fluent Design para PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Assistente de localização de vídeo com gestão de projetos, extração de legendas, download de vídeo, tradução por IA e codificação de vídeo.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "Um framework de bot moderno e de alto desempenho.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Simulador FMBE para Minecraft Bedrock Edition.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Conversor de modelos para Minecraft Bedrock Edition.",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Uma coleção de ferramentas FMBE para Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Um site de coleta de dramas de chá do Touhou Project.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Um projeto de tradução e republicação de dramas de chá do Touhou Project.",
    "contributors.title": "Colaboradores",
    "contributors.subtitle": "As pessoas que tornam tudo possível.",
    "contributors.supportersTitle": "Amigos e apoiadores",
    "contributors.supportersSubtitle": "Aqueles que compartilham nosso espírito, mesmo sem código.",
    "contributors.thanksTitle": "Agradecimentos especiais",
    "contributors.thanksSubtitle": "Organizações e comunidades que nos inspiram e apoiam.",
    "footer.quote": '"Conectar o mundo, conectar cada pessoa que acredita na liberdade e na boa vontade."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Manifesto",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  de: {
    "nav.values": "Werte",
    "nav.projects": "Projekte",
    "nav.contributors": "Mitwirkende",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) ist ein Entwicklerkollektiv mit dem Geist freier Software als Kern und Open-Source-Zusammenarbeit als Methode, und es ist auch ein Touhou Project-Fan-Kreis.",
    "hero.exploreButton": "Repositories erkunden",
    "hero.manifestoButton": "Unser Manifest",
    "hero.discordButton": "Discord beitreten",
    "values.codeFree.title": "Code ist frei",
    "values.codeFree.description": "Wir bevorzugen Copyleft-Lizenzen wie GPL oder AGPL, um sicherzustellen, dass Software den Nutzern Freiheit gewährt, anstatt sie zu entziehen.",
    "values.peopleMatter.title": "Menschen zählen",
    "values.peopleMatter.description": "Unabhängig vom Hintergrund schätzen wir den Code und die Person dahinter. Kein Hass, nur Wachstum.",
    "values.purePassion.title": "Reine Leidenschaft",
    "values.purePassion.description": "Wir sind bereit, das, was wir erschaffen, mit Ihnen zu teilen, ohne Voraussetzungen oder Erwartungen einer Gegenleistung.",
    "projects.title": "Kern-Repositories",
    "projects.subtitle": "Ein Einblick in die digitale Produktion unseres Heiligtums.",
    "projects.viewAll": "Alle Projekte anzeigen",
    "projects.exploreMore": "Projektdetails",
    "projects.backHome": "← Zurück zur Startseite",
    "projects.searchPlaceholder": "Projekte nach Name oder Tag suchen...",
    "projects.noResults": "Keine Projekte gefunden, die Ihren Kriterien entsprechen.",
    "projects.category.freeSoftware": "Freie Software",
    "projects.category.bot": "Bot Frameworks",
    "projects.category.ui": "UI-Komponenten",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Minecraft-Tools",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Eine Fluent-Design-Komponentenbibliothek für Qt.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "Eine Fluent-Design-Komponentenbibliothek für PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Video-Lokalisierungsassistent mit Projektverwaltung, Unterteilextraktion, Video-Download, KI-Übersetzung und Video-Kodierung.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "Ein modernes, leistungsstarkes Bot-Framework.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "FMBE-Simulator für Minecraft Bedrock Edition.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Modellkonverter für Minecraft Bedrock Edition.",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Eine Sammlung von FMBE-Tools für Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Eine Sammelseite für Touhou-Project-Teezeit-Dramen.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Ein Übersetzungs- und Weiterveröffentlichungsprojekt für Touhou-Project-Teezeit-Dramen.",
    "contributors.title": "Mitwirkende",
    "contributors.subtitle": "Die Menschen, die alles möglich machen.",
    "contributors.supportersTitle": "Freunde & Unterstützer",
    "contributors.supportersSubtitle": "Diejenigen, die unseren Geist teilen, auch ohne Code.",
    "contributors.thanksTitle": "Besonderer Dank",
    "contributors.thanksSubtitle": "Organisationen und Gemeinschaften, die uns inspirieren und unterstützen.",
    "footer.quote": '"Die Welt verbinden, jeden Menschen verbinden, der an Freiheit und guten Willen glaubt."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Manifest",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  hi: {
    "nav.values": "मूल्य",
    "nav.projects": "परियोजनाएँ",
    "nav.contributors": "योगदानकर्ता",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) एक डेवलपर सामूहिक है जिसका मूल स्वतंत्र सॉफ़्टवेयर की भावना है और ओपन-सोर्स सहयोग इसकी विधि है, और यह Touhou Project का एक फैन सर्कल भी है।",
    "hero.exploreButton": "रिपॉजिटरी खोजें",
    "hero.manifestoButton": "हमारा घोषणापत्र",
    "hero.discordButton": "Discord से जुड़ें",
    "values.codeFree.title": "कोड स्वतंत्र है",
    "values.codeFree.description": "हम GPL या AGPL जैसे कॉपीलेफ्ट लाइसेंस को प्राथमिकता देते हैं ताकि सॉफ्टवेयर उपयोगकर्ताओं को स्वतंत्रता प्रदान करे, न कि छीने।",
    "values.peopleMatter.title": "लोग मायने रखते हैं",
    "values.peopleMatter.description": "पृष्ठभूमि की परवाह किए बिना, हम कोड और उसके पीछे के व्यक्ति को महत्व देते हैं। कोई नफरत नहीं, केवल विकास।",
    "values.purePassion.title": "शुद्ध जुनून",
    "values.purePassion.description": "हम बिना किसी शर्त या बदले की अपेक्षा के अपनी रचनाएँ आपके साथ साझा करने को तैयार हैं।",
    "projects.title": "मुख्य रिपॉजिटरी",
    "projects.subtitle": "हमारे अभयारण्य के डिजिटल आउटपुट की झलक।",
    "projects.viewAll": "सभी परियोजनाएँ देखें",
    "projects.exploreMore": "परियोजना विवरण",
    "projects.backHome": "← होम पर वापस जाएँ",
    "projects.searchPlaceholder": "नाम या टैग द्वारा परियोजनाएँ खोजें...",
    "projects.noResults": "आपके मानदंडों से मेल खाने वाली कोई परियोजना नहीं मिली।",
    "projects.category.freeSoftware": "मुक्त सॉफ़्टवेयर",
    "projects.category.bot": "बॉट फ्रेमवर्क",
    "projects.category.ui": "यूआई घटक",
    "projects.category.touhou": "तोहो प्रोजेक्ट",
    "projects.category.minecraft": "Minecraft टूल",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Qt के लिए Fluent Design घटक पुस्तकालय।",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "PySide6 के लिए Fluent Design घटक पुस्तकालय।",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "परियोजना प्रबंधन, उपशीर्षक निष्कर्षण, वीडियो डाउनलोड, AI अनुवाद और वीडियो एन्कोडिंग के साथ वीडियो स्थानीयकरण सहायक।",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "एक आधुनिक, उच्च-प्रदर्शन बॉट ढांचा।",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Minecraft Bedrock Edition FMBE सिम्युलेटर।",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Minecraft Bedrock Edition मॉडल परिवर्तक।",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Minecraft Bedrock Edition के लिए FMBE उपकरणों का एक संग्रह।",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Touhou Project चाय-समय नाटकों का एक संग्रहण वेबसाइट।",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Touhou Project चाय-समय नाटकों का अनुवाद और पुनर्प्रकाशन परियोजना।",
    "contributors.title": "योगदानकर्ता",
    "contributors.subtitle": "वे लोग जो सब कुछ संभव बनाते हैं।",
    "contributors.supportersTitle": "मित्र और समर्थक",
    "contributors.supportersSubtitle": "वे लोग जो बिना कोड के भी हमारी भावना साझा करते हैं।",
    "contributors.thanksTitle": "विशेष आभार",
    "contributors.thanksSubtitle": "संगठन और समुदाय जो हमें प्रेरित और समर्थन देते हैं।",
    "footer.quote": '"दुनिया को जोड़ें, हर उस व्यक्ति को जोड़ें जो स्वतंत्रता और सद्भावना में विश्वास करता है।"',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "घोषणापत्र",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  tl: {
    "nav.values": "Mga Halaga",
    "nav.projects": "Mga Proyekto",
    "nav.contributors": "Mga Kontribyutor",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) ay isang kolektibo ng mga developer na may diwa ng malayang software sa panggitnang at open-source na pakikipagtulungan bilang pamamaraan, at isa rin itong fan circle ng Touhou Project.",
    "hero.exploreButton": "Tuklasin ang mga repositoryo",
    "hero.manifestoButton": "Aming Manifesto",
    "hero.discordButton": "Sumali sa Discord",
    "values.codeFree.title": "Ang code ay libre",
    "values.codeFree.description": "Mas pinapaboran namin ang mga lisensyang Copyleft tulad ng GPL o AGPL upang matiyak na ang software ay nagbibigay ng kalayaan sa mga gumagamit sa halip na kunin ito.",
    "values.peopleMatter.title": "Mahalaga ang mga tao",
    "values.peopleMatter.description": "Hindi alintana ang pinagmulan, pinahahalagahan namin ang code at ang tao sa likod nito. Walang pagkapoot, paglago lamang.",
    "values.purePassion.title": "Dalisay na pagpapahalaga",
    "values.purePassion.description": "Handa kaming ibahagi ang aming mga likha sa inyo nang walang kinakailangan o inaasahang kapalit.",
    "projects.title": "Pangunahing mga repositoryo",
    "projects.subtitle": "Isang sulyap sa digital na output ng aming dambana.",
    "projects.viewAll": "Tingnan ang lahat ng proyekto",
    "projects.exploreMore": "Mga Detalye ng Proyekto",
    "projects.backHome": "← Bumalik sa Home",
    "projects.searchPlaceholder": "Maghanap ng mga proyekto sa pamamagitan ng pangalan o tag...",
    "projects.noResults": "Walang nahanap na proyekto na tumutugma sa iyong pamantayan.",
    "projects.category.freeSoftware": "Libreng Software",
    "projects.category.bot": "Mga Bot Framework",
    "projects.category.ui": "Mga Component ng UI",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Mga Tool sa Minecraft",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Isang library ng bahagi ng Fluent Design para sa Qt.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "Isang library ng bahagi ng Fluent Design para sa PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Katulong sa lokalizasyon ng video na may pamamahala ng proyekto, pagkuha ng subtitle, pag-download ng video, pagsasalin ng AI, at pag-encode ng video.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "Isang moderno at mataas na pagganap na bot framework.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "FMBE simulator para sa Minecraft Bedrock Edition.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Modelong converter para sa Minecraft Bedrock Edition.",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Isang koleksyon ng mga tool na FMBE para sa Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Isang website na nagkakolekta ng mga drama ng tsaa ng Touhou Project.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Isang proyekto sa pagsasalin at muling paglalathala ng mga drama ng tsaa ng Touhou Project.",
    "contributors.title": "Mga Kontribyutor",
    "contributors.subtitle": "Ang mga taong nagpapaging posible sa lahat.",
    "contributors.supportersTitle": "Mga kaibigan at tagasuporta",
    "contributors.supportersSubtitle": "Ang mga nagbabahagi ng aming diwa, kahit walang code.",
    "contributors.thanksTitle": "Espesyal na pasasalamat",
    "contributors.thanksSubtitle": "Mga organisasyon at komunidad na nagbibigay inspirasyon at suporta sa amin.",
    "footer.quote": '"Iugnay ang mundo, iugnay ang bawat taong naniniwala sa kalayaan at mabuting kalooban."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Manifesto",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  vi: {
    "nav.values": "Giá trị",
    "nav.projects": "Dự án",
    "nav.contributors": "Người đóng góp",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) là một tập thể nhà phát triển lấy tinh thần phần mềm tự do làm cốt lõi và hợp tác mã nguồn mở làm phương pháp, và cũng là một nhóm fan của Touhou Project.",
    "hero.exploreButton": "Khám phá kho lưu trữ",
    "hero.manifestoButton": "Tuyên ngôn của chúng tôi",
    "hero.discordButton": "Tham gia Discord",
    "values.codeFree.title": "Mã là tự do",
    "values.codeFree.description": "Chúng tôi ưu tiên các giấy phép Copyleft như GPL hoặc AGPL để đảm bảo phần mềm mang lại sự tự do cho người dùng thay vì tước đoạt.",
    "values.peopleMatter.title": "Con người quan trọng",
    "values.peopleMatter.description": "Bất kể xuất thân, chúng tôi trân trọng mã và con người phía sau nó. Không thù hận, chỉ có phát triển.",
    "values.purePassion.title": "Đam mê thuần khiết",
    "values.purePassion.description": "Chúng tôi sẵn sàng chia sẻ những gì tạo ra với bạn, không điều kiện, không kỳ vọng trả lại.",
    "projects.title": "Kho lưu trữ chính",
    "projects.subtitle": "Một cái nhìn thoáng qua về sản phẩm kỹ thuật số của thánh địa chúng tôi.",
    "projects.viewAll": "Xem tất cả dự án",
    "projects.exploreMore": "Chi tiết dự án",
    "projects.backHome": "← Trở về Trang chủ",
    "projects.searchPlaceholder": "Tìm kiếm dự án theo tên hoặc thẻ...",
    "projects.noResults": "Không tìm thấy dự án nào phù hợp với tiêu chí của bạn.",
    "projects.category.freeSoftware": "Phần mềm tự do",
    "projects.category.bot": "Framework Bot",
    "projects.category.ui": "Thành phần UI",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Công cụ Minecraft",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Thư viện thành phần Fluent Design cho Qt.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "Thư viện thành phần Fluent Design cho PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Trợ giúp bản địa hóa video với quản lý dự án, trích xuất phụ đề, tải video, dịch AI và mã hóa video.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "Một framework bot hiện đại, hiệu suất cao.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Trình mô phỏng FMBE cho Minecraft Bedrock Edition.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Trình chuyển đổi mô hình cho Minecraft Bedrock Edition.",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Bộ sưu tập công cụ FMBE cho Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Trang web tổng hợp trà hiệu kịch Touhou Project.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Dự án dịch thuật và tái đăng tải trà hiệu kịch Touhou Project.",
    "contributors.title": "Người đóng góp",
    "contributors.subtitle": "Những người làm cho mọi thứ trở nên khả thi.",
    "contributors.supportersTitle": "Bạn bè và người ủng hộ",
    "contributors.supportersSubtitle": "Những người chia sẻ tinh thần của chúng tôi, ngay cả khi không có mã.",
    "contributors.thanksTitle": "Lời cảm ơn đặc biệt",
    "contributors.thanksSubtitle": "Các tổ chức và cộng đồng truyền cảm hứng và hỗ trợ chúng tôi.",
    "footer.quote": '"Kết nối thế giới, kết nối mỗi người tin vào tự do và thiện chí."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Tuyên ngôn",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  },
  ru: {
    "nav.values": "Ценности",
    "nav.projects": "Проекты",
    "nav.contributors": "Участники",
    "hero.title": 'Connect The World with <span class="accent underline">Goodwill</span>',
    "hero.description": "天机阁 (Fairy Oracle Sanctuary) — это коллектив разработчиков, чьим стержнем является дух свободного ПО, а методом — сотрудничество в открытом исходном коде, и это также фэндомный круг Touhou Project.",
    "hero.exploreButton": "Исследовать репозитории",
    "hero.manifestoButton": "Наш манифест",
    "hero.discordButton": "Присоединиться к Discord",
    "values.codeFree.title": "Код свободен",
    "values.codeFree.description": "Мы предпочитаем лицензии Copyleft, такие как GPL или AGPL, чтобы гарантировать, что программное обеспечение даёт пользователям свободу, а не лишает её.",
    "values.peopleMatter.title": "Люди важны",
    "values.peopleMatter.description": "Независимо от происхождения, мы ценим код и человека за ним. Никакой ненависти, только рост.",
    "values.purePassion.title": "Чистая страсть",
    "values.purePassion.description": "Мы готовы делиться тем, что создаём, без предварительных условий и ожиданий чего-либо взамен.",
    "projects.title": "Основные репозитории",
    "projects.subtitle": "Краткий обзор цифровых достижений нашего святилища.",
    "projects.viewAll": "Смотреть все проекты",
    "projects.exploreMore": "Детали проекта",
    "projects.backHome": "← На главную",
    "projects.searchPlaceholder": "Поиск проектов по имени или тегу...",
    "projects.noResults": "Проекты, соответствующие вашим критериям, не найдены.",
    "projects.category.freeSoftware": "Свободное ПО",
    "projects.category.bot": "Фреймворки для ботов",
    "projects.category.ui": "UI компоненты",
    "projects.category.touhou": "Touhou Project",
    "projects.category.minecraft": "Инструменты Minecraft",
    "projects.items.qtFluentWidgets.name": "Qt-Fluent-Widgets",
    "projects.items.qtFluentWidgets.desc": "Библиотека компонентов Fluent Design для Qt.",
    "projects.items.pysideFluentWidgetsPro.name": "PySide6-Fluent-Widgets-Pro",
    "projects.items.pysideFluentWidgetsPro.desc": "Библиотека компонентов Fluent Design для PySide6.",
    "projects.items.kekkaiWorkshop.name": "Kekkai Workshop",
    "projects.items.kekkaiWorkshop.desc": "Помощник локализации видео с управлением проектами, извлечением субтитров, загрузкой видео, ИИ-переводом и кодированием видео.",
    "projects.items.neoBotFramework.name": "NEO-Bot-Framework",
    "projects.items.neoBotFramework.desc": "Современный, высокопроизводительный фреймворк для ботов.",
    "projects.items.EX-FMBE-simulator.name": "EX-FMBE-simulator",
    "projects.items.EX-FMBE-simulator.desc": "Симулятор FMBE для Minecraft Bedrock Edition.",
    "projects.items.BB-CVT-FMBE.name": "BB-CVT-FMBE",
    "projects.items.BB-CVT-FMBE.desc": "Конвертер моделей для Minecraft Bedrock Edition.",
    "projects.items.FMBE-Hub.name": "FMBE-Hub",
    "projects.items.FMBE-Hub.desc": "Набор инструментов FMBE для Minecraft Bedrock Edition.",
    "projects.items.Touhou-Chabangeki-Collect.name": "Touhou-Chabangeki-Collect",
    "projects.items.Touhou-Chabangeki-Collect.desc": "Сайт-коллекция чайных драм Touhou Project.",
    "projects.items.Touhou-translate.name": "Touhou-translate",
    "projects.items.Touhou-translate.desc": "Проект по переводу и репосту чайных драм Touhou Project.",
    "contributors.title": "Участники",
    "contributors.subtitle": "Люди, которые делают всё возможным.",
    "contributors.supportersTitle": "Друзья и сторонники",
    "contributors.supportersSubtitle": "Те, кто разделяет наш дух, даже без кода.",
    "contributors.thanksTitle": "Особая благодарность",
    "contributors.thanksSubtitle": "Организации и сообщества, которые вдохновляют и поддерживают нас.",
    "footer.quote": '"Соединять мир, соединять каждого, кто верит в свободу и добрую волю."',
    "footer.github": "Github",
    "footer.discord": "Discord",
    "footer.manifesto": "Манифест",
    "footer.copyright": "🄯 {year} Fairy Oracle Sanctuary"
  }
};

// Language names for display
const languageNames = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  fr: "Français",
  es: "Español",
  pt: "Português",
  de: "Deutsch",
  hi: "हिन्दी",
  tl: "Tagalog",
  vi: "Tiếng Việt",
  ru: "Русский"
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
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.querySelector('.navbar');

  const closeNavMenu = () => {
    if (!navbar || !navToggle) return;
    navbar.classList.remove('nav-open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navMenu) {
    navMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  if (navToggle && navMenu && navbar) {
    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !navbar.classList.contains('nav-open');
      navbar.classList.toggle('nav-open', willOpen);
      navToggle.classList.toggle('open', willOpen);
      navToggle.setAttribute('aria-expanded', String(willOpen));
      if (!willOpen && langDropdown) {
        langDropdown.classList.remove('show');
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeNavMenu();
      });
    });
  }

  if (langBtn && langDropdown) {
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
      closeNavMenu();
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

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeNavMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      langDropdown?.classList.remove('show');
      closeNavMenu();
    }
  });

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
  { login: "EasonMDR" },
  { name: "菠萝壹", bilibili: "34367536", image: "images/contributors/dbly.jpg" },
];

function renderContributors() {
  const grid = document.getElementById('contributors-grid');
  if (!grid) return;

  grid.innerHTML = contributorsData.map(c => {
    if (c.bilibili) {
      // Bilibili account
      return `
        <a href="https://space.bilibili.com/${c.bilibili}" target="_blank" class="contributor-avatar" data-tooltip="${c.name}">
          <img src="${c.image}" alt="${c.name}" loading="lazy">
        </a>
      `;
    } else {
      // GitHub account
      return `
        <a href="https://github.com/${c.login}" target="_blank" class="contributor-avatar" data-tooltip="${c.login}">
          <img src="https://avatars.githubusercontent.com/${c.login}" alt="${c.login}" loading="lazy">
        </a>
      `;
    }
  }).join('');
}

// Supporters data - Discord friends who share our spirit
const supportersData = [
  { name: "AxisesEMG(China)", image: "images/contributors/axisesemg.jpg" },
  { name: "Saloth Sar(China)", image: "images/contributors/salothsar.jpg" },
  { name: "Pea Smoothie(China)", image: "images/contributors/peasmoothie.jpg" },
  { name: "QingQingHan(China)", image: "images/contributors/qqh.jpg" },
  { name: "awedwd(China)", image: "images/contributors/awedwd.jpg" },
  { name: "AI(China)", image: "images/contributors/ai.png" },
  { name: "jeanmajid(Germany)", image: "images/contributors/jeanmajid.webp" },
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
    const key = el.getAttribute('data-i18n');
    if (messages[currentLocale] && messages[currentLocale][key]) {
      // If it's an element that might contain inner HTML like span, preserve it
      if (el.tagName === 'H1' && key === 'hero.title') {
        el.innerHTML = messages[currentLocale][key];
      } else {
        el.textContent = messages[currentLocale][key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (messages[currentLocale] && messages[currentLocale][key]) {
      el.placeholder = messages[currentLocale][key];
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
