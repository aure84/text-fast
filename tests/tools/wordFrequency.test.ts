import { describe, it, expect } from 'vitest'
import { getWordFrequency } from '../../src/tools/wordFrequency'

describe('getWordFrequency', () => {
  it('returns empty array for empty string', () => { expect(getWordFrequency('')).toEqual([]) })
  it('counts word occurrences', () => {
    const r = getWordFrequency('the cat sat on the mat')
    expect(r.find(x => x.word === 'the')?.count).toBe(2)
  })
  it('is case-insensitive', () => {
    const r = getWordFrequency('Apple apple APPLE')
    expect(r[0].word).toBe('apple')
    expect(r[0].count).toBe(3)
  })
  it('sorts by frequency descending', () => {
    const r = getWordFrequency('a a a b b c')
    expect(r[0].count).toBeGreaterThanOrEqual(r[1].count)
    expect(r[1].count).toBeGreaterThanOrEqual(r[2].count)
  })
  it('strips punctuation from words', () => {
    const r = getWordFrequency('hello, hello.')
    expect(r[0].word).toBe('hello')
    expect(r[0].count).toBe(2)
  })
  it('limits to top 50 results', () => {
    const text = Array.from({ length: 100 }, (_, i) => `word${i}`).join(' ')
    expect(getWordFrequency(text).length).toBeLessThanOrEqual(50)
  })
})
