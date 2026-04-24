import { describe, it, expect } from 'vitest'
import { generateLorem } from '../../src/tools/loremIpsum'

describe('generateLorem', () => {
  it('generates 1 paragraph', () => {
    const r = generateLorem(1)
    expect(r.trim().length).toBeGreaterThan(0)
    expect(r.split('\n\n').length).toBe(1)
  })
  it('generates the requested number of paragraphs', () => {
    expect(generateLorem(3).split('\n\n').length).toBe(3)
  })
  it('starts with "Lorem ipsum" for the first paragraph', () => {
    expect(generateLorem(1).startsWith('Lorem ipsum')).toBe(true)
  })
  it('returns empty string for 0 paragraphs', () => {
    expect(generateLorem(0)).toBe('')
  })
})
