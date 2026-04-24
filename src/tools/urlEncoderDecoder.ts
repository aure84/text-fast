export const encodeUrl = (text: string) => text ? encodeURIComponent(text) : ''
export function decodeUrl(text: string): string {
  if (!text) return ''
  try { return decodeURIComponent(text) } catch { return text }
}
