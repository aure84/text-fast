const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?'

export interface PasswordOptions {
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

export interface PasswordResult {
  password: string
  strength: 'weak' | 'fair' | 'strong' | 'very-strong'
  entropy: number
}

function randomIndex(max: number): number {
  // Use rejection sampling to avoid modulo bias
  const arr = new Uint32Array(1)
  const limit = Math.floor(0x100000000 / max) * max
  do { crypto.getRandomValues(arr) } while (arr[0] >= limit)
  return arr[0] % max
}

export function generatePassword(opts: PasswordOptions): PasswordResult {
  const sets: string[] = []
  if (opts.lowercase) sets.push(LOWERCASE)
  if (opts.uppercase) sets.push(UPPERCASE)
  if (opts.numbers) sets.push(NUMBERS)
  if (opts.symbols) sets.push(SYMBOLS)

  if (!sets.length) return { password: '', strength: 'weak', entropy: 0 }

  const pool = sets.join('')

  // Guarantee at least one character from each selected set
  const mandatory: string[] = sets.map(set => set[randomIndex(set.length)])

  // Fill remaining positions from the full pool
  const remaining = opts.length - mandatory.length
  const extra: string[] = remaining > 0
    ? Array.from({ length: remaining }, () => pool[randomIndex(pool.length)])
    : []

  // Shuffle all characters together using Fisher-Yates
  const chars = [...mandatory, ...extra]
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomIndex(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]]
  }

  const password = chars.join('')

  const entropy = opts.length * Math.log2(pool.length)
  const strength =
    entropy < 40 ? 'weak' :
    entropy < 60 ? 'fair' :
    entropy < 80 ? 'strong' : 'very-strong'

  return { password, strength, entropy: Math.round(entropy) }
}
