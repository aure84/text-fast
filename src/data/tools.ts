export interface ToolFaq {
  q: string
  a: string
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
  },
  {
    slug: 'character-counter',
    title: 'Character Counter — Count Characters Online Free',
    description: 'Count characters with and without spaces, words, and lines. Useful for Twitter, Instagram, SMS, and SEO meta descriptions.',
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
  },
  {
    slug: 'lorem-ipsum-generator',
    title: 'Lorem Ipsum Generator — Free Placeholder Text',
    description: 'Generate lorem ipsum placeholder text. Choose number of paragraphs. Free and instant.',
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
  },
  {
    slug: 'text-case-converter',
    title: 'Text Case Converter — UPPERCASE, lowercase, Title Case',
    description: 'Convert text to uppercase, lowercase, title case, or sentence case instantly. Free online case converter.',
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
  },
  {
    slug: 'word-frequency-counter',
    title: 'Word Frequency Counter — Find Most Used Words',
    description: 'Analyze word frequency in any text. See which words appear most often. Free online word frequency analyzer.',
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
  },
  {
    slug: 'slug-generator',
    title: 'Slug Generator — Convert Text to URL Slug',
    description: 'Convert any text to a URL-friendly slug. Removes special characters, replaces spaces with hyphens. Free online slug generator.',
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
  },
]

export const TOOL_MAP = new Map(TOOLS.map(t => [t.slug, t]))
