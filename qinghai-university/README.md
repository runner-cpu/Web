# 青海大学 — 全屏沉浸式品牌形象页

一个基于 React + TypeScript + Tailwind CSS v4 的全屏沉浸式英雄页面，展示青海大学的品牌形象与校园风貌。

## 特性

- 🎬 **4层循环视频背景** — 金色高原、碧波湖畔、祁连林海、宁静黎明，1000ms 平滑过渡
- ✨ **Liquid Glass 毛玻璃效果** — 导航 Pill、徽章、输入框等 UI 元素
- 🎨 **响应式设计** — 桌面端大屏导航 + 移动端汉堡菜单（全屏交互动画）
- 🌲 **智能主题切换** — 祁连林海视频激活时，文字自动适配深色
- ⚡ **Vite 8 构建** — 极速开发体验

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:5173` 即可预览。

## 构建部署

```bash
npm run build
```

构建产物在 `dist/` 目录，可直接部署到 Vercel / Netlify / GitHub Pages。

## 技术栈

- React 19 + TypeScript
- Tailwind CSS v4（@tailwindcss/vite）
- Lucide React 图标
- Instrument Serif 字体（Google Fonts）
- Vite 8