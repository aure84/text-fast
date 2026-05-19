# Tool Page Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `useCases`, `examples`, and `extraFaq` fields to all 11 text-fast.com tool pages to increase content depth, fix the AdSense "low value content" rejection, and improve search rankings from avg. position 58.4.

**Architecture:** Extend the `ToolMeta` TypeScript interface with three optional fields, add two new rendering sections to `ToolPage.tsx`, then populate content for all 11 tools. Finally update title/description aliases for the top-ranking tools and add an editorial intro to the home page.

**Tech Stack:** React 19, TypeScript, Vite 8, CSS Modules, Vitest

---

## File Map

| Action | File | Purpose |
|---|---|---|
| Modify | `src/data/tools.ts` | Add interface fields + content for 11 tools |
| Modify | `src/pages/ToolPage.tsx` | Add UseCasesSection + ExamplesSection + merge FAQ |
| Modify | `src/pages/ToolPage.module.css` | Styles for new sections |
| Modify | `src/pages/HomePage.tsx` | Add editorial intro |
| Modify | `src/pages/HomePage.module.css` | Styles for editorial intro |
| Create | `tests/data/tools.test.ts` | Data validation tests |

---

### Task 1: Extend ToolMeta interface

**Files:**
- Modify: `src/data/tools.ts` (top of file, interface only)

- [ ] **Step 1: Add ToolUseCase and ToolExample types, extend ToolMeta**

Replace the existing interface block in `src/data/tools.ts` (before `export const TOOLS`):

```ts
export interface ToolFaq {
  q: string
  a: string
}

export interface ToolUseCase {
  title: string
  body: string
}

export interface ToolExample {
  label: string
  input: string
  output: string
}

export interface ToolMeta {
  slug: string
  title: string
  description: string
  heading: string
  subheading: string
  intro: string
  howTo: string[]
  inputLabel: string
  outputLabel: string
  faq: ToolFaq[]
  related: string[]
  useCases?: ToolUseCase[]
  examples?: ToolExample[]
  extraFaq?: ToolFaq[]
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Volumes/SLT/Claude\ Code/text-fast && npx tsc -b --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/tools.ts
git commit -m "feat(tools): extend ToolMeta with useCases, examples, extraFaq fields"
```

---

### Task 2: Add CSS for new sections

**Files:**
- Modify: `src/pages/ToolPage.module.css`

- [ ] **Step 1: Append CSS classes for UseCasesSection and ExamplesSection**

Append to the end of `src/pages/ToolPage.module.css`:

```css
.useCasesSection { margin-bottom: var(--spacing-xl); }
.useCasesTitle { font-size: 1.1rem; font-weight: 600; margin-bottom: var(--spacing-md); }
.useCaseList { display: flex; flex-direction: column; gap: var(--spacing-md); }
.useCaseItem { padding: var(--spacing-md); background: var(--bg-surface); border-radius: var(--radius); border: 1px solid var(--border); }
.useCaseItemTitle { font-weight: 600; font-size: 0.95rem; margin-bottom: var(--spacing-xs); }
.useCaseItemBody { font-size: 0.95rem; line-height: 1.6; color: var(--text); margin: 0; }

.examplesSection { margin-bottom: var(--spacing-xl); }
.examplesTitle { font-size: 1.1rem; font-weight: 600; margin-bottom: var(--spacing-md); }
.exampleList { display: flex; flex-direction: column; gap: var(--spacing-md); }
.exampleItem { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.exampleLabel { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); padding: var(--spacing-sm) var(--spacing-md); background: var(--bg-surface); border-bottom: 1px solid var(--border); }
.exampleRow { display: grid; grid-template-columns: 1fr 1fr; }
@media (max-width: 600px) { .exampleRow { grid-template-columns: 1fr; } }
.exampleCol { padding: var(--spacing-sm) var(--spacing-md); }
.exampleColIn { border-right: 1px solid var(--border); }
@media (max-width: 600px) { .exampleColIn { border-right: none; border-bottom: 1px solid var(--border); } }
.exampleColHead { font-size: 0.75rem; font-weight: 600; color: var(--text-muted); margin-bottom: var(--spacing-xs); text-transform: uppercase; letter-spacing: 0.04em; }
.exampleColText { font-size: 0.9rem; font-family: var(--font-mono, monospace); word-break: break-all; white-space: pre-wrap; line-height: 1.5; }
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/ToolPage.module.css
git commit -m "style(tool-page): add CSS for UseCasesSection and ExamplesSection"
```

---

### Task 3: Add rendering logic to ToolPage.tsx

**Files:**
- Modify: `src/pages/ToolPage.tsx`

- [ ] **Step 1: Add UseCasesSection and ExamplesSection functions**

Insert the following two functions after the `TOOL_VIEWS` map (after line 36) and before the `export default function ToolPage()` declaration:

```tsx
function UseCasesSection({ tool }: { tool: ToolMeta }) {
  if (!tool.useCases?.length) return null
  return (
    <div className={styles.useCasesSection}>
      <h2 className={styles.useCasesTitle}>When to use</h2>
      <div className={styles.useCaseList}>
        {tool.useCases.map((uc, i) => (
          <div key={i} className={styles.useCaseItem}>
            <p className={styles.useCaseItemTitle}>{uc.title}</p>
            <p className={styles.useCaseItemBody}>{uc.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExamplesSection({ tool }: { tool: ToolMeta }) {
  if (!tool.examples?.length) return null
  return (
    <div className={styles.examplesSection}>
      <h2 className={styles.examplesTitle}>Examples</h2>
      <div className={styles.exampleList}>
        {tool.examples.map((ex, i) => (
          <div key={i} className={styles.exampleItem}>
            <div className={styles.exampleLabel}>{ex.label}</div>
            <div className={styles.exampleRow}>
              <div className={`${styles.exampleCol} ${styles.exampleColIn}`}>
                <div className={styles.exampleColHead}>Input</div>
                <div className={styles.exampleColText}>{ex.input}</div>
              </div>
              <div className={styles.exampleCol}>
                <div className={styles.exampleColHead}>Output</div>
                <div className={styles.exampleColText}>{ex.output}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Update ToolPage return to render new sections and merge FAQ arrays**

In `src/pages/ToolPage.tsx`, locate the return block (currently lines 81-84):

```tsx
{ToolView && <ToolView tool={tool} />}
<FaqAccordion items={tool.faq} />
<RelatedTools slugs={tool.related} />
```

Replace with:

```tsx
{ToolView && <ToolView tool={tool} />}
<UseCasesSection tool={tool} />
<ExamplesSection tool={tool} />
<FaqAccordion items={[...tool.faq, ...(tool.extraFaq ?? [])]} />
<RelatedTools slugs={tool.related} />
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc -b --noEmit
```

Expected: no errors.

- [ ] **Step 4: Start dev server and spot-check**

```bash
npm run dev
```

Open http://localhost:5173/lorem-ipsum-generator. The page should render identically to before (no new sections yet since no tool has content). No console errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages/ToolPage.tsx
git commit -m "feat(tool-page): add UseCasesSection and ExamplesSection rendering"
```

---

### Task 4: Write data validation tests

**Files:**
- Create: `tests/data/tools.test.ts`

- [ ] **Step 1: Write failing test (all tools must have useCases — fails before content tasks)**

Create `tests/data/tools.test.ts`:

```ts
import { describe, it, expect } from 'vitest'
import { TOOLS } from '../../src/data/tools'

describe('TOOLS data structure', () => {
  it('every tool has required base fields', () => {
    for (const t of TOOLS) {
      expect(t.slug, `${t.slug}: missing slug`).toBeTruthy()
      expect(t.title, `${t.slug}: missing title`).toBeTruthy()
      expect(t.description, `${t.slug}: missing description`).toBeTruthy()
      expect(t.faq.length, `${t.slug}: needs at least 5 FAQ items`).toBeGreaterThanOrEqual(5)
    }
  })

  it('every tool with useCases has at least 2 with non-empty fields', () => {
    for (const t of TOOLS) {
      if (!t.useCases) continue
      expect(t.useCases.length, `${t.slug}: useCases must have at least 2 items`).toBeGreaterThanOrEqual(2)
      for (const uc of t.useCases) {
        expect(uc.title, `${t.slug}: useCase missing title`).toBeTruthy()
        expect(uc.body, `${t.slug}: useCase missing body`).toBeTruthy()
      }
    }
  })

  it('every tool with examples has at least 1 with non-empty fields', () => {
    for (const t of TOOLS) {
      if (!t.examples) continue
      expect(t.examples.length, `${t.slug}: examples must have at least 1 item`).toBeGreaterThanOrEqual(1)
      for (const ex of t.examples) {
        expect(ex.label, `${t.slug}: example missing label`).toBeTruthy()
        expect(ex.input, `${t.slug}: example missing input`).toBeTruthy()
        expect(ex.output, `${t.slug}: example missing output`).toBeTruthy()
      }
    }
  })

  it('all 11 tools have useCases populated — FAILS until all content tasks (5-15) complete', () => {
    const missing = TOOLS.filter(t => !t.useCases?.length).map(t => t.slug)
    expect(missing, `Tools missing useCases: ${missing.join(', ')}`).toHaveLength(0)
  })
})
```

- [ ] **Step 2: Run test to confirm it fails as expected**

```bash
npm run test:run -- tests/data/tools.test.ts
```

Expected: the last test FAILS with "Tools missing useCases: word-counter, character-counter, lorem-ipsum-generator, ..." — all 11 tools listed. The first 3 tests PASS.

- [ ] **Step 3: Commit**

```bash
git add tests/data/tools.test.ts
git commit -m "test(tools): add data validation tests for useCases, examples, extraFaq"
```

---

### Task 5: Populate lorem-ipsum-generator (priority — closest to page 1 at pos 48.9)

**Files:**
- Modify: `src/data/tools.ts` — lorem-ipsum-generator entry

- [ ] **Step 1: Add useCases, examples, extraFaq to lorem-ipsum-generator**

Locate the lorem-ipsum-generator object in `src/data/tools.ts` (the entry with `slug: 'lorem-ipsum-generator'`). Add the following fields before the closing `}` of that object:

```ts
    useCases: [
      { title: 'Web design mockups', body: 'Fill placeholder text areas in Figma, Sketch, or Adobe XD without writing real content. Clients focus on layout and typography rather than the copy, which is the point of a mockup.' },
      { title: 'Developer template testing', body: 'When building a CMS, blog, or e-commerce template, paste lorem ipsum into your components to test typography, line height, and text overflow before real content is ready.' },
      { title: 'Print design layouts', body: 'Typesetters and print designers use lorem ipsum in brochures, posters, and magazine layouts during the approval phase. It fills space realistically without distracting reviewers from layout decisions.' },
    ],
    examples: [
      { label: 'Three paragraphs of placeholder text', input: 'Paragraphs: 3', output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...' },
    ],
    extraFaq: [
      { q: 'Is lorem ipsum the same as placeholder text?', a: 'Yes. Lorem ipsum is the most common form of placeholder text — also called filler text, dummy text, or greeking. Other filler texts exist, but lorem ipsum is the industry standard because designers everywhere recognize it as non-content.' },
      { q: 'What is a filler text generator?', a: 'A filler text generator — also called a placeholder text generator or dummy text generator — creates sample text for mockups and layouts. This lorem ipsum generator is a filler text generator. Type "filler text generator" or "placeholder text generator" into any search engine and you will find this tool.' },
      { q: 'How many words is lorem ipsum?', a: 'The standard lorem ipsum passage is approximately 200 words. This generator extends it by repeating and remixing the passage to produce as many paragraphs as you need, each approximately 60–80 words.' },
      { q: 'Is it safe to publish lorem ipsum on a live site?', a: 'No. Lorem ipsum is placeholder text only. Publishing it on a production site is a sign of an incomplete deployment. Always replace it with real content before going live.' },
    ],
```

- [ ] **Step 2: Run tests**

```bash
npm run test:run -- tests/data/tools.test.ts
```

Expected: the failing test now shows 10 missing tools (lorem-ipsum-generator removed from the list). First 3 tests still PASS.

- [ ] **Step 3: Start dev server and verify sections appear**

```bash
npm run dev
```

Open http://localhost:5173/lorem-ipsum-generator. Verify:
- "When to use" section appears with 3 cards
- "Examples" section appears with 1 input/output pair
- FAQ section shows 9 items total (5 original + 4 extra)

- [ ] **Step 4: Commit**

```bash
git add src/data/tools.ts
git commit -m "content(lorem-ipsum): add useCases, examples, extraFaq"
```

---

### Task 6: Populate word-frequency-counter

**Files:**
- Modify: `src/data/tools.ts` — word-frequency-counter entry

- [ ] **Step 1: Add content to word-frequency-counter**

Locate `slug: 'word-frequency-counter'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'SEO keyword density check', body: 'Paste your article to see how often your target keyword appears. Divide the keyword count by total word count to get density — aim for 1–2%. For a 1,000-word article, your keyword should appear 10–20 times.' },
      { title: 'Editing for repetition', body: 'Paste a draft essay or email to spot overused words. If "really" or "important" appears 15 times in 500 words, the frequency table makes it immediately visible so you can vary your vocabulary.' },
      { title: 'Text corpus analysis', body: 'Researchers and analysts use word frequency to study patterns in speeches, documents, or scraped text. Paste any block of text to get an instant vocabulary distribution ranked from most to least frequent.' },
    ],
    examples: [
      { label: 'Keyword density analysis', input: 'The word counter counts words. A word counter is useful. Count words fast with our word counter.', output: 'word: 5  counter: 3  count: 2  words: 2  the: 2  ...' },
    ],
    extraFaq: [
      { q: 'What is a keyword frequency counter?', a: 'A keyword frequency counter counts how often each word appears in a text. It is also called a word frequency analyzer, word frequency counter, or text frequency tool. This tool is a keyword frequency counter.' },
      { q: 'What is a good keyword density for SEO?', a: 'Most SEO practitioners target 1–2% keyword density. For a 1,000-word article, your target keyword should appear 10–20 times. Below 0.5% may signal low relevance; above 3–4% may look like keyword stuffing to search engines.' },
      { q: 'How do I calculate keyword density?', a: 'Divide the keyword count by total word count and multiply by 100. Example: if "word counter" appears 12 times in a 600-word article, the density is (12 ÷ 600) × 100 = 2%.' },
      { q: 'Does the counter include stop words like "the"?', a: 'Yes — all words are counted including stop words. Scroll past "the", "a", "is", and "of" at the top of the frequency table to find your meaningful content words.' },
    ],
```

- [ ] **Step 2: Run tests and dev check**

```bash
npm run test:run -- tests/data/tools.test.ts
```

Open http://localhost:5173/word-frequency-counter and verify the new sections appear.

- [ ] **Step 3: Commit**

```bash
git add src/data/tools.ts
git commit -m "content(word-frequency): add useCases, examples, extraFaq"
```

---

### Task 7: Populate word-counter

**Files:**
- Modify: `src/data/tools.ts` — word-counter entry

- [ ] **Step 1: Add content to word-counter**

Locate `slug: 'word-counter'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Academic writing and essays', body: 'Most college application essays have a 650-word limit. Academic assignments typically specify 500–5,000 words. Paste your draft to verify you are within the required range before submitting.' },
      { title: 'Content marketing and SEO', body: 'Blog posts between 1,500 and 2,500 words tend to rank better on Google for informational keywords. Use this counter to hit your target length before publishing or to benchmark competitor article lengths.' },
      { title: 'Presentations and speeches', body: 'The average speaker delivers 130–150 words per minute. Check your script word count to estimate speaking time — useful for conference talks, pitches, and video scripts with a fixed time slot.' },
    ],
    examples: [
      { label: 'Short paragraph analysis', input: 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.', output: 'Words: 17  Characters: 88  Sentences: 2  Reading time: 1 min' },
    ],
    extraFaq: [
      { q: 'How many words is a college essay?', a: 'The Common App essay has a 650-word hard limit. Other college application supplements typically range from 150 to 400 words. Always check the specific limit for each school or program before submitting.' },
      { q: 'How many words is a 5-minute speech?', a: 'At the average speaking pace of 130–150 words per minute, a 5-minute speech is approximately 650–750 words. Use the reading time estimate in this counter as a starting guide — actual speaking pace varies by person.' },
      { q: 'How many words should a blog post be?', a: 'For SEO-focused informational content, 1,500–2,500 words is a reliable target. Product pages and landing pages perform better at 300–500 words. Match length to the user\'s intent — longer is not always better.' },
      { q: 'How many words is a paragraph?', a: 'A standard paragraph is 100–200 words, or 3–5 sentences. For web content, shorter paragraphs of 50–75 words improve readability on mobile screens.' },
    ],
```

- [ ] **Step 2: Run tests and dev check**

```bash
npm run test:run -- tests/data/tools.test.ts
```

Open http://localhost:5173/word-counter and verify the new sections appear.

- [ ] **Step 3: Commit**

```bash
git add src/data/tools.ts
git commit -m "content(word-counter): add useCases, examples, extraFaq"
```

---

### Task 8: Populate character-counter

**Files:**
- Modify: `src/data/tools.ts` — character-counter entry

- [ ] **Step 1: Add content to character-counter**

Locate `slug: 'character-counter'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Twitter and X posts', body: 'Twitter/X allows 280 characters per tweet for standard accounts. Paste your tweet to confirm you are within the limit and adjust before posting. URLs count as 23 characters regardless of actual length.' },
      { title: 'SEO meta descriptions', body: 'Google displays approximately 155–160 characters in search result snippets. Write your meta description, paste it here, and confirm it is under 155 characters to avoid truncation in search results.' },
      { title: 'SMS message planning', body: 'A standard SMS is 160 characters. Messages longer than that split into multiple segments, which can increase costs and disrupt reading. Paste your SMS copy to keep it within a single message.' },
    ],
    examples: [
      { label: 'Twitter character check', input: 'Just launched our free text tools at text-fast.com — word counter, case converter, lorem ipsum, and more. Try them out.', output: 'With Spaces: 118  Without Spaces: 99  Words: 21  Lines: 1' },
    ],
    extraFaq: [
      { q: 'What is the Twitter character limit?', a: 'Twitter/X allows 280 characters per tweet for standard (free) accounts. Links are automatically shortened to 23 characters regardless of original URL length. Images and videos do not count toward the limit.' },
      { q: 'What is the Google meta description character limit?', a: 'Google typically shows 155–160 characters in search snippets. Keep meta descriptions under 155 characters to prevent truncation. Descriptions of 120–150 characters with a clear call to action often perform best.' },
      { q: 'What is the Instagram caption character limit?', a: 'Instagram allows up to 2,200 characters per caption, but only the first 125 characters are visible before the "more" link. Write your most important content within the first 125 characters.' },
      { q: 'How many characters is a text message?', a: 'A single SMS supports 160 characters using GSM-7 encoding. If you include emoji or accented characters, the limit drops to 70 characters per segment because those use UTF-16 encoding.' },
    ],
```

- [ ] **Step 2: Run tests and dev check, commit**

```bash
npm run test:run -- tests/data/tools.test.ts
```

Open http://localhost:5173/character-counter. Verify sections appear.

```bash
git add src/data/tools.ts
git commit -m "content(character-counter): add useCases, examples, extraFaq"
```

---

### Task 9: Populate text-case-converter

**Files:**
- Modify: `src/data/tools.ts` — text-case-converter entry

- [ ] **Step 1: Add content to text-case-converter**

Locate `slug: 'text-case-converter'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Fixing copy-pasted headings', body: 'Text pasted from PDFs or other documents often arrives in ALL CAPS or inconsistent capitalization. Paste the heading and convert it to Title Case or Sentence case in one click.' },
      { title: 'Preparing code constants', body: 'Convert a plain English phrase to UPPERCASE to get the raw capital letters needed for SCREAMING_SNAKE_CASE constants, then manually add underscores in your editor.' },
      { title: 'Normalizing data before import', body: 'Spreadsheet exports from different systems often mix capitalization. Convert all values to lowercase before deduplication or database import to ensure consistent matching.' },
    ],
    examples: [
      { label: 'Title Case conversion', input: 'the quick brown fox jumps over the lazy dog', output: 'The Quick Brown Fox Jumps Over the Lazy Dog' },
    ],
    extraFaq: [
      { q: 'What is a title case converter?', a: 'A title case converter transforms text so the first letter of each major word is capitalized. This tool is a title case converter — it also handles lowercase, UPPERCASE, and sentence case in one place.' },
      { q: 'What is a sentence case converter?', a: 'A sentence case converter capitalizes only the first word of each sentence and proper nouns, matching standard prose capitalization. Use it to fix text that arrives in ALL CAPS or Title Case when it should read as plain prose.' },
      { q: 'What is camelCase?', a: 'camelCase starts with a lowercase letter and capitalizes the first letter of each subsequent word — for example, quickBrownFox. This converter does not produce camelCase directly; use lowercase output and manually capitalize within words in your editor.' },
      { q: 'Which case is correct for blog post titles?', a: 'Both Title Case and Sentence case are widely used — the choice depends on your style guide. AP and Chicago style use Title Case for headlines. The Guardian, BBC, and many tech publishers prefer Sentence case. Pick one and apply it consistently.' },
    ],
```

- [ ] **Step 2: Run tests, dev check, commit**

```bash
npm run test:run -- tests/data/tools.test.ts
```

Open http://localhost:5173/text-case-converter. Verify sections appear.

```bash
git add src/data/tools.ts
git commit -m "content(text-case-converter): add useCases, examples, extraFaq"
```

---

### Task 10: Populate duplicate-line-remover

**Files:**
- Modify: `src/data/tools.ts` — duplicate-line-remover entry

- [ ] **Step 1: Add content to duplicate-line-remover**

Locate `slug: 'duplicate-line-remover'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Cleaning keyword lists', body: 'SEO keyword lists gathered from multiple tools often contain repeated entries. Paste your combined list — one keyword per line — to remove all duplicates in a single step while preserving the original order.' },
      { title: 'Deduplicating email lists', body: 'Paste a list of email addresses to remove repeated entries before uploading to your email provider. For case-insensitive deduplication, convert to lowercase with the Text Case Converter first, then remove duplicates here.' },
      { title: 'Cleaning log output', body: 'Server logs and error reports often repeat the same line hundreds of times. Paste the log to collapse repetition and see each unique entry once — making patterns easier to spot.' },
    ],
    examples: [
      { label: 'Removing duplicate keywords', input: 'word counter\ncharacter counter\nword counter\nlorem ipsum\ncharacter counter', output: 'word counter\ncharacter counter\nlorem ipsum' },
    ],
    extraFaq: [
      { q: 'Is the duplicate comparison case-sensitive?', a: 'Yes. "Apple" and "apple" are treated as different lines. For case-insensitive deduplication, convert all text to lowercase with the Text Case Converter first, then remove duplicate lines.' },
      { q: 'Does it keep the first or last occurrence?', a: 'The tool keeps the first occurrence of each line and removes subsequent duplicates, preserving the original order of the list.' },
      { q: 'Will it remove blank lines?', a: 'Blank lines are treated as lines — the first blank line is kept, and additional blank lines are removed. To remove all blank lines, use the Whitespace Remover instead.' },
      { q: 'Can I deduplicate words within a single line?', a: 'No — the tool compares whole lines. To deduplicate words within a line, put each word on its own line first, run the remover, then join the result back into one line manually.' },
    ],
```

- [ ] **Step 2: Run tests, dev check, commit**

```bash
npm run test:run -- tests/data/tools.test.ts
```

```bash
git add src/data/tools.ts
git commit -m "content(duplicate-line-remover): add useCases, examples, extraFaq"
```

---

### Task 11: Populate whitespace-remover

**Files:**
- Modify: `src/data/tools.ts` — whitespace-remover entry

- [ ] **Step 1: Add content to whitespace-remover**

Locate `slug: 'whitespace-remover'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Cleaning copy-pasted text', body: 'PDFs and web pages often introduce extra spaces and blank lines when text is copied. Paste into the whitespace remover to strip all extra whitespace so the text is ready to use in a document or database.' },
      { title: 'Preparing data for import', body: 'Spreadsheet and database imports often fail or produce mismatches when values have leading or trailing spaces. Clean your data here before importing to avoid "not found" errors caused by invisible whitespace.' },
      { title: 'Formatting code string literals', body: 'Pasted strings in code that contain extra whitespace can cause comparison failures at runtime. Clean the text here before embedding it as a string literal in your source code.' },
    ],
    examples: [
      { label: 'Removing leading spaces and blank lines', input: '  Hello World  \n\n   How are you?  \n\n', output: 'Hello World\nHow are you?' },
    ],
    extraFaq: [
      { q: 'What exactly does this remove?', a: 'It removes leading spaces at the start of each line, trailing spaces at the end of each line, multiple consecutive spaces between words (collapsed to one), and blank lines. Intentional single line breaks are preserved.' },
      { q: 'Does it remove tabs?', a: 'Yes. Leading tabs are removed from the start of each line. Tabs between words within a line are converted to a single space.' },
      { q: 'Can I remove blank lines without affecting spacing?', a: 'Blank lines are removed as part of the whitespace cleaning pass. Extra spaces within lines are also normalized in the same operation. There is no option to remove only blank lines — use this tool when you want full whitespace normalization.' },
      { q: 'Does it work on HTML source code?', a: 'It treats all input as plain text. Pasting HTML will clean whitespace in the raw HTML characters — it does not parse HTML tags. For HTML minification, use a dedicated HTML minifier.' },
    ],
```

- [ ] **Step 2: Run tests, dev check, commit**

```bash
npm run test:run -- tests/data/tools.test.ts
```

```bash
git add src/data/tools.ts
git commit -m "content(whitespace-remover): add useCases, examples, extraFaq"
```

---

### Task 12: Populate slug-generator

**Files:**
- Modify: `src/data/tools.ts` — slug-generator entry

- [ ] **Step 1: Add content to slug-generator**

Locate `slug: 'slug-generator'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'WordPress and CMS post URLs', body: 'Every blog post needs a URL slug. Paste your post title and copy the generated slug directly into WordPress, Ghost, Shopify, or any CMS that accepts a permalink slug in the page editor.' },
      { title: 'API route naming', body: 'REST API endpoints follow lowercase-hyphen conventions. Generate a slug from a human-readable resource name to get a consistent, RFC-compliant path segment without manually handling punctuation and accents.' },
      { title: 'File and folder naming', body: 'File systems on Linux and macOS are case-sensitive. Generate a slug from a project name to get a safe, lowercase, space-free filename that works reliably on all operating systems and in CI environments.' },
    ],
    examples: [
      { label: 'Blog post title to URL slug', input: 'How to Count Words Online (and in Google Docs)', output: 'how-to-count-words-online-and-in-google-docs' },
    ],
    extraFaq: [
      { q: 'What is a URL slug generator?', a: 'A URL slug generator — also called a slugify tool — converts a title or phrase into a URL-safe string: lowercase, hyphens instead of spaces, no special characters. Type "URL slug generator" or "slugify text online" into any search engine and you will find this tool.' },
      { q: 'Why use hyphens instead of underscores in slugs?', a: 'Google treats hyphens as word separators: "word-counter" ranks for "word counter" queries. Underscores are treated as word joiners: "word_counter" is indexed as the single token "wordcounter". For SEO, always use hyphens in URL slugs.' },
      { q: 'What does slugify mean?', a: 'Slugify means to convert a string into a URL slug — lowercase, spaces replaced with hyphens, special characters removed. "Slugify" is the verb; the result is a "slug". This tool slugifies text.' },
      { q: 'Does the slug generator handle accented characters?', a: 'Yes. Accented characters are converted to their ASCII equivalents before slugification: é becomes e, ü becomes u, ñ becomes n, ç becomes c. Non-Latin scripts such as Chinese, Arabic, and Cyrillic are removed.' },
    ],
```

- [ ] **Step 2: Run tests, dev check, commit**

```bash
npm run test:run -- tests/data/tools.test.ts
```

```bash
git add src/data/tools.ts
git commit -m "content(slug-generator): add useCases, examples, extraFaq"
```

---

### Task 13: Populate url-encoder-decoder

**Files:**
- Modify: `src/data/tools.ts` — url-encoder-decoder entry

- [ ] **Step 1: Add content to url-encoder-decoder**

Locate `slug: 'url-encoder-decoder'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Fixing broken API requests', body: 'Query parameters with spaces, ampersands, or equals signs break URLs when sent raw. Encode the parameter value here and use the percent-encoded output in your API call or request builder.' },
      { title: 'Reading obfuscated redirect URLs', body: 'Tracking links and redirect URLs often contain percent-encoded strings. Paste the encoded URL into the decoder to read the original plaintext destination without having to parse it manually.' },
      { title: 'Building query strings safely', body: 'When constructing URLs that include user-supplied data, encode each parameter value separately. This prevents injection and ensures the URL is valid across all browsers and HTTP clients.' },
    ],
    examples: [
      { label: 'Encoding a URL query parameter value', input: 'hello world & goodbye', output: 'hello%20world%20%26%20goodbye' },
    ],
    extraFaq: [
      { q: 'What is percent encoding?', a: 'Percent encoding (also called URL encoding) replaces characters that are unsafe in a URL with a % sign followed by two hexadecimal digits representing the character\'s byte value. A space (byte 0x20) becomes %20, & becomes %26, and = becomes %3D.' },
      { q: 'Why does my URL show %20 instead of a space?', a: 'URLs cannot contain literal spaces — they break URL parsing. The space was encoded as %20 by your browser, server, or application. Paste the URL into the decoder to see the original human-readable version.' },
      { q: 'What is the difference between URL encoding and Base64?', a: 'URL encoding makes characters safe for use in a URL. Base64 encodes binary data as text for transmission. They serve different purposes — URL encoding for URLs, Base64 for binary-in-text contexts like email attachments and data URIs.' },
      { q: 'What does %2F mean in a URL?', a: '%2F is the URL-encoded forward slash (/). Since / separates URL path segments, encoding it as %2F lets you include a literal slash inside a path segment or query parameter value without it being interpreted as a path separator.' },
    ],
```

- [ ] **Step 2: Run tests, dev check, commit**

```bash
npm run test:run -- tests/data/tools.test.ts
```

```bash
git add src/data/tools.ts
git commit -m "content(url-encoder-decoder): add useCases, examples, extraFaq"
```

---

### Task 14: Populate text-reverser

**Files:**
- Modify: `src/data/tools.ts` — text-reverser entry

- [ ] **Step 1: Add content to text-reverser**

Locate `slug: 'text-reverser'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Reversing chronological lists', body: 'Logs, exports, and feeds are often sorted oldest-first. Paste the list — one item per line — and use Reverse Lines to flip the order so the newest entries appear at the top.' },
      { title: 'Creative text effects', body: 'Reversed text is used in puzzles, memes, and creative design. Use Reverse Characters to mirror a word or phrase for visual effects, social media captions, or graphic design copy.' },
      { title: 'Developer testing', body: 'String reversal is a classic unit test scenario. Use this tool to quickly generate expected output values for verifying your own implementation of a reverse string algorithm.' },
    ],
    examples: [
      { label: 'Reverse characters', input: 'Hello, World!', output: '!dlroW ,olleH' },
    ],
    extraFaq: [
      { q: 'What is a backwards text generator?', a: 'A backwards text generator — also called a reverse text generator or text reverser — flips characters in a string so they appear in reverse order. "Hello" becomes "olleH". This tool is a backwards text generator.' },
      { q: 'Does it handle emoji and Unicode correctly?', a: 'Yes. The reverser treats each Unicode code point, including emoji, as a single unit. Emoji and multi-byte characters are reversed as atomic symbols, not split into raw bytes.' },
      { q: 'What is Reverse Words mode?', a: 'Reverse Words keeps each word\'s characters intact but reverses the order of words in the sentence. "Hello World" becomes "World Hello". Useful for quick list reordering or creative text manipulation.' },
      { q: 'What is Reverse Lines useful for?', a: 'Reverse Lines keeps each line intact but reverses their order in the list. If your list runs Monday → Tuesday → Wednesday, Reverse Lines gives Wednesday → Tuesday → Monday. Useful for flipping chronological logs or reordering exported data.' },
    ],
```

- [ ] **Step 2: Run tests, dev check, commit**

```bash
npm run test:run -- tests/data/tools.test.ts
```

```bash
git add src/data/tools.ts
git commit -m "content(text-reverser): add useCases, examples, extraFaq"
```

---

### Task 15: Populate password-generator

**Files:**
- Modify: `src/data/tools.ts` — password-generator entry

- [ ] **Step 1: Add content to password-generator**

Locate `slug: 'password-generator'` and add before its closing `}`:

```ts
    useCases: [
      { title: 'Creating new account passwords', body: 'Use the generator whenever you create a new account. Enable all character types and use at least 16 characters for strong security. Store the result in a password manager — never reuse it across accounts.' },
      { title: 'Replacing weak or reused passwords', body: 'If you reuse passwords or use short passwords under 12 characters, replace them with generated passwords one account at a time, starting with your most important accounts: email, banking, and your password manager.' },
      { title: 'Generating API keys and tokens', body: 'Need a random secret for an API key, webhook secret, or session token in development? The generator produces cryptographically secure random strings suitable for use as shared secrets or short-lived tokens.' },
    ],
    examples: [
      { label: '16-character password, all character types enabled', input: 'Length: 16, Uppercase + Lowercase + Numbers + Symbols', output: 'xK9@mP2#vL7$qN4!  (strong — approx. 105 bits entropy)' },
    ],
    extraFaq: [
      { q: 'How do I create a strong password?', a: 'A strong password is long (16+ characters), random (no words or patterns), and unique (never reused across accounts). Use this generator to create one, then store it in a password manager like Bitwarden, 1Password, or Apple Keychain.' },
      { q: 'What is password entropy?', a: 'Entropy measures how unpredictable a password is, in bits. A 16-character password with all character types has approximately 105 bits of entropy. Aim for at least 80 bits for most accounts; 100+ for critical accounts like email and banking.' },
      { q: 'Is it safe to generate passwords in a browser?', a: 'Yes. This generator uses crypto.getRandomValues — the Web Crypto API built into all modern browsers. It is a cryptographically secure random source. Nothing is sent to any server.' },
      { q: 'How often should I change my passwords?', a: 'Current NIST guidance (SP 800-63B, 2024) recommends changing passwords only when you have evidence they were compromised — not on a fixed schedule. Using a unique, randomly generated password from the start is more important than frequent rotation.' },
      { q: 'What is a random password generator?', a: 'A random password generator creates passwords using a cryptographically secure random source. Unlike human-chosen passwords, these contain no patterns and are resistant to dictionary attacks and guessing based on personal information.' },
    ],
```

- [ ] **Step 2: Run all tests — the failing test should now PASS**

```bash
npm run test:run -- tests/data/tools.test.ts
```

Expected: ALL 4 tests PASS. The last test (all 11 tools have useCases) now passes.

- [ ] **Step 3: Dev check**

Open http://localhost:5173/password-generator. Verify "When to use" and "Examples" sections appear.

- [ ] **Step 4: Commit**

```bash
git add src/data/tools.ts
git commit -m "content(password-generator): add useCases, examples, extraFaq — all tools enriched"
```

---

### Task 16: Update title and description aliases for top 5 tools

**Files:**
- Modify: `src/data/tools.ts` — title and description fields for 5 tools

- [ ] **Step 1: Update lorem-ipsum-generator title and description**

Locate `slug: 'lorem-ipsum-generator'` and update:

```ts
title: 'Lorem Ipsum Generator — Free Placeholder & Dummy Text',
description: 'Generate lorem ipsum placeholder text, dummy text, or filler text instantly. Choose number of paragraphs. Free, no sign-up.',
```

- [ ] **Step 2: Update word-frequency-counter title and description**

Locate `slug: 'word-frequency-counter'` and update:

```ts
title: 'Word Frequency Counter — Keyword Frequency Analyzer',
description: 'Count keyword frequency and word frequency in any text. See which words appear most often. Free online keyword frequency counter and word frequency analyzer.',
```

- [ ] **Step 3: Update slug-generator title and description**

Locate `slug: 'slug-generator'` and update:

```ts
title: 'Slug Generator — URL Slug Generator & Slugify Tool',
description: 'Convert text to a URL-friendly slug online. Slugify text — removes special characters, replaces spaces with hyphens. Free URL slug generator.',
```

- [ ] **Step 4: Update character-counter title and description**

Locate `slug: 'character-counter'` and update:

```ts
title: 'Character Counter — Twitter & Character Limit Checker',
description: 'Count characters with and without spaces. Character limit checker for Twitter, Instagram, SMS, and SEO meta descriptions. Free online character counter.',
```

- [ ] **Step 5: Update text-case-converter title and description**

Locate `slug: 'text-case-converter'` and update:

```ts
title: 'Text Case Converter — Title Case & Sentence Case Converter',
description: 'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case instantly. Free title case converter and sentence case converter online.',
```

- [ ] **Step 6: Run tests and build**

```bash
npm run test:run && npm run build
```

Expected: all tests pass, build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/data/tools.ts
git commit -m "seo(tools): update title and description with keyword aliases for top 5 tools"
```

---

### Task 17: Add editorial intro to HomePage

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/HomePage.module.css`

- [ ] **Step 1: Add editorial CSS to HomePage.module.css**

Append to `src/pages/HomePage.module.css`:

```css
.editorial { margin-bottom: var(--spacing-xl); max-width: 680px; margin-left: auto; margin-right: auto; text-align: center; }
.editorial p { font-size: 1rem; line-height: 1.7; color: var(--text-muted); margin-bottom: var(--spacing-md); }
.editorial p:last-child { margin-bottom: 0; }
```

- [ ] **Step 2: Add editorial intro to HomePage.tsx**

In `src/pages/HomePage.tsx`, update the return to add the editorial block between the hero and `<ToolGrid />`:

```tsx
export default function HomePage() {
  return (
    <main className={styles.main}>
      <SEOMeta
        title="text-fast.com — Free Online Text Tools"
        description="Free online text tools: word counter, character counter, case converter, lorem ipsum generator, and more. Fast, free, no sign-up."
      />
      <div className={styles.hero}>
        <h1 className={styles.heading}>Free Online Text Tools</h1>
        <p className={styles.sub}>Fast, free tools for writers, developers, and marketers. No sign-up required.</p>
      </div>
      <div className={styles.editorial}>
        <p>text-fast.com is a collection of free browser-based text tools. No account required — no text is ever sent to a server.</p>
        <p>Count words and characters, convert text between UPPERCASE and lowercase, generate lorem ipsum placeholder text for mockups, remove duplicate lines and extra whitespace, create URL-friendly slugs from titles, encode and decode URLs, reverse text, analyze word frequency, and generate strong random passwords. Each tool opens instantly and works offline after the first load.</p>
      </div>
      <ToolGrid />
    </main>
  )
}
```

- [ ] **Step 3: Build and verify**

```bash
npm run build
```

Open `dist/index.html` and verify the editorial text appears between the hero and the tool grid in the prerendered HTML.

- [ ] **Step 4: Commit**

```bash
git add src/pages/HomePage.tsx src/pages/HomePage.module.css
git commit -m "feat(home): add editorial intro above tool grid for SEO and AdSense"
```

---

### Final verification

- [ ] **Run full test suite**

```bash
npm run test:run
```

Expected: all tests pass.

- [ ] **Run full build**

```bash
npm run build && npm run sitemap
```

Expected: build succeeds, 15 URLs prerendered, sitemap updated.
