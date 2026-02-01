# Nick Shek's Personal Blog

[![Deploy Status](https://github.com/nickshek/site/actions/workflows/deploy.yml/badge.svg)](https://github.com/nickshek/site/actions/workflows/deploy.yml)

🌐 **Live Site:** [https://nickshek.github.io](https://nickshek.github.io)

個人技術部落格，分享開發經驗、技術筆記和解決方案。

---

## 🛠️ Tech Stack

- **Framework:** [VuePress v2](https://v2.vuepress.vuejs.org/) (Next)
- **Theme:** Default Theme
- **Deployment:** GitHub Actions → GitHub Pages
- **Language:** Traditional Chinese (繁體中文)

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:8080
```

### Build

```bash
# Build for production
npm run build

# Output will be in docs/.vuepress/dist/
```

---

## 📁 Project Structure

```
site/
├── docs/
│   ├── .vuepress/
│   │   └── config.ts        # VuePress configuration
│   ├── posts/               # Blog posts (migrated from Sculpin)
│   │   └── *.md             # Individual posts
│   ├── about/               # About page
│   └── README.md            # Homepage
├── scripts/
│   └── migrate-posts.js     # Migration script (Sculpin → VuePress)
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
└── package.json
```

---

## 📝 Writing Posts

Blog posts are located in `docs/posts/`.

### Post Format

```markdown
---
title: Your Post Title
date: YYYY-MM-DD
tags:
  - tag1
  - tag2
---

Your content here...
```

### Naming Convention

Files should follow: `YYYY-MM-DD-title.md`

Example: `2024-01-15-my-awesome-post.md`

---

## 🔄 Migration from Sculpin

This blog was migrated from [Sculpin](https://sculpin.io/) (PHP static site generator) to VuePress.

### What Was Preserved

- ✅ All blog posts from `source/_posts/`
- ✅ Original post dates and titles
- ✅ Post categories (converted to tags)

### What Changed

- ❌ Old Sculpin configuration removed
- ❌ PHP deployment scripts removed (replaced with GitHub Actions)
- ✅ New VuePress configuration
- ✅ Automated deployment via GitHub Actions

### Migration Script

```bash
# Re-run migration if needed
npm run migrate
```

---

## 🚀 Deployment

Deployment is fully automated using GitHub Actions.

### How It Works

1. **Push to `master` branch**
2. **GitHub Actions triggers** (`.github/workflows/deploy.yml`)
3. **Build VuePress site** (`npm run build`)
4. **Deploy to `nickshek/nickshek.github.io`** (GitHub Pages)

### Manual Deployment (Not Recommended)

```bash
# Build
npm run build

# Manually copy to nickshek.github.io repo
cp -r docs/.vuepress/dist/* ../nickshek.github.io/

# Commit and push
cd ../nickshek.github.io
git add .
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"
git push
```

---

## 📦 Dependencies

### Main Dependencies

- `vuepress` - Static site generator
- `@vuepress/bundler-vite` - Vite bundler for faster builds
- `@vuepress/theme-default` - Default VuePress theme
- `@vuepress/plugin-blog` - Blog plugin (for future use)

### Development

```bash
# Install dependencies
npm install

# Update dependencies
npm update

# Check outdated packages
npm outdated
```

---

## 🤝 Contributing

This is a personal blog, but suggestions and corrections are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

MIT License

Copyright (c) 2014-2026 Nick Shek

---

## 📞 Contact

- **GitHub:** [@nickshek](https://github.com/nickshek)
- **Website:** [nickshek.github.io](https://nickshek.github.io)

---

## 📊 Version History

### v2.0.0 (2026-02-01)

- ✅ Migrated from Sculpin to VuePress
- ✅ Automated deployment with GitHub Actions
- ✅ Migrated 33 blog posts
- ✅ New homepage and about page
- ✅ Modern UI with VuePress default theme

### v1.0.0 (2014-2025)

- Original Sculpin-based blog
- Manual deployment via `deploy.php`
- PHP-based static site generation

---

**Built with ❤️ using VuePress**
