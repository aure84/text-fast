export interface CharCountResult {
  withSpaces: number
  withoutSpaces: number
  words: number
  lines: number
}

export function countChars(text: string): CharCountResult {
  if (!text) return { withSpaces: 0, withoutSpaces: 0, words: 0, lines: 0 }
  return {
    withSpaces: text.length,
    withoutSpaces: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.split('\n').length,
  }
}
