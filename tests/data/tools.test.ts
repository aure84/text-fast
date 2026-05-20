import { describe, it, expect } from 'vitest'
import { TOOLS } from '../../src/data/tools'

describe('TOOLS data structure', () => {
  it('every tool has required base fields', () => {
    for (const t of TOOLS) {
      expect(t.slug, `${t.slug}: missing slug`).toBeTruthy()
      expect(t.title, `${t.slug}: missing title`).toBeTruthy()
      expect(t.description, `${t.slug}: missing description`).toBeTruthy()
      expect(t.faq.length, `${t.slug}: needs at least 5 FAQ items`).toBeGreaterThanOrEqual(5)
    }
  })

  it('every tool with useCases has at least 2 with non-empty fields', () => {
    for (const t of TOOLS) {
      if (!t.useCases) continue
      expect(t.useCases.length, `${t.slug}: useCases must have at least 2 items`).toBeGreaterThanOrEqual(2)
      for (const uc of t.useCases) {
        expect(uc.title, `${t.slug}: useCase missing title`).toBeTruthy()
        expect(uc.body, `${t.slug}: useCase missing body`).toBeTruthy()
      }
    }
  })

  it('every tool with examples has at least 1 with non-empty fields', () => {
    for (const t of TOOLS) {
      if (!t.examples) continue
      expect(t.examples.length, `${t.slug}: examples must have at least 1 item`).toBeGreaterThanOrEqual(1)
      for (const ex of t.examples) {
        expect(ex.label, `${t.slug}: example missing label`).toBeTruthy()
        expect(ex.input, `${t.slug}: example missing input`).toBeTruthy()
        expect(ex.output, `${t.slug}: example missing output`).toBeTruthy()
      }
    }
  })

  it('all 11 tools have useCases populated — FAILS until all content tasks (5-15) complete', () => {
    const missing = TOOLS.filter(t => !t.useCases?.length).map(t => t.slug)
    expect(missing, `Tools missing useCases: ${missing.join(', ')}`).toHaveLength(0)
  })
})
