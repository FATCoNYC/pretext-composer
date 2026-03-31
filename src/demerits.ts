export function computeDemerits(ratio: number): number {
  if (!Number.isFinite(ratio)) return Infinity
  if (Math.abs(ratio) > 5) return Infinity
  return (1 + 100 * Math.abs(ratio) ** 3) ** 2
}

export function ragDemerits(
  lineWidth: number,
  containerWidth: number,
  balance: number,
  style: 'even' | 'long-short',
  shortTarget: number,
  lineIndex: number,
): number {
  if (lineWidth > containerWidth * 1.01) return Infinity
  const fill = lineWidth / containerWidth
  const strength = balance / 100

  const minFill = (shortTarget - 10) / 100
  if (fill < minFill && fill < 0.5) return Infinity

  if (style === 'long-short') {
    const isLongLine = lineIndex % 2 === 0
    const targetFill = isLongLine ? 0.95 : shortTarget / 100
    const deviation = Math.abs(fill - targetFill)
    return (deviation * 1000 * strength) ** 2 + deviation * 200
  }

  const slack = containerWidth - lineWidth
  const slackRatio = slack / containerWidth
  return (slackRatio * 1000 * strength) ** 2 + slackRatio * 500 * (1 - strength)
}

export function singleWordDemerits(
  textWidth: number,
  containerWidth: number,
): number {
  const fill = textWidth / containerWidth
  if (fill > 0.85) return 100000
  return 1e9
}
