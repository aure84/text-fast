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
    inputLabel: 'Paste or type your text',
    outputLabel: 'Results',
    faq: [
      { q: 'How does the word counter work?', a: 'The counter splits your text by whitespace and punctuation to count words. Characters are counted including and excluding spaces. Sentences are detected by period, exclamation, and question marks.' },
      { q: 'Does this word counter work offline?', a: 'Yes. All counting happens in your browser. Nothing is sent to a server.' },
      { q: 'What counts as a word?', a: 'Any sequence of non-whitespace characters separated by a space, tab, or newline counts as one word.' },
      { q: 'How is reading time calculated?', a: 'Reading time is based on the average adult reading speed of 200 words per minute.' },
    ],
    related: ['character-counter', 'word-frequency-counter', 'whitespace-remover'],
  },
  {
    slug: 'character-counter',
    title: 'Character Counter — Count Characters Online Free',
    description: 'Count characters with and without spaces, words, and lines. Useful for Twitter, Instagram, SMS, and SEO meta descriptions.',
    heading: 'Character Counter',
    subheading: 'Count characters with spaces, without spaces, words, and lines.',
    inputLabel: 'Paste or type your text',
    outputLabel: 'Results',
    faq: [
      { q: 'What is the Twitter character limit?', a: 'Twitter allows 280 characters per tweet. This counter shows your character count in real time so you can stay within the limit.' },
      { q: 'What is the SEO meta description limit?', a: 'Google typically displays up to 155–160 characters for meta descriptions. Keep yours under 155 characters for best results.' },
      { q: 'Does this count spaces?', a: 'Yes — the counter shows both "with spaces" and "without spaces" counts side by side.' },
    ],
    related: ['word-counter', 'word-frequency-counter', 'whitespace-remover'],
  },
  {
    slug: 'lorem-ipsum-generator',
    title: 'Lorem Ipsum Generator — Free Placeholder Text',
    description: 'Generate lorem ipsum placeholder text. Choose number of paragraphs or words. Free and instant.',
    heading: 'Lorem Ipsum Generator',
    subheading: 'Generate placeholder text for designs and mockups.',
    inputLabel: 'Number of paragraphs',
    outputLabel: 'Generated text',
    faq: [
      { q: 'What is lorem ipsum?', a: 'Lorem ipsum is placeholder text used in design and typesetting. It mimics the look of real text without distracting the viewer with meaningful content.' },
      { q: 'Where does lorem ipsum come from?', a: 'Lorem ipsum is derived from Cicero\'s "de Finibus Bonorum et Malorum," a Latin text from 45 BC, scrambled to make it unreadable.' },
      { q: 'Is this the standard lorem ipsum text?', a: 'Yes. This generator uses the standard lorem ipsum passage that begins with "Lorem ipsum dolor sit amet..."' },
    ],
    related: ['word-counter', 'character-counter', 'text-case-converter'],
  },
  {
    slug: 'text-case-converter',
    title: 'Text Case Converter — UPPERCASE, lowercase, Title Case',
    description: 'Convert text to uppercase, lowercase, title case, or sentence case instantly. Free online case converter.',
    heading: 'Text Case Converter',
    subheading: 'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case.',
    inputLabel: 'Paste or type your text',
    outputLabel: 'Converted text',
    faq: [
      { q: 'What is title case?', a: 'Title case capitalizes the first letter of each major word. Articles, prepositions, and conjunctions are typically lowercase unless they start the title.' },
      { q: 'What is sentence case?', a: 'Sentence case capitalizes only the first word of each sentence and proper nouns. It matches normal prose capitalization.' },
      { q: 'Can I convert a large block of text?', a: 'Yes. Paste as much text as you like — the conversion happens instantly in your browser with no limit.' },
    ],
    related: ['word-counter', 'duplicate-line-remover', 'whitespace-remover'],
  },
  {
    slug: 'duplicate-line-remover',
    title: 'Duplicate Line Remover — Remove Duplicate Lines Online',
    description: 'Remove duplicate lines from any text instantly. Keep unique lines only. Free online tool.',
    heading: 'Duplicate Line Remover',
    subheading: 'Paste text and remove all duplicate lines in one click.',
    inputLabel: 'Paste text with duplicate lines',
    outputLabel: 'Deduplicated text',
    faq: [
      { q: 'Is the comparison case-sensitive?', a: 'Yes. "Apple" and "apple" are treated as different lines. Use the Text Case Converter first if you need case-insensitive deduplication.' },
      { q: 'Does order matter?', a: 'The tool keeps the first occurrence of each line and removes subsequent duplicates, preserving the original order.' },
      { q: 'Can I remove blank lines too?', a: 'Empty lines are treated as duplicate lines — all but the first empty line are removed.' },
    ],
    related: ['whitespace-remover', 'word-frequency-counter', 'text-case-converter'],
  },
  {
    slug: 'word-frequency-counter',
    title: 'Word Frequency Counter — Find Most Used Words',
    description: 'Analyze word frequency in any text. See which words appear most often. Free online word frequency analyzer.',
    heading: 'Word Frequency Counter',
    subheading: 'Find the most frequent words in your text.',
    inputLabel: 'Paste or type your text',
    outputLabel: 'Top words by frequency',
    faq: [
      { q: 'What does word frequency analysis tell me?', a: 'It shows which words you use most. Useful for checking keyword density in SEO content, spotting overused words in writing, or analyzing any corpus of text.' },
      { q: 'Are common words like "the" included?', a: 'Yes — all words are counted. Sort by frequency to find your most-used non-stop words.' },
      { q: 'Is the analysis case-sensitive?', a: 'No. "The" and "the" are counted as the same word.' },
    ],
    related: ['word-counter', 'duplicate-line-remover', 'text-case-converter'],
  },
  {
    slug: 'whitespace-remover',
    title: 'Whitespace Remover — Remove Extra Spaces Online',
    description: 'Remove extra spaces, leading and trailing whitespace, and blank lines from text. Free online whitespace cleaner.',
    heading: 'Whitespace Remover',
    subheading: 'Remove extra spaces, blank lines, and leading/trailing whitespace.',
    inputLabel: 'Paste text with extra whitespace',
    outputLabel: 'Cleaned text',
    faq: [
      { q: 'What does this tool remove?', a: 'It removes leading spaces, trailing spaces, extra spaces between words (collapsing multiple spaces to one), and optional blank lines.' },
      { q: 'Will it change my line breaks?', a: 'No. Line breaks are preserved. Only spaces within lines are affected.' },
      { q: 'When would I use this?', a: 'Common uses: cleaning up copy-pasted text from PDFs, formatting data before import, or fixing text with inconsistent spacing.' },
    ],
    related: ['duplicate-line-remover', 'text-case-converter', 'word-counter'],
  },
  {
    slug: 'slug-generator',
    title: 'Slug Generator — Convert Text to URL Slug',
    description: 'Convert any text to a URL-friendly slug. Removes special characters, replaces spaces with hyphens. Free online slug generator.',
    heading: 'Slug Generator',
    subheading: 'Convert text to a clean, URL-friendly slug.',
    inputLabel: 'Paste or type your text',
    outputLabel: 'URL slug',
    faq: [
      { q: 'What is a URL slug?', a: 'A slug is the URL-friendly version of a title. For example, "Hello World!" becomes "hello-world". Slugs use lowercase letters, numbers, and hyphens only.' },
      { q: 'How are special characters handled?', a: 'Accented characters are converted to their ASCII equivalents (é → e, ü → u). Other special characters are removed.' },
      { q: 'Why use hyphens instead of underscores?', a: 'Google treats hyphens as word separators and underscores as word joiners. Hyphens are the SEO-recommended choice for URL slugs.' },
    ],
    related: ['text-case-converter', 'url-encoder-decoder', 'whitespace-remover'],
  },
  {
    slug: 'url-encoder-decoder',
    title: 'URL Encoder / Decoder — Encode and Decode URLs Online',
    description: 'Encode or decode URLs and query strings online. Free URL encoder and decoder tool.',
    heading: 'URL Encoder / Decoder',
    subheading: 'Encode special characters for URLs or decode percent-encoded strings.',
    inputLabel: 'Paste URL or text to encode/decode',
    outputLabel: 'Result',
    faq: [
      { q: 'What is URL encoding?', a: 'URL encoding replaces special characters with percent-encoded equivalents. For example, a space becomes %20 and & becomes %26. This makes strings safe to include in a URL.' },
      { q: 'When do I need to decode a URL?', a: 'When a URL contains percent-encoded characters and you want to read the original text — for example, %E2%80%99 decodes to a right single quote.' },
      { q: 'What is the difference between encodeURI and encodeURIComponent?', a: 'encodeURIComponent encodes everything except letters, digits, and - _ . ! ~ * \' ( ). This tool uses encodeURIComponent, which is correct for encoding individual query parameter values.' },
    ],
    related: ['slug-generator', 'text-reverser', 'whitespace-remover'],
  },
  {
    slug: 'text-reverser',
    title: 'Text Reverser — Reverse Text Online Free',
    description: 'Reverse any text, words, or lines online. Free text reverser tool.',
    heading: 'Text Reverser',
    subheading: 'Reverse your text character by character, word by word, or line by line.',
    inputLabel: 'Paste or type your text',
    outputLabel: 'Reversed text',
    faq: [
      { q: 'What reversal modes are available?', a: 'Three modes: reverse characters (mirrors the entire string), reverse words (keeps characters but reverses word order), and reverse lines (keeps each line intact but reverses line order).' },
      { q: 'Does it work with Unicode and emoji?', a: 'Yes. The tool handles Unicode characters and emoji correctly.' },
      { q: 'Is there a text length limit?', a: 'No. All processing happens in your browser and there is no server-side limit.' },
    ],
    related: ['text-case-converter', 'url-encoder-decoder', 'word-counter'],
  },
]

export const TOOL_MAP = new Map(TOOLS.map(t => [t.slug, t]))
