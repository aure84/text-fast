export function removeWhitespace(text: string): string {
  if (!text) return ''
  return text.split('\n')
    .map(line => line.trim().replace(/[ \t]+/g, ' '))
    .filter(line => line.length > 0)
    .join('\n')
}
