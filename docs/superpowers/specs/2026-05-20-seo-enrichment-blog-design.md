# text-fast.com — SEO Enrichment + Blog Design

**Date:** 2026-05-20
**Status:** Approved
**Goal:** Improve indexing depth and organic traffic from 0 clicks / 267 impressions / avg pos 58.4

---

## Context

text-fast.com has 11 free text tools, SSG prerendering via Vite, and 15 total URLs. Google Search Console shows the site is indexed but ranking too deep to receive clicks. The strongest signal is `lorem-ipsum-generator` at position 48.9. AdSense rejected the site for "low value content." Both on-page thin content and absence of editorial content are confirmed root causes.

---

## Goals

1. Push tool pages into top-30 positions by adding content depth and keyword aliases.
2. Build topical authority through a blog section that links back to each tool.
3. Fix the AdSense "low value content" rejection in a single pass.

---

## Part 1: Tool Page Enrichment

### Data model changes (`src/data/tools.ts`)

Extend `ToolMeta` with three new optional fields:

```ts
interface ToolMeta {
  // existing fields unchanged
  useCases: { title: string; body: string }[]
  examples: { label: string; input: string; output: string }[]
  extraFaq: ToolFaq[]
}
```

All 11 existing tools receive content for these fields. Fields are optional in the TypeScript interface so existing entries remain valid during the rollout.

### Component changes (`src/pages/ToolPage.tsx`)

Add two new sections rendered between the tool UI and the FAQ:

1. **"When to use" section** — renders `tool.useCases[]` as a heading + paragraph list. 2-3 use cases per tool, targeting the user personas named in the existing copy (writers, developers, marketers).
2. **"Example" section** — renders `tool.examples[]` as styled input/output pairs. 1-2 examples per tool. These are indexable by Google and give thin pages concrete, scannable content.

FAQ rendered as `[...tool.faq, ...tool.extraFaq]` — no UI change needed.

### Title tag and description updates

Update `title` and `description` fields in `tools.ts` to naturally include primary aliases:

| Tool | Current title | Add alias |
|---|---|---|
| lorem-ipsum-generator | Lorem Ipsum Generator | + "placeholder text generator", "dummy text generator" |
| word-frequency-counter | Word Frequency Counter | + "keyword frequency counter" |
| slug-generator | Slug Generator | + "URL slug generator", "slugify text" |
| character-counter | Character Counter | + "Twitter character counter", "character limit checker" |
| text-case-converter | Text Case Converter | + "title case converter", "sentence case converter" |

### Home page (`src/pages/HomePage.tsx`)

Add a 150-word editorial intro above the tool grid. Content: who these tools are for, what problems they solve, why browser-based matters. Targets "free online text tools" properly and passes PageRank to tools via the tool grid.

---

## Part 2: Blog Infrastructure

### Architecture

Blog posts stored as TypeScript data in `src/data/posts.ts`, matching the `tools.ts` pattern. No MDX, no external CMS — keeps the build simple and the content version-controlled.

```ts
interface BlogPost {
  slug: string
  title: string
  description: string          // meta description
  publishDate: string          // YYYY-MM-DD
  tags: string[]
  relatedTools: string[]       // tool slugs for the "Try the tool" CTA
  intro: string                // 1-2 paragraphs before sections
  sections: {
    heading: string
    body: string               // plain text, rendered as <p> tags split on \n\n
  }[]
  faq?: { q: string; a: string }[]
}
```

### New files

| File | Purpose |
|---|---|
| `src/data/posts.ts` | All blog post data |
| `src/pages/BlogIndexPage.tsx` | `/blog` — sorted list of posts |
| `src/pages/BlogIndexPage.module.css` | Blog index styles |
| `src/pages/BlogPostPage.tsx` | `/blog/:slug` — single post |
| `src/pages/BlogPostPage.module.css` | Post styles |

### Routing (`src/App.tsx` / `src/AppContent.tsx`)

```tsx
<Route path="/blog" element={<BlogIndexPage />} />
<Route path="/blog/:slug" element={<BlogPostPage />} />
```

### SSG + sitemap

`prerender.mjs` — add blog index and all post slugs to the prerender list.
`scripts/generate-sitemap.mjs` — add `/blog` (priority 0.7) and each post slug (priority 0.8) to the sitemap.

### Schema

Each blog post page includes:
- `Article` JSON-LD with `datePublished`, `headline`, `author` (text-fast.com)
- `FAQPage` JSON-LD when post has a `faq[]` field

### Internal linking

Each blog post page renders a "Try the tool" section after the FAQ (at the bottom of the content area), linking to each slug in `post.relatedTools[]`. This creates the topical cluster: blog → tool, tool → related tools.

Add a "Blog" link to the site header nav.

---

## Part 3: Blog Content Plan

7 posts, in delivery order (highest GSC signal first):

| # | Slug | Title | Target keyword | Linked tool |
|---|---|---|---|---|
| 1 | `what-is-lorem-ipsum` | What is Lorem Ipsum? History, Meaning, and When to Use It | "what is lorem ipsum" | lorem-ipsum-generator |
| 2 | `keyword-frequency-analysis` | How to Find the Most Common Words in Any Text | "keyword frequency counter" | word-frequency-counter |
| 3 | `what-is-a-url-slug` | What Is a URL Slug and Why It Matters for SEO | "what is a url slug" | slug-generator |
| 4 | `how-to-count-words-online` | How to Count Words Online (and in Google Docs) | "how to count words" | word-counter |
| 5 | `title-case-vs-sentence-case` | Title Case vs Sentence Case: When to Use Each | "title case vs sentence case" | text-case-converter |
| 6 | `url-encoding-explained` | URL Encoding Explained: What %20 Means and How to Fix It | "url encoding explained" | url-encoder-decoder |
| 7 | `strong-password-tips-2026` | Strong Password Rules in 2026: What Actually Makes a Password Secure | "how to create a strong password" | password-generator |

Each post: ~600-800 words, 2-4 sections, 3-5 FAQ items, 1 "Try the tool" CTA.

---

## Out of Scope

- New tools (diff checker, random word generator) — Phase 3, after enrichment + blog ship
- AdSense integration — AdSense re-application after this plan ships
- camelCase converter or other tool variants — deferred

---

## Success Criteria

- All 11 tool pages have `useCases[]` and `examples[]` populated
- All blog infrastructure routes render and prerender correctly
- All 7 blog posts are live with correct schema, sitemap entries, and tool CTAs
- Average GSC position improves toward top-30 within 4-6 weeks of shipping
