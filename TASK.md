# 子任务 01：ABCDTOKEN 品牌替换

> 这是 ABCDTOKEN.COM 项目第一个子任务。
> 项目整体路线图共 5 个子任务，本次只做品牌替换，其他子任务后续单独立项。
> 后端 Go 代码、数据库 schema、API 接口签名 **绝对不要改**。

---

## 一、项目背景

### 1.1 项目定位
ABCDTOKEN.COM 是一个面向多元用户的 AI 模型中转站（API 聚合平台），通过统一的 OpenAI 兼容 API 转发主流大模型（Claude / GPT / Gemini 等），并提供网页端在线体验、API Key 管理、计费充值等完整 SaaS 能力。

### 1.2 品牌核心隐喻

**ABCD = 入门、起步、基础。**

就像每个学科都有自己的 ABC，使用 AI 也有它的入门门槛。ABCDTOKEN 的目标是把这个门槛降到最低——
- **零门槛**：不需要懂代码，注册即用
- **可成长**：从在线 Playground 到 API 调用，跟随用户成长
- **统一货币**：用 Token 作为内部计费单位，简单直观

ABCDTOKEN 这个名字本身就传达了"从最基础开始 + Token 是流通单位"的双重含义。

### 1.3 用户画像（多元，不要单一倾斜）

| 用户类型 | 占比 | 典型场景 |
|---|---|---|
| **零编程小白用户** | ~40% | 拍数学题让 AI 讲解、生成绘本插图、英语对话练习、生成电商图片、创作小说 |
| **专业开发者** | ~35% | 接 API 调用、Claude Code 编程、技术文档生成 |
| **企业客户（B 端）** | ~25% | PCB/电子制造厂家的研发部门，物料对比、原理图说明、技术文档 |

**关键约束**：文案必须**通用、专业、友好**，不能偏向任何单一群体。让程序员看了不觉得"这是给小孩玩的"，让家长看了不觉得"这太技术看不懂"，让 B 端客户看了不觉得"这不够正式"。

### 1.4 参考标杆与差异化

| 标杆 | 借鉴什么 | 不借鉴什么 |
|---|---|---|
| BeefAPI | Playground 极简交互、控制台菜单结构 | "牛肉粉"过于鲜明的成人化餐饮风 |
| CCSub | 双轨定价结构、VIP 倍率系统 | 黑色赛博朋克风 |

我们的差异化定位：
- **视觉上**：有辨识度的品牌色彩（黄绿蓝粉积木字母），让人一眼记住
- **语气上**：专业、清晰、不晦涩，对初学者友好但不幼稚化
- **功能上**：覆盖从 Playground 一键体验到企业级 API 接入的全场景

---

## 二、视觉规范（必须严格遵守）

### 2.1 配色

```css
/* 主色板 */
--brand-yellow: #FFD93D;        /* 主品牌色，明黄 */
--brand-yellow-deep: #F4C20D;   /* hover 态 */
--brand-green: #6BCB77;         /* 辅色，草绿，用于"成功""通过""免费" */
--brand-blue: #4D96FF;          /* 辅色，天蓝，用于链接、信息提示 */
--brand-pink: #FF6B9D;          /* 点缀色，用于强调或装饰元素 */

/* 中性色 */
--bg-cream: #FFFBF0;            /* 全局背景 米白偏奶 */
--bg-white: #FFFFFF;            /* 卡片背景 */
--text-primary: #2D2A26;        /* 主文字 深褐而非纯黑，更柔和 */
--text-secondary: #8B8680;      /* 次要文字 */
--text-tertiary: #C4BFB5;       /* 占位符、辅助说明 */
--border-soft: #F5EFDC;         /* 柔和边框 */

/* 状态色 */
--status-success: #6BCB77;
--status-warning: #FFB84D;
--status-error: #FF6B6B;
--status-info: #4D96FF;
```

**配色使用原则**：
- 大面积背景：米白 `--bg-cream`
- 主按钮 / 主色块：明黄 `--brand-yellow`
- 文字按钮 hover / 链接：天蓝 `--brand-blue`
- 价格 / 余额数字：草绿 `--brand-green`
- 装饰性强调（小图标、徽章）：粉色 `--brand-pink`

**颜色不等于幼稚**：明黄+米白也是 Notion、Figma、Linear 这类专业产品常见的暖色搭配。我们靠 logo 和色彩传达"易上手"，不靠卡通插画。

### 2.2 字体

**优先级排序**：

```css
font-family: 
  "Nunito",                 /* 英文，圆润无衬线 */
  "Quicksand",              /* 英文备选 */
  "AlibabaPuHuiTi-Round",   /* 中文圆润体 */
  "PingFang SC",            /* macOS 中文 */
  "HarmonyOS Sans",         /* 鸿蒙中文 */
  "Microsoft YaHei",        /* Windows 中文 */
  sans-serif;
```

**用法**：
- 标题（H1/H2）：font-weight 800（ExtraBold），加大字号显气场
- 正文：font-weight 500（Medium）
- 数字（价格、余额）：font-weight 700（Bold）+ 略大字号

字体引入方式：
- 英文字体从 Google Fonts 引入（Nunito + Quicksand）
- 中文字体如已有则保留，没有则用系统字体兜底
- **不要引入新的字体加载库**（如 fontmin），直接 link CDN 即可

### 2.3 圆角

```css
--radius-sm: 8px;     /* 小元素：标签、徽章 */
--radius-md: 14px;    /* 中等：按钮、输入框 */
--radius-lg: 20px;    /* 大：卡片 */
--radius-xl: 28px;    /* 特大：Hero 模块、价格卡 */
--radius-pill: 999px; /* 胶囊形 */
```

整体偏圆，**避免直角和锐角**。这是和 BeefAPI 的米白橙差异化的关键之一。

### 2.4 阴影

```css
--shadow-soft: 0 4px 20px rgba(255, 184, 77, 0.08);  /* 卡片柔和阴影 */
--shadow-pop: 0 8px 32px rgba(255, 217, 61, 0.20);   /* 主按钮立体感 */
```

主 CTA 按钮可以用 `--shadow-pop` 制造轻微立体感，**不要做夸张的 3D 凸起卡通效果**。保持专业感。

### 2.5 Logo 占位方案

**用户的正式 logo 暂未设计完**，本次先用纯 CSS + 字母实现的"积木字母"作为占位：

- 4 个字母 A/B/C/D 分别用品牌四色（黄绿蓝粉）
- 每个字母字号大、圆角中等、轻微旋转角度（-3°/+2°/-2°/+3°），制造略有动态感的层次
- 字母后面跟 `TOKEN` 字样，深褐色、圆润字体

**关键约束**：
- 不要加任何额外的卡通插画（小动物、表情、emoji 装饰）
- 不要加任何幼儿园元素（彩虹、星星贴纸、气泡装饰）
- 整体效果应该像 Figma / Notion / Linear 那种"专业产品的有特色 logo"，而不是儿童 App 的 logo

### 2.6 文案语气规范

**核心原则**：清晰、专业、对所有用户友好。

**绝对禁止**：
- ❌ "孩子""家长""小朋友""老师""课堂""下课""上学"等明显倾向亲子场景的词
- ❌ "积木""彩虹""星星""魔法"等幼稚化装饰性词汇
- ❌ emoji 滥用（每个按钮都加 emoji）

**推荐风格**：

| 场景 | 不要写 | 要写 |
|---|---|---|
| 注册按钮 | 立即注册 / 加入 ABCD 班 | 免费试用 |
| 登录 | 登录系统 / 开始学习 | 登录 |
| 充值 | 给学习账户加 Token / 充值额度 | 充值 / 给账户加 Token |
| 余额不足 | Token 用完啦~ | 余额不足，请先充值 |
| API Key | 我的学习钥匙 / API 密钥管理 | API 密钥 |
| 使用日志 | 学习记录 / 请求日志 | 使用日志 |
| Playground | AI 教室 / 在线体验 | 在线体验 / Playground |
| 错误提示 | 哎呀老师离开了 / 系统错误 | 请求失败，请稍后重试 |
| 退出登录 | 下课啦 | 退出登录 |
| 控制台 | 学习中心 | 控制台 |

**ABCD 隐喻的恰当用法**：
- ✅ Hero 标语："从 ABC 到 AI，每个人都有自己的入门方式"
- ✅ 简介："一个 Token 起步，从基础到专业全场景覆盖"
- ✅ 按钮提示："2 分钟开始你的第一次调用"
- ❌ "学 AI 像学 ABCD 一样简单"（过于强调"学"和"小白"）
- ❌ "ABCD 老师为你讲解"（拟人化幼稚）

**专业开发者也用这个站怎么办**？
- 通过保持中性专业的文案，让开发者觉得这是个**有品牌特色的专业 SaaS**，而不是儿童产品
- 顶部预留"切换到极简开发者模式"按钮（一期不实现，仅在 i18n 里预留 key）

---

## 三、本次任务范围

### 3.1 必须改的文件（核心）

```
web/
├── public/
│   ├── favicon.ico              ← 占位：换成黄底白 ABCD 的 ico
│   └── logo.png                 ← 如有则替换为 ABCD 字母 logo
├── src/
│   ├── App.js / App.jsx         ← 全局主题 / Provider 配置
│   ├── styles/
│   │   ├── global.css           ← 注入 CSS 变量、字体引入
│   │   └── theme.js             ← Semi Design 主题覆盖（如存在）
│   ├── components/
│   │   ├── Header.js            ← 顶部导航 logo + 站点名
│   │   ├── Footer.js            ← 页脚版权信息
│   │   └── SiderBar.js          ← 控制台侧边栏 logo
│   ├── pages/
│   │   ├── Home/                ← 首页 Hero 文案
│   │   └── (其他页面顶部 title)
│   ├── i18n/
│   │   ├── zh.json              ← 中文文案中性化
│   │   └── en.json              ← 英文文案同步
│   └── constants/
│       └── common.constant.js   ← SITE_NAME / SITE_DESCRIPTION 等常量
└── index.html                    ← <title> 改成 ABCDTOKEN
```

### 3.2 具体改造点

#### 改造点 1：CSS 变量与全局样式
- 在 `web/src/styles/global.css`（如不存在则创建）注入 2.1 节所有 CSS 变量
- 引入 Google Fonts 的 Nunito + Quicksand
- body 全局背景改为 `var(--bg-cream)`
- body 全局 font-family 改为 2.2 节定义的字体栈

#### 改造点 2：Semi Design 主题覆盖
- New API 用的是 Semi Design 组件库
- 找到主题配置文件，覆盖 Semi 的 CSS 变量：
```css
  :root {
    --semi-color-primary: #FFD93D;
    --semi-color-primary-hover: #F4C20D;
    --semi-color-primary-active: #E5B800;
    --semi-color-success: #6BCB77;
    --semi-color-info: #4D96FF;
    --semi-color-warning: #FFB84D;
    --semi-color-danger: #FF6B6B;
    --semi-color-link: #4D96FF;
  }
```
- 圆角变量：
```css
  --semi-border-radius-small: 8px;
  --semi-border-radius-medium: 14px;
  --semi-border-radius-large: 20px;
```

#### 改造点 3：站点名称与 logo 占位
- 全局搜索 `New API` 字符串，替换为 `ABCDTOKEN`
  - 注意保留代码层面的 `new-api`（package name、API 路径、go module name）
  - 只替换**显示给用户看的字符串**
- Header 组件的 logo 区域：
```jsx
  <div className="brand-logo">
    <span className="letter letter-a">A</span>
    <span className="letter letter-b">B</span>
    <span className="letter letter-c">C</span>
    <span className="letter letter-d">D</span>
    <span className="brand-name">TOKEN</span>
  </div>
```
```css
  .brand-logo {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .brand-logo .letter {
    display: inline-block;
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 24px;
    padding: 2px 8px;
    border-radius: 8px;
    color: white;
    line-height: 1.3;
  }
  .letter-a { background: #FFD93D; transform: rotate(-3deg); }
  .letter-b { background: #6BCB77; transform: rotate(2deg); }
  .letter-c { background: #4D96FF; transform: rotate(-2deg); }
  .letter-d { background: #FF6B9D; transform: rotate(3deg); }
  .brand-name {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--text-primary);
    margin-left: 6px;
    letter-spacing: 0.5px;
  }
```

#### 改造点 4：浏览器标签页
- `web/index.html` 的 `<title>` 改为 `ABCDTOKEN · 一个 Token 起步的 AI 模型聚合平台`
- `<meta name="description">` 改为 `ABCDTOKEN 提供 Claude / GPT / Gemini 等主流大模型的统一 API 接入，支持 Playground 在线体验、API Key 管理、按量付费与月卡订阅，覆盖个人开发者到企业级场景。`
- favicon：本次先用 SVG 数据 URI 写一个黄底 A 字母图标占位，后续替换正式 logo

#### 改造点 5：i18n 文案中性化
**只改 zh.json 和 en.json 里"用户能看到的文案"**，不要改后端字段名。

要保持的中性专业风格示例：

| 原文（如有过度幼稚的） | 改为（中性专业） |
|---|---|
| 系统消息 | 系统消息 |
| 控制台 | 控制台 |
| 在线体验 | 在线体验 |
| API Key | API 密钥 |
| 使用日志 | 使用日志 |
| 账户充值 | 账户充值 |
| 钱包管理 | 钱包管理 |
| 个人设置 | 个人设置 |
| 余额 | 余额 |
| 历史消耗 | 历史消耗 |
| 请求次数 | 请求次数 |
| 平均 RPM | 平均 RPM |
| 退出登录 | 退出登录 |
| 登录 | 登录 |
| 注册 | 注册 |

**核心理念**：本次品牌替换主要是**视觉层面的换肤**，文案上**不要做激进改动**，只把"New API"换成"ABCDTOKEN"即可。专业术语保留专业表达。

**唯一允许的文案优化**：
- 错误提示从冰冷变温和（但仍专业）：
  - "Internal Server Error" → "请求处理失败，请稍后重试"
  - "Unauthorized" → "登录状态已失效，请重新登录"
- 空状态从干瘪变信息丰富：
  - "暂无数据" → "暂无数据，去 [Playground] 试试第一次调用吧"

#### 改造点 6：首页 Hero 文案
首页标题改为：

```
主标语：从 ABC 到 AI，一个 Token 起步
副标语：Claude / GPT / Gemini 等主流模型统一接入
       Playground 一键体验，API 即开即用
       覆盖个人开发到企业级场景
CTA 主按钮：免费试用
CTA 次按钮：查看价格 →
```

下方可以放三个核心卖点（保持专业措辞）：
```
🚀 即开即用     注册即送 $1 试用额度，无需信用卡
🎯 全模型覆盖    主流大模型一个 Key 全搞定
💰 按需付费      PAYGO + 月卡订阅，自由选择
```

#### 改造点 7：页脚信息
```
© 2026 ABCDTOKEN · 一个 Token 起步的 AI 模型聚合平台
ICP 备案号占位：[备案号] · 用户协议 · 隐私政策 · API 文档 · 联系我们
```

### 3.3 不要改的文件

```
controller/    ← 后端 Go 路由
model/         ← 后端 Go 数据模型
relay/         ← 后端转发逻辑
service/       ← 后端业务逻辑
middleware/    ← 后端中间件
router/        ← 后端路由定义
go.mod         ← Go 依赖
go.sum         ← Go 依赖校验
*.go 文件       ← 所有 Go 代码
```

---

## 四、验收标准

完成后必须满足：

### 4.1 构建与运行
- [ ] `cd web && npm install` 无新依赖（除字体外）
- [ ] `npm run build` 通过，无 ESLint 错误、无新警告
- [ ] `npm run dev` 启动后浏览器打开看到米白底 + 黄绿蓝粉积木 logo

### 4.2 视觉一致性
- [ ] 全站背景米白 `#FFFBF0`
- [ ] 主按钮黄色 `#FFD93D`，hover 加深
- [ ] 顶部 logo 是 ABCD 四色字母 + TOKEN 字样
- [ ] 字体圆润（中英文都圆润）
- [ ] 圆角偏大（按钮 14px、卡片 20px+）
- [ ] **没有任何卡通元素、表情符号装饰、儿童化插画**

### 4.3 文案中性专业
- [ ] 浏览器标签页标题是 ABCDTOKEN 相关
- [ ] 全局搜索 `New API` 字符串无残留（除 package name 等代码层面引用）
- [ ] **所有文案保持专业中性，没有"孩子""家长""课堂""老师"等亲子场景词汇**
- [ ] **没有"积木""彩虹""星星""魔法"等幼稚化词汇**
- [ ] 首页 Hero 是"从 ABC 到 AI，一个 Token 起步"那段文案

### 4.4 兼容性
- [ ] 深色模式切换不破坏
- [ ] 移动端响应式正常（顶部 logo 不溢出）
- [ ] 主流浏览器：Chrome / Edge / Safari / Firefox 视觉无差异

### 4.5 未触碰范围确认
- [ ] 所有 .go 文件未改动（git diff 验证）
- [ ] package.json 依赖未新增（除字体相关，且必须先告诉我）
- [ ] API 路径、字段名、数据库 schema 未改动

---

## 五、工作流程（Claude Code 必须按此执行）

### 第 1 步：理解阶段（不要直接改代码）
1. 阅读本 TASK.md 全文
2. 阅读项目根目录的 CLAUDE.md 和 AGENTS.md（如存在）
3. 浏览以下目录的当前结构：
   - `web/src/`（前端整体结构）
   - `web/src/components/`（组件清单）
   - `web/src/i18n/`（国际化文案）
   - `web/src/styles/`（样式文件）
4. 全局搜索关键词：`New API`、`new-api` 在前端代码里出现的位置
5. 找到 Header / Sider / Footer 组件的具体文件路径

### 第 2 步：制定计划（必须等我确认才能动手）
告诉我：
- 你计划修改哪些具体文件（完整路径清单）
- 每个文件改什么内容（一句话概述）
- 你打算分几个 commit 完成
- 有没有什么不清楚需要我确认的（**包括**：找不到我说的某个文件、发现项目结构和我描述的不一致、对某个改造点的实现方式不确定）

**等我明确说"OK 开始"之后再动手写代码。**
**不要跳过这一步直接改文件。**

### 第 3 步：分步实施
- 一个改造点一个 commit，commit message 用英文 + Conventional Commits 规范
- 推荐拆分：
```
  Commit 1: feat(theme): inject brand color css variables
  Commit 2: feat(theme): override semi design theme tokens
  Commit 3: feat(brand): replace New API with ABCDTOKEN brand logo
  Commit 4: feat(brand): update site title and meta tags
  Commit 5: feat(i18n): rebrand site name across locales
  Commit 6: feat(home): rewrite hero copy
  Commit 7: feat(theme): update footer copy
```
- 每完成一个 commit 简单告诉我做了什么，再继续下一个
- 每个 commit 之前自检：是否引入了新依赖、是否动了 .go 文件、是否破坏了已有功能

### 第 4 步：自验收
全部改完后：
- 跑 `cd web && npm install && npm run build`
- 确认 build 成功
- 把所有 commit 列表 (`git log feature/01-rebrand --oneline`) 给我看
- 列出本次修改触及的所有文件（`git diff main..feature/01-rebrand --stat`）

---

## 六、参考资料

项目根目录还有其他可参考文档：

- `AI_中转站项目交接文档.md`（如存在）：项目整体方案、用户画像、产品决策
- `feature-image-upload-task.md`（如存在）：下个子任务的图片上传需求，本次**不要做**

---

## 七、常见疑问 FAQ

**Q：找不到 New API 的某个 i18n 文件？**
A：项目可能用了不同的 i18n 方案（react-i18next / 自研），先告诉我，等我确认。

**Q：发现某个组件改了之后会影响其他页面？**
A：先告诉我影响范围，由我决定要不要改。

**Q：覆盖 Semi Design 主题失败 / 部分组件不响应？**
A：Semi 有些组件用 design token 不是 CSS 变量，告诉我具体哪个组件，我们一起想办法。

**Q：用户的 logo 文件没给，favicon 怎么办？**
A：用 SVG 数据 URI 写一个临时 favicon（黄底白色 A 字母），后续替换正式版。代码里加注释 `// TODO: replace with official logo`。

**Q：要不要顺便改 Playground 的【模型配置】侧栏？**
A：**绝对不要**，那是下个子任务（feature/02-playground-refactor）的范围。本次只做品牌替换。

**Q：发现某些地方文案明显需要优化（如错误提示太晦涩）？**
A：除了 3.2 节"改造点 5"中允许的那几类（错误提示温和化、空状态信息丰富化），**其他文案不要主动改**，保持专业中性即可。

---

> 任务完成标志：所有验收清单打钩 + 我亲自看一遍 build 后的 UI 截图确认风格 OK。