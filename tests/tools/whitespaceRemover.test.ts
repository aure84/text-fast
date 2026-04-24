import { describe, it, expect } from 'vitest'
import { removeWhitespace } from '../../src/tools/whitespaceRemover'

describe('removeWhitespace', () => {
  it('returns empty string for empty input', () => { expect(removeWhitespace('')).toBe('') })
  it('trims leading and trailing whitespace from each line', () => {
    expect(removeWhitespace('  hello  \n  world  ')).toBe('hello\nworld')
  })
  it('collapses multiple spaces to one', () => { expect(removeWhitespace('hello   world')).toBe('hello world') })
  it('preserves single line breaks', () => { expect(removeWhitespace('hello\nworld')).toBe('hello\nworld') })
  it('removes blank lines', () => { expect(removeWhitespace('hello\n\nworld')).toBe('hello\nworld') })
  it('handles tabs', () => { expect(removeWhitespace('hello\t\tworld')).toBe('hello world') })
})
