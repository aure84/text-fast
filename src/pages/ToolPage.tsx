import { useParams, Navigate } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { TOOL_MAP, type ToolMeta } from '../data/tools'
import ToolLayout from '../components/ToolLayout'
import TextInput from '../components/TextInput'
import ResultPanel from '../components/ResultPanel'
import FaqAccordion from '../components/FaqAccordion'
import RelatedTools from '../components/RelatedTools'
import SEOMeta from '../components/SEOMeta'
import JsonLd from '../components/JsonLd'
import { countWords } from '../tools/wordCounter'
import { countChars } from '../tools/charCounter'
import { generateLorem } from '../tools/loremIpsum'
import { toUpperCase, toLowerCase, toTitleCase, toSentenceCase } from '../tools/caseConverter'
import { removeDuplicateLines } from '../tools/duplicateLineRemover'
import { getWordFrequency } from '../tools/wordFrequency'
import { removeWhitespace } from '../tools/whitespaceRemover'
import { generateSlug } from '../tools/slugGenerator'
import { encodeUrl, decodeUrl } from '../tools/urlEncoderDecoder'
import { reverseChars, reverseWords, reverseLines } from '../tools/textReverser'
import { generatePassword } from '../tools/passwordGenerator'
import styles from './ToolPage.module.css'

const TOOL_VIEWS: Record<string, React.ComponentType<{ tool: ToolMeta }>> = {
  'word-counter': WordCounterView,
  'character-counter': CharCounterView,
  'lorem-ipsum-generator': LoremIpsumView,
  'text-case-converter': CaseConverterView,
  'duplicate-line-remover': DuplicateLineRemoverView,
  'word-frequency-counter': WordFrequencyView,
  'whitespace-remover': WhitespaceRemoverView,
  'slug-generator': SlugGeneratorView,
  'url-encoder-decoder': UrlEncoderDecoderView,
  'text-reverser': TextReverserView,
  'password-generator': PasswordGeneratorView,
}

export default function ToolPage() {
  const { slug } = useParams<{ slug: string }>()
  const tool = TOOL_MAP.get(slug ?? '')
  if (!tool) return <Navigate to="/404" replace />

  const ToolView = TOOL_VIEWS[tool.slug]

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const webAppLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.heading,
    url: `https://text-fast.com/${tool.slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <ToolLayout>
      <SEOMeta title={tool.title} description={tool.description} />
      <JsonLd data={faqLd} />
      <JsonLd data={webAppLd} />
      <div className={styles.intro}>
        <h1 className={styles.heading}>{tool.heading}</h1>
        <p className={styles.sub}>{tool.subheading}</p>
      </div>
      <p className={styles.introText}>{tool.intro}</p>
      <div className={styles.howToSection}>
        <h2 className={styles.howToTitle}>How to use</h2>
        <ol className={styles.howToList}>
          {tool.howTo.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>
      {ToolView && <ToolView tool={tool} />}
      <FaqAccordion items={tool.faq} />
      <RelatedTools slugs={tool.related} />
    </ToolLayout>
  )
}

function WordCounterView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const r = useMemo(() => countWords(input), [input])
  return (
    <>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label={tool.outputLabel}>
        <div className={styles.statsGrid}>
          {([['Words', r.words], ['Characters', r.characters], ['No Spaces', r.charactersNoSpaces], ['Sentences', r.sentences], ['Paragraphs', r.paragraphs], ['Reading Time', `${r.readingTimeMin} min`]] as [string, string | number][]).map(([k, v]) => (
            <div key={k} className={styles.stat}><span className={styles.statVal}>{v}</span><span className={styles.statKey}>{k}</span></div>
          ))}
        </div>
      </ResultPanel>
    </>
  )
}

function CharCounterView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const r = useMemo(() => countChars(input), [input])
  return (
    <>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label={tool.outputLabel}>
        <div className={styles.statsGrid}>
          {([['With Spaces', r.withSpaces], ['Without Spaces', r.withoutSpaces], ['Words', r.words], ['Lines', r.lines]] as [string, number][]).map(([k, v]) => (
            <div key={k} className={styles.stat}><span className={styles.statVal}>{v}</span><span className={styles.statKey}>{k}</span></div>
          ))}
        </div>
      </ResultPanel>
    </>
  )
}

function LoremIpsumView({ tool }: { tool: ToolMeta }) {
  const [count, setCount] = useState(3)
  const output = useMemo(() => generateLorem(count), [count])
  return (
    <>
      <div className={styles.loremControls}>
        <label>Paragraphs: <input type="number" min={1} max={20} value={count} onChange={e => setCount(Math.max(1, Math.min(20, Number(e.target.value))))} className={styles.numInput} /></label>
      </div>
      <ResultPanel label={tool.outputLabel} copyText={output}>
        <pre className={styles.pre}>{output}</pre>
      </ResultPanel>
    </>
  )
}

function CaseConverterView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<'upper' | 'lower' | 'title' | 'sentence'>('upper')
  const output = useMemo(() => {
    if (!input) return ''
    if (mode === 'upper') return toUpperCase(input)
    if (mode === 'lower') return toLowerCase(input)
    if (mode === 'title') return toTitleCase(input)
    return toSentenceCase(input)
  }, [input, mode])
  return (
    <>
      <div className={styles.modeBar}>
        {(['upper', 'lower', 'title', 'sentence'] as const).map(m => (
          <button key={m} className={`${styles.modeBtn} ${mode === m ? styles.modeActive : ''}`} onClick={() => setMode(m)}>
            {m === 'upper' ? 'UPPERCASE' : m === 'lower' ? 'lowercase' : m === 'title' ? 'Title Case' : 'Sentence case'}
          </button>
        ))}
      </div>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label={tool.outputLabel} copyText={output}>
        <pre className={styles.pre}>{output || <span className={styles.placeholder}>Your converted text will appear here</span>}</pre>
      </ResultPanel>
    </>
  )
}

function DuplicateLineRemoverView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const output = useMemo(() => removeDuplicateLines(input), [input])
  return (
    <>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label={tool.outputLabel} copyText={output}>
        <pre className={styles.pre}>{output || <span className={styles.placeholder}>Deduplicated text will appear here</span>}</pre>
      </ResultPanel>
    </>
  )
}

function WordFrequencyView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const freq = useMemo(() => getWordFrequency(input), [input])
  return (
    <>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label={tool.outputLabel}>
        {freq.length === 0
          ? <p className={styles.placeholder}>Word frequencies will appear here</p>
          : (
            <table className={styles.freqTable}>
              <thead><tr><th>Word</th><th>Count</th></tr></thead>
              <tbody>{freq.map(({ word, count }) => <tr key={word}><td>{word}</td><td>{count}</td></tr>)}</tbody>
            </table>
          )}
      </ResultPanel>
    </>
  )
}

function WhitespaceRemoverView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const output = useMemo(() => removeWhitespace(input), [input])
  return (
    <>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label={tool.outputLabel} copyText={output}>
        <pre className={styles.pre}>{output || <span className={styles.placeholder}>Cleaned text will appear here</span>}</pre>
      </ResultPanel>
    </>
  )
}

function SlugGeneratorView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const output = useMemo(() => generateSlug(input), [input])
  return (
    <>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} rows={3} />
      <ResultPanel label={tool.outputLabel} copyText={output}>
        <p className={styles.slugOutput}>{output || <span className={styles.placeholder}>Your slug will appear here</span>}</p>
      </ResultPanel>
    </>
  )
}

function UrlEncoderDecoderView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const encoded = useMemo(() => encodeUrl(input), [input])
  const decoded = useMemo(() => decodeUrl(input), [input])
  return (
    <>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label="Encoded" copyText={encoded}>
        <pre className={styles.pre}>{encoded || <span className={styles.placeholder}>Encoded output will appear here</span>}</pre>
      </ResultPanel>
      <ResultPanel label="Decoded" copyText={decoded}>
        <pre className={styles.pre}>{decoded || <span className={styles.placeholder}>Decoded output will appear here</span>}</pre>
      </ResultPanel>
    </>
  )
}

function TextReverserView({ tool }: { tool: ToolMeta }) {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<'chars' | 'words' | 'lines'>('chars')
  const output = useMemo(() => {
    if (!input) return ''
    if (mode === 'chars') return reverseChars(input)
    if (mode === 'words') return reverseWords(input)
    return reverseLines(input)
  }, [input, mode])
  return (
    <>
      <div className={styles.modeBar}>
        {(['chars', 'words', 'lines'] as const).map(m => (
          <button key={m} className={`${styles.modeBtn} ${mode === m ? styles.modeActive : ''}`} onClick={() => setMode(m)}>
            {m === 'chars' ? 'Reverse Characters' : m === 'words' ? 'Reverse Words' : 'Reverse Lines'}
          </button>
        ))}
      </div>
      <TextInput value={input} onChange={setInput} label={tool.inputLabel} />
      <ResultPanel label={tool.outputLabel} copyText={output}>
        <pre className={styles.pre}>{output || <span className={styles.placeholder}>Reversed text will appear here</span>}</pre>
      </ResultPanel>
    </>
  )
}

function PasswordGeneratorView(_: { tool: ToolMeta }) {
  const [length, setLength] = useState(16)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)
  const [result, setResult] = useState(() =>
    generatePassword({ length: 16, uppercase: true, lowercase: true, numbers: true, symbols: false })
  )

  const generate = () =>
    setResult(generatePassword({ length, uppercase, lowercase, numbers, symbols }))

  const strengthColor: Record<string, string> = {
    'weak': '#ef4444',
    'fair': '#f97316',
    'strong': '#22c55e',
    'very-strong': '#16a34a',
  }

  return (
    <>
      <div className={styles.pwControls}>
        <div className={styles.pwLengthRow}>
          <label className={styles.pwLabel}>Length: <strong>{length}</strong></label>
          <input
            type="range" min={8} max={64} value={length}
            onChange={e => setLength(Number(e.target.value))}
            className={styles.pwSlider}
          />
        </div>
        <div className={styles.pwCheckboxes}>
          {([
            ['Uppercase (A–Z)', uppercase, setUppercase],
            ['Lowercase (a–z)', lowercase, setLowercase],
            ['Numbers (0–9)', numbers, setNumbers],
            ['Symbols (!@#…)', symbols, setSymbols],
          ] as [string, boolean, (v: boolean) => void][]).map(([label, checked, setter]) => (
            <label key={label} className={styles.pwCheck}>
              <input type="checkbox" checked={checked} onChange={e => setter(e.target.checked)} />
              {label}
            </label>
          ))}
        </div>
        <button className={styles.pwGenBtn} onClick={generate}>Generate</button>
      </div>

      <ResultPanel label="Generated password" copyText={result.password}>
        <p className={styles.pwOutput}>{result.password || <span className={styles.placeholder}>Select at least one character type</span>}</p>
        {result.password && (
          <div className={styles.pwMeta}>
            <span className={styles.pwStrength} style={{ color: strengthColor[result.strength] }}>
              {result.strength.replace('-', ' ')}
            </span>
            <span className={styles.pwEntropy}>{result.entropy} bits entropy</span>
          </div>
        )}
      </ResultPanel>
    </>
  )
}
