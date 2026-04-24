import { describe, it, expect } from 'vitest'
import { reverseChars, reverseWords, reverseLines } from '../../src/tools/textReverser'

describe('reverseChars', () => {
  it('returns empty string for empty input', () => { expect(reverseChars('')).toBe('') })
  it('reverses characters', () => { expect(reverseChars('hello')).toBe('olleh') })
  it('handles two chars', () => { expect(reverseChars('ab')).toBe('ba') })
})
describe('reverseWords', () => {
  it('reverses word order', () => { expect(reverseWords('hello world foo')).toBe('foo world hello') })
  it('preserves single word', () => { expect(reverseWords('hello')).toBe('hello') })
})
describe('reverseLines', () => {
  it('reverses line order', () => { expect(reverseLines('line1\nline2\nline3')).toBe('line3\nline2\nline1') })
  it('preserves each line intact', () => { expect(reverseLines('hello world\nfoo bar')).toBe('foo bar\nhello world') })
})
