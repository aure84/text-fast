import { describe, it, expect } from 'vitest'
import { generateSlug } from '../../src/tools/slugGenerator'

describe('generateSlug', () => {
  it('returns empty string for empty input', () => { expect(generateSlug('')).toBe('') })
  it('converts to lowercase', () => { expect(generateSlug('HELLO WORLD')).toBe('hello-world') })
  it('replaces spaces with hyphens', () => { expect(generateSlug('hello world')).toBe('hello-world') })
  it('removes special characters', () => { expect(generateSlug('Hello, World!')).toBe('hello-world') })
  it('converts accented characters to ASCII', () => { expect(generateSlug('café au lait')).toBe('cafe-au-lait') })
  it('collapses multiple hyphens to one', () => { expect(generateSlug('hello -- world')).toBe('hello-world') })
  it('trims leading and trailing hyphens', () => { expect(generateSlug('  hello world  ')).toBe('hello-world') })
})
