import { hyphenateSync } from 'hyphen/en'
import type { HyphenationConfig } from './types.js'

const SOFT_HYPHEN = '\u00AD'

/**
 * Hyphenate a word using the hyphen library, then filter break points
 * based on InDesign-style rules (afterFirst, beforeLast, minWordLength).
 *
 * Returns an array of syllable fragments. E.g., "beautiful" → ["beau", "ti", "ful"]
 */
export function hyphenateWord(
  word: string,
  config: HyphenationConfig,
): string[] {
  // Strip any existing soft hyphens
  const clean = word.replace(/\u00AD/g, '')

  if ([...clean].length < config.minWordLength) {
    return [word]
  }

  // Get all possible hyphenation points from the library
  const hyphenated = hyphenateSync(clean, {
    hyphenChar: SOFT_HYPHEN,
    minWordLength: config.minWordLength,
  }) as string

  const parts = hyphenated.split(SOFT_HYPHEN)
  if (parts.length <= 1) return [word]

  // Filter based on afterFirst / beforeLast rules
  const filtered: string[] = []
  let charsSoFar = 0

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    const charsAfterBreak = [...clean].length - charsSoFar - [...part].length

    const canBreakHere =
      i > 0 && // can't break before the first part
      charsSoFar >= config.afterFirst && // enough chars before
      charsAfterBreak >= config.beforeLast // enough chars after

    if (canBreakHere || i === 0) {
      filtered.push(part)
    } else {
      // Merge with previous part
      filtered[filtered.length - 1] += part
    }

    charsSoFar += [...part].length
  }

  return filtered.length > 0 ? filtered : [word]
}

export interface HyphenatedWord {
  /** Full word text */
  text: string
  /** Syllable fragments — break opportunities between each */
  syllables: string[]
  /** Width of the full word */
  width: number
  /** Widths of each syllable */
  syllableWidths: number[]
  /** Letter count */
  letterCount: number
}

/**
 * Prepare a paragraph's words with hyphenation data.
 */
export function prepareHyphenatedWords(
  words: string[],
  font: string,
  config: HyphenationConfig,
  ctx: CanvasRenderingContext2D,
): HyphenatedWord[] {
  ctx.font = font

  return words.map((word) => {
    const syllables = hyphenateWord(word, config)
    const syllableWidths = syllables.map((s) => ctx.measureText(s).width)

    return {
      text: word,
      syllables,
      width: ctx.measureText(word).width,
      syllableWidths,
      letterCount: [...word].length,
    }
  })
}
