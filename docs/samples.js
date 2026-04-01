// Sample texts from Project Gutenberg (public domain)
// Each entry is an array of paragraphs, joined with double newlines.
const sampleTexts = [
  [
    '"Devil," I exclaimed, "do you dare approach me? And do not you fear the fierce vengeance of my arm wreaked on your miserable head? Begone, vile insect! Or rather, stay, that I may trample you to dust! And, oh! That I could, with the extinction of your miserable existence, restore those victims whom you have so diabolically murdered!"',
    '"I expected this reception," said the daemon. "All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things! Yet you, my creator, detest and spurn me, thy creature, to whom thou art bound by ties only dissoluble by the annihilation of one of us. You purpose to kill me. How dare you sport thus with life? Do your duty towards me, and I will do mine towards you and the rest of mankind. If you will comply with my conditions, I will leave them and you at peace; but if you refuse, I will glut the maw of death, until it be satiated with the blood of your remaining friends."',
    '--- Mary Shelley, _Frankenstein; or, the Modern Prometheus_',
  ],
  [
    'Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.',
    '--- Charles Dickens, _Great Expectations_',
  ],
  [
    '"Every day. I couldn\'t be happy if I didn\'t see him every day. He is absolutely necessary to me."',
    '"He is all my art to me now," said the painter gravely. "I sometimes think, Harry, that there are only two eras of any importance in the world\'s history. The first is the appearance of a new medium for art, and the second is the appearance of a new personality for art also. What the invention of oil-painting was to the Venetians, the face of Antinous was to late Greek sculpture, and the face of Dorian Gray will some day be to me. It is not merely that I paint from him, draw from him, sketch from him. Of course, I have done all that. But he is much more to me than a model or a sitter."',
    '--- Oscar Wilde, _The Picture of Dorian Gray_',
  ],
  [
    'There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question.',
    'I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.',
    '--- Charlotte Bronte, _Jane Eyre_',
  ],
  [
    'It was plain to them all that Colonel Fitzwilliam came because he had pleasure in their society, a persuasion which of course recommended him still more; and Elizabeth was reminded by her own satisfaction in being with him, as well as by his evident admiration, of her former favourite, George Wickham; and though, in comparing them, she saw there was less captivating softness in Colonel Fitzwilliam\'s manners, she believed he might have the best informed mind.',
    'But why Mr. Darcy came so often to the Parsonage it was more difficult to understand. It could not be for society, as he frequently sat there ten minutes together without opening his lips; and when he did speak, it seemed the effect of necessity rather than of choice---a sacrifice to propriety, not a pleasure to himself. He seldom appeared really animated.',
    '--- Jane Austen, _Pride and Prejudice_',
  ],
  [
    'Nantucket! Take out your map and look at it. See what a real corner of the world it occupies; how it stands there, away off shore, more lonely than the Eddystone lighthouse. Look at it---a mere hillock, and elbow of sand; all beach, without a background. There is more sand there than you would use in twenty years as a substitute for blotting paper. Some gamesome wights will tell you that they have to plant weeds there, they don\'t grow naturally; that they import Canada thistles; that they have to send beyond seas for a spile to stop a leak in an oil cask; that pieces of wood in Nantucket are carried about like bits of the true cross in Rome; that people there plant toadstools before their houses, to get under the shade in summer time; that one blade of grass makes an oasis, three blades in a day\'s walk a prairie.',
    '--- Herman Melville, _Moby Dick; or, The Whale_',
  ],
].map((paragraphs) => paragraphs.join('\n\n'))

export default sampleTexts
