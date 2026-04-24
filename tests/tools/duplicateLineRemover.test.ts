import { describe, it, expect } from 'vitest'
import { removeDuplicateLines } from '../../src/tools/duplicateLineRemover'

describe('removeDuplicateLines', () => {
  it('returns empty string for empty input', () => { expect(removeDuplicateLines('')).toBe('') })
  it('keeps unique lines', () => { expect(removeDuplicateLines('apple\nbanana\ncherry')).toBe('apple\nbanana\ncherry') })
  it('removes duplicate lines keeping first occurrence', () => { expect(removeDuplicateLines('apple\nbanana\napple')).toBe('apple\nbanana') })
  it('is case-sensitive', () => { expect(removeDuplicateLines('Apple\napple')).toBe('Apple\napple') })
  it('removes all but the first blank line', () => { expect(removeDuplicateLines('a\n\nb\n\nc')).toBe('a\n\nb\nc') })
  it('preserves order', () => { expect(removeDuplicateLines('c\nb\na\nb\nc')).toBe('c\nb\na') })
})
