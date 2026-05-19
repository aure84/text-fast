# Blog Infrastructure + Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a blog section to text-fast.com with 7 SEO-optimized posts targeting long-tail keywords that reinforce the existing tool pages and build topical authority.

**Architecture:** Blog posts stored as TypeScript data in `src/data/posts.ts` (same pattern as `tools.ts`). Two new pages: `BlogIndexPage` (`/blog`) and `BlogPostPage` (`/blog/:slug`). Routes added to AppContent before the `/:slug` tool route. SSG prerendering and sitemap updated to include blog URLs. Each post includes `Article` JSON-LD, optional `FAQPage` JSON-LD, and a "Try the tool" CTA linking to a related tool page.

**Tech Stack:** React 19, TypeScript, Vite 8, CSS Modules, React Router DOM v7, Vitest

---

## File Map

| Action | File | Purpose |
|---|---|---|
| Create | `src/data/posts.ts` | BlogPost interface + 7 posts |
| Create | `src/pages/BlogIndexPage.tsx` | `/blog` list page |
| Create | `src/pages/BlogIndexPage.module.css` | Blog index styles |
| Create | `src/pages/BlogPostPage.tsx` | `/blog/:slug` single post |
| Create | `src/pages/BlogPostPage.module.css` | Post styles |
| Modify | `src/AppContent.tsx` | Add `/blog` and `/blog/:slug` routes |
| Modify | `src/entry-server.tsx` | Add blog URLs to `getAllRoutes()` |
| Modify | `scripts/generate-sitemap.mjs` | Add blog URLs to sitemap |
| Modify | `src/components/Header.tsx` | Add Blog nav link |
| Modify | `src/components/Header.module.css` | Nav link styles |

---

### Task 1: Create src/data/posts.ts with interface and 7 posts

**Files:**
- Create: `src/data/posts.ts`

- [ ] **Step 1: Create posts.ts with BlogPost interface and all 7 posts**

Create `src/data/posts.ts` with the following content:

```ts
export interface BlogSection {
  heading: string
  body: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishDate: string
  tags: string[]
  relatedTools: string[]
  intro: string
  sections: BlogSection[]
  faq?: { q: string; a: string }[]
}

export const POSTS: BlogPost[] = [
  {
    slug: 'what-is-lorem-ipsum',
    title: 'What Is Lorem Ipsum? History, Meaning, and When to Use It',
    description: 'Lorem ipsum is the world\'s most-used placeholder text. Learn where it comes from, what it means, and when to use it in web and print design.',
    publishDate: '2026-05-21',
    tags: ['lorem ipsum', 'placeholder text', 'design'],
    relatedTools: ['lorem-ipsum-generator'],
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit — if you have worked in web design, publishing, or document layout, you have seen this phrase hundreds of times. But what is it exactly, and why does the entire design industry use it?',
    sections: [
      {
        heading: 'What does lorem ipsum mean?',
        body: 'Lorem ipsum is not grammatical Latin. It is a deliberately scrambled excerpt from "de Finibus Bonorum et Malorum" (On the Ends of Good and Evil), a philosophical work by the Roman orator Cicero, written in 45 BC.\n\nThe original passage reads: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." which translates roughly to: "Nor is there anyone who loves pain itself, since it is pain and thus wants to obtain it..."\n\nThe lorem ipsum version is a scrambled, shortened form of this text — stripped of meaning so that readers focus on the visual design rather than the content.',
      },
      {
        heading: 'Where does lorem ipsum come from?',
        body: 'Lorem ipsum originated in the 1500s when an unknown printer scrambled a passage of Cicero to fill a type specimen book — a catalog used to show typefaces to buyers. The scrambled text has been used by typographers ever since.\n\nRichard McClintock, a Latin scholar at Hampden-Sydney College, traced the modern lorem ipsum passage back to "de Finibus Bonorum et Malorum," confirming its 2,000-year-old origin.\n\nThe transition to digital publishing happened in the 1980s when Aldus PageMaker included lorem ipsum as the default placeholder text in its desktop publishing software. From there, it spread to the web and became a universal design standard.',
      },
      {
        heading: 'Why use lorem ipsum instead of real text?',
        body: 'The purpose of placeholder text is to simulate the visual weight of real copy without distracting the viewer. When clients or stakeholders review a layout with real text, they start reading and editing the copy rather than evaluating the design.\n\nLorem ipsum solves this: it looks like text, fills space realistically, and is instantly recognizable as a placeholder, so reviewers stay focused on layout decisions — font size, line height, spacing, and color contrast.\n\nThis is also called "greeking" in typography: using non-meaningful text to represent text visually. Lorem ipsum is the most widely used form of greeking in modern design.',
      },
      {
        heading: 'When should you use filler text?',
        body: 'Use placeholder text when you need to show a realistic layout before final copy is ready. Common use cases include presenting a website wireframe or prototype to a client, testing a CMS template before content is written, designing a print layout during the approval phase, and building reusable UI components that need realistic-looking data.\n\nAlways remove all placeholder text before publishing. Publishing lorem ipsum by mistake is one of the most recognizable signs of an incomplete deployment — and it signals to Google that a page lacks real content.',
      },
      {
        heading: 'What are alternatives to lorem ipsum?',
        body: 'Several alternatives exist for specific contexts. Cupcake Ipsum uses food-themed vocabulary and can lighten the mood for food-related projects. Hipster Ipsum uses trendy language that can occasionally distract clients. Blind Text Generator offers multiple filler text styles in one place.\n\nFor professional work, standard lorem ipsum remains the best choice. It is neutral, universally recognized as placeholder content, and will not accidentally amuse or distract the people reviewing your design.',
      },
    ],
    faq: [
      { q: 'Is lorem ipsum Latin?', a: 'It is derived from Latin but is not grammatically correct Latin. It is a scrambled passage from Cicero\'s "de Finibus Bonorum et Malorum," altered deliberately to be unreadable so it functions purely as placeholder text.' },
      { q: 'What does "lorem ipsum dolor sit amet" mean in English?', a: 'The phrase does not have a coherent English translation. The original Cicero passage discusses concepts of pain and pleasure, but the lorem ipsum version is scrambled specifically to remove meaning. It has no English translation.' },
      { q: 'Is lorem ipsum free to use?', a: 'Yes. Lorem ipsum is derived from a 2,000-year-old Latin text that is firmly in the public domain. It is free to use in any project, commercial or personal, with no attribution required.' },
      { q: 'How many words is lorem ipsum?', a: 'The standard lorem ipsum passage is approximately 200 words. Generators extend it by repeating or remixing the passage to produce as many paragraphs as needed, each approximately 60–80 words.' },
    ],
  },
  {
    slug: 'keyword-frequency-analysis',
    title: 'How to Find the Most Common Words in Any Text',
    description: 'Word frequency analysis counts how often each word appears in a text. Learn how to use it for SEO keyword density checks, writing review, and content analysis.',
    publishDate: '2026-05-22',
    tags: ['keyword frequency', 'word frequency', 'seo', 'writing'],
    relatedTools: ['word-frequency-counter', 'word-counter'],
    intro: 'Every piece of writing has a vocabulary fingerprint. Word frequency analysis — counting how often each word appears — reveals patterns invisible to casual reading. Writers use it to catch repetition. SEO professionals use it to measure keyword density. Researchers use it to study language patterns in large bodies of text.',
    sections: [
      {
        heading: 'What is word frequency analysis?',
        body: 'Word frequency analysis counts the number of times each unique word appears in a text and ranks them from most to least frequent. The output is a frequency table: word on the left, count on the right.\n\nThe technique is one of the oldest in linguistics. Before computers, it was done by hand over weeks. Today it runs in a browser in milliseconds. Modern applications range from basic writing review to computational linguistics research.',
      },
      {
        heading: 'How to use word frequency for SEO',
        body: 'Search engine optimization requires that your target keyword appears in your content often enough to signal relevance to Google — but not so often that it looks like keyword stuffing.\n\nKeyword density is the percentage of times your keyword appears relative to the total word count. Calculate it by dividing the keyword count by total words and multiplying by 100. Most SEO practitioners target 1–2% keyword density. For a 1,000-word article targeting "word counter," the keyword should appear 10–20 times.\n\nTo check your content: paste your article into the Word Frequency Counter, find your target keyword in the results table, divide its count by your total word count from the Word Counter, and adjust if the percentage falls outside the 1–2% range.',
      },
      {
        heading: 'How to use word frequency to improve your writing',
        body: 'Repetition is the enemy of readable prose. When a word appears too frequently, readers notice — even unconsciously. Word frequency analysis makes the invisible visible.\n\nPaste a draft into the frequency counter and examine the top 20 non-stop-words. If "very," "really," "important," or "great" appears more than 3–4 times in a 500-word piece, you are over-using it. Substituting specific, varied vocabulary improves both readability and the impression your writing makes.\n\nThis technique is especially valuable for email copy, where every word must earn its place, and for academic writing, where variety signals command of the subject.',
      },
      {
        heading: 'Keyword frequency vs. TF-IDF',
        body: 'Simple keyword frequency counts raw occurrences. TF-IDF (Term Frequency–Inverse Document Frequency) is a more sophisticated measure that weights a word\'s importance by how rare it is across a larger corpus of documents.\n\nFor most practical purposes — SEO content checks, writing review, and basic text analysis — simple word frequency is sufficient and immediately actionable. TF-IDF is used in search engine algorithms and advanced natural language processing systems, but requires a reference corpus to compute.',
      },
    ],
    faq: [
      { q: 'What is a keyword frequency counter?', a: 'A keyword frequency counter counts how often each word appears in a text. It is also called a word frequency counter, word frequency analyzer, or text frequency tool. This tool is a keyword frequency counter.' },
      { q: 'What is a good keyword density for SEO?', a: 'Most SEO practitioners target 1–2% keyword density. For a 1,000-word article, your target keyword should appear 10–20 times. Below 0.5% may signal low relevance; above 3–4% may appear as keyword stuffing to search engines.' },
      { q: 'Does word frequency analysis count stop words?', a: 'Yes — all words including stop words (the, is, a, of) are counted. Scroll past the top stop words to reach your meaningful content words.' },
      { q: 'Can I use word frequency analysis on a competitor\'s content?', a: 'Yes. Copy the text from a competitor article and paste it here. The frequency table shows which words they emphasize — useful for understanding their keyword strategy.' },
    ],
  },
  {
    slug: 'what-is-a-url-slug',
    title: 'What Is a URL Slug and Why It Matters for SEO',
    description: 'A URL slug is the readable part of a web address after the domain. Learn what makes a good slug, how to create one, and why it matters for search rankings.',
    publishDate: '2026-05-23',
    tags: ['url slug', 'seo', 'urls'],
    relatedTools: ['slug-generator'],
    intro: 'When you look at a URL like text-fast.com/slug-generator, the part after the last slash — slug-generator — is the URL slug. Slugs are the human-readable identifiers that tell both users and search engines what a page is about before it is opened.',
    sections: [
      {
        heading: 'What is a URL slug?',
        body: 'A URL slug is the part of a web address that identifies a specific page. It comes after the domain name and any directory path. For the URL https://example.com/blog/how-to-count-words, the slug is "how-to-count-words."\n\nSlugs are called slugs because they were originally used in newspaper printing to label articles with short, descriptive identifiers before the final headline was set. The term carried over into web publishing.',
      },
      {
        heading: 'What makes a good URL slug?',
        body: 'A well-formed URL slug has several properties. It should be lowercase only — /Word-Counter and /word-counter are different URLs on case-sensitive servers, so always use lowercase. It should use hyphens, not underscores — Google treats hyphens as word separators, while underscores are treated as word joiners, which affects how your keywords are indexed.\n\nA good slug should contain no special characters — spaces, ampersands, quotes, and percent signs break URLs or require encoding. It should be descriptive and concise, including your primary keyword in 5–6 words or fewer. Stop words like "the," "a," and "of" rarely add value and can be omitted to keep the slug clean.',
      },
      {
        heading: 'How URL slugs affect SEO',
        body: 'URL slugs are a confirmed ranking signal in Google\'s algorithm — minor in isolation, but meaningful as part of a broader on-page SEO strategy. A slug that contains your target keyword tells Google what the page covers before any content is read.\n\nBeyond ranking, slugs affect click-through rate. Users who see a URL in search results trust clean, readable slugs more than opaque strings of numbers and parameters. A slug like /what-is-a-url-slug is more inviting than /p=1847.\n\nOnce a page is indexed, avoid changing its slug without setting up a 301 redirect. Changing a URL without redirecting breaks incoming links and causes a ranking reset as Google processes the new URL.',
      },
      {
        heading: 'How to create a URL slug',
        body: 'You can create a slug manually or use a generator tool. The manual process: start with your page title or headline, convert to lowercase, replace spaces with hyphens, remove special characters, and remove stop words if the slug is too long.\n\nUsing the Slug Generator: paste your title and copy the result. The generator handles lowercasing, hyphenation, accent removal (é to e, ü to u), and special character stripping automatically. This is faster and avoids human error on titles with accented characters or unusual punctuation.',
      },
    ],
    faq: [
      { q: 'What is the difference between a URL and a slug?', a: 'A URL is the full web address: https://example.com/blog/what-is-a-slug. A slug is just the final path segment: what-is-a-slug. The slug identifies the specific page within a site.' },
      { q: 'Should I include keywords in my URL slug?', a: 'Yes. Including your primary keyword in the slug is a confirmed minor SEO ranking factor and improves click-through rate by telling users and search engines what the page is about.' },
      { q: 'Can I change a URL slug after publishing?', a: 'You can, but you must set up a 301 redirect from the old URL to the new one. Without a redirect, any links pointing to the old URL will return 404 errors and the page will lose its search rankings.' },
      { q: 'What is a slug in WordPress?', a: 'In WordPress, a slug is the URL-friendly version of a post or page title, automatically generated from the title but editable in the Permalink field below the title in the page editor.' },
    ],
  },
  {
    slug: 'how-to-count-words-online',
    title: 'How to Count Words Online — and in Google Docs, Word, and More',
    description: 'Learn how to count words online with free tools, and how to find word count in Google Docs, Microsoft Word, and other apps. Tips for essays and content marketing.',
    publishDate: '2026-05-24',
    tags: ['word count', 'word counter', 'writing'],
    relatedTools: ['word-counter', 'character-counter'],
    intro: 'Whether you are writing a college essay, a blog post, or a pitch, knowing your word count matters. Different contexts have different requirements — and different tools show word counts in different ways.',
    sections: [
      {
        heading: 'How to count words online',
        body: 'The fastest way to count words in any text is to paste it into an online word counter. Copy your text, paste it into the Word Counter, and the count appears instantly. The tool also shows character count, sentence count, paragraph count, and estimated reading time — all in one view.\n\nOnline word counters work for any source: Google Docs, Microsoft Word, emails, social media drafts, or any plain text. They are platform-independent and require no installation.',
      },
      {
        heading: 'How to count words in Google Docs',
        body: 'Google Docs has a built-in word count tool. Open your document, click Tools in the menu bar, and select Word count. A dialog shows total words, characters, characters without spaces, and pages.\n\nFor a live count as you type, check the "Display word count while typing" checkbox in the Word Count dialog. A small badge appears at the bottom-left of the document that updates in real time.\n\nKeyboard shortcut: Ctrl+Shift+C on Windows or Cmd+Shift+C on Mac.',
      },
      {
        heading: 'How to count words in Microsoft Word',
        body: 'Microsoft Word shows word count in the status bar at the bottom of the document window. Click on it to open a detailed dialog with words, characters, paragraphs, and lines.\n\nFor a specific selection, highlight the text before checking the word count — Word updates the status bar to show "X of Y words" where X is the selected text count.\n\nMenu path: Review tab → Word Count button → dialog with full statistics.',
      },
      {
        heading: 'Word count requirements by context',
        body: 'Different writing contexts have different word count standards. College application essays typically have a 650-word limit on the Common App. Blog posts targeting SEO perform best at 1,500–2,500 words for informational topics. Product descriptions work well at 100–300 words. LinkedIn posts see the best engagement at 150–300 words.\n\nFor platform-specific character limits — Twitter, Instagram, SMS — use the Character Counter alongside the Word Counter to check both metrics before publishing.',
      },
    ],
    faq: [
      { q: 'How many words is a page?', a: 'A double-spaced page in 12-point Times New Roman is approximately 250–275 words. A single-spaced page is approximately 500–550 words. Font, margins, and line spacing all affect the actual count.' },
      { q: 'How many words is a 5-minute read?', a: 'The average adult reads 200–250 words per minute. A 5-minute read is approximately 1,000–1,250 words. The Word Counter includes a reading time estimate based on 200 words per minute.' },
      { q: 'Why does Word count differently from Google Docs?', a: 'Different tools handle hyphenated words, contractions, and whitespace differently. Minor discrepancies of 1–2% between tools are normal. For submission purposes, use the word counter specified by your school or publisher.' },
      { q: 'Does the online word counter count headers and footnotes?', a: 'It counts all text you paste, including headers, footers, and footnotes. For body text only, paste just the body content without the surrounding elements.' },
    ],
  },
  {
    slug: 'title-case-vs-sentence-case',
    title: 'Title Case vs Sentence Case: When to Use Each',
    description: 'Title case and sentence case are two capitalization styles for headings. Learn the rules, when to use each, and how to convert text between them instantly.',
    publishDate: '2026-05-25',
    tags: ['title case', 'sentence case', 'capitalization', 'writing'],
    relatedTools: ['text-case-converter'],
    intro: 'Capitalization rules are more contested than they appear. Should your blog post headline use Title Case or Sentence case? Should your button labels match your headings? The choice depends on your style guide, your platform, and your audience.',
    sections: [
      {
        heading: 'What is title case?',
        body: 'Title case capitalizes the first letter of most words in a heading. The major style guides agree on capitalizing nouns, verbs, adjectives, adverbs, and pronouns. Where they differ is on smaller words.\n\nChicago Manual of Style capitalizes everything except articles (a, an, the), coordinating conjunctions (and, but, or), and short prepositions (in, on, at, by) — unless they start the title. AP Style is similar to Chicago but capitalizes prepositions of four or more letters. APA capitalizes all major words and all words of four letters or more.\n\nExample in title case: "The Quick Brown Fox Jumps Over the Lazy Dog"',
      },
      {
        heading: 'What is sentence case?',
        body: 'Sentence case capitalizes only the first word of a heading and any proper nouns. It matches the capitalization of a normal English sentence.\n\nExample in sentence case: "The quick brown fox jumps over the lazy dog"\n\nSentence case is increasingly preferred by modern publications, including The Guardian, BBC, and many technology companies. It reads as more conversational and is easier to process at a glance, especially for web interfaces and mobile screens.',
      },
      {
        heading: 'When to use title case',
        body: 'Use title case for book, film, and album titles. Newspaper and magazine headlines under AP style use title case. Product names and brand names are typically title case. Academic paper titles under APA, MLA, and Chicago style use title case. Professional reports and formal documents conventionally use title case for section headings.\n\nIf your organization uses a formal style guide, follow its specific rules for which words to capitalize in title case — the differences between AP, Chicago, and APA are meaningful in professional publishing contexts.',
      },
      {
        heading: 'When to use sentence case',
        body: 'Use sentence case for blog post and article headings on modern web publications. Email subject lines written in sentence case feel more personal and conversational. Social media captions, UI copy in products following Material Design or Fluent Design guidelines, and button labels all typically use sentence case.\n\nMany technology companies — including Google in its Material Design guidelines — explicitly recommend sentence case for interface copy because it feels less formal and is more readable at small sizes on mobile devices.',
      },
      {
        heading: 'The most important rule: consistency',
        body: 'The most important rule is not which style you choose — it is consistency. Mixing title case and sentence case within the same document or website makes the content look unpolished and unedited.\n\nChoose one style and apply it everywhere. If you use title case for H1 headings, use title case for H2 and H3 headings too. Proper nouns — names, places, brand names, product names — are always capitalized regardless of the style you choose.',
      },
    ],
    faq: [
      { q: 'Does Google prefer title case or sentence case for page titles?', a: 'Google has no stated preference. Both title case and sentence case appear in top search results. Use whichever matches your brand style guide and apply it consistently across your site.' },
      { q: 'What is camelCase?', a: 'camelCase starts with a lowercase letter and capitalizes the first letter of each subsequent word: myVariableName. It is used in programming for variable and function names — not for prose headings.' },
      { q: 'What is the difference between title case and proper case?', a: '"Proper case" is sometimes used interchangeably with "title case." Both typically mean capitalizing the first letter of each major word. The exact rules for which words qualify as "major" vary by style guide.' },
      { q: 'Does sentence case handle proper nouns automatically?', a: 'The Text Case Converter does not automatically detect proper nouns. It capitalizes only the first word of each sentence. Review the output and manually re-capitalize proper nouns such as names, places, and brand names.' },
    ],
  },
  {
    slug: 'url-encoding-explained',
    title: 'URL Encoding Explained: What %20 Means and How to Fix It',
    description: 'URL encoding replaces special characters in URLs with %XX codes like %20 for a space. Learn what it is, why it happens, and how to encode or decode URLs instantly.',
    publishDate: '2026-05-26',
    tags: ['url encoding', 'percent encoding', 'web development'],
    relatedTools: ['url-encoder-decoder'],
    intro: 'Have you ever seen a URL containing %20, %26, or long strings of percent signs and hexadecimal digits? That is URL encoding — a standard way to represent characters that would otherwise break a URL or be misinterpreted by browsers and servers.',
    sections: [
      {
        heading: 'What is URL encoding?',
        body: 'URL encoding (formally called percent encoding) replaces characters that have special meaning in URLs — or that are unsafe to include in a URL — with a percent sign followed by two hexadecimal digits representing the character\'s byte value.\n\nA space has the byte value 0x20 in ASCII encoding. That is why a space becomes %20 in a URL. An ampersand (&) has value 0x26 — it becomes %26. An equals sign (=) has value 0x3D — it becomes %3D.\n\nURL encoding is defined in RFC 3986, the internet standard for Uniform Resource Identifiers.',
      },
      {
        heading: 'Why does URL encoding exist?',
        body: 'URLs can only contain a limited set of characters safely. The RFC defines which characters are considered safe in a URL — letters (A–Z, a–z), digits (0–9), and a small set of symbols: hyphen, underscore, period, and tilde. Characters outside this set have special meanings or are unsafe, so they must be encoded.\n\nSpaces break URL parsing entirely. Ampersands separate query parameters. Equals signs separate keys from values. Hash marks identify fragment identifiers. When these characters appear inside a parameter value, they must be encoded so the URL parser does not misread the structure.',
      },
      {
        heading: 'Common URL encoding examples',
        body: 'These are the percent-encoded forms of frequently encountered characters: a space becomes %20, a double quote becomes %22, a hash becomes %23, an ampersand becomes %26, a plus sign becomes %2B, a forward slash becomes %2F, a colon becomes %3A, an equals sign becomes %3D, a question mark becomes %3F, and an at sign becomes %40.\n\nNote that the plus sign (+) is sometimes used to represent a space in query strings formatted as application/x-www-form-urlencoded, which is the format used by traditional HTML form submissions. However, %20 is the universal, unambiguous representation and should be preferred in all other contexts.',
      },
      {
        heading: 'How to decode a URL',
        body: 'When you encounter a percent-encoded URL and need to read the original text, paste it into a URL decoder. The decoder replaces each %XX sequence with the corresponding character.\n\nFor example: https://example.com/search?q=hello%20world decodes to https://example.com/search?q=hello world.\n\nMost modern browsers decode URLs in the address bar, so you typically see the readable version. Some developer tools, API responses, and server logs show the raw encoded form. To decode in code, use decodeURIComponent() in JavaScript or urllib.parse.unquote() in Python.',
      },
    ],
    faq: [
      { q: 'What is the difference between %20 and + in a URL?', a: 'Both represent a space, but in different contexts. %20 is standard percent encoding and is valid anywhere in a URL. + represents a space only in query strings using application/x-www-form-urlencoded format. When in doubt, use %20.' },
      { q: 'What does %2F mean in a URL?', a: '%2F is the URL-encoded forward slash (/). Since / separates URL path segments, encoding it as %2F allows a literal slash inside a path segment or query parameter value without it being interpreted as a path separator.' },
      { q: 'Why does my URL look garbled after copy-pasting?', a: 'When you copy a URL from some apps or terminals, non-ASCII characters and spaces are automatically encoded. The encoded version is functionally identical to the original — paste it into a URL decoder to see the readable form.' },
      { q: 'What is encodeURIComponent in JavaScript?', a: 'encodeURIComponent() is a JavaScript function that percent-encodes a string for safe use as a URI component, such as a query parameter value. It encodes everything except letters, digits, and the characters - _ . ! ~ * \' ( ). Use it when building URLs from user-supplied input.' },
    ],
  },
  {
    slug: 'strong-password-tips-2026',
    title: 'Strong Password Rules in 2026: What Actually Makes a Password Secure',
    description: 'Learn what makes a password strong in 2026 — length, randomness, and entropy. Includes current NIST guidelines and how to create passwords that hold up to modern attacks.',
    publishDate: '2026-05-27',
    tags: ['password security', 'password generator', 'cybersecurity'],
    relatedTools: ['password-generator'],
    intro: 'Password advice has evolved significantly over the past decade. The old rules — change your password every 90 days, use a capital letter and a symbol — have been revised or discarded by NIST and security researchers. Here is what the evidence shows actually matters in 2026.',
    sections: [
      {
        heading: 'What makes a password strong?',
        body: 'A strong password has three properties: length, randomness, and uniqueness.\n\nLength matters more than any other single factor. A 16-character random password has approximately 80–105 bits of entropy with mixed character types. A 20-character password is exponentially harder to crack. Adding one character multiplies the attack space by the size of the character set — roughly 95x for full printable ASCII.\n\nRandomness means unpredictability. Dictionary words, names, and dates are weak even when combined with symbols. "Summer2024!" is broken in seconds by modern hardware. A randomly generated string of 16 characters is not.\n\nUniqueness means a different password for every account. If you reuse passwords and one service is breached, all your accounts using that password are at risk — a technique called credential stuffing.',
      },
      {
        heading: 'Current NIST guidelines (SP 800-63B, 2024)',
        body: 'The National Institute of Standards and Technology publishes the most widely followed password guidance. The 2024 update to Special Publication 800-63B makes several evidence-based changes that contradict the older advice many people still follow.\n\nNIST now recommends a minimum length of 8 characters as a floor — not a target. Security professionals recommend 16 or more. NIST explicitly drops mandatory rotation: do not force regular password changes unless there is evidence of compromise. The old 90-day rotation rule led to predictable patterns like Summer2024 → Fall2024 → Winter2025.\n\nNIST also drops complexity rules as a requirement. Long, random passwords are more secure than short, complex ones. The guidance also requires that new passwords be screened against known breached password lists and that systems allow all printable ASCII and Unicode characters including spaces.',
      },
      {
        heading: 'Password entropy explained',
        body: 'Entropy measures password unpredictability in bits. The formula is E = log2(N^L) where N is the number of possible characters per position and L is the password length.\n\nAn 8-character password using only lowercase letters has approximately 38 bits of entropy — breakable by modern hardware in hours. A 12-character password using letters and digits has approximately 71 bits — taking years with a single GPU. A 16-character password using all printable ASCII characters has approximately 105 bits — beyond practical attack reach with current technology.\n\nAim for at least 80 bits of entropy for general accounts. For critical accounts like email, banking, and your password manager master password, target 100 bits or more.',
      },
      {
        heading: 'How to manage strong passwords',
        body: 'No one can memorize a unique 16-character random password for every account. The solution is a password manager.\n\nBitwarden is open source, free for personal use, and cross-platform. 1Password is popular with teams and families and offers a paid subscription. Dashlane includes dark web monitoring. Apple Keychain and iCloud Keychain are built into Apple devices at no cost. Google Password Manager is built into Chrome and Android.\n\nA password manager generates, stores, and auto-fills passwords. Your only job is to remember one strong master password for the manager itself. For that master password, use a passphrase: four or more randomly chosen words is long enough to be strong and memorable enough to actually remember.',
      },
    ],
    faq: [
      { q: 'How long should a password be in 2026?', a: 'Security professionals recommend a minimum of 16 characters for most accounts and 20 or more for critical accounts like email, banking, and your password manager. NIST\'s minimum is 8 characters, but that is a floor, not a target.' },
      { q: 'Is it safe to generate passwords in a browser?', a: 'Yes. This generator uses crypto.getRandomValues — the Web Crypto API built into all modern browsers. It is a cryptographically secure random source. Nothing is transmitted to any server.' },
      { q: 'Should I still use symbols in passwords?', a: 'Yes — symbols increase the character set size from 62 to 95 possible characters per position, which increases entropy significantly. But length matters more than character variety. A 20-character lowercase-only random password is stronger than a 10-character password with symbols.' },
      { q: 'What is a passphrase?', a: 'A passphrase is a password made of multiple random words: correct-horse-battery-staple. Passphrases are long enough for high entropy and easier to remember than random character strings. They are ideal for master passwords that need to be memorized rather than stored.' },
    ],
  },
]

export const POST_MAP = new Map(POSTS.map(p => [p.slug, p]))
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Volumes/SLT/Claude\ Code/text-fast && npx tsc -b --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/posts.ts
git commit -m "feat(blog): add BlogPost interface and 7 posts in posts.ts"
```

---

### Task 2: Create BlogIndexPage

**Files:**
- Create: `src/pages/BlogIndexPage.tsx`
- Create: `src/pages/BlogIndexPage.module.css`

- [ ] **Step 1: Create BlogIndexPage.module.css**

```css
.main { max-width: var(--max-width); margin: 0 auto; padding: var(--spacing-xl) var(--spacing-lg); }
.hero { margin-bottom: var(--spacing-xl); }
.heading { font-size: 2rem; font-weight: 700; margin-bottom: var(--spacing-sm); }
.sub { color: var(--text-muted); font-size: 1.05rem; }
.list { display: flex; flex-direction: column; gap: var(--spacing-lg); }
.card { display: block; text-decoration: none; padding: var(--spacing-lg); background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius); transition: border-color 0.15s; }
.card:hover { border-color: var(--primary); }
.cardTitle { font-size: 1.1rem; font-weight: 600; color: var(--primary); margin-bottom: var(--spacing-xs); }
.cardDesc { font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: var(--spacing-sm); }
.cardMeta { font-size: 0.8rem; color: var(--text-muted); }
```

- [ ] **Step 2: Create BlogIndexPage.tsx**

```tsx
import { Link } from 'react-router-dom'
import { POSTS } from '../data/posts'
import SEOMeta from '../components/SEOMeta'
import styles from './BlogIndexPage.module.css'

export default function BlogIndexPage() {
  const sorted = [...POSTS].sort((a, b) => b.publishDate.localeCompare(a.publishDate))
  return (
    <main className={styles.main}>
      <SEOMeta
        title="Blog — text-fast.com"
        description="Guides and explainers for text tools, SEO, writing, and web development from the team at text-fast.com."
      />
      <div className={styles.hero}>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.sub}>Guides on text tools, SEO, writing, and web development.</p>
      </div>
      <div className={styles.list}>
        {sorted.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className={styles.card}>
            <p className={styles.cardTitle}>{post.title}</p>
            <p className={styles.cardDesc}>{post.description}</p>
            <span className={styles.cardMeta}>{post.publishDate}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/BlogIndexPage.tsx src/pages/BlogIndexPage.module.css
git commit -m "feat(blog): add BlogIndexPage"
```

---

### Task 3: Create BlogPostPage

**Files:**
- Create: `src/pages/BlogPostPage.tsx`
- Create: `src/pages/BlogPostPage.module.css`

- [ ] **Step 1: Create BlogPostPage.module.css**

```css
.main { max-width: 720px; margin: 0 auto; padding: var(--spacing-xl) var(--spacing-lg); }
.meta { font-size: 0.85rem; color: var(--text-muted); margin-bottom: var(--spacing-lg); }
.heading { font-size: 2rem; font-weight: 700; margin-bottom: var(--spacing-sm); line-height: 1.25; }
.intro { font-size: 1.05rem; line-height: 1.7; color: var(--text); margin-bottom: var(--spacing-xl); border-bottom: 1px solid var(--border); padding-bottom: var(--spacing-xl); }
.section { margin-bottom: var(--spacing-xl); }
.sectionHeading { font-size: 1.25rem; font-weight: 600; margin-bottom: var(--spacing-md); }
.para { font-size: 1rem; line-height: 1.75; color: var(--text); margin-bottom: var(--spacing-md); }
.para:last-child { margin-bottom: 0; }
.faqSection { margin-top: var(--spacing-xl); border-top: 1px solid var(--border); padding-top: var(--spacing-xl); }
.faqTitle { font-size: 1.1rem; font-weight: 600; margin-bottom: var(--spacing-md); }
.faqItem { margin-bottom: var(--spacing-md); }
.faqQ { font-weight: 600; font-size: 0.95rem; margin-bottom: var(--spacing-xs); }
.faqA { font-size: 0.95rem; line-height: 1.6; color: var(--text); }
.cta { margin-top: var(--spacing-xl); padding: var(--spacing-lg); background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius); text-align: center; }
.ctaTitle { font-size: 1rem; font-weight: 600; margin-bottom: var(--spacing-sm); }
.ctaLinks { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
.ctaLink { display: inline-block; padding: var(--spacing-sm) var(--spacing-lg); background: var(--primary); color: #fff; border-radius: var(--radius); text-decoration: none; font-size: 0.9rem; font-weight: 500; }
.ctaLink:hover { opacity: 0.9; }
.backLink { display: inline-block; margin-bottom: var(--spacing-lg); font-size: 0.9rem; color: var(--text-muted); text-decoration: none; }
.backLink:hover { color: var(--primary); }
```

- [ ] **Step 2: Create BlogPostPage.tsx**

```tsx
import { useParams, Navigate, Link } from 'react-router-dom'
import { POST_MAP, POSTS } from '../data/posts'
import { TOOL_MAP } from '../data/tools'
import SEOMeta from '../components/SEOMeta'
import JsonLd from '../components/JsonLd'
import styles from './BlogPostPage.module.css'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = POST_MAP.get(slug ?? '')
  if (!post) return <Navigate to="/404" replace />

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    author: { '@type': 'Organization', name: 'text-fast.com', url: 'https://text-fast.com' },
    publisher: { '@type': 'Organization', name: 'text-fast.com', url: 'https://text-fast.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://text-fast.com/blog/${post.slug}` },
  }

  const faqLd = post.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <main className={styles.main}>
      <SEOMeta title={`${post.title} — text-fast.com`} description={post.description} />
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <Link to="/blog" className={styles.backLink}>← Blog</Link>
      <p className={styles.meta}>{post.publishDate}</p>
      <h1 className={styles.heading}>{post.title}</h1>
      <p className={styles.intro}>{post.intro}</p>

      {post.sections.map((section, i) => (
        <div key={i} className={styles.section}>
          <h2 className={styles.sectionHeading}>{section.heading}</h2>
          {section.body.split('\n\n').map((para, j) => (
            <p key={j} className={styles.para}>{para}</p>
          ))}
        </div>
      ))}

      {post.faq?.length ? (
        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently asked questions</h2>
          {post.faq.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <p className={styles.faqQ}>{item.q}</p>
              <p className={styles.faqA}>{item.a}</p>
            </div>
          ))}
        </div>
      ) : null}

      {post.relatedTools.length > 0 && (
        <div className={styles.cta}>
          <p className={styles.ctaTitle}>Try the tool</p>
          <div className={styles.ctaLinks}>
            {post.relatedTools.map(toolSlug => {
              const tool = TOOL_MAP.get(toolSlug)
              if (!tool) return null
              return (
                <Link key={toolSlug} to={`/${toolSlug}`} className={styles.ctaLink}>
                  {tool.heading} →
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </main>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc -b --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/BlogPostPage.tsx src/pages/BlogPostPage.module.css
git commit -m "feat(blog): add BlogPostPage with Article JSON-LD and tool CTA"
```

---

### Task 4: Add blog routes to AppContent.tsx

**Files:**
- Modify: `src/AppContent.tsx`

- [ ] **Step 1: Import and add blog routes**

In `src/AppContent.tsx`, add imports for the new pages:

```tsx
import BlogIndexPage from './pages/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage'
```

Then add the two blog routes BEFORE the `/:slug` catch-all route:

```tsx
export default function AppContent() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/:slug" element={<ToolPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc -b --noEmit
```

- [ ] **Step 3: Start dev server and verify blog routes work**

```bash
npm run dev
```

Check: http://localhost:5173/blog — blog index page renders with 7 post cards.
Check: http://localhost:5173/blog/what-is-lorem-ipsum — post renders with heading, intro, sections, FAQ, and tool CTA.
Check: http://localhost:5173/word-counter — tool pages still work (/:slug not broken by blog routes).

- [ ] **Step 4: Commit**

```bash
git add src/AppContent.tsx
git commit -m "feat(blog): add /blog and /blog/:slug routes to AppContent"
```

---

### Task 5: Update entry-server.tsx to include blog routes

**Files:**
- Modify: `src/entry-server.tsx`

- [ ] **Step 1: Import POSTS and add blog URLs to getAllRoutes()**

In `src/entry-server.tsx`, add the import at the top:

```tsx
import { POSTS } from './data/posts'
```

Update `getAllRoutes()`:

```tsx
export function getAllRoutes(): string[] {
  return [
    '/',
    '/about',
    '/privacy',
    '/terms',
    '/cookies',
    '/blog',
    ...POSTS.map(p => `/blog/${p.slug}`),
    ...TOOLS.map(t => `/${t.slug}`),
  ]
}
```

- [ ] **Step 2: Run build to verify all routes prerender**

```bash
npm run build
```

Expected output includes "Prerendering X routes..." where X is now 15 + 1 (blog index) + 7 (posts) = 23 routes. Verify no skipped routes in the output.

- [ ] **Step 3: Verify a prerendered blog post contains the article JSON-LD**

```bash
grep -l 'Article' dist/blog/what-is-lorem-ipsum/index.html
```

Expected: the file is listed (JSON-LD script tag is present in the prerendered HTML).

- [ ] **Step 4: Commit**

```bash
git add src/entry-server.tsx
git commit -m "feat(blog): add blog routes to getAllRoutes() for SSG prerendering"
```

---

### Task 6: Update generate-sitemap.mjs

**Files:**
- Modify: `scripts/generate-sitemap.mjs`

- [ ] **Step 1: Add blog URLs to the sitemap generator**

Update `scripts/generate-sitemap.mjs`:

```mjs
import { writeFileSync } from 'fs'

const BASE = 'https://text-fast.com'
const TODAY = new Date().toISOString().split('T')[0]

const TOOL_SLUGS = [
  'word-counter',
  'character-counter',
  'lorem-ipsum-generator',
  'text-case-converter',
  'duplicate-line-remover',
  'word-frequency-counter',
  'whitespace-remover',
  'slug-generator',
  'url-encoder-decoder',
  'text-reverser',
  'password-generator',
]

const BLOG_SLUGS = [
  'what-is-lorem-ipsum',
  'keyword-frequency-analysis',
  'what-is-a-url-slug',
  'how-to-count-words-online',
  'title-case-vs-sentence-case',
  'url-encoding-explained',
  'strong-password-tips-2026',
]

const urls = [
  { loc: BASE, priority: '1.0' },
  ...TOOL_SLUGS.map(s => ({ loc: `${BASE}/${s}`, priority: '0.9' })),
  { loc: `${BASE}/blog`, priority: '0.7' },
  ...BLOG_SLUGS.map(s => ({ loc: `${BASE}/blog/${s}`, priority: '0.8' })),
  { loc: `${BASE}/about`, priority: '0.5' },
  { loc: `${BASE}/privacy`, priority: '0.3' },
  { loc: `${BASE}/terms`, priority: '0.3' },
  { loc: `${BASE}/cookies`, priority: '0.3' },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', xml)
console.log(`Sitemap generated: ${urls.length} URLs`)
```

- [ ] **Step 2: Run sitemap generator and verify output**

```bash
npm run sitemap
```

Expected: "Sitemap generated: 23 URLs" (1 home + 11 tools + 1 blog index + 7 blog posts + 4 static pages).

```bash
grep 'blog' public/sitemap.xml
```

Expected: 8 lines containing blog URLs (index + 7 posts).

- [ ] **Step 3: Commit**

```bash
git add scripts/generate-sitemap.mjs public/sitemap.xml
git commit -m "feat(blog): add blog URLs to sitemap — 23 total URLs"
```

---

### Task 7: Add Blog nav link to Header

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Header.module.css`

- [ ] **Step 1: Add nav CSS to Header.module.css**

Append to `src/components/Header.module.css`:

```css
.nav { display: flex; align-items: center; gap: var(--spacing-lg); }
.navLink { font-size: 0.9rem; color: var(--text-muted); text-decoration: none; font-weight: 500; }
.navLink:hover { color: var(--primary); }
```

- [ ] **Step 2: Update Header.tsx to include nav with Blog link**

```tsx
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>text-fast.com</Link>
        <div className={styles.nav}>
          <Link to="/blog" className={styles.navLink}>Blog</Link>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
```

- [ ] **Step 3: Dev check — verify Blog link appears in header**

```bash
npm run dev
```

Open http://localhost:5173. Verify "Blog" link appears in the header. Click it to reach the blog index. Navigate back to any tool page — header still renders correctly.

- [ ] **Step 4: Full build + sitemap**

```bash
npm run build && npm run sitemap
```

Expected: build succeeds, 23 routes prerendered, sitemap has 23 URLs.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Header.module.css
git commit -m "feat(blog): add Blog nav link to header"
```

---

### Final verification

- [ ] **Run all tests**

```bash
npm run test:run
```

Expected: all tests pass (data validation tests + tool logic tests).

- [ ] **Run full build**

```bash
npm run build && npm run sitemap
```

Expected: 23 routes prerendered, sitemap has 23 URLs.

- [ ] **Spot-check prerendered HTML for blog post**

```bash
grep -c 'Article' dist/blog/what-is-lorem-ipsum/index.html
```

Expected: 1 (the JSON-LD script).

```bash
grep 'canonical' dist/blog/what-is-lorem-ipsum/index.html
```

Expected: `<link rel="canonical" href="https://text-fast.com/blog/what-is-lorem-ipsum">` (set by SEOMeta on client hydration — may not appear in prerendered HTML, which is acceptable).
