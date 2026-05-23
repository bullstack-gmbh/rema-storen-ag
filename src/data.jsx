// ------- Data for REMA Storen AG website -------

const NAV_ITEMS = [
  { id: "leistungen",  label: "Leistungen" },
  { id: "referenzen",  label: "Referenzen" },
  { id: "unternehmen", label: "Unternehmen" },
  { id: "kontakt",     label: "Kontakt" }
];

const SERVICES = [
  {
    n: "01",
    title: "Planung & Beratung",
    text: "Wir begleiten Ihr Projekt von Anfang an. Gemeinsam analysieren wir Anforderungen, Normen und Budget – und entwickeln die passende Sonnenschutzlösung für Ihr Bauvorhaben.",
    chips: ["Ausschreibung", "Normen", "Budgetierung", "Technische Beratung"]
  },
  {
    n: "02",
    title: "Lieferung & Montage",
    text: "Schweizweite Lieferung und fachgerechte Montage durch unser erfahrenes Team. Pünktlich, sauber, zuverlässig – mit klarer Bauleitung und sauberer Übergabe.",
    chips: ["CH-weit", "Eigenmontage", "Termintreue"]
  },
  {
    n: "03",
    title: "Produkte",
    text: "Wir realisieren Projekte mit einem breiten Sortiment führender Hersteller: Storen, Raffstoren, Screens, Textilscreen-Fassaden, Markisen und Speziallösungen für den gewerblichen Einsatz.",
    chips: ["Raffstoren", "Screens", "Textilfassaden", "Markisen", "Speziallösungen"]
  },
  {
    n: "04",
    title: "Service & Wartung",
    text: "Regelmässige Wartung und schnelle Reparatur sichern den langfristigen Betrieb Ihrer Sonnenschutzanlagen. Auf Wunsch mit Servicevertrag und 24/7-Pikettdienst.",
    chips: ["Wartungsvertrag", "Reparatur", "Pikettdienst"]
  }
];

const FILTERS = [
  { id: "alle",        label: "Alle Projekte" },
  { id: "wohnbau",     label: "Wohnbau" },
  { id: "gewerbe",     label: "Gewerbe" },
  { id: "verwaltung",  label: "Verwaltung" },
  { id: "oeffentlich", label: "Öffentlich" }
];

const REFERENCES = [
  {
    id: "r1",
    name: "Wohnüberbauung Im Lindenpark",
    cat: "wohnbau",
    location: "Zürich, ZH",
    client: "Generalunternehmer Steinmann AG",
    year: "2025",
    scope: ["Raffstoren", "Textilscreens", "Wartung"],
    units: "184 WE",
    size: "feature",
    color: "#0077c0",
    angle: "180deg"
  },
  {
    id: "r2",
    name: "Verwaltungsgebäude Sihlcity",
    cat: "verwaltung",
    location: "Zürich, ZH",
    client: "Burkard Meyer Architekten",
    year: "2024",
    scope: ["Textilfassade", "Steuerung"],
    units: "5'200 m²",
    size: "default",
    color: "#0f1419",
    angle: "180deg"
  },
  {
    id: "r3",
    name: "Gewerbepark Buchs",
    cat: "gewerbe",
    location: "Buchs, SG",
    client: "HRS Real Estate AG",
    year: "2024",
    scope: ["Screens", "Raffstoren"],
    units: "3 Hallen",
    size: "default",
    color: "#005c95",
    angle: "180deg"
  },
  {
    id: "r4",
    name: "Schulhaus Erweiterung",
    cat: "oeffentlich",
    location: "Bern, BE",
    client: "Hochbauamt Kanton Bern",
    year: "2025",
    scope: ["Aussenraffstoren", "Beratung"],
    units: "26 Klassen",
    size: "default",
    color: "#ffcb08",
    angle: "180deg"
  },
  {
    id: "r5",
    name: "Wohnsiedlung Sonnenhof",
    cat: "wohnbau",
    location: "Luzern, LU",
    client: "Allreal Generalunternehmung",
    year: "2023",
    scope: ["Raffstoren", "Markisen", "Service"],
    units: "92 WE",
    size: "wide",
    color: "#d9a900",
    angle: "180deg"
  },
  {
    id: "r6",
    name: "Hauptsitz Industriegebäude",
    cat: "gewerbe",
    location: "Winterthur, ZH",
    client: "Liegenschaftsverwaltung Egli",
    year: "2024",
    scope: ["Textilscreens", "Steuerung"],
    units: "2'800 m²",
    size: "default",
    color: "#0077c0",
    angle: "180deg"
  }
];

const TEAM = [
  {
    name: "Marco Redza",
    role: "Geschäftsführer",
    bio: "Über 20 Jahre Erfahrung in der Realisierung von Sonnenschutzprojekten. Verantwortlich für Strategie und Schlüsselkunden.",
    color: "#0077c0"
  },
  {
    name: "Stefan Bühler",
    role: "Projektleitung",
    bio: "Begleitet Projekte von der Ausschreibung bis zur Bauabnahme. Schnittstelle zu Architekten und Generalunternehmern.",
    color: "#ffcb08"
  },
  {
    name: "Andrea Vogt",
    role: "Technik & Beratung",
    bio: "Plant technische Lösungen, prüft Normen und sorgt für die passende Produktauswahl im Detail.",
    color: "#005c95"
  },
  {
    name: "Luca Brunner",
    role: "Montageleitung",
    bio: "Führt unser Montageteam schweizweit. Sorgt für saubere Ausführung, Termintreue und zufriedene Bauherrschaft.",
    color: "#d9a900"
  }
];

const PROCESS = [
  { step: "01", title: "Anfrage", text: "Sie schildern Ihr Projekt – wir melden uns innerhalb von 24 Stunden mit ersten Fragen." },
  { step: "02", title: "Offerte", text: "Technische Klärung, Aufmass und Offerte – transparent, vollständig, projektgerecht." },
  { step: "03", title: "Montage", text: "Eigenmontage in der ganzen Schweiz mit klarer Bauleitung und sauberer Übergabe." },
  { step: "04", title: "Service", text: "Wartung, Reparatur und langfristige Partnerschaft über den gesamten Lebenszyklus." }
];

const TICKER = [
  "Architekten",
  "Generalunternehmer",
  "Liegenschaftsverwaltungen",
  "Gewerbebau",
  "Wohnungsbau",
  "Öffentliche Bauten",
  "Schweizweit",
  "Seit 2003"
];

Object.assign(window, { NAV_ITEMS, SERVICES, FILTERS, REFERENCES, TEAM, PROCESS, TICKER });
