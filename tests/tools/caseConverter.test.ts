import { describe, it, expect } from 'vitest'
import { toUpperCase, toLowerCase, toTitleCase, toSentenceCase } from '../../src/tools/caseConverter'

describe('toUpperCase', () => {
  it('converts text to uppercase', () => { expect(toUpperCase('hello world')).toBe('HELLO WORLD') })
})
describe('toLowerCase', () => {
  it('converts text to lowercase', () => { expect(toLowerCase('HELLO WORLD')).toBe('hello world') })
})
describe('toTitleCase', () => {
  it('capitalizes first letter of each word', () => { expect(toTitleCase('hello world')).toBe('Hello World') })
  it('lowercases articles and prepositions', () => { expect(toTitleCase('the quick brown fox')).toBe('The Quick Brown Fox') })
  it('always capitalizes the first word', () => { expect(toTitleCase('a tale of two cities')).toBe('A Tale of Two Cities') })
})
describe('toSentenceCase', () => {
  it('capitalizes first letter of each sentence', () => {
    expect(toSentenceCase('hello world. this is a test.')).toBe('Hello world. This is a test.')
  })
  it('handles empty string', () => { expect(toSentenceCase('')).toBe('') })
})
