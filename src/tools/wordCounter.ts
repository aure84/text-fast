export interface WordCountResult {
  words: number
  characters: number
  charactersNoSpaces: number
  sentences: number
  paragraphs: number
  readingTimeMin: number
}

export function countWords(text: string): WordCountResult {
  if (!text.trim()) return { words: 0, characters: 0, charactersNoSpaces: 0, sentences: 0, paragraphs: 0, readingTimeMin: 0 }
  const words = text.trim().split(/\s+/).filter(w => w.length > 0).length
  const characters = text.length
  const charactersNoSpaces = text.replace(/\s/g, '').length
  const sentences = (text.match(/[.!?]+/g) || []).length
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length || 1
  const readingTimeMin = Math.ceil(words / 200)
  return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTimeMin }
}
