import { describe, it, expect } from 'vitest'
import { encodeUrl, decodeUrl } from '../../src/tools/urlEncoderDecoder'

describe('encodeUrl', () => {
  it('returns empty string for empty input', () => { expect(encodeUrl('')).toBe('') })
  it('encodes spaces as %20', () => { expect(encodeUrl('hello world')).toBe('hello%20world') })
  it('encodes special characters', () => { expect(encodeUrl('a=1&b=2')).toBe('a%3D1%26b%3D2') })
  it('leaves letters and digits unchanged', () => { expect(encodeUrl('abc123')).toBe('abc123') })
})
describe('decodeUrl', () => {
  it('returns empty string for empty input', () => { expect(decodeUrl('')).toBe('') })
  it('decodes %20 to space', () => { expect(decodeUrl('hello%20world')).toBe('hello world') })
  it('decodes encoded special characters', () => { expect(decodeUrl('a%3D1%26b%3D2')).toBe('a=1&b=2') })
  it('returns original string on malformed input', () => { expect(decodeUrl('%ZZ')).toBe('%ZZ') })
})
