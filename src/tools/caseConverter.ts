const LOWERCASE_WORDS = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'in', 'of', 'up', 'as', 'is'])

export const toUpperCase = (text: string) => text.toUpperCase()
export const toLowerCase = (text: string) => text.toLowerCase()

export function toTitleCase(text: string): string {
  return text.toLowerCase().split(' ').map((word, i) =>
    (i === 0 || !LOWERCASE_WORDS.has(word)) ? word.charAt(0).toUpperCase() + word.slice(1) : word
  ).join(' ')
}

export function toSentenceCase(text: string): string {
  if (!text) return ''
  return text.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase())
}
