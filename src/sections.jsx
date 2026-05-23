// ------- Sections for REMA Storen AG -------

const { useState: useStateS, useEffect: useEffectS } = React;

// ---------- NAV ----------
function Nav() {
  const scrolled = useScrolled();
  const active = useActiveSection(["leistungen", "referenzen", "unternehmen", "kontakt"]);
  const [open, setOpen] = useStateS(false);

  useEffectS(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <React.Fragment>
      <header className={"nav " + (scrolled ? "scrolled" : "")}>
        <Container className="nav-inner">
          <a href="#top" className="nav-logo" aria-label="REMA Storen AG – Startseite">
            <img src="assets/rema-logo.png" alt="REMA Storen AG" />
          </a>
          <nav className="nav-links" aria-label="Hauptnavigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.id}
                 href={"#" + item.id}
                 className={"nav-link " + (active === item.id ? "active" : "")}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="tel:+41000000000" className="btn btn-ghost btn-sm nav-phone">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3h3l1.5 3.5L5.5 7.5a8 8 0 0 0 3 3l1-2 3.5 1.5V13a1 1 0 0 1-1 1A11 11 0 0 1 2 4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
              +41 00 000 00 00
            </a>
            <a href="#kontakt" className="btn btn-primary btn-sm nav-offerte">
              Offerte anfragen <ArrowRight size={14} />
            </a>
            <button className={"nav-burger " + (open ? "open" : "")}
                    onClick={() => setOpen(!open)}
                    aria-label="Menü öffnen"
                    aria-expanded={open}>
              <span />
            </button>
          </div>
        </Container>
      </header>
      <div className={"mobile-menu " + (open ? "open" : "")} aria-hidden={!open}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={"#" + item.id} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#kontakt" className="btn btn-primary" onClick={() => setOpen(false)}>
          Offerte anfragen <ArrowRight size={14} />
        </a>
      </div>
    </React.Fragment>
  );
}

// ---------- HERO ----------
function Hero() {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero-grid">
          <FadeIn className="hero-text">
            <Eyebrow>Schweizweit · seit 2003</Eyebrow>
            <h1 style={{ marginTop: 28 }}>
              Sonnenschutz,<br/>
              <span className="accent">der trägt.</span><br/>
              <span className="accent2">Vom ersten Plan<br/>bis zum letzten Service.</span>
            </h1>
            <p className="lead hero-sub">
              REMA Storen AG plant, liefert und montiert Sonnenschutzlösungen
              für Architekten, Generalunternehmer und Liegenschaftsverwaltungen –
              in der ganzen Schweiz.
            </p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn btn-primary">
                Projekt besprechen <ArrowRight />
              </a>
              <a href="#referenzen" className="btn btn-ghost">
                Referenzen ansehen
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <div className="label">Erfahrung</div>
                <div className="val accent">20+ Jahre</div>
              </div>
              <div>
                <div className="label">Realisiert</div>
                <div className="val">450+ Projekte</div>
              </div>
              <div>
                <div className="label">Einzugsgebiet</div>
                <div className="val">CH-weit</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="hero-visual">
              <div className="storen-art">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="slat" />
                ))}
              </div>
              <div className="storen-window" />
              <div className="storen-shadow" />
              <span className="tag"><span className="dot" /> Live Projekt · Zürich</span>
              <div className="corner">
                <b>Wohnüberbauung Im Lindenpark</b>
                184 Wohneinheiten · Raffstoren & Wartung
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <div className="ticker" style={{ marginTop: "clamp(64px, 8vw, 112px)" }}>
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="ticker-item">
              <span className="pip" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- LEISTUNGEN ----------
function Leistungen() {
  return (
    <section className="section" id="leistungen">
      <Container>
        <FadeIn className="section-head">
          <div>
            <Eyebrow>Leistungen</Eyebrow>
            <h2 style={{ marginTop: 20 }}>Komplettlösungen für Sonnenschutz am Bau.</h2>
          </div>
          <p className="lead">
            Wir denken Sonnenschutz vom Detail bis zur Fassade. Von der ersten
            technischen Klärung über die Lieferung bis zur Wartung über Jahre –
            alles aus einer Hand, mit klaren Ansprechpartnern.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="services">
            {SERVICES.map((s) => (
              <article key={s.n} className="service">
                <span className="num">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="feat">
                    {s.chips.map((c) => <span key={c} className="chip">{c}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

// ---------- REFERENZEN ----------
function Referenzen() {
  const [filter, setFilter] = useStateS("alle");
  const filtered = filter === "alle" ? REFERENCES : REFERENCES.filter((r) => r.cat === filter);

  return (
    <section className="section tone" id="referenzen">
      <Container>
        <FadeIn className="section-head">
          <div>
            <Eyebrow>Referenzen</Eyebrow>
            <h2 style={{ marginTop: 20 }}>Projekte, die für sich sprechen.</h2>
          </div>
          <p className="lead">
            Ein Auszug aus unseren Realisierungen für Architekten, Generalunternehmer
            und öffentliche Bauherrschaften. Vom Mehrfamilienhaus bis zur
            Gewerbefassade.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="ref-filters" role="tablist" aria-label="Referenzen filtern">
            {FILTERS.map((f) => (
              <button key={f.id}
                      role="tab"
                      aria-selected={filter === f.id}
                      onClick={() => setFilter(f.id)}
                      className={"filter " + (filter === f.id ? "active" : "")}>
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="ref-grid">
          {filtered.map((r, i) => (
            <FadeIn key={r.id} delay={i * 40} className={"ref-card " + (r.size || "")}>
              <div className="ref-img">
                <StorenPlaceholder color={r.color} label={FILTERS.find(f => f.id === r.cat)?.label} />
              </div>
              <div className="ref-info">
                <div className="top">
                  <span>{r.year}</span>
                  <span>{r.location}</span>
                </div>
                <h3>{r.name}</h3>
                <div className="meta">
                  <span>{r.client}</span>
                  <span>{r.units}</span>
                </div>
                <div className="scope">
                  {r.scope.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="muted" style={{ marginTop: 24, textAlign: "center" }}>
            Keine Projekte in dieser Kategorie. <button className="filter" onClick={() => setFilter("alle")}>Alle anzeigen</button>
          </p>
        )}
      </Container>
    </section>
  );
}

// ---------- UNTERNEHMEN ----------
function Unternehmen() {
  return (
    <section className="section dark" id="unternehmen">
      <Container>
        <FadeIn className="section-head">
          <div>
            <Eyebrow>Unternehmen</Eyebrow>
            <h2 style={{ marginTop: 20 }}>Schweizer Handwerk, partnerschaftlich gedacht.</h2>
          </div>
          <p className="lead">
            REMA Storen AG ist ein inhabergeführtes Schweizer Unternehmen mit Sitz im
            Raum Zürich. Wir sind die zuverlässige Schnittstelle zwischen Architektur,
            Bauleitung und Bauherrschaft.
          </p>
        </FadeIn>

        <div className="about-grid">
          <FadeIn>
            <p>
              Seit über zwei Jahrzehnten realisieren wir anspruchsvolle Sonnenschutz-
              projekte in der ganzen Schweiz. Unser Anspruch: das Richtige am
              richtigen Ort – fachlich präzise, terminlich verlässlich, partner-
              schaftlich im Umgang.
            </p>
            <p>
              Wir arbeiten produkt- und herstellerunabhängig. So können wir
              für jedes Projekt jene Kombination zusammenstellen, die technisch,
              gestalterisch und wirtschaftlich am besten passt.
            </p>
            <p>
              Mit eigener Montageorganisation, klarer Bauleitung und einem starken
              Serviceteam begleiten wir Projekte über den gesamten Lebenszyklus –
              vom ersten Plan bis zur fünften Wartung.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="about-stats">
              <div className="about-stat">
                <div className="num">20+</div>
                <div className="lbl">Jahre Erfahrung</div>
                <div className="sub">Seit 2003 am Schweizer Markt</div>
              </div>
              <div className="about-stat">
                <div className="num">450+</div>
                <div className="lbl">Realisierte Projekte</div>
                <div className="sub">Wohnbau, Gewerbe, öffentliche Bauten</div>
              </div>
              <div className="about-stat">
                <div className="num">26</div>
                <div className="lbl">Kantone</div>
                <div className="sub">Schweizweit tätig</div>
              </div>
              <div className="about-stat">
                <div className="num">24h</div>
                <div className="lbl">Reaktionszeit</div>
                <div className="sub">Auf jede Projektanfrage</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="process">
            {PROCESS.map((p) => (
              <div key={p.step} className="process-step">
                <div className="step">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="team-grid">
          {TEAM.map((t, i) => (
            <FadeIn key={t.name} delay={i * 60} className="team-card">
              <div className="team-photo">
                <TeamPortrait color={t.color} initials={t.name.split(" ").map(s => s[0]).join("")} />
              </div>
              <h4>{t.name}</h4>
              <div className="role">{t.role}</div>
              <p>{t.bio}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---------- KONTAKT ----------
function Kontakt() {
  const [form, setForm] = useStateS({
    name: "", company: "", email: "", phone: "", interests: [], message: ""
  });
  const [errors, setErrors] = useStateS({});
  const [sent, setSent] = useStateS(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleInterest = (label) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(label)
        ? f.interests.filter((x) => x !== label)
        : [...f.interests, label]
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Bitte Name angeben.";
    if (!form.email.trim()) next.email = "Bitte E-Mail angeben.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Ungültige E-Mail-Adresse.";
    if (!form.message.trim()) next.message = "Bitte kurz Ihr Projekt beschreiben.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const interestOptions = ["Neubau", "Sanierung", "Wartung", "Beratung"];

  return (
    <section className="section" id="kontakt">
      <Container>
        <FadeIn className="section-head">
          <div>
            <Eyebrow>Kontakt</Eyebrow>
            <h2 style={{ marginTop: 20 }}>Ihr Projekt verdient den richtigen Partner.</h2>
          </div>
          <p className="lead">
            Schildern Sie uns Ihr Vorhaben – wir melden uns innerhalb von 24 Stunden
            mit den nächsten Schritten. Telefonisch erreichen Sie uns Mo–Fr von 7:30
            bis 17:00 Uhr.
          </p>
        </FadeIn>

        <div className="contact-grid">
          {sent ? (
            <FadeIn>
              <div className="form-success">
                <div className="check-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Vielen Dank, {form.name.split(" ")[0]}!</h3>
                <p className="muted" style={{ marginTop: 12, maxWidth: "52ch" }}>
                  Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von
                  24 Stunden bei Ihnen unter <b>{form.email}</b>.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <button onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", interests: [], message: "" }); }} className="btn btn-ghost">
                    Weitere Anfrage senden
                  </button>
                  <a href="#referenzen" className="btn btn-primary">Referenzen ansehen <ArrowRight /></a>
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <form className="form-card" onSubmit={submit} noValidate>
                <div className="field-row">
                  <div className={"field " + (errors.name ? "err" : "")}>
                    <label htmlFor="f-name">Name<span className="req">*</span></label>
                    <input id="f-name" className="input" type="text" value={form.name}
                           onChange={(e) => update("name", e.target.value)}
                           autoComplete="name" />
                    <div className="err-msg">{errors.name}</div>
                  </div>
                  <div className="field">
                    <label htmlFor="f-company">Firma</label>
                    <input id="f-company" className="input" type="text" value={form.company}
                           onChange={(e) => update("company", e.target.value)}
                           autoComplete="organization" />
                  </div>
                </div>
                <div className="field-row">
                  <div className={"field " + (errors.email ? "err" : "")}>
                    <label htmlFor="f-email">E-Mail<span className="req">*</span></label>
                    <input id="f-email" className="input" type="email" value={form.email}
                           onChange={(e) => update("email", e.target.value)}
                           autoComplete="email" />
                    <div className="err-msg">{errors.email}</div>
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">Telefon</label>
                    <input id="f-phone" className="input" type="tel" value={form.phone}
                           onChange={(e) => update("phone", e.target.value)}
                           autoComplete="tel" />
                  </div>
                </div>
                <div className="field">
                  <label>Interesse an</label>
                  <div className="checks">
                    {interestOptions.map((opt) => (
                      <label key={opt} className={"check " + (form.interests.includes(opt) ? "on" : "")}>
                        <input type="checkbox"
                               checked={form.interests.includes(opt)}
                               onChange={() => toggleInterest(opt)} />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div className={"field " + (errors.message ? "err" : "")}>
                  <label htmlFor="f-msg">Ihr Projekt<span className="req">*</span></label>
                  <textarea id="f-msg" className="textarea" value={form.message}
                            onChange={(e) => update("message", e.target.value)}
                            placeholder="Bauvorhaben, Standort, Umfang, Termin…" />
                  <div className="err-msg">{errors.message}</div>
                </div>
                <div className="form-foot">
                  <div className="hint">Mit dem Senden stimmen Sie unserer <a href="#" style={{ textDecoration: "underline" }}>Datenschutzerklärung</a> zu.</div>
                  <button type="submit" className="btn btn-primary">Anfrage senden <ArrowRight /></button>
                </div>
              </form>
            </FadeIn>
          )}

          <FadeIn delay={100}>
            <div className="contact-info">
              <div className="contact-block">
                <div className="label">Adresse</div>
                <div className="val">REMA Storen AG</div>
                <p>Musterstrasse 12<br/>8000 Zürich<br/>Schweiz</p>
              </div>
              <div className="contact-block">
                <div className="label">Telefon & E-Mail</div>
                <div className="val"><a href="tel:+41000000000">+41 00 000 00 00</a></div>
                <div className="val"><a href="mailto:info@remastoren.ch">info@remastoren.ch</a></div>
              </div>
              <div className="contact-block">
                <div className="label">Öffnungszeiten</div>
                <p>Mo–Fr · 07:30 – 17:00<br/>24/7 Pikettdienst für Servicekunden</p>
              </div>
              <div className="map" aria-label="Standort Karte">
                <svg className="map-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15,20,25,.06)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="400" height="300" fill="#eef2ee"/>
                  <rect width="400" height="300" fill="url(#grid)"/>
                  {/* Stylised Switzerland outline / Lake Zurich shape */}
                  <path d="M30 200 Q80 180 120 195 T220 200 T340 210 L380 230 L380 300 L0 300 L0 220 Z" fill="#dde6dd"/>
                  <path d="M120 130 Q160 110 200 120 T280 135 T360 150" fill="none" stroke="rgba(15,20,25,.1)" strokeWidth="1.5"/>
                  <path d="M140 90 Q200 70 260 95" fill="none" stroke="rgba(15,20,25,.08)" strokeWidth="1.5"/>
                  <ellipse cx="220" cy="170" rx="80" ry="14" fill="#cfd8e0" opacity=".6"/>
                </svg>
                <div className="pin">
                  <div className="pulse" />
                  <div className="dot" />
                  <div className="pin-label">REMA Storen AG</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

// ---------- CTA + FOOTER ----------
function CtaBanner() {
  return (
    <section className="section tight">
      <Container>
        <FadeIn>
          <div className="cta-banner">
            <div>
              <h2>Sie planen ein Projekt? Wir freuen uns auf Ihre Anfrage.</h2>
              <p>Offerte innerhalb von 5 Arbeitstagen. Schweizweite Montage. Klare Kommunikation – vom ersten Telefonat bis zur Wartung.</p>
            </div>
            <a href="#kontakt" className="btn btn-primary">Jetzt Projekt besprechen <ArrowRight /></a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-w"><img src="assets/rema-logo.png" alt="REMA Storen AG" /></div>
            <p>Sonnenschutzlösungen für anspruchsvolle Bauvorhaben. Schweizweit, seit 2003.</p>
          </div>
          <div>
            <h4>Leistungen</h4>
            <ul>
              <li><a href="#leistungen">Planung & Beratung</a></li>
              <li><a href="#leistungen">Lieferung & Montage</a></li>
              <li><a href="#leistungen">Produkte</a></li>
              <li><a href="#leistungen">Service & Wartung</a></li>
            </ul>
          </div>
          <div>
            <h4>Unternehmen</h4>
            <ul>
              <li><a href="#unternehmen">Über uns</a></li>
              <li><a href="#unternehmen">Team</a></li>
              <li><a href="#referenzen">Referenzen</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:+41000000000">+41 00 000 00 00</a></li>
              <li><a href="mailto:info@remastoren.ch">info@remastoren.ch</a></li>
              <li>Musterstrasse 12<br/>8000 Zürich</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} REMA Storen AG · Alle Rechte vorbehalten</span>
          <span><a href="#">Impressum</a> · <a href="#">Datenschutz</a> · <a href="#">AGB</a></span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Leistungen, Referenzen, Unternehmen, Kontakt, CtaBanner, Footer });
