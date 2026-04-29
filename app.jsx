// App entry — mount 4 variations in a DesignCanvas.

function App() {
  const { DesignCanvas, DCSection, DCArtboard } = window;

  return (
    <DesignCanvas>
      <DCSection
        id="carta"
        title="Carta de tartas · 4 direcciones"
        subtitle="Mismo contenido, 4 sistemas visuales. Haz clic en ⤢ para ver cualquiera a pantalla completa."
      >
        <DCArtboard id="v1" label="01 · Editorial Pasticceria" width={900} height={620}>
          <V1Editorial/>
        </DCArtboard>
        <DCArtboard id="v2" label="02 · Ticket de panadería" width={900} height={620}>
          <V2Ticket/>
        </DCArtboard>
        <DCArtboard id="v3" label="03 · Brutalismo dulce" width={900} height={620}>
          <V3Brutal/>
        </DCArtboard>
        <DCArtboard id="v4" label="04 · Pop maximalista" width={900} height={620}>
          <V4Pop/>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
