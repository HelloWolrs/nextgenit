// i18n.js — DE/EN toggle for Next-Gen-IT
// Two translation channels:
//   1) Simple text nodes: matched by trimmed text → German equivalent (textTrans).
//   2) Complex HTML elements: marked with data-i18n="<key>" → innerHTML override (htmlTrans).
// Originals are cached so toggling back to EN restores them verbatim.

(function () {
  // ─── 1) Plain-text translations ─────────────────────────────────────
  // Keys = exact trimmed English text. Values = German equivalents.
  var textTrans = {
    // Nav
    "About": "Über uns",
    "Locations": "Standorte",
    "Lifeline": "Lebenslinie",
    "Academy": "Akademie",

    // Hero CTAs / minor labels
    "Independent · founded 2004": "Unabhängig · gegründet 2004",
    "Meet Basys Analytics": "Basys Analytics kennenlernen",
    "Education Academy": "Bildungsakademie",

    // Ticker
    "Managed IT services since 2004": "Managed IT seit 2004",
    "Server virtualization": "Server-Virtualisierung",
    "Infrastructure consulting": "Infrastrukturberatung",
    "Cloud migration": "Cloud-Migration",
    "Cybersecurity practice": "Cybersecurity-Praxis",
    "DevOps & automation": "DevOps & Automatisierung",
    "Multi-cloud operations": "Multi-Cloud-Betrieb",
    "AI & ML engineering": "KI & ML Engineering",
    "Agent control panel": "Agent Control Panel",
    "Agent-to-Agent economy": "Agent-zu-Agent-Wirtschaft",

    // Section kickers
    "/01 — Who we are": "/01 — Wer wir sind",
    "/02 — Lifeline": "/02 — Lebenslinie",
    "/03 — Education Academy": "/03 — Bildungsakademie",
    "/04 — Subsidiary": "/04 — Tochtergesellschaft",

    // Location cards
    "Germany · Baden-Württemberg": "Deutschland · Baden-Württemberg",
    "Heimat · EU base": "Heimat · EU-Basis",
    "Where the founder is from and where the European side of the\n          work happens — industrial clients, compliance, EU data residency.":
      "Woher der Gründer kommt und wo die europäische Seite der\n          Arbeit stattfindet — Industriekunden, Compliance, EU-Datenresidenz.",
    "USA · New Mexico": "USA · New Mexico",
    "Project location · desert studio": "Projektstandort · Wüstenstudio",
    "A quiet base for long-form work — infrastructure design,\n          research, and the part of the practice that needs space\n          to think.":
      "Eine ruhige Basis für tiefgehende Arbeit — Infrastrukturdesign,\n          Forschung und der Teil der Praxis, der Raum zum Nachdenken\n          braucht.",
    "USA · California": "USA · Kalifornien",
    "Where Basys Analytics was founded · 2025": "Wo Basys Analytics gegründet wurde · 2025",
    "Product, platform, and the room where the subsidiary\n          Basys Analytics was spun off in 2025. Where the\n          agent work lives day-to-day.":
      "Produkt, Plattform und der Raum, in dem die Tochtergesellschaft\n          Basys Analytics 2025 ausgegründet wurde. Wo die Agent-Arbeit\n          tagtäglich stattfindet.",

    // Lifeline lede
    "Twenty-two years of staying ahead of the curve — without making a fuss about it.\n        Every milestone below is a system we built, ran, or are running right now.":
      "Zweiundzwanzig Jahre der Kurve voraus — ohne viel Aufhebens.\n        Jeder Meilenstein unten ist ein System, das wir gebaut, betrieben haben oder gerade betreiben.",

    // Milestone titles
    "Next-Gen-IT begins": "Next-Gen-IT startet",
    "Server virtualization practice": "Server-Virtualisierungspraxis",
    "Santa Fe project base": "Santa-Fe-Projektbasis",
    "Cloud migration services": "Cloud-Migrationsdienste",
    "San Francisco enters the picture": "San Francisco kommt ins Bild",
    "Multi-cloud & SRE": "Multi-Cloud & SRE",
    "Stuttgart — EU base": "Stuttgart — EU-Basis",
    "AI & ML engineering practice": "KI- & ML-Engineering-Praxis",
    "Learning Apps land on the marketplace": "Learning Apps landen im Marktplatz",
    "Marketplace & BSYA token launch": "Marktplatz- & BSYA-Token-Start",
    "Agent Control Panel — A2A economy": "Agent Control Panel — A2A-Wirtschaft",

    // Milestone bodies (single text node ones)
    "The practice opens as an independent managed-services shop.\n          First contract: managed IT & helpdesk for a regional manufacturer.":
      "Die Praxis startet als unabhängiger Managed-Services-Shop.\n          Erster Vertrag: Managed IT & Helpdesk für einen regionalen Hersteller.",
    "We migrate our first client estate to virtualized server\n          infrastructure. Hardware budgets fall by 60% overnight.\n          The practice quickly becomes our largest line of business.":
      "Wir migrieren den ersten Kundenbestand auf virtualisierte Server-\n          Infrastruktur. Hardware-Budgets fallen über Nacht um 60%.\n          Die Praxis wird schnell unser größtes Geschäftsfeld.",
    "A desert studio in Santa Fe becomes the base for long-form\n          infrastructure design and 24/7 ops work for clients across\n          the Mountain West.":
      "Ein Wüstenstudio in Santa Fe wird zur Basis für langfristiges\n          Infrastrukturdesign und 24/7-Betrieb für Kunden im Mountain West.",
    "AWS goes mainstream and so do we. Next-Gen-IT runs its first\n          full client migration from on-prem to public cloud. Hybrid\n          becomes a permanent fixture of the portfolio.":
      "AWS wird Mainstream und wir auch. Next-Gen-IT führt seine erste\n          vollständige Kundenmigration von On-Prem in die Public Cloud durch.\n          Hybrid wird zum festen Bestandteil des Portfolios.",
    "Managed detection & response stands up alongside the\n          NOC. The two teams share a queue from day one — a pattern\n          that returns a decade later in ACP’s event stream.":
      "Managed Detection & Response wird neben dem NOC aufgebaut.\n          Beide Teams teilen sich von Tag eins an eine Queue — ein Muster,\n          das ein Jahrzehnt später im Event-Stream von ACP wiederkehrt.",
    "Platform-engineering work moves to the West Coast.\n          Focus: automation, DevOps, and the early plumbing for\n          what would become our agent-orchestration work.":
      "Plattform-Engineering wandert an die Westküste.\n          Fokus: Automatisierung, DevOps und die frühen Leitungen für\n          das, was später unsere Agent-Orchestrierung wird.",
    "Clients run on AWS, Azure and GCP — sometimes all three.\n          We formalize an SRE practice and build the first internal\n          tooling for cross-cloud cost & reliability.":
      "Kunden laufen auf AWS, Azure und GCP — manchmal allen dreien.\n          Wir formalisieren eine SRE-Praxis und bauen das erste interne\n          Tooling für Cross-Cloud-Kosten & Zuverlässigkeit.",
    "The German side of the practice takes shape in Stuttgart —\n          industrial and Mittelstand clients across the DACH region,\n          on-site engineering, EU-resident managed services.":
      "Die deutsche Seite der Praxis entsteht in Stuttgart —\n          Industrie- und Mittelstandskunden in der DACH-Region,\n          Vor-Ort-Engineering, EU-residente Managed Services.",
    "A dedicated team begins shipping production ML for clients —\n          starting with anomaly detection on the same telemetry streams\n          our SOC was already watching.":
      "Ein eigenes Team beginnt, produktives ML für Kunden zu liefern —\n          beginnend mit Anomalie-Erkennung auf denselben Telemetrie-Streams,\n          die unser SOC bereits beobachtet.",
    "The Basys marketplace opens to the public. BSYA launches as an\n          optional settlement rail for capability-to-capability work,\n          alongside card & Bitcoin.":
      "Der Basys-Marktplatz öffnet sich für die Öffentlichkeit. BSYA startet als\n          optionale Abrechnungs-Schiene für Capability-zu-Capability-Arbeit,\n          neben Karte & Bitcoin.",
    "ACP enters internal pilot: a human-governed coordination layer\n          for connected systems. The agent-to-agent economy stops being\n          a slide and becomes an operational nervous system.":
      "ACP geht in den internen Pilotbetrieb: eine menschlich gesteuerte\n          Koordinationsschicht für angebundene Systeme. Die Agent-zu-Agent-\n          Wirtschaft hört auf, eine Folie zu sein, und wird zum operativen\n          Nervensystem.",

    // Milestone tags
    "Managed IT · MSP": "Managed IT · MSP",
    "Virtualization": "Virtualisierung",
    "Infrastructure consulting": "Infrastrukturberatung",
    "Cloud · Hybrid": "Cloud · Hybrid",
    "SecOps": "SecOps",
    "DevOps · Platform": "DevOps · Plattform",
    "SRE · FinOps": "SRE · FinOps",
    "EU operations": "EU-Betrieb",
    "AI/ML": "KI/ML",
    "Education · Free apps": "Bildung · Kostenlose Apps",
    "Subsidiary · SF": "Tochtergesellschaft · SF",
    "Marketplace · Settlement": "Marktplatz · Abrechnung",
    "Now · ACP / A2A": "Jetzt · ACP / A2A",

    // Education
    "Live now": "Jetzt live",
    "Coming · sponsored": "Bald · gefördert",
    "Open the marketplace": "Marktplatz öffnen",
    "See the education roadmap": "Bildungsfahrplan ansehen",
    "Our pledge": "Unser Versprechen",
    "Support education at Basys": "Bildung bei Basys unterstützen",

    // Basys card titles + links
    "The company.": "Das Unternehmen.",
    "The marketplace.": "Der Marktplatz.",
    "ACP — the workspace.": "ACP — der Workspace.",
    "The settlement rail.": "Die Abrechnungs-Schiene.",
    "Learn what schools don’t teach.": "Lerne, was Schulen nicht lehren.",
    "Visit site →": "Website besuchen →",
    "Browse marketplace →": "Marktplatz durchsuchen →",
    "Read about ACP →": "Mehr über ACP →",
    "Token overview →": "Token-Übersicht →",
    "Open the Academy →": "Akademie öffnen →",

    // Basys card heads
    "Marketplace": "Marktplatz",
    "BSYA Token": "BSYA Token",

    // Topology badges
    "Live": "Live",
    "24 events · auto-refresh 20s": "24 Ereignisse · Auto-Refresh 20s",
    "5 internal · 10 external": "5 intern · 10 extern",

    // Customer labels (SVG)
    "Monitoring": "Überwachung",
    "Endpoints": "Endgeräte",
    "Tickets": "Tickets",
    "Alerts": "Warnungen",
    "Inventory": "Inventar",
    "Backups": "Backups",
    "Firewall": "Firewall",
    "Audit": "Audit",

    // Legend
    "Monitoring & telemetry": "Überwachung & Telemetrie",
    "Monitoring · Endpoints": "Überwachung · Endgeräte",
    "Intake & event consolidation": "Eingang & Ereignis-Konsolidierung",
    "Tickets · Alerts": "Tickets · Warnungen",
    "Infra ops & maintenance": "Infra Ops & Wartung",
    "Inventory · Backups": "Inventar · Backups",
    "Security info & detection": "Security-Info & Erkennung",
    "SIEM · Firewall": "SIEM · Firewall",
    "Evidence & governance": "Beweise & Governance",
    "Audit · IAM": "Audit · IAM",

    // Footer
    "Company": "Unternehmen",
    "Places": "Orte",
    "Stuttgart, Germany": "Stuttgart, Deutschland",

    // ─── Stats strip ───
    "Years in operations": "Jahre im Betrieb",
    "ACP agents in pilot": "ACP-Agenten im Pilotbetrieb",
    "Connected client systems": "Verbundene Kundensysteme",
    "Cities, two continents": "Städte, zwei Kontinente",

    // ─── Section kickers / titles ───
    "/04 — Voices": "/04 — Stimmen",
    "/05 — Subsidiary": "/05 — Tochtergesellschaft",
    "/06 — FAQ": "/06 — FAQ",
    "/07 — Contact": "/07 — Kontakt",
    "In their words.": "In ihren Worten.",
    "Common questions.": "Häufige Fragen.",
    "Let’s talk.": "Sprechen wir.",

    // ─── Section ledes ───
    "A few of the operators we work with on what it’s like to run a\n        practice alongside ours.":
      "Einige Operatoren, mit denen wir arbeiten, darüber, wie es ist,\n        eine Praxis neben unserer zu führen.",
    "Quick answers about how we work, what we build, and how the\n        Academy fits in.":
      "Schnelle Antworten dazu, wie wir arbeiten, was wir bauen und\n        wie die Akademie dazu passt.",
    "For inquiries, partnerships, or strategic dialogue. Real humans reply, usually within a day.":
      "Für Anfragen, Partnerschaften oder strategischen Dialog. Echte Menschen antworten, meist innerhalb eines Tages.",

    // ─── Testimonials ───
    "They run the parts of our infrastructure we forgot we had. Patches happen, audits pass, and we stop being woken up at 3\u00a0a.m.":
      "Sie betreiben die Teile unserer Infrastruktur, die wir vergessen hatten. Patches passieren, Audits werden bestanden, und wir werden nicht mehr um 3\u00a0Uhr nachts geweckt.",
    "CTO, Industrial Mittelstand AG · DACH": "CTO, Industrial Mittelstand AG · DACH",
    "The Academy seats they sponsor showed up on my hiring pipeline before any traditional channel did. That’s rare.":
      "Die Akademie-Plätze, die sie sponsern, tauchten in meiner Recruiting-Pipeline vor jedem traditionellen Kanal auf. Das ist selten.",
    "Head of Platform, Mountain West Energy": "Head of Platform, Mountain West Energy",

    // ─── FAQ Q&A ───
    "Are you really independent?": "Sind Sie wirklich unabhängig?",
    "Yes. Next-Gen-IT is privately held, German-led, and owns Basys Analytics as a wholly-owned subsidiary. No outside capital, no obligation to ship features we don’t believe in.":
      "Ja. Next-Gen-IT ist privat geführt, deutsch geleitet und besitzt Basys Analytics als hundertprozentige Tochter. Kein externes Kapital, keine Pflicht, Funktionen zu liefern, an die wir nicht glauben.",
    "What kind of engagements do you take?": "Welche Aufträge übernehmen Sie?",
    "Long-running managed-services contracts, infrastructure modernisation projects, and ACP pilots. We don’t do one-off tickets, body-shop staffing, or “AI strategy” slide decks.":
      "Langfristige Managed-Services-Verträge, Infrastruktur-Modernisierungsprojekte und ACP-Pilotprojekte. Wir machen keine Einzeltickets, Body-Shop-Staffing oder „KI-Strategie“-Foliensätze.",
    "Where do you operate?": "Wo arbeiten Sie?",
    "Engineering happens between Stuttgart, Santa Fe, and San Francisco. Clients are global; on-site work is most common across the DACH region and the western US.":
      "Engineering findet zwischen Stuttgart, Santa Fe und San Francisco statt. Kunden sind global; Vor-Ort-Arbeit ist am häufigsten in der DACH-Region und im Westen der USA.",
    "How does the Academy actually work?": "Wie funktioniert die Akademie eigentlich?",
    "Do you take on agent / A2A pilots?": "Übernehmen Sie Agent- / A2A-Pilotprojekte?",
    "Yes — ACP is in internal pilot now. Allowlisted partners can request access; the rest is open via the marketplace as we harden the workspace.":
      "Ja — ACP ist jetzt im internen Pilotbetrieb. Zugelassene Partner können Zugang anfragen; der Rest ist über den Marktplatz offen, während wir den Workspace härten.",

    // ─── Contact ───
    "Email": "E-Mail",
    "Calls": "Anrufe",
    "by appointment, all timezones": "nach Vereinbarung, alle Zeitzonen",
    "Pilots": "Pilotprojekte",
    "ACP allowlist via the marketplace": "ACP-Allowlist über den Marktplatz",
    "Name": "Name",
    "Subject": "Betreff",
    "Message": "Nachricht",
    "Send message →": "Nachricht senden →",

    // ─── Hero CTAs / sticky bar ───
    "Trace the lifeline": "Lebenslinie verfolgen"
  };

  // ─── 2) HTML translations (elements marked with data-i18n) ──────────
  var htmlTrans = {
    "nav.cta": "Kontakt aufnehmen →",

    "hero.h1": 'We keep an<br />\n        <em><span class="iris-word">I</span></em> on <em>IT.</em>\n        <span class="hero-tagline">Technologielösungen für die Zukunft.</span>',

    "faq.acad": 'Kostenlose Learning Apps laufen heute über den Basys-Marktplatz. Die Akademie selbst — strukturierte Tracks, Mentoren-Sprechstunden, geförderte Plätze finanziert aus Marktplatz-Erlösen — wird gerade ausgerollt. Siehe den <a href="https://www.basysanalytics.com/index.html#education" target="_blank" rel="noopener">Bildungsfahrplan</a>.',

    "hero.lead":
      "Zwei Jahrzehnte Aufbau, Betrieb und jetzt Steuerung der Systeme, die moderne Operationen antreiben. " +
      "Vom ersten gemanagten Netzwerkschrank bis zur Agent-zu-Agent-Wirtschaft 2026 — Next-Gen-IT war " +
      "den ganzen Weg dabei, leise. Vier Agenten kreisen; das Auge wacht.",

    "hero.cta.trace": 'Lebenslinie verfolgen <span class="arrow">→</span>',

    "loc.title": "Keine Büros.<br />Drei Orte, an denen wir leben & bauen.",
    "loc.lede":
      "Next-Gen-IT ist eine unabhängige Technologiepraxis, geleitet von " +
      "einem deutschen Gründer. Wir betreiben keinen Campus — wir betreiben " +
      "Projekte aus den Städten, in denen wir tatsächlich leben und arbeiten.",

    "life.title": "Vom Serverraum<br />zur Agent-Wirtschaft.",

    "life.2024.body":
      "Die ersten <strong>kostenlosen Learning Apps</strong> starten über den Basys-\n          Marktplatz — eine bewusste Saat für die folgende Bildungsakademie.\n          Was Schulen nicht über moderne Operationen, Agenten und die\n          Arbeitswirtschaft lehren, kann jeder hier aufgreifen.",

    "life.2025a.body":
      "Next-Gen-IT gründet eine hundertprozentige Tochtergesellschaft aus, <strong>Basys Analytics</strong>,\n          gegründet in San Francisco. Ihr Auftrag — ein Marktplatz und eine Capability-Schicht\n          für die Agent-Wirtschaft. Gleiches Team, gleiche Governance-Disziplin, neue Produktoberfläche.",

    "edu.title": "Was Schulen<br />nicht lehren.",
    "edu.lede":
      "Bildung ist für uns keine Nebensache. Sie ist, wie wir die Agent-zu-Agent-Wirtschaft " +
      "zu etwas machen, an dem <em>jeder</em> teilnehmen kann — nicht nur die zehn Unternehmen, " +
      "die es sich leisten können.",
    "edu.now.title": "Kostenlose Learning Apps<br />im Marktplatz.",
    "edu.now.body":
      "Eine wachsende Bibliothek kostenloser, interaktiver Learning Apps läuft heute über " +
      "den Basys-Marktplatz. Praxisnah, ohne Anmeldeschranken, ohne Upsell — abdeckend, " +
      "was moderne Lehrpläne immer noch nicht tun: Agenten, Audit Trails, Abrechnung, " +
      "operative Governance, die tatsächliche Mechanik einer A2A-Wirtschaft.",
    "edu.next.title": "Bildungsakademie.",
    "edu.next.body":
      "Die Akademie folgt den Learning Apps: strukturierte Tracks, Mentoren-Sprechstunden, " +
      "Zertifikate, die einem Personaler etwas bedeuten. Next-Gen-IT <strong>finanziert " +
      "Plätze</strong>, damit Kosten nie der Grund sind, warum jemand von der nächsten " +
      "Wirtschaft abgehängt wird.",
    "edu.point.1": "<span>01</span> Kostenloser Tarif für Studierende, Umschulende, Beschäftigte im öffentlichen Sektor",
    "edu.point.2": "<span>02</span> Sponsor-a-Seat-Programm, finanziert aus Erlösen des Basys-Marktplatzes",
    "edu.point.3": "<span>03</span> Curriculum gemeinsam aufgebaut mit den Ingenieuren, die die Systeme betreiben",
    "edu.point.4": "<span>04</span> Open Badges & Portfolio-Projekte — verifizierbar, exportierbar",
    "edu.pledge.body":
      "Jeder Prozentpunkt Marktplatzwachstum finanziert einen weiteren Platz in der " +
      "Akademie. Die Agent-Wirtschaft kann nicht von wenigen aufgebaut werden — sie " +
      "muss für jeden lernbar sein, der die Neugier mitbringt, aufzutauchen.",

    "basys.title": "Basys Analytics.<br />Unser Produktarm.",
    "basys.lede":
      "Ausgegründet <strong>2025</strong> in <strong>San Francisco</strong> als hundertprozentige " +
      "Tochtergesellschaft von Next-Gen-IT, baut <strong>Basys Analytics</strong> die operative " +
      "Koordinationsschicht für die Agent-zu-Agent-Wirtschaft — einen Marktplatz, eine Capability-" +
      "Schicht, eine Abrechnungs-Schiene und ein menschlich gesteuertes Control Panel.",
    "basys.card1.body":
      "Wer Basys ist, was es baut und warum eine Tochter eines 22 Jahre alten\n          MSP das richtige Team ist, um die operative Schicht für die Agent-Wirtschaft zu liefern.",
    "basys.card2.body":
      "Abonniere operative Capabilities — Service Desk, SecOps,\n          Infra Ops, Compliance — und lass Partner-Capabilities daneben\n          installieren, über dasselbe Freigabe- und Audit-Gewebe.",
    "basys.card3.body":
      "Menschlich gesteuerter autonomer Betrieb. Workflows orchestrieren,\n          Freigaben durch Menschen routen, Remediation ausführen und einen\n          manipulationssicheren Audit Trail über den gesamten Stack führen.",
    "basys.card4.body":
      "BSYA ist die optionale Abrechnungs-Schiene für Capability-zu-Capability-Arbeit\n          und Guthaben-Aufladungen. Karte und Bitcoin bleiben durchgehend\n          verfügbar — BSYA ist Opt-in.",
    "basys.card5.body":
      "Kostenlose Learning Apps heute im Marktplatz, eine strukturierte Akademie\n          folgt. Next-Gen-IT finanziert Plätze, damit die Agent-Wirtschaft für jeden\n          lernbar bleibt, der die Neugier mitbringt, aufzutauchen.",

    "footer.tagline":
      "Technologielösungen für die Zukunft.<br />Wir behalten ein I auf IT — seit 2004.",
    "footer.copyright":
      "© 2004 – 2026 · Next-Gen-IT LLC (Vermont, USA — juristische Person) · Alle Rechte vorbehalten",
    "footer.byline":
      "Gelebt zwischen Stuttgart · Santa Fe · San Francisco"
  };

  // ─── runtime ────────────────────────────────────────────────────────
  // Normalize whitespace for matching: collapse runs of whitespace to a single space.
  function normKey(s) { return s.replace(/\s+/g, ' ').trim(); }

  // Build a normalized lookup table from textTrans so dictionary matches
  // survive minor HTML whitespace/indentation changes.
  var textTransNorm = {};
  Object.keys(textTrans).forEach(function (k) { textTransNorm[normKey(k)] = textTrans[k]; });
  function shouldSkip(node) {
    var p = node.parentElement;
    while (p) {
      if (p.tagName === 'SCRIPT' || p.tagName === 'STYLE' || p.tagName === 'NOSCRIPT') return true;
      if (p.classList) {
        if (p.classList.contains('twk-panel') || p.classList.contains('lang-toggle')) return true;
        // Skip text nodes inside [data-i18n] — those are handled via htmlTrans
        if (p.hasAttribute('data-i18n')) return true;
      }
      p = p.parentElement;
    }
    return false;
  }

  function collectTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var out = [];
    var n;
    while ((n = walker.nextNode())) {
      if (!shouldSkip(n) && n.nodeValue && n.nodeValue.trim()) out.push(n);
    }
    return out;
  }

  function cacheOriginals() {
    // Cache plain text nodes
    collectTextNodes(document.body).forEach(function (node) {
      if (node.__i18nOrig === undefined) node.__i18nOrig = node.nodeValue;
    });
    // Cache HTML originals for data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-original')) {
        el.setAttribute('data-i18n-original', el.innerHTML);
      }
    });
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    // 1) HTML elements (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'en') {
        var orig = el.getAttribute('data-i18n-original');
        if (orig !== null) el.innerHTML = orig;
      } else if (htmlTrans[key] !== undefined) {
        el.innerHTML = htmlTrans[key];
      }
    });

    // 2) Plain text nodes
    collectTextNodes(document.body).forEach(function (node) {
      var orig = node.__i18nOrig;
      if (orig === undefined) return;
      if (lang === 'en') {
        node.nodeValue = orig;
        return;
      }
      var trimmed = orig.trim();
      var trans = textTransNorm[normKey(orig)];
      if (trans !== undefined) {
        var lead = orig.match(/^\s*/)[0];
        var trail = orig.match(/\s*$/)[0];
        node.nodeValue = lead + trans + trail;
      } else {
        node.nodeValue = orig; // fallback to English
      }
    });
  }

  function init() {
    cacheOriginals();
    var stored = null;
    try { stored = localStorage.getItem('ngit-lang'); } catch (e) {}
    var lang = (stored === 'de' || stored === 'en') ? stored : 'en';

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = btn.dataset.lang;
        try { localStorage.setItem('ngit-lang', next); } catch (e) {}
        applyLang(next);
      });
    });

    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
