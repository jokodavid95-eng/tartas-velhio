// Shared tarta dataset — same across all variations so comparisons feel fair.
// Genérico; no copia nombres/marca de ningún producto existente.
const TARTAS = [
  {
    n: 1,
    es: "Tarta de queso al horno",
    en: "Baked cheesecake",
    desc_es: "Queso crema batido, base de galleta mantecosa, corazón tembloroso.",
    desc_en: "Whipped cream cheese, butter-biscuit base, wobbly middle.",
    price: 28,
    tags_es: ["clásico", "sin gluten opc."],
    tags_en: ["classic", "GF opt."],
    hue: 42, // cream
    fruit: "🍯",
    placeholder: "cheesecake",
  },
  {
    n: 2,
    es: "Tres chocolates",
    en: "Triple chocolate",
    desc_es: "Capas de chocolate negro, con leche y blanco sobre bizcocho de cacao.",
    desc_en: "Dark, milk and white chocolate layers on cocoa sponge.",
    price: 32,
    tags_es: ["chocolate", "para compartir"],
    tags_en: ["chocolate", "serves 8"],
    hue: 22, // chocolate
    fruit: "🍫",
    placeholder: "3-chocolates",
  },
  {
    n: 3,
    es: "Zanahoria y nuez",
    en: "Carrot walnut",
    desc_es: "Especias cálidas, nueces tostadas, frosting de queso crema.",
    desc_en: "Warm spices, toasted walnuts, cream cheese frosting.",
    price: 30,
    tags_es: ["especiada", "otoño"],
    tags_en: ["spiced", "fall"],
    hue: 28, // amber
    fruit: "🥕",
    placeholder: "carrot-cake",
  },
  {
    n: 4,
    es: "Limón y merengue",
    en: "Lemon meringue",
    desc_es: "Crema de limón ácida, merengue italiano flambeado al momento.",
    desc_en: "Sharp lemon curd, torched Italian meringue.",
    price: 29,
    tags_es: ["cítrico", "refrescante"],
    tags_en: ["citrus", "bright"],
    hue: 85, // lemon
    fruit: "🍋",
    placeholder: "lemon-pie",
  },
  {
    n: 5,
    es: "Fresa y nata",
    en: "Strawberry cream",
    desc_es: "Bizcocho genovés, nata montada, fresas maceradas en vainilla.",
    desc_en: "Genoise sponge, whipped cream, vanilla-macerated strawberries.",
    price: 34,
    tags_es: ["de temporada", "clásico"],
    tags_en: ["seasonal", "classic"],
    hue: 8, // strawberry
    fruit: "🍓",
    placeholder: "fresa-nata",
  },
  {
    n: 6,
    es: "Pistacho y frambuesa",
    en: "Pistachio raspberry",
    desc_es: "Mousse de pistacho siciliano, gelé de frambuesa, crumble de almendra.",
    desc_en: "Sicilian pistachio mousse, raspberry gelée, almond crumble.",
    price: 36,
    tags_es: ["gourmet", "firma"],
    tags_en: ["gourmet", "signature"],
    hue: 128, // pistachio
    fruit: "🌰",
    placeholder: "pistacho",
  },
];

// Striped placeholder for tarta images — no hand-drawn SVG food, ever.
// Stripes in brand-agnostic tones; hue param tints them.
function TartaPlaceholder({ hue = 30, label = "tarta", style = {}, rounded = 0, chroma = 0.12, light = 0.78 }) {
  const a = `oklch(${light} ${chroma} ${hue})`;
  const b = `oklch(${Math.max(light - 0.08, 0.3)} ${chroma} ${hue})`;
  const c = `oklch(${Math.min(light + 0.06, 0.96)} ${chroma * 0.6} ${hue})`;
  return (
    <div
      style={{
        background: `repeating-linear-gradient(135deg, ${a} 0 14px, ${b} 14px 28px, ${c} 28px 42px)`,
        borderRadius: rounded,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
        ...style,
      }}
    >
      <div style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: 10,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.55)',
        background: 'rgba(255,255,255,0.75)',
        padding: '3px 7px',
        margin: 8,
        borderRadius: 2,
      }}>
        [ {label} ]
      </div>
    </div>
  );
}

Object.assign(window, { TARTAS, TartaPlaceholder });
