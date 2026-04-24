import styles from './TextInput.module.css'

interface Props {
  value: string
  onChange: (v: string) => void
  label: string
  placeholder?: string
  rows?: number
}

export default function TextInput({ value, onChange, label, placeholder = 'Paste or type your text here...', rows = 8 }: Props) {
  return (
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor="tool-input">{label}</label>
      <textarea
        id="tool-input"
        className={styles.textarea}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        spellCheck={false}
      />
      {value && (
        <button className={styles.clear} onClick={() => onChange('')} aria-label="Clear input">
          Clear
        </button>
      )}
    </div>
  )
}
