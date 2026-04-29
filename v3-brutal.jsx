// V3 — Brutalismo Dulce
// Referencias: brutalist web, tipografía pesada, marquee, grid duro,
// bordes gruesos, paleta cream/tinta/acento frambuesa.

const v3Styles = {
  surface: {
    width: '100%', height: '100%',
    background: '#f3efe6',
    color: '#111',
    fontFamily: 'Space Grotesk, Inter, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    padding: 0,
    display: 'flex', flexDirection: 'column',
  },
  marquee: {
    background: '#111', color: '#f3efe6',
    padding: '10px 0',
    overflow: 'hidden',
    fontFamily: 'Archivo Black, sans-serif',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 2,
    whiteSpace: 'nowrap',
    borderBottom: '3px solid #111',
  },
  marqueeInner: {
    display: 'inline-block',
    animation: 'v3marquee 40s linear infinite',
    paddingLeft: '100%',
  },
  topbar: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '14px 32px',
    borderBottom: '3px solid #111',
    background: '#f3efe6',
    fontFamily: 'Archivo Black, sans-serif',
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 2,
  },
  logo: {
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 22, letterSpacing: -1,
    textTransform: 'uppercase',
  },
  hero: {
    padding: '28px 32px 22px',
    borderBottom: '3px solid #111',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'end',
    gap: 24,
  },
  huge: {
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 120,
    lineHeight: 0.84,
    letterSpacing: -5,
    margin: 0,
    textTransform: 'uppercase',
  },
  accent: { color: '#d61f4a' },
  meta: {
    fontFamily: 'DM Mono, monospace',
    fontSize: 11,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    maxWidth: 240,
    color: '#333',
    borderLeft: '3px solid #111',
    paddingLeft: 12,
  },
  grid: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
  cell: {
    borderRight: '3px solid #111',
    borderBottom: '3px solid #111',
    padding: '18px 18px 14px',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    background: '#f3efe6',
    position: 'relative',
    overflow: 'hidden',
  },
  cellNum: {
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 64, lineHeight: 0.8,
    letterSpacing: -3,
    color: '#d61f4a',
  },
  cellName: {
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 26, lineHeight: 1,
    letterSpacing: -0.5,
    textTransform: 'uppercase',
    margin: '8px 0 4px',
  },
  cellEn: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 12, fontWeight: 500,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 8,
  },
  cellDesc: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 12, lineHeight: 1.4,
    color: '#222',
  },
  cellFooter: {
    marginTop: 12,
    paddingTop: 10,
    borderTop: '2px solid #111',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  price: {
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 26, letterSpacing: -0.5,
  },
  cta: {
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 10, letterSpacing: 2,
    textTransform: 'uppercase',
    background: '#111',
    color: '#f3efe6',
    padding: '8px 12px',
    border: 'none',
  },
  ctaAccent: {
    background: '#d61f4a',
  },
  swatch: {
    position: 'absolute',
    top: 0, right: 0,
    width: 54, height: 54,
  },
};

function V3Brutal() {
  // inject keyframes once
  React.useEffect(() => {
    if (document.getElementById('v3-kf')) return;
    const s = document.createElement('style');
    s.id = 'v3-kf';
    s.textContent = `@keyframes v3marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-100%)} }`;
    document.head.appendChild(s);
  }, []);

  const marqueeText = '★ CARTA 26 ★ HORNEADO HOY ★ BAKED TODAY ★ ENCARGA 48H ★ PRE-ORDER 48H ★ SEIS TARTAS ★ SIX CAKES ★ ';

  return (
    <div style={v3Styles.surface} className="v-surface">
      <div style={v3Styles.marquee}>
        <span style={v3Styles.marqueeInner}>
          {Array(4).fill(marqueeText).join('')}
        </span>
      </div>

      <div style={v3Styles.topbar}>
        <span style={v3Styles.logo}>Velhio ✱</span>
        <span>Carta / Menu</span>
        <span>ES · EN</span>
        <span>26 / 04 / 26</span>
      </div>

      <div style={v3Styles.hero}>
        <h1 style={v3Styles.huge}>
          Seis<br/>
          <span style={v3Styles.accent}>Tartas.</span>
        </h1>
        <div style={v3Styles.meta}>
          Horneadas con mantequilla francesa, harina molida a piedra y paciencia.<br/><br/>
          <em>Baked with French butter, stone-milled flour, and patience.</em>
        </div>
      </div>

      <div style={v3Styles.grid}>
        {TARTAS.map((t, i) => {
          const isAccent = i === 2 || i === 4;
          return (
            <div key={t.n} style={{
              ...v3Styles.cell,
              borderRight: (i % 3 === 2) ? 'none' : '3px solid #111',
              borderBottom: (i >= 3) ? 'none' : '3px solid #111',
              background: isAccent ? '#d61f4a' : '#f3efe6',
              color: isAccent ? '#f3efe6' : '#111',
            }}>
              <TartaPlaceholder
                hue={t.hue}
                label={t.placeholder}
                style={v3Styles.swatch}
                chroma={0.1}
                light={0.82}
              />
              <div>
                <div style={{ ...v3Styles.cellNum, color: isAccent ? '#111' : '#d61f4a' }}>
                  {String(t.n).padStart(2,'0')}
                </div>
                <h3 style={v3Styles.cellName}>{t.es}</h3>
                <div style={{ ...v3Styles.cellEn, color: isAccent ? 'rgba(255,255,255,0.8)' : '#555' }}>
                  {t.en}
                </div>
                <p style={{ ...v3Styles.cellDesc, color: isAccent ? 'rgba(255,255,255,0.92)' : '#222' }}>
                  {t.desc_es}
                </p>
              </div>
              <div style={{ ...v3Styles.cellFooter, borderTopColor: isAccent ? '#111' : '#111' }}>
                <span style={v3Styles.price}>€{t.price}</span>
                <button style={{
                  ...v3Styles.cta,
                  background: isAccent ? '#111' : '#111',
                }}>
                  Encargar →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.V3Brutal = V3Brutal;
