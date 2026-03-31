import { getMeasureCtx } from './measure.js'

// Characters that hang and how much of their width hangs (1 = full, 0.5 = half)
const HANG_CHARS: Record<string, number> = {
  // Full hang — narrow or open shapes
  '"': 1,
  '\u201C': 1,
  '\u201D': 1, // double quotes
  "'": 1,
  '\u2018': 1,
  '\u2019': 1, // single quotes
  '-': 1,
  '\u2013': 1,
  '\u2014': 1, // hyphens, en/em dash
  '.': 1,
  ',': 1,
  // Half hang — wider punctuation
  ':': 0.5,
  ';': 0.5,
  '!': 0.5,
  '?': 0.5,
  '\u2026': 0.5, // ellipsis
}

export function getHangAmount(char: string, font: string): number {
  const hangFraction = HANG_CHARS[char]
  if (hangFraction === undefined) return 0
  const ctx = getMeasureCtx()
  ctx.font = font
  return ctx.measureText(char).width * hangFraction
}
