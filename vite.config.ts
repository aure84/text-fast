import { defineConfig, type Plugin } from 'vitest/config'
import react from '@vitejs/plugin-react'

function fixMediaRangeSyntax(): Plugin {
  return {
    name: 'fix-media-range-syntax',
    generateBundle(_, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'asset' && typeof chunk.source === 'string' && chunk.fileName.endsWith('.css')) {
          chunk.source = chunk.source
            .replace(/\(width<=([\d.]+)px\)/g, '(max-width:$1px)')
            .replace(/\(width>=([\d.]+)px\)/g, '(min-width:$1px)')
            .replace(/\(height<=([\d.]+)px\)/g, '(max-height:$1px)')
            .replace(/\(height>=([\d.]+)px\)/g, '(min-height:$1px)')
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), fixMediaRangeSyntax()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
})
