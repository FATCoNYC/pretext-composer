import type { JustifyConfig } from './types.js'

export interface LineMetrics {
  normalGap: number
  avgCharWidth: number
  desiredGap: number
  desiredLetterPx: number
  desiredScale: number
  desiredWidth: number
  minGap: number
  maxGap: number
  minLetterPx: number
  maxLetterPx: number
  minScale: number
  maxScale: number
  minWidth: number
  maxWidth: number
}

export function computeLineMetrics(
  textWidth: number,
  spaceWidth: number,
  wordGaps: number,
  letterCount: number,
  config: JustifyConfig,
): LineMetrics {
  const normalGap = wordGaps > 0 ? spaceWidth / wordGaps : 0
  const avgCharWidth = letterCount > 0 ? textWidth / letterCount : 0
  const letterSlots = Math.max(0, letterCount - 1)

  const desiredGap = normalGap * (config.wordSpacing.desired / 100)
  const desiredLetterPx = (config.letterSpacing.desired / 100) * avgCharWidth
  const desiredScale = config.glyphScaling.desired / 100

  const minGap = normalGap * (config.wordSpacing.min / 100)
  const maxGap = normalGap * (config.wordSpacing.max / 100)
  const minLetterPx = (config.letterSpacing.min / 100) * avgCharWidth
  const maxLetterPx = (config.letterSpacing.max / 100) * avgCharWidth
  const minScale = config.glyphScaling.min / 100
  const maxScale = config.glyphScaling.max / 100

  const lineWidth = (s: number, g: number, l: number) =>
    textWidth * s + g * wordGaps + l * letterSlots

  return {
    normalGap,
    avgCharWidth,
    desiredGap,
    desiredLetterPx,
    desiredScale,
    desiredWidth: lineWidth(desiredScale, desiredGap, desiredLetterPx),
    minGap,
    maxGap,
    minLetterPx,
    maxLetterPx,
    minScale,
    maxScale,
    minWidth: lineWidth(minScale, minGap, minLetterPx),
    maxWidth: lineWidth(maxScale, maxGap, maxLetterPx),
  }
}
