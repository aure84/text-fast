export function removeDuplicateLines(text: string): string {
  if (!text) return ''
  const seen = new Set<string>()
  return text.split('\n').filter(line => {
    if (seen.has(line)) return false
    seen.add(line)
    return true
  }).join('\n')
}
