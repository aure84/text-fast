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

export function generatePassword(opts: PasswordOptions): PasswordResult {
  let pool = ''
  if (opts.lowercase) pool += LOWERCASE
  if (opts.uppercase) pool += UPPERCASE
  if (opts.numbers) pool += NUMBERS
  if (opts.symbols) pool += SYMBOLS

  if (!pool) return { password: '', strength: 'weak', entropy: 0 }

  const arr = new Uint32Array(opts.length)
  crypto.getRandomValues(arr)
  const password = Array.from(arr, v => pool[v % pool.length]).join('')

  const entropy = opts.length * Math.log2(pool.length)
  const strength =
    entropy < 40 ? 'weak' :
    entropy < 60 ? 'fair' :
    entropy < 80 ? 'strong' : 'very-strong'

  return { password, strength, entropy: Math.round(entropy) }
}
