// V1 — Editorial Pasticceria
// Referencias: revista gastronómica, tipografía display grande, mucho aire,
// numeración romana-ish, cream + tinta profunda, acento mandarina.
// Layout: hero grande izquierda + lista editorial derecha.

const v1Styles = {
  surface: {
    width: '100%', height: '100%',
    background: '#f4ece0',
    color: '#1b1714',
    fontFamily: 'Fraunces, Georgia, serif',
    position: 'relative',
    overflow: 'hidden',
    padding: '40px 48px',
    display: 'grid',
    gridTemplateColumns: '1.05fr 1fr',
    gridTemplateRows: 'auto 1fr auto',
    columnGap: 48,
    rowGap: 24,
  },
  eyebrow: {
    gridColumn: '1 / -1',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: 'DM Mono, monospace',
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#6e5c46',
    borderBottom: '1px solid #1b1714',
    paddingBottom: 14,
  },
  hero: {
    position: 'relative',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  },
  heroTitle: {
    fontFamily: 'Fraunces, serif',
    fontWeight: 300,
    fontSize: 96,
    lineHeight: 0.88,
    letterSpacing: -3,
    margin: 0,
    fontVariationSettings: '"opsz" 144',
  },
  heroItalic: {
    fontStyle: 'italic',
    fontWeight: 300,
    color: '#c2411c',
  },
  list: {
    display: 'flex', flexDirection: 'column',
    gap: 0,
    marginTop: 8,
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr auto',
    alignItems: 'baseline',
    padding: '14px 0',
    borderBottom: '1px solid rgba(27,23,20,0.18)',
    gap: 14,
  },
  rowNum: {
    fontFamily: 'Fraunces, serif',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 22,
    color: '#c2411c',
  },
  rowTitle: {
    fontFamily: 'Fraunces, serif',
    fontWeight: 400,
    fontSize: 22,
    letterSpacing: -0.3,
    margin: 0,
    lineHeight: 1.15,
  },
  rowSub: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 11,
    fontWeight: 400,
    color: '#6e5c46',
    letterSpacing: 0.3,
    marginTop: 4,
    lineHeight: 1.45,
    maxWidth: 360,
  },
  rowPrice: {
    fontFamily: 'DM Mono, monospace',
    fontSize: 13,
    letterSpacing: 0.5,
    color: '#1b1714',
  },
  heroImage: {
    flex: 1,
    marginTop: 20,
    minHeight: 280,
    borderRadius: 4,
  },
  heroCaption: {
    fontFamily: 'Fraunces, serif',
    fontStyle: 'italic',
    fontSize: 14,
    color: '#6e5c46',
    marginTop: 10,
    display: 'flex', justifyContent: 'space-between',
  },
  footer: {
    gridColumn: '1 / -1',
    display: 'flex', justifyContent: 'space-between',
    borderTop: '1px solid #1b1714',
    paddingTop: 12,
    fontFamily: 'DM Mono, monospace',
    fontSize: 10,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: '#6e5c46',
  },
};

function V1Editorial() {
  const hero = TARTAS[5]; // pistacho
  const rest = TARTAS.filter(t => t.n !== hero.n);
  return (
    <div style={v1Styles.surface} className="v-surface">
      <div style={v1Styles.eyebrow}>
        <span>Velhio · Pasticceria</span>
        <span>No. 04 — Primavera · Spring</span>
        <span>Desde 1998</span>
      </div>

      <div style={v1Styles.hero}>
        <div>
          <h1 style={v1Styles.heroTitle}>
            La carta,<br/>
            <em style={v1Styles.heroItalic}>seis</em> tartas<br/>
            de autor.
          </h1>
        </div>
        <TartaPlaceholder
          hue={hero.hue}
          label={hero.placeholder}
          rounded={4}
          style={v1Styles.heroImage}
        />
        <div style={v1Styles.heroCaption}>
          <span><em>Especial</em> — {hero.es}</span>
          <span>{hero.en}</span>
        </div>
      </div>

      <div style={v1Styles.list}>
        {rest.map((t, i) => (
          <div key={t.n} style={v1Styles.row}>
            <div style={v1Styles.rowNum}>0{t.n}</div>
            <div>
              <h3 style={v1Styles.rowTitle}>
                {t.es} <span style={{ fontStyle: 'italic', color: '#6e5c46', fontWeight: 300 }}>/ {t.en.toLowerCase()}</span>
              </h3>
              <p style={v1Styles.rowSub}>{t.desc_es}</p>
            </div>
            <div style={v1Styles.rowPrice}>€{t.price}</div>
          </div>
        ))}
      </div>

      <div style={v1Styles.footer}>
        <span>Horneado el mismo día · Baked daily</span>
        <span>Encargo 48h antes · 48h pre-order</span>
        <span>pag. 01/01</span>
      </div>
    </div>
  );
}

window.V1Editorial = V1Editorial;
