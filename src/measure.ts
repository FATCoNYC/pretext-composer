let _measureCtx: CanvasRenderingContext2D | null = null

export function getMeasureCtx(): CanvasRenderingContext2D {
  if (!_measureCtx) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas 2D context not available')
    _measureCtx = ctx
  }
  return _measureCtx
}

export function parseFontSize(font: string): number {
  const match = font.match(/(\d+(?:\.\d+)?)\s*px/)
  if (match) return parseFloat(match[1])
  const fallback = font.match(/(\d+(?:\.\d+)?)\s*(em|rem|pt|%)/)
  if (fallback) {
    const val = parseFloat(fallback[1])
    switch (fallback[2]) {
      case 'pt':
        return val * (4 / 3)
      case 'em':
      case 'rem':
        return val * 16
      case '%':
        return (val / 100) * 16
    }
  }
  return 16
}

export function getFontMetrics(font: string): {
  ascent: number
  descent: number
} {
  const ctx = getMeasureCtx()
  ctx.font = font
  const m = ctx.measureText('Hg')
  return {
    ascent: m.fontBoundingBoxAscent,
    descent: m.fontBoundingBoxDescent,
  }
}
