import { describe, it, expect } from 'vitest'
import { countChars } from '../../src/tools/charCounter'

describe('countChars', () => {
  it('returns zeros for empty string', () => {
    const r = countChars('')
    expect(r.withSpaces).toBe(0)
    expect(r.withoutSpaces).toBe(0)
    expect(r.words).toBe(0)
    expect(r.lines).toBe(0)
  })
  it('counts characters with spaces', () => { expect(countChars('Hello world').withSpaces).toBe(11) })
  it('counts characters without spaces', () => { expect(countChars('Hello world').withoutSpaces).toBe(10) })
  it('counts words', () => { expect(countChars('Hello world').words).toBe(2) })
  it('counts lines', () => { expect(countChars('line one\nline two\nline three').lines).toBe(3) })
  it('single line has 1 line count', () => { expect(countChars('hello').lines).toBe(1) })
})
