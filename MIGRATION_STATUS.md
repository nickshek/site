## ⚠️ VuePress v2 RC Build Issues

We've encountered build errors with VuePress v2-rc.26 (both Vite and Webpack bundlers).

### Option 1: Use VuePress v1 (Recommended - Stable)

```bash
npm uninstall vuepress @vuepress/client @vuepress/plugin-blog @vuepress/bundler-vite @vuepress/bundler-webpack @vuepress/theme-default sass-embedded
npm install -D vuepress@1.x
```

Then simplify the config to v1 format.

### Option 2: Wait for VuePress v2 Stable Release

VuePress v2 is still in RC (Release Candidate) and has ESM/bundler issues.

### Option 3: Use Alternative (VitePress)

VitePress is the spiritual successor to VuePress, more stable:

```bash
npm install -D vitepress
```

### Current Status

✅ **Completed:**
- Migrated 33 blog posts from Sculpin to VuePress format
- Created VuePress project structure
- Created GitHub Actions workflow
- Updated README and documentation

❌ **Blocked:**
- Build fails with both Vite and Webpack bundlers
- Known issue with VuePress v2 RC versions

### Files Ready

All content is migrated and ready in `docs/posts/`. Once build issues are resolved, the site will work.
