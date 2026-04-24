import { describe, it, expect } from 'vitest'
import { countWords } from '../../src/tools/wordCounter'

describe('countWords', () => {
  it('returns zero counts for empty string', () => {
    const r = countWords('')
    expect(r.words).toBe(0)
    expect(r.characters).toBe(0)
    expect(r.charactersNoSpaces).toBe(0)
    expect(r.sentences).toBe(0)
    expect(r.paragraphs).toBe(0)
    expect(r.readingTimeMin).toBe(0)
  })
  it('counts words in a simple sentence', () => {
    expect(countWords('Hello world').words).toBe(2)
  })
  it('counts characters including spaces', () => {
    expect(countWords('Hello world').characters).toBe(11)
  })
  it('counts characters excluding spaces', () => {
    expect(countWords('Hello world').charactersNoSpaces).toBe(10)
  })
  it('counts sentences by period, !, ?', () => {
    expect(countWords('Hello. World! How are you?').sentences).toBe(3)
  })
  it('counts paragraphs separated by blank lines', () => {
    expect(countWords('Hello world.\n\nSecond paragraph.').paragraphs).toBe(2)
  })
  it('calculates reading time at 200 wpm', () => {
    const text = Array(200).fill('word').join(' ')
    expect(countWords(text).readingTimeMin).toBe(1)
  })
  it('handles multiple spaces between words', () => {
    expect(countWords('Hello   world').words).toBe(2)
  })
})
