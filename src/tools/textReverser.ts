export const reverseChars = (text: string) => text ? [...text].reverse().join('') : ''
export const reverseWords = (text: string) => text ? text.split(/\s+/).reverse().join(' ') : ''
export const reverseLines = (text: string) => text ? text.split('\n').reverse().join('\n') : ''
