---
title: VitePress 部落格設定指南
description: 如何將 VitePress 配置成一個功能完整的部落格系統
date: 2026-02-02
tags: [VitePress, 部落格, 前端]
---

# VitePress 部落格設定指南

VitePress 不僅是一個優秀的文檔生成工具，也可以成為一個功能強大的部落格系統。

## 主要功能

- ✨ 自動文章列表生成
- 🔍 全文搜索功能
- 📱 響應式設計
- 🎨 可自訂主題
- ⚡ 快速載入

## 配置要點

### 1. 文章組織

將所有部落格文章放在 `docs/posts/` 目錄下，使用日期前綴命名：

```
docs/posts/
├── 2026-02-02-vitepress-blog-setup.md
├── 2025-12-01-my-coding-journey.md
└── ...
```

### 2. Frontmatter 設定

每篇文章開頭使用 YAML frontmatter：

```yaml
---
title: 文章標題
description: 文章描述
date: 2026-02-02
tags: [標籤1, 標籤2]
---
```

### 3. 自動化功能

- 自動生成文章列表
- 按日期排序
- 搜索功能
- 標籤分類

這樣就能擁有一個功能完整的部落格系統了！