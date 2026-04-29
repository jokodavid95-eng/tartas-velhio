/* Menú de navegación tipo papiro que se desenrolla desde arriba */

const PapyrusNav = ({ sections, onNav, activeSection }) => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    setTimeout(() => onNav(id), 620);
  };

  return (
    <>
      {/* TOP BAR — siempre visible */}
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 80,
        padding: '18px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(28, 53, 99, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(242, 234, 218, 0.1)' : '1px solid transparent',
        transition: 'all 320ms cubic-bezier(.4,0,.2,1)',
      }}>
        {/* Logo */}
        <div
          onClick={() => onNav('inicio')}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            cursor: 'pointer', userSelect: 'none',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
            <text x="20" y="25" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="11" fill="currentColor">V</text>
          </svg>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 22, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Velhio</div>
            <div style={{ fontFamily: 'Caveat, cursive', fontSize: 12, opacity: 0.8, marginTop: -2 }}>Tartas de queso</div>
          </div>
        </div>

        {/* Botón desenrollar papiro */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '10px 22px',
            background: open ? 'var(--gold)' : 'transparent',
            color: open ? 'var(--carbon)' : 'inherit',
            border: '1.5px solid ' + (open ? 'var(--gold)' : 'currentColor'),
            borderRadius: 999,
            cursor: 'pointer',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            transition: 'all 240ms cubic-bezier(.2,.7,.2,1)',
          }}
        >
          <span>{open ? 'Enrollar' : 'Desenrollar'}</span>
          {/* Icono papiro enrollado */}
          <svg width="24" height="16" viewBox="0 0 32 20" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 240ms' }}>
            <rect x="2" y="6" width="28" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="6" cy="10" r="2" fill="currentColor"/>
            <circle cx="26" cy="10" r="2" fill="currentColor"/>
            {!open && <line x1="10" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.2"/>}
          </svg>
        </button>
      </header>

      {/* OVERLAY PAPIRO */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 70,
          background: 'rgba(23, 24, 27, 0.72)',
          backdropFilter: 'blur(3px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 420ms',
        }}
      />

      {/* PAPIRO ROLLO — se desenrolla de arriba */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: '50%',
          transform: `translateX(-50%) translateY(${open ? '0' : '-100%'})`,
          width: 'min(900px, 92vw)',
          maxHeight: '92vh',
          zIndex: 75,
          transition: 'transform 720ms cubic-bezier(.34,1.1,.64,1)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {/* Rodillo superior */}
        <div style={{
          width: '100%',
          height: 36,
          background: 'linear-gradient(180deg, #8A5A2B 0%, #6B4423 50%, #4A3024 100%)',
          borderRadius: '0 0 6px 6px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.5), inset 0 -4px 0 rgba(0,0,0,0.3)',
          position: 'relative',
        }}>
          {/* Capuchones */}
          <div style={{ position: 'absolute', left: -18, top: -2, width: 32, height: 40, background: 'linear-gradient(180deg, #D4A84A, #8A5A2B)', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.4)' }}/>
          <div style={{ position: 'absolute', right: -18, top: -2, width: 32, height: 40, background: 'linear-gradient(180deg, #D4A84A, #8A5A2B)', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.4)' }}/>
        </div>

        {/* Hoja de papiro */}
        <div style={{
          width: '94%',
          background: 'linear-gradient(180deg, #F2EADA 0%, #E8DCC3 50%, #F0E4CD 100%)',
          backgroundImage: `
            linear-gradient(180deg, rgba(242,234,218,0.85) 0%, rgba(232,220,195,0.85) 50%, rgba(240,228,205,0.85) 100%),
            repeating-linear-gradient(90deg, transparent 0, transparent 8px, rgba(138, 90, 43, 0.06) 8px, rgba(138, 90, 43, 0.06) 9px),
            repeating-linear-gradient(0deg, transparent 0, transparent 12px, rgba(138, 90, 43, 0.04) 12px, rgba(138, 90, 43, 0.04) 13px)
          `,
          color: '#17181B',
          padding: '48px 56px 56px',
          boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 0 60px rgba(138, 90, 43, 0.15)',
          position: 'relative',
          overflow: 'auto',
          flex: 1,
        }}>
          {/* Bordes desgastados */}
          <div style={{
            position: 'absolute', inset: 0,
            pointerEvents: 'none',
            boxShadow: 'inset 0 0 0 1px rgba(138,90,43,0.2), inset 0 0 30px rgba(138,90,43,0.08)',
          }}/>

          {/* Ornamento meander */}
          <div style={{
            height: 20,
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 20'><path d='M0 16 L0 4 L16 4 L16 12 L8 12 L8 8 L12 8 L12 16 L20 16 L20 4 L36 4 L36 12 L28 12 L28 8 L32 8 L32 16 L40 16 L40 4 L56 4 L56 12 L48 12 L48 8 L52 8 L52 16 L60 16' stroke='%231C3563' stroke-width='1.5' fill='none'/></svg>\")",
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 16px',
            opacity: 0.6,
            marginBottom: 20,
          }}/>

          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{
              fontFamily: 'Caveat, cursive',
              fontSize: 20,
              color: '#8A5A2B',
              marginBottom: 4,
            }}>— Carta de navegación —</div>
            <h2 style={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 900,
              fontSize: 36,
              letterSpacing: '0.08em',
              color: '#1C3563',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>Velhio</h2>
          </div>

          {/* Items en dos columnas */}
          <nav style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px 40px',
          }}>
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 168, 74, 0.18)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 20px',
                  background: activeSection === s.id ? 'rgba(212, 168, 74, 0.25)' : 'transparent',
                  border: 'none',
                  borderBottom: '1px dashed rgba(138,90,43,0.3)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: '#17181B',
                  transition: 'all 220ms cubic-bezier(.2,.7,.2,1)',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: open ? `${420 + i * 55}ms` : '0ms',
                  transitionProperty: 'opacity, transform, background',
                }}
              >
                {/* Numeral romano */}
                <span style={{
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#B84C38',
                  minWidth: 32,
                  letterSpacing: '0.1em',
                }}>{s.numeral}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 600,
                    fontSize: 18,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#1C3563',
                  }}>{s.label}</div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: 13,
                    color: 'rgba(23,24,27,0.65)',
                    marginTop: 2,
                  }}>{s.hint}</div>
                </div>
                <span style={{ color: '#8A5A2B', fontFamily: 'Cinzel, serif', fontSize: 16 }}>→</span>
              </button>
            ))}
          </nav>

          {/* Ornamento meander inferior */}
          <div style={{
            height: 20,
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 20'><path d='M0 16 L0 4 L16 4 L16 12 L8 12 L8 8 L12 8 L12 16 L20 16 L20 4 L36 4 L36 12 L28 12 L28 8 L32 8 L32 16 L40 16 L40 4 L56 4 L56 12 L48 12 L48 8 L52 8 L52 16 L60 16' stroke='%231C3563' stroke-width='1.5' fill='none'/></svg>\")",
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 16px',
            opacity: 0.6,
            marginTop: 28,
          }}/>

          <div style={{
            textAlign: 'center',
            marginTop: 18,
            fontFamily: 'Caveat, cursive',
            fontSize: 18,
            color: '#8A5A2B',
          }}>
            Desde Uruguay hasta Madrid · con amor, desde Atenas
          </div>
        </div>

        {/* Rodillo inferior (simulado por sombra) */}
        <div style={{
          width: '96%',
          height: 12,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4), transparent)',
          marginTop: -4,
          filter: 'blur(4px)',
        }}/>
      </div>
    </>
  );
};

Object.assign(window, { PapyrusNav });
