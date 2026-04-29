// V4 — Pop Maximalista
// Referencias: stickers, blobs orgánicos, tilts, color pop.
// Paleta: cream base + 3 acentos saturados (rosa, lima, mandarina).

const v4Styles = {
  surface: {
    width: '100%', height: '100%',
    background: '#fff6ea',
    color: '#2a1e16',
    fontFamily: 'Bricolage Grotesque, Inter, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  blob1: {
    position: 'absolute',
    width: 520, height: 520,
    borderRadius: '62% 38% 55% 45% / 48% 52% 48% 52%',
    background: 'oklch(0.86 0.16 22)',
    top: -160, left: -140,
    filter: 'blur(0.5px)',
  },
  blob2: {
    position: 'absolute',
    width: 420, height: 420,
    borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%',
    background: 'oklch(0.9 0.18 96)',
    bottom: -150, right: -110,
  },
  blob3: {
    position: 'absolute',
    width: 280, height: 280,
    borderRadius: '52% 48% 62% 38% / 40% 55% 45% 60%',
    background: 'oklch(0.88 0.14 145)',
    top: 420, left: 420,
  },
  headerRow: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '28px 36px 12px',
    zIndex: 2,
  },
  logo: {
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontWeight: 800,
    fontSize: 28,
    letterSpacing: -1,
    display: 'flex', alignItems: 'center', gap: 10,
  },
  logoDot: {
    width: 14, height: 14, borderRadius: '50%',
    background: 'oklch(0.68 0.22 22)',
    display: 'inline-block',
  },
  chip: {
    fontFamily: 'DM Mono, monospace',
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    background: '#2a1e16',
    color: '#fff6ea',
    padding: '6px 12px',
    borderRadius: 40,
  },
  hero: {
    position: 'relative',
    padding: '0 36px 20px',
    zIndex: 2,
  },
  heroTitle: {
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontWeight: 800,
    fontSize: 104,
    lineHeight: 0.86,
    letterSpacing: -4,
    margin: '10px 0 6px',
    fontVariationSettings: '"opsz" 96',
  },
  heroScript: {
    fontFamily: 'Caveat, cursive',
    fontWeight: 700,
    fontSize: 64,
    color: 'oklch(0.58 0.22 22)',
    display: 'inline-block',
    transform: 'rotate(-6deg)',
    margin: '0 8px',
    lineHeight: 0.9,
  },
  heroSub: {
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontSize: 14,
    fontWeight: 500,
    maxWidth: 420,
    lineHeight: 1.4,
    color: '#4a3828',
    marginTop: 8,
  },
  grid: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 18,
    padding: '0 36px 32px',
    zIndex: 2,
  },
  card: (rot, bg, i) => ({
    background: '#fff',
    border: '2.5px solid #2a1e16',
    borderRadius: 22,
    padding: 16,
    transform: `rotate(${rot}deg)`,
    boxShadow: '6px 6px 0 #2a1e16',
    position: 'relative',
    display: 'flex', flexDirection: 'column', gap: 10,
  }),
  cardImg: {
    borderRadius: 14,
    border: '2px solid #2a1e16',
    height: 130,
  },
  cardNum: {
    position: 'absolute',
    top: -14, left: -14,
    width: 38, height: 38,
    borderRadius: '50%',
    background: 'oklch(0.68 0.22 22)',
    color: '#fff',
    border: '2.5px solid #2a1e16',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontWeight: 800,
    fontSize: 16,
    boxShadow: '3px 3px 0 #2a1e16',
  },
  cardName: {
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontWeight: 800,
    fontSize: 20, letterSpacing: -0.6, lineHeight: 1.05,
    margin: 0,
  },
  cardEn: {
    fontFamily: 'Caveat, cursive',
    fontSize: 20,
    color: 'oklch(0.58 0.22 22)',
    marginTop: -2,
    lineHeight: 1,
  },
  cardDesc: {
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontSize: 11.5,
    lineHeight: 1.4,
    color: '#4a3828',
    margin: 0,
  },
  cardFooter: {
    marginTop: 'auto',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    paddingTop: 8,
    borderTop: '1.5px dashed rgba(42,30,22,0.35)',
  },
  priceBubble: {
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontWeight: 800, fontSize: 22,
    letterSpacing: -0.5,
  },
  tagRow: {
    display: 'flex', gap: 4, flexWrap: 'wrap',
  },
  tag: {
    fontSize: 9,
    fontFamily: 'DM Mono, monospace',
    textTransform: 'uppercase',
    letterSpacing: 1,
    padding: '3px 7px',
    borderRadius: 40,
    background: '#fff6ea',
    border: '1.5px solid #2a1e16',
  },
  stickerFloat: (rot, x, y, bg) => ({
    position: 'absolute',
    left: x, top: y,
    background: bg,
    border: '2.5px solid #2a1e16',
    borderRadius: 50,
    padding: '8px 14px',
    fontFamily: 'Bricolage Grotesque, sans-serif',
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: -0.3,
    transform: `rotate(${rot}deg)`,
    boxShadow: '3px 3px 0 #2a1e16',
    zIndex: 3,
  }),
  wavyStrip: {
    position: 'absolute',
    left: 0, right: 0,
    height: 28,
    zIndex: 1,
  },
};

function V4Pop() {
  const rots = [-2.2, 1.4, -1.8, 2.1, -1.2, 1.8];
  const accentBgs = ['oklch(0.9 0.08 42)', 'oklch(0.92 0.09 96)', 'oklch(0.9 0.08 145)', 'oklch(0.92 0.09 22)', 'oklch(0.9 0.08 305)', 'oklch(0.92 0.09 60)'];

  return (
    <div style={v4Styles.surface} className="v-surface">
      <div style={v4Styles.blob1}/>
      <div style={v4Styles.blob2}/>
      <div style={v4Styles.blob3}/>

      <div style={v4Styles.headerRow}>
        <div style={v4Styles.logo}>
          <span style={v4Styles.logoDot}/> velhio <em style={{ fontFamily: 'Caveat, cursive', fontSize: 26, color: 'oklch(0.58 0.22 22)', fontWeight: 700 }}>tartas</em>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={v4Styles.chip}>ES · EN</div>
          <div style={{ ...v4Styles.chip, background: 'oklch(0.68 0.22 22)' }}>Nuevo ★</div>
        </div>
      </div>

      <div style={v4Styles.hero}>
        <h1 style={v4Styles.heroTitle}>
          Dulce,<br/>
          <span style={v4Styles.heroScript}>honestamente</span><br/>
          <span style={{ color: 'oklch(0.55 0.2 145)' }}>dulce.</span>
        </h1>
        <p style={v4Styles.heroSub}>
          Seis tartas. Nada de atajos. <em>Six cakes, zero shortcuts.</em> Horneamos cada mañana en tandas pequeñas y te contamos en qué anda el horno.
        </p>
      </div>

      <div style={v4Styles.stickerFloat(12, 540, 40, 'oklch(0.92 0.14 96)')}>
        Nuevo menú ✿
      </div>
      <div style={v4Styles.stickerFloat(-8, 620, 210, 'oklch(0.88 0.14 145)')}>
        horneado hoy
      </div>

      <div style={v4Styles.grid}>
        {TARTAS.map((t, i) => (
          <div key={t.n} style={v4Styles.card(rots[i], accentBgs[i], i)}>
            <div style={v4Styles.cardNum}>{t.n}</div>
            <TartaPlaceholder
              hue={t.hue}
              label={t.placeholder}
              style={v4Styles.cardImg}
              rounded={12}
              chroma={0.14}
              light={0.82}
            />
            <div>
              <h3 style={v4Styles.cardName}>{t.es}</h3>
              <div style={v4Styles.cardEn}>{t.en}</div>
            </div>
            <p style={v4Styles.cardDesc}>{t.desc_es}</p>
            <div style={v4Styles.cardFooter}>
              <div style={v4Styles.tagRow}>
                {t.tags_es.slice(0, 1).map(tag => (
                  <span key={tag} style={v4Styles.tag}>{tag}</span>
                ))}
              </div>
              <span style={v4Styles.priceBubble}>€{t.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.V4Pop = V4Pop;
