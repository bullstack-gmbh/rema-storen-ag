// ------- App entry -------

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Leistungen />
        <Referenzen />
        <Unternehmen />
        <Kontakt />
        <CtaBanner />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
