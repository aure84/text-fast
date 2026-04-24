export interface WordFrequencyEntry { word: string; count: number }

export function getWordFrequency(text: string): WordFrequencyEntry[] {
  if (!text.trim()) return []
  const freq = new Map<string, number>()
  for (const word of (text.toLowerCase().match(/[a-z0-9']+/g) || [])) {
    freq.set(word, (freq.get(word) ?? 0) + 1)
  }
  return Array.from(freq.entries())
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 50)
}
