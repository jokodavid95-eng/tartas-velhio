// V2 — Bakery Ticket
// Referencias: ticket de panadería, papel kraft, sellos, washi tape.
// Collage de dos "tickets" rotados + stickers.

const v2Styles = {
  surface: {
    width: '100%', height: '100%',
    background: 'radial-gradient(ellipse at 30% 20%, #e8dcc4 0%, #d9c9ab 100%)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'DM Mono, monospace',
    color: '#3a2a1a',
  },
  tape: (rot, left, top) => ({
    position: 'absolute',
    left, top,
    width: 140, height: 26,
    background: 'repeating-linear-gradient(45deg, oklch(0.78 0.12 24) 0 8px, oklch(0.72 0.14 22) 8px 16px)',
    opacity: 0.85,
    transform: `rotate(${rot}deg)`,
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
    zIndex: 5,
  }),
  ticket: {
    background: '#fbf3e2',
    boxShadow: '0 20px 50px rgba(70,40,10,0.22), inset 0 0 0 1px rgba(0,0,0,0.05)',
    padding: '22px 22px 18px',
    position: 'absolute',
    borderRadius: 2,
  },
  ticketHeader: {
    borderBottom: '2px dashed #3a2a1a',
    paddingBottom: 10,
    marginBottom: 12,
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
  },
  brandStack: {
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 28, lineHeight: 0.9,
    letterSpacing: -1,
    textTransform: 'uppercase',
  },
  pill: {
    fontSize: 9,
    letterSpacing: 2,
    textTransform: 'uppercase',
    border: '1.5px solid #3a2a1a',
    padding: '2px 8px',
    borderRadius: 40,
    whiteSpace: 'nowrap',
  },
  line: {
    display: 'grid',
    gridTemplateColumns: '24px 1fr auto',
    alignItems: 'baseline',
    padding: '6px 0',
    borderBottom: '1px dotted rgba(58,42,26,0.35)',
    fontSize: 12,
    letterSpacing: 0.2,
    gap: 8,
  },
  lineName: { fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1 },
  lineDesc: { fontSize: 10, color: '#7a5c3a', marginTop: 2, lineHeight: 1.3, letterSpacing: 0, textTransform: 'none' },
  total: {
    marginTop: 14,
    paddingTop: 10,
    borderTop: '2px solid #3a2a1a',
    display: 'flex', justifyContent: 'space-between',
    fontFamily: 'Archivo Black, sans-serif',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  stamp: {
    position: 'absolute',
    fontFamily: 'Archivo Black, sans-serif',
    border: '2.5px solid #b5341c',
    color: '#b5341c',
    padding: '6px 10px',
    textTransform: 'uppercase',
    fontSize: 11,
    letterSpacing: 2,
    background: 'rgba(255,255,255,0.0)',
    textAlign: 'center',
    lineHeight: 1.1,
  },
  sticker: (bg, rot, x, y, size = 78) => ({
    position: 'absolute',
    left: x, top: y,
    width: size, height: size,
    borderRadius: '50%',
    background: bg,
    border: '2px solid #3a2a1a',
    transform: `rotate(${rot}deg)`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Archivo Black, sans-serif',
    textTransform: 'uppercase',
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 1.05,
    padding: 8,
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
    zIndex: 6,
  }),
  cornerBarcode: {
    fontFamily: 'DM Mono, monospace',
    fontSize: 9,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
  },
  barcode: {
    background: 'repeating-linear-gradient(90deg, #3a2a1a 0 2px, transparent 2px 4px, #3a2a1a 4px 5px, transparent 5px 9px)',
    width: 90, height: 30,
  },
};

function Ticket({ lines, title, subtitle, style, lang = 'es' }) {
  return (
    <div style={{ ...v2Styles.ticket, ...style }}>
      <div style={v2Styles.ticketHeader}>
        <div>
          <div style={v2Styles.brandStack}>Velhio<br/>Tartas</div>
          <div style={{ fontSize: 9, letterSpacing: 2, marginTop: 4, color: '#7a5c3a' }}>
            {title}
          </div>
        </div>
        <div style={v2Styles.pill}>{subtitle}</div>
      </div>
      {lines.map(t => (
        <div key={t.n} style={v2Styles.line}>
          <span style={{ color: '#b5341c', fontWeight: 700 }}>{String(t.n).padStart(2,'0')}</span>
          <div>
            <div style={v2Styles.lineName}>{lang === 'es' ? t.es : t.en}</div>
            <div style={v2Styles.lineDesc}>{lang === 'es' ? t.desc_es : t.desc_en}</div>
          </div>
          <span style={{ fontWeight: 700 }}>€{t.price},00</span>
        </div>
      ))}
      <div style={v2Styles.total}>
        <span>Total · Menú</span>
        <span>€{lines.reduce((s,t)=>s+t.price,0)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 12, fontSize: 10, color: '#7a5c3a', letterSpacing: 1 }}>
        <span>GRACIAS · THANKS</span>
        <div style={v2Styles.cornerBarcode}>
          <div style={v2Styles.barcode}/>
          <span>VLH-2026-04</span>
        </div>
      </div>
    </div>
  );
}

function V2Ticket() {
  return (
    <div style={v2Styles.surface} className="v-surface">
      {/* paper grain */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 80% 90%, rgba(80,50,10,0.18), transparent 60%)',
        pointerEvents: 'none',
      }}/>

      {/* header strip */}
      <div style={{
        position: 'absolute', top: 22, left: 32, right: 32,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#5a3a1a',
      }}>
        <span>★ Carta · Menú ★</span>
        <span>Edición limitada · Primavera 26</span>
      </div>

      {/* tapes */}
      <div style={v2Styles.tape(-12, 60, 70)} />
      <div style={v2Styles.tape(8, 540, 60)} />
      <div style={v2Styles.tape(-6, 340, 645)} />

      {/* left ticket ES */}
      <Ticket
        title="RECIBO · CARTA ES"
        subtitle="HOY · HOY"
        lines={TARTAS.slice(0, 3)}
        lang="es"
        style={{ left: 60, top: 90, width: 340, transform: 'rotate(-2.2deg)' }}
      />
      {/* right ticket EN */}
      <Ticket
        title="RECEIPT · MENU EN"
        subtitle="TODAY · HOY"
        lines={TARTAS.slice(3, 6)}
        lang="en"
        style={{ right: 80, top: 105, width: 340, transform: 'rotate(2.4deg)' }}
      />

      {/* bottom ticket spanning */}
      <Ticket
        title="FIRMA DE LA CASA · HOUSE"
        subtitle="GRANDES · LARGE"
        lines={[TARTAS[5], TARTAS[0]]}
        lang="es"
        style={{ left: '50%', bottom: 60, marginLeft: -200, width: 400, transform: 'translate(-0%, 0) rotate(0.8deg)' }}
      />

      {/* stickers */}
      <div style={v2Styles.sticker('oklch(0.9 0.15 92)', -14, 28, 30)}>Nuevo<br/>Menú</div>
      <div style={v2Styles.sticker('oklch(0.72 0.16 22)', 18, 690, 30, 86)}>
        <span style={{ color: '#fbf3e2' }}>Horneado<br/>diario</span>
      </div>
      <div style={v2Styles.sticker('oklch(0.78 0.13 145)', -8, 690, 430, 82)}>Sin<br/>Gluten ✓</div>

      {/* stamp */}
      <div style={{ ...v2Styles.stamp, left: 430, top: 220, transform: 'rotate(-18deg)' }}>
        Aprobado<br/>★ por el chef ★
      </div>
    </div>
  );
}

window.V2Ticket = V2Ticket;
