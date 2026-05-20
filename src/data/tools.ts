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

export const TOOLS: ToolMeta[] = [
  {
    slug: 'word-counter',
    title: 'Word Counter — Count Words Online Free',
    description: 'Count words, characters, sentences, and paragraphs instantly. Free online word counter with reading time estimate.',
    heading: 'Word Counter',
    subheading: 'Count words, characters, sentences, and reading time instantly.',
    intro: 'The Word Counter analyzes your text and instantly displays word count, character count, sentence count, paragraph count, and estimated reading time. Everything runs in your browser — no text is ever sent to a server. It is useful for essays, blog posts, social media captions, or any piece of writing with a word or character limit.',
    howTo: [
      'Paste or type your text into the input area.',
      'Results update automatically as you type — no button needed.',
      'Check the statistics panel for word count, character count, reading time, and more.',
    ],
    inputLabel: 'Paste or type your text',
    outputLabel: 'Results',
    faq: [
      { q: 'How does the word counter work?', a: 'The counter splits your text by whitespace to count words. Characters are counted both including and excluding spaces. Sentences are detected by period, exclamation, and question marks.' },
      { q: 'Does this word counter work offline?', a: 'Yes. All counting happens in your browser. Nothing is sent to a server.' },
      { q: 'What counts as a word?', a: 'Any sequence of non-whitespace characters separated by a space, tab, or newline counts as one word.' },
      { q: 'How is reading time calculated?', a: 'Reading time is based on the average adult reading speed of 200 words per minute.' },
      { q: 'Is there a maximum text length?', a: 'No. The counter works on any length of text — short captions or full documents alike.' },
    ],
    related: ['character-counter', 'word-frequency-counter', 'whitespace-remover'],
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
  },
  {
    slug: 'character-counter',
    title: 'Character Counter — Twitter & Character Limit Checker',
    description: 'Count characters with and without spaces. Character limit checker for Twitter, Instagram, SMS, and SEO meta descriptions. Free online character counter.',
    heading: 'Character Counter',
    subheading: 'Count characters with spaces, without spaces, words, and lines.',
    intro: 'The Character Counter shows how many characters are in your text, both with and without spaces. It also counts words and lines. It is ideal for staying within Twitter\'s 280-character limit, SMS limits, or Google\'s recommended 155-character meta description length. The count updates in real time as you type.',
    howTo: [
      'Paste or type your text into the input box.',
      'The counter updates in real time — no button required.',
      'Check "With Spaces" for Twitter and platform limits, or "Without Spaces" for SEO character limits.',
    ],
    inputLabel: 'Paste or type your text',
    outputLabel: 'Results',
    faq: [
      { q: 'What is the Twitter character limit?', a: 'Twitter allows 280 characters per tweet. This counter shows your character count in real time so you can stay within the limit.' },
      { q: 'What is the SEO meta description limit?', a: 'Google typically displays up to 155–160 characters for meta descriptions. Keep yours under 155 characters for best results.' },
      { q: 'Does this count spaces?', a: 'Yes — the counter shows both "with spaces" and "without spaces" counts side by side.' },
      { q: 'What is the Instagram caption limit?', a: 'Instagram allows up to 2,200 characters per caption, but only the first 125 characters are visible before the "more" link. Use this counter to keep your opening line punchy.' },
      { q: 'Can I count characters in multiple paragraphs?', a: 'Yes. Paste any amount of text — including line breaks — and the counter handles it correctly.' },
    ],
    related: ['word-counter', 'word-frequency-counter', 'whitespace-remover'],
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
  },
  {
    slug: 'lorem-ipsum-generator',
    title: 'Lorem Ipsum Generator — Free Placeholder & Dummy Text',
    description: 'Generate lorem ipsum placeholder text, dummy text, or filler text instantly. Choose number of paragraphs. Free, no sign-up.',
    heading: 'Lorem Ipsum Generator',
    subheading: 'Generate placeholder text for designs and mockups.',
    intro: 'The Lorem Ipsum Generator produces standard placeholder text for mockups, wireframes, and design layouts. Choose how many paragraphs you need and copy the output instantly. The text uses the classic Lorem Ipsum passage — widely recognized by designers as neutral, readability-neutral filler that does not distract from the visual design.',
    howTo: [
      'Set the number of paragraphs using the number input (1–20).',
      'The placeholder text generates automatically.',
      'Click the copy button to copy the full output to your clipboard.',
    ],
    inputLabel: 'Number of paragraphs',
    outputLabel: 'Generated text',
    faq: [
      { q: 'What is lorem ipsum?', a: 'Lorem ipsum is placeholder text used in design and typesetting. It mimics the look of real text without distracting the viewer with meaningful content.' },
      { q: 'Where does lorem ipsum come from?', a: 'Lorem ipsum is derived from Cicero\'s "de Finibus Bonorum et Malorum," a Latin text from 45 BC, scrambled to make it unreadable.' },
      { q: 'Is this the standard lorem ipsum text?', a: 'Yes. This generator uses the standard lorem ipsum passage that begins with "Lorem ipsum dolor sit amet..."' },
      { q: 'How many paragraphs can I generate?', a: 'You can generate between 1 and 20 paragraphs in a single click.' },
      { q: 'Can I use lorem ipsum text in commercial projects?', a: 'Yes. Lorem ipsum is public domain text and can be used freely in any project, commercial or personal.' },
    ],
    related: ['word-counter', 'character-counter', 'text-case-converter'],
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
  },
  {
    slug: 'text-case-converter',
    title: 'Text Case Converter — Title Case & Sentence Case Converter',
    description: 'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case instantly. Free title case converter and sentence case converter online.',
    heading: 'Text Case Converter',
    subheading: 'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case.',
    intro: 'The Text Case Converter transforms any text to UPPERCASE, lowercase, Title Case, or Sentence case in one click. It is useful for fixing pasted headings, formatting code constants, normalizing imported data, or quickly changing the capitalization of any block of text. All conversion happens instantly in your browser.',
    howTo: [
      'Select a conversion mode — UPPERCASE, lowercase, Title Case, or Sentence case.',
      'Paste or type your text into the input area.',
      'The converted text appears immediately in the output panel. Use the copy button to copy it.',
    ],
    inputLabel: 'Paste or type your text',
    outputLabel: 'Converted text',
    faq: [
      { q: 'What is title case?', a: 'Title case capitalizes the first letter of each major word. Articles, prepositions, and conjunctions are typically lowercase unless they start the title.' },
      { q: 'What is sentence case?', a: 'Sentence case capitalizes only the first word of each sentence and proper nouns. It matches normal prose capitalization.' },
      { q: 'Can I convert a large block of text?', a: 'Yes. Paste as much text as you like — the conversion happens instantly in your browser with no length limit.' },
      { q: 'Does it handle punctuation correctly?', a: 'Yes. Sentence case detects sentence boundaries using periods, exclamation marks, and question marks to apply correct capitalization.' },
      { q: 'What is the difference between title case and sentence case?', a: 'Title case capitalizes the first letter of most words — used in headings and titles. Sentence case capitalizes only the first word of each sentence — used in body text and captions.' },
    ],
    related: ['word-counter', 'duplicate-line-remover', 'whitespace-remover'],
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
  },
  {
    slug: 'duplicate-line-remover',
    title: 'Duplicate Line Remover — Remove Duplicate Lines Online',
    description: 'Remove duplicate lines from any text instantly. Keep unique lines only. Free online tool.',
    heading: 'Duplicate Line Remover',
    subheading: 'Paste text and remove all duplicate lines in one click.',
    intro: 'The Duplicate Line Remover strips repeated lines from any block of text, keeping only the first occurrence of each line. It is useful for cleaning up keyword lists, deduplicating spreadsheet exports, removing repeated log entries, or any task where you need only unique lines. All processing happens locally in your browser.',
    howTo: [
      'Paste your text — one item per line — into the input area.',
      'Duplicate lines are removed automatically and the result appears instantly.',
      'Copy the deduplicated result from the output panel.',
    ],
    inputLabel: 'Paste text with duplicate lines',
    outputLabel: 'Deduplicated text',
    faq: [
      { q: 'Is the comparison case-sensitive?', a: 'Yes. "Apple" and "apple" are treated as different lines. Use the Text Case Converter first if you need case-insensitive deduplication.' },
      { q: 'Does order matter?', a: 'The tool keeps the first occurrence of each line and removes subsequent duplicates, preserving the original order.' },
      { q: 'Can I remove blank lines too?', a: 'Empty lines are treated as duplicate lines — all but the first empty line are removed.' },
      { q: 'What is a practical use case for this tool?', a: 'Common uses: cleaning up a list of keywords copied from multiple sources, deduplicating email lists, or removing repeated entries from exported data files.' },
      { q: 'Is there a line limit?', a: 'No. The tool handles any amount of text. Large lists with thousands of lines are processed instantly.' },
    ],
    related: ['whitespace-remover', 'word-frequency-counter', 'text-case-converter'],
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
  },
  {
    slug: 'word-frequency-counter',
    title: 'Word Frequency Counter — Keyword Frequency Analyzer',
    description: 'Count keyword frequency and word frequency in any text. See which words appear most often. Free online keyword frequency counter and word frequency analyzer.',
    heading: 'Word Frequency Counter',
    subheading: 'Find the most frequent words in your text.',
    intro: 'The Word Frequency Counter analyzes your text and displays each unique word alongside how many times it appears, sorted from most to least frequent. Use it to check keyword density in SEO content, identify overused words in your writing, or explore the vocabulary of any body of text. All analysis runs entirely in your browser.',
    howTo: [
      'Paste or type your text into the input area.',
      'The word frequency table updates as you type.',
      'Scan the table from the top to see your most-used words — useful for spotting repetition or checking keyword density.',
    ],
    inputLabel: 'Paste or type your text',
    outputLabel: 'Top words by frequency',
    faq: [
      { q: 'What does word frequency analysis tell me?', a: 'It shows which words you use most. Useful for checking keyword density in SEO content, spotting overused words in writing, or analyzing any corpus of text.' },
      { q: 'Are common words like "the" included?', a: 'Yes — all words are counted. Scan past common stop words to find your most-used content words.' },
      { q: 'Is the analysis case-sensitive?', a: 'No. "The" and "the" are counted as the same word.' },
      { q: 'How is this useful for SEO?', a: 'Keyword density matters for on-page SEO. Paste your article text to see how often your target keyword appears relative to the total word count.' },
      { q: 'What is a good keyword density?', a: 'Most SEO practitioners aim for 1–2% keyword density. For a 500-word article, that means your target keyword should appear 5–10 times.' },
    ],
    related: ['word-counter', 'duplicate-line-remover', 'text-case-converter'],
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
  },
  {
    slug: 'whitespace-remover',
    title: 'Whitespace Remover — Remove Extra Spaces Online',
    description: 'Remove extra spaces, leading and trailing whitespace, and blank lines from text. Free online whitespace cleaner.',
    heading: 'Whitespace Remover',
    subheading: 'Remove extra spaces, blank lines, and leading/trailing whitespace.',
    intro: 'The Whitespace Remover cleans up text by trimming leading and trailing spaces, collapsing multiple consecutive spaces into one, and removing blank lines. It is particularly useful for cleaning up text copied from PDFs, web pages, or spreadsheets where extra whitespace is a common problem. The cleaned text is ready to paste anywhere.',
    howTo: [
      'Paste your text into the input area.',
      'Extra spaces, leading/trailing whitespace, and blank lines are removed automatically.',
      'Copy the cleaned text from the output panel.',
    ],
    inputLabel: 'Paste text with extra whitespace',
    outputLabel: 'Cleaned text',
    faq: [
      { q: 'What does this tool remove?', a: 'It removes leading spaces, trailing spaces, extra spaces between words (collapsing multiple spaces to one), and blank lines.' },
      { q: 'Will it change my line breaks?', a: 'No. Line breaks are preserved. Only extra spaces within and around lines are affected.' },
      { q: 'When would I use this?', a: 'Common uses: cleaning up copy-pasted text from PDFs, formatting data before import into spreadsheets or databases, or fixing text with inconsistent spacing.' },
      { q: 'Does it work with tabs?', a: 'Yes. Leading tabs are treated the same as leading spaces and are removed from the start of each line.' },
      { q: 'Can I use this to prepare text for word processors?', a: 'Yes. Paste messy text from any source, clean it here, then paste the result into Word, Google Docs, or any other editor.' },
    ],
    related: ['duplicate-line-remover', 'text-case-converter', 'word-counter'],
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
  },
  {
    slug: 'slug-generator',
    title: 'Slug Generator — URL Slug Generator & Slugify Tool',
    description: 'Convert text to a URL-friendly slug online. Slugify text — removes special characters, replaces spaces with hyphens. Free URL slug generator.',
    heading: 'Slug Generator',
    subheading: 'Convert text to a clean, URL-friendly slug.',
    intro: 'The Slug Generator converts any headline or phrase into a URL-friendly slug. It lowercases all letters, replaces spaces with hyphens, removes special characters, and handles accented letters like é, ü, and ñ. Use it for blog post URLs, product handles, CMS entries, or any system that requires clean, human-readable URL segments.',
    howTo: [
      'Type or paste your title or text into the input field.',
      'The slug is generated instantly as you type.',
      'Click the copy button to copy the slug to your clipboard.',
    ],
    inputLabel: 'Paste or type your text',
    outputLabel: 'URL slug',
    faq: [
      { q: 'What is a URL slug?', a: 'A slug is the URL-friendly version of a title. For example, "Hello World!" becomes "hello-world". Slugs use lowercase letters, numbers, and hyphens only.' },
      { q: 'How are special characters handled?', a: 'Accented characters are converted to their ASCII equivalents (é → e, ü → u). Other special characters are removed.' },
      { q: 'Why use hyphens instead of underscores?', a: 'Google treats hyphens as word separators and underscores as word joiners. Hyphens are the SEO-recommended choice for URL slugs.' },
      { q: 'Can I use this for Shopify or WordPress slugs?', a: 'Yes. The output format is compatible with WordPress, Shopify, and most other CMS platforms that use URL slugs.' },
      { q: 'What happens to numbers in the slug?', a: 'Numbers are kept as-is. "Top 10 Tips" becomes "top-10-tips".' },
    ],
    related: ['text-case-converter', 'url-encoder-decoder', 'whitespace-remover'],
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
  },
  {
    slug: 'url-encoder-decoder',
    title: 'URL Encoder / Decoder — Encode and Decode URLs Online',
    description: 'Encode or decode URLs and query strings online. Free URL encoder and decoder tool.',
    heading: 'URL Encoder / Decoder',
    subheading: 'Encode special characters for URLs or decode percent-encoded strings.',
    intro: 'The URL Encoder / Decoder converts text to percent-encoded URL format and back. Encoding replaces special characters — spaces, ampersands, quotes — with their %XX equivalents so they are safe to include in a URL. Decoding reverses the process and restores the original text. Both results appear side by side from a single input, so you can copy whichever version you need.',
    howTo: [
      'Paste your text or URL into the input field.',
      'The encoded and decoded versions appear simultaneously in the panels below.',
      'Copy whichever version you need using the copy button next to each panel.',
    ],
    inputLabel: 'Paste URL or text to encode/decode',
    outputLabel: 'Result',
    faq: [
      { q: 'What is URL encoding?', a: 'URL encoding replaces special characters with percent-encoded equivalents. For example, a space becomes %20 and & becomes %26. This makes strings safe to include in a URL.' },
      { q: 'When do I need to decode a URL?', a: 'When a URL contains percent-encoded characters and you want to read the original text — for example, %E2%80%99 decodes to a right single quote.' },
      { q: 'What is the difference between encodeURI and encodeURIComponent?', a: 'encodeURIComponent encodes everything except letters, digits, and - _ . ! ~ * \' ( ). This tool uses encodeURIComponent, which is correct for encoding individual query parameter values.' },
      { q: 'Why does a space become %20 and not a + sign?', a: 'Both %20 and + represent a space in URLs, but they are used in different contexts. %20 is the standard percent-encoding. + is only valid in query strings (application/x-www-form-urlencoded). This tool uses %20, which is safe everywhere.' },
      { q: 'Can I encode an entire URL at once?', a: 'If you paste a complete URL, the encoder will encode the entire string including the protocol, domain, and path separators. For encoding only a query parameter value, paste just that value.' },
    ],
    related: ['slug-generator', 'text-reverser', 'whitespace-remover'],
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
  },
  {
    slug: 'text-reverser',
    title: 'Text Reverser — Reverse Text Online Free',
    description: 'Reverse any text, words, or lines online. Free text reverser tool.',
    heading: 'Text Reverser',
    subheading: 'Reverse your text character by character, word by word, or line by line.',
    intro: 'The Text Reverser flips your text in three different ways: character by character (mirrors the entire string), word by word (reverses word order while keeping each word intact), or line by line (reverses the order of lines while keeping each line intact). Useful for creative text effects, puzzle generation, testing string handling, or simply reversing a list.',
    howTo: [
      'Choose a reversal mode — Reverse Characters, Reverse Words, or Reverse Lines.',
      'Paste or type your text into the input area.',
      'The reversed text appears in the output panel. Use the copy button to copy it.',
    ],
    inputLabel: 'Paste or type your text',
    outputLabel: 'Reversed text',
    faq: [
      { q: 'What reversal modes are available?', a: 'Three modes: reverse characters (mirrors the entire string), reverse words (keeps characters but reverses word order), and reverse lines (keeps each line intact but reverses line order).' },
      { q: 'Does it work with Unicode and emoji?', a: 'Yes. The tool handles Unicode characters and emoji correctly.' },
      { q: 'Is there a text length limit?', a: 'No. All processing happens in your browser and there is no server-side limit.' },
      { q: 'What is "reverse lines" useful for?', a: 'Reverse lines is useful for flipping the order of a list — for example, reversing a chronological log to show the most recent entries first.' },
      { q: 'Does reversing words change punctuation?', a: 'No. Each word (including any attached punctuation) is treated as a unit and moved as-is. Only the order of words changes, not the content of each word.' },
    ],
    related: ['text-case-converter', 'url-encoder-decoder', 'word-counter'],
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
  },
  {
    slug: 'password-generator',
    title: 'Password Generator — Strong Random Passwords Online',
    description: 'Generate strong, random passwords with custom length and character sets. Free online password generator — no data stored.',
    heading: 'Password Generator',
    subheading: 'Generate strong, random passwords instantly. Nothing is stored or sent.',
    intro: 'The Password Generator creates cryptographically random passwords using your browser\'s built-in secure random number generator. Choose the length and which character types to include — uppercase letters, lowercase letters, numbers, and symbols. Nothing you generate is ever sent to a server or stored anywhere.',
    howTo: [
      'Set the desired password length using the slider (8–64 characters).',
      'Toggle the character types you want to include — uppercase, lowercase, numbers, symbols.',
      'Click "Generate" to create a new password, then use the copy button to copy it to your clipboard.',
    ],
    inputLabel: '',
    outputLabel: 'Generated password',
    faq: [
      { q: 'Is this password generator truly random?', a: 'Yes. It uses the Web Crypto API (crypto.getRandomValues), which is a cryptographically secure random number generator built into all modern browsers.' },
      { q: 'Are my passwords stored or logged?', a: 'No. All generation happens locally in your browser using JavaScript. Nothing is transmitted to any server.' },
      { q: 'How long should my password be?', a: 'Security experts recommend at least 16 characters for most accounts. For critical accounts like email or banking, use 20 or more characters with all character types enabled.' },
      { q: 'What does password entropy mean?', a: 'Entropy measures how unpredictable a password is, in bits. Higher entropy means harder to crack. Aim for at least 80 bits of entropy for strong security.' },
      { q: 'Should I use symbols in my passwords?', a: 'Yes, if the service allows it. Adding symbols significantly increases the number of possible combinations, making brute-force attacks much harder.' },
    ],
    related: ['url-encoder-decoder', 'slug-generator', 'text-reverser'],
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
  },
]

export const TOOL_MAP = new Map(TOOLS.map(t => [t.slug, t]))
