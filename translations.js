// Tramuntana Labs v3 — translations for the simplified site (Landing page v3 + Impressum)
// EN + DE only. The locale is persisted in localStorage as "pl-locale" so the
// switcher in the nav stays in sync across page navigations.

window.PL_I18N = {
  en: {
    locale: "en",
    nav: {
      engineers: "Engineers",
      services: "Services",
      faq: "FAQ",
      cta: "Book a call",
      langLabel: "Language",
    },

    /* ── Hero ────────────────────────────────── */
    hero: {
      eyebrow: "Tramuntana Labs · Two senior engineers, freelancing as one team",
      // Three parts: [pre, accent (squiggle), post]. {n1}/{n2} = engineer first names.
      titleParts: [
        "Hi, we're {n1} and {n2}. ",
        "Forty years",
        " of senior engineering between us, now working with SMBs and startups on the software that actually ships.",
      ],
      ctaPrimary: "Book a 30-min call",
      ctaSecondary: "Meet the team",
      live: "Book a call · Reply within 24h",
    },

    /* ── Services strip (top, dark slab) ──────── */
    strip: {
      eyebrow: "What we offer",
      lede:
        "From hours to months: pick the commitment that fits the problem, and adjust as you go.",
    },

    /* ── Engineers deep ───────────────────────── */
    engineers: {
      eyebrow: "The two of us",
      title: "Senior hands. No agency layer.",
      lede:
        "We've scaled platforms to tens of millions of users, led engineering organizations, and built backend systems that have to work under real load. Now we bring that experience to smaller teams: as senior hands, advisors, or architects, for as long as you need.",
      worksIn: "Works in",
      factLabels: {
        experience: "Experience",
        shipped: "Shipped",
        ledTeams: "Led teams",
        zeroToOne: "0→1 builds",
        languages: "Languages",
      },
      martin: {
        role: "Engineering Leadership & Backend",
        location: "Konstanz, DE",
        bio:
          "Engineering Manager at Meta, where he led teams building LLM measurement systems and global communication infrastructure across Meta's family of apps. Previously Director of Engineering at Crowdhouse, managing 26 engineers through a complete platform rewrite. Knows how to architect the system and build the team to run it.",
        factValues: {
          experience: "19 yrs",
          shipped: "10+ platforms",
          ledTeams: "Up to 26",
          languages: "DE · EN · LT",
        },
      },
      erick: {
        role: "Backend & Infrastructure",
        location: "Barcelona, ES",
        bio:
          "Twenty years scaling backend systems, a decade of it at XING where the platform served 15 million users and 25 million page impressions a day. Former Director of Engineering managing 20+ engineers. Now independent, specializing in Elixir, PostgreSQL, and AWS for clients across Europe and the US.",
        factValues: {
          experience: "22 yrs",
          shipped: "20+ products",
          ledTeams: "Up to 20",
          languages: "EN · DE · ES",
        },
      },
    },

    /* ── Services range ───────────────────────── */
    range: {
      eyebrow: "How we work with you",
      title: "From hours to months: pick the commitment that fits.",
      lede:
        "Most freelance shops sell one mode. We work the full range, and we adjust as you go.",
      noteMark: "↓",
      note:
        "Every engagement below is flexible: solo, paired with your team, or anything between. Pick the duration; the rest we shape with you.",
      scale: { short: "Short", long: "Long" },
      footPre: "Not sure where you land? ",
      footLink: "Send us what's on your plate",
      footPost:
        "; we'll tell you which fits, or that you don't need us.",
      items: [
        {
          title: "Consulting & advisory",
          body:
            "A call, a workshop, or a written second opinion. Hiring plans, tech direction, vendor choice, whether to build or buy.",
          length: "Hours to days",
        },
        {
          title: "Proof-of-concept builds",
          body:
            "A focused prototype to validate the riskiest part of an idea. We strip it to the smallest thing that proves the point.",
          length: "Multiple weeks",
        },
        {
          title: "Code audits & rescue",
          body:
            "Inherited a codebase nobody wants to touch? We review the architecture, the security, the operational risk and document a path forward.",
          length: "Weeks",
        },
        {
          title: "Technical due diligence",
          body:
            "Pre-investment or pre-acquisition. We assess team, code, infra and risk on behalf of investors, acquirers or boards. Written report you can share.",
          length: "Days to weeks",
        },
        {
          title: "Get a startup off the ground",
          body:
            "Zero-to-one builds. We are your engineering team: architecture, first hires, first paying customer, then we hand it back.",
          length: "Weeks to months",
        },
        {
          title: "Embedded with your team",
          body:
            "Long-term retainer. Senior hands inside your team: pairing with your engineers, working through the hard problems, mentoring whoever you've just hired.",
          length: "Months",
        },
      ],
    },

    /* ── FAQ ──────────────────────────────────── */
    faq: {
      eyebrow: "Questions",
      title: "Before you book the call.",
      items: [
        {
          q: "Do you work hourly or fixed price?",
          a:
            "We strongly prefer fixed price for projects with a clear scope, and a monthly retainer for ongoing work. We don't do open-ended hourly billing; it's bad for everyone.",
        },
        {
          q: "Can you work with our existing team?",
          a:
            "Yes. We pair with in-house developers regularly, and often help hire and onboard their first engineering lead once the foundation is in place.",
        },
        {
          q: "What if I'm not technical?",
          a:
            "Most of our clients aren't. We translate. You'll get plain-language updates, fixed prices, and weekly demos of what we've built.",
        },
        {
          q: "Where are you based?",
          a:
            "Konstanz and Barcelona. We work remotely with clients across Europe, the UK and North America. Time-zone overlap is usually fine.",
        },
        {
          q: "What if the project goes wrong?",
          a:
            "We don't take a project we don't think we can ship. If something does go sideways, you keep all code and documentation produced to that point, and we refund unbilled work.",
        },
      ],
    },

    /* ── CTA ──────────────────────────────────── */
    cta: {
      eyebrow: "Reach out",
      title: "Tell us what's broken. We'll tell you if we can help.",
      lede:
        "A 30-minute call, no pitch deck. If we're a fit, we'll send a written proposal within a week. If not, we'll point you to someone who is.",
      primary: "Book a 30-min call",
      meta: ["contact@tramuntanalabs.com", "Konstanz · Barcelona", "Reply within 24h"],
      replyStamp: "Reply within 24h",
    },

    /* ── Footer ───────────────────────────────── */
    foot: {
      copy: "© 2026 Tramuntana Labs. Made in Konstanz & Barcelona.",
      impressum: "Impressum",
      privacy: "Privacy",
    },

    /* ── Impressum ────────────────────────────── */
    imp: {
      eyebrow: "Legal · Tramuntana Labs",
      title: "Impressum",
      subtitle: "& legal information",
      lede:
        "Required disclosures under § 5 TMG and § 18 MStV for clients, partners, and visitors based in the European Union.",
      lastUpdated: "Last updated · 27 May 2026",
      back: "← Back to home",
      footnote:
        "Tax identification numbers (USt-IdNr., NIF, Steuernummer) are to be added before this page goes public.",
      streetPlaceholder: "Wollmatinger Straße 57",
      streetPlaceholderEs: "C/ Granada 49B",
      sections: {
        s1: {
          label: "Provider",
          title: "Angaben gemäß § 5 TMG",
          intro:
            "Tramuntana Labs is the working name of a partnership (GbR) between two independent software engineers operating across Germany and Spain.",
        },
        s2: {
          label: "Contact",
          title: "How to reach us",
          kv: [
            { k: "Email", type: "mailto", v: "contact@tramuntanalabs.com" },
            { k: "Response time", v: "Within 24 hours, weekdays" },
          ],
        },
        s3: {
          label: "Tax",
          title: "VAT & tax identification",
          kv: [
            { k: "USt-IdNr. (Martin Rechenberger)", v: "[to be added]" },
            { k: "NIF (Erick Dennis)", v: "[to be added]" },
            { k: "Steuernummer (Konstanz)", v: "[to be added]" },
          ],
          note:
            "We invoice from the entity that performs the work. EU clients receive reverse-charge invoices where applicable.",
        },
        s4: {
          label: "Editorial",
          title: "Responsible for content",
          intro:
            "Per § 18 (2) MStV, responsible for the content of this website:",
        },
        s5: {
          label: "EU disputes",
          title: "Online dispute resolution",
          p1Pre:
            "The European Commission provides a platform for online dispute resolution (ODR), available at ",
          p1LinkText: "ec.europa.eu/consumers/odr",
          p1Post: ".",
          p2:
            "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
        },
        s6: {
          label: "Liability",
          title: "Liability for content & links",
          p1:
            "We compile the contents of these pages with the greatest care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to §§ 8–10 TMG, as service providers we are liable for our own content on these pages under general law; we are not, however, obliged to monitor transmitted or stored third-party information.",
          p2:
            "Our offer contains links to external third-party websites whose content we have no influence over. Therefore we cannot assume any liability for these external contents. The respective provider or operator is always responsible for the linked pages.",
        },
        s7: {
          label: "Copyright",
          title: "Copyright",
          p1:
            "The content and works created by the operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialisation beyond the scope of copyright law requires the written consent of the respective author or creator.",
        },
        s8: {
          label: "Privacy",
          title: "Privacy at a glance",
          p1:
            "We process only the data necessary to communicate with prospective and active clients. Specifically: name and email when you book a call or write to us, and basic server logs (IP, request) retained for seven days for security.",
          p2Pre:
            "We do not run analytics, advertising, or third-party tracking on this site. For a full privacy notice under GDPR Art. 13/14, write to ",
          p2LinkText: "contact@tramuntanalabs.com",
          p2Post: ".",
        },
      },
    },
  },

  /* ═══════════════════════════════════════════════ */
  de: {
    locale: "de",
    nav: {
      engineers: "Entwickler",
      services: "Leistungen",
      faq: "FAQ",
      cta: "Termin buchen",
      langLabel: "Sprache",
    },

    hero: {
      eyebrow: "Tramuntana Labs · Zwei Senior-Entwickler, freiberuflich als ein Team",
      titleParts: [
        "Hallo, wir sind {n1} und {n2}. ",
        "Vierzig Jahre",
        " Senior-Engineering zwischen uns, jetzt für KMU und Startups, die Software brauchen, die wirklich funktioniert.",
      ],
      ctaPrimary: "30-Min-Termin buchen",
      ctaSecondary: "Team kennenlernen",
      live: "Termin buchen · Antwort in 24 h",
    },

    strip: {
      eyebrow: "Was wir anbieten",
      lede:
        "Von Stunden bis Monate: wählen Sie das Engagement, das zum Problem passt, und passen Sie es im Verlauf an.",
    },

    engineers: {
      eyebrow: "Wir zwei",
      title: "Senior-Hände. Keine Agentur-Schicht.",
      lede:
        "Wir haben Plattformen auf Millionen Nutzer skaliert, Engineering-Organisationen aufgebaut und Backend-Systeme geliefert, die unter echter Last funktionieren müssen. Jetzt bringen wir diese Erfahrung in kleinere Teams: als Senior-Hände, Berater oder Architekten, so lange Sie uns brauchen.",
      worksIn: "Arbeitet mit",
      factLabels: {
        experience: "Erfahrung",
        shipped: "Geliefert",
        ledTeams: "Geführte Teams",
        zeroToOne: "0→1-Aufbauten",
        languages: "Sprachen",
      },
      martin: {
        role: "Engineering Leadership & Backend",
        location: "Konstanz, DE",
        bio:
          "Engineering Manager bei Meta, wo er Teams für LLM-Messsysteme und globale Kommunikationsinfrastruktur über Metas App-Familie leitete. Davor Director of Engineering bei Crowdhouse mit 26 Engineers, die er durch einen vollständigen Plattform-Rewrite führte. Weiß, wie man das System entwirft und das Team aufbaut, das es betreibt.",
        factValues: {
          experience: "19 J.",
          shipped: "10+ Plattformen",
          ledTeams: "Bis zu 26",
          languages: "DE · EN · LT",
        },
      },
      erick: {
        role: "Backend & Infrastruktur",
        location: "Barcelona, ES",
        bio:
          "Zwanzig Jahre in Backend-Systemen, davon ein Jahrzehnt bei XING, wo die Plattform 15 Millionen Nutzer mit 25 Millionen Seitenaufrufen täglich bediente. Ehemaliger Director of Engineering mit 20+ Engineers. Heute freiberuflich mit Spezialisierung auf Elixir, PostgreSQL und AWS für Klienten in Europa und den USA.",
        factValues: {
          experience: "22 J.",
          shipped: "20+ Produkte",
          ledTeams: "Bis zu 20",
          languages: "EN · DE · ES",
        },
      },
    },

    range: {
      eyebrow: "So arbeiten wir mit Ihnen",
      title: "Von Stunden bis Monate: wählen Sie den passenden Umfang.",
      lede:
        "Die meisten Freelance-Shops verkaufen einen Modus. Wir bedienen die gesamte Bandbreite und passen sie im Verlauf an.",
      noteMark: "↓",
      note:
        "Jedes Engagement unten ist flexibel: allein, gemeinsam mit Ihrem Team oder irgendwas dazwischen. Wählen Sie die Dauer; den Rest gestalten wir mit Ihnen.",
      scale: { short: "Kurz", long: "Lang" },
      footPre: "Nicht sicher, wo Sie landen? ",
      footLink: "Schicken Sie uns, was bei Ihnen liegt",
      footPost:
        "; wir sagen Ihnen, was passt, oder dass Sie uns nicht brauchen.",
      items: [
        {
          title: "Beratung & Advisory",
          body:
            "Ein Call, ein Workshop oder eine schriftliche Zweitmeinung. Einstellungsplan, technische Ausrichtung, Tool-Auswahl, Build-vs-Buy.",
          length: "Stunden bis Tage",
        },
        {
          title: "Proof-of-Concept-Aufbauten",
          body:
            "Ein fokussierter Prototyp, der den riskantesten Teil einer Idee validiert. Wir reduzieren auf das Kleinste, das den Punkt beweist.",
          length: "Mehrere Wochen",
        },
        {
          title: "Code-Audit & Rescue",
          body:
            "Codebasis geerbt, die niemand anfassen will? Wir prüfen Architektur, Sicherheit und operatives Risiko und dokumentieren einen Weg nach vorn.",
          length: "Wochen",
        },
        {
          title: "Technische Due Diligence",
          body:
            "Vor Investment oder Akquisition. Wir bewerten Team, Code, Infra und Risiko im Auftrag von Investoren, Käufern oder Boards. Schriftlicher Bericht, den Sie weitergeben können.",
          length: "Tage bis Wochen",
        },
        {
          title: "Startup an den Start bringen",
          body:
            "Zero-to-One-Aufbauten. Wir sind Ihr Engineering-Team: Architektur, erste Einstellungen, erster zahlender Kunde, dann übergeben wir.",
          length: "Wochen bis Monate",
        },
        {
          title: "Eingebettet in Ihr Team",
          body:
            "Langfristiger Retainer. Senior-Hände im Team: Pairing mit Ihren Entwicklern, die schwierigen Probleme angehen, Mentoring für die, die Sie gerade eingestellt haben.",
          length: "Monate",
        },
      ],
    },

    faq: {
      eyebrow: "Häufige Fragen",
      title: "Bevor Sie den Termin buchen.",
      items: [
        {
          q: "Arbeiten Sie auf Stundenbasis oder Festpreis?",
          a:
            "Wir bevorzugen Festpreis bei klar definierten Projekten und einen monatlichen Retainer für laufende Arbeit. Offene Stundenabrechnung machen wir nicht; das ist für niemanden gut.",
        },
        {
          q: "Können Sie mit unserem Team arbeiten?",
          a:
            "Ja. Wir pairen regelmäßig mit internen Entwicklern und helfen oft dabei, den ersten Tech-Lead einzustellen und einzuarbeiten, sobald das Fundament steht.",
        },
        {
          q: "Was, wenn ich kein Techie bin?",
          a:
            "Die meisten unserer Kunden sind es nicht. Wir übersetzen. Sie bekommen verständliche Updates, Festpreise und wöchentliche Demos.",
        },
        {
          q: "Wo sitzen Sie?",
          a:
            "Konstanz und Barcelona. Wir arbeiten remote mit Kunden in Europa, Großbritannien und Nordamerika. Die Zeitzone ist meistens kein Thema.",
        },
        {
          q: "Was passiert, wenn das Projekt schiefgeht?",
          a:
            "Wir nehmen keine Projekte an, die wir nicht liefern können. Falls doch etwas kippt, behalten Sie sämtlichen Code und alle Dokumente bis zu diesem Punkt; nicht abgerechnete Arbeit erstatten wir.",
        },
      ],
    },

    cta: {
      eyebrow: "Schreiben Sie uns",
      title: "Sagen Sie uns, was hakt. Wir sagen Ihnen, ob wir helfen können.",
      lede:
        "30 Minuten am Telefon, kein Pitch. Passen wir, schicken wir innerhalb einer Woche ein schriftliches Angebot. Passen wir nicht, empfehlen wir jemanden, der passt.",
      primary: "30-Min-Termin buchen",
      meta: ["contact@tramuntanalabs.com", "Konstanz · Barcelona", "Antwort in 24 h"],
      replyStamp: "Antwort in 24 h",
    },

    foot: {
      copy: "© 2026 Tramuntana Labs. Aus Konstanz & Barcelona.",
      impressum: "Impressum",
      privacy: "Datenschutz",
    },

    imp: {
      eyebrow: "Rechtliches · Tramuntana Labs",
      title: "Impressum",
      subtitle: "& rechtliche Hinweise",
      lede:
        "Pflichtangaben gemäß § 5 TMG und § 18 MStV für Klienten, Partner und Besucher aus der Europäischen Union.",
      lastUpdated: "Zuletzt aktualisiert · 27. Mai 2026",
      back: "← Zurück zur Startseite",
      footnote:
        "Steueridentifikationsnummern (USt-IdNr., NIF, Steuernummer) werden vor Veröffentlichung dieser Seite ergänzt.",
      streetPlaceholder: "Wollmatinger Straße 57",
      streetPlaceholderEs: "C/ Granada 49B",
      sections: {
        s1: {
          label: "Anbieter",
          title: "Angaben gemäß § 5 TMG",
          intro:
            "Tramuntana Labs ist der Arbeitsname einer Gesellschaft bürgerlichen Rechts (GbR) zwischen zwei freiberuflichen Softwareentwicklern in Deutschland und Spanien.",
        },
        s2: {
          label: "Kontakt",
          title: "So erreichen Sie uns",
          kv: [
            { k: "E-Mail", type: "mailto", v: "contact@tramuntanalabs.com" },
            { k: "Antwortzeit", v: "Innerhalb von 24 Stunden, werktags" },
          ],
        },
        s3: {
          label: "Steuern",
          title: "Umsatzsteuer & Steuernummer",
          kv: [
            { k: "USt-IdNr. (Martin Rechenberger)", v: "[wird ergänzt]" },
            { k: "NIF (Erick Dennis)", v: "[wird ergänzt]" },
            { k: "Steuernummer (Konstanz)", v: "[wird ergänzt]" },
          ],
          note:
            "Rechnungen stellt diejenige Person, die die Arbeit ausführt. EU-Kunden erhalten ggf. Reverse-Charge-Rechnungen.",
        },
        s4: {
          label: "Redaktion",
          title: "Verantwortlich für den Inhalt",
          intro:
            "Gemäß § 18 Abs. 2 MStV verantwortlich für den Inhalt dieser Website:",
        },
        s5: {
          label: "EU-Streit",
          title: "Online-Streitbeilegung",
          p1Pre:
            "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, erreichbar unter ",
          p1LinkText: "ec.europa.eu/consumers/odr",
          p1Post: ".",
          p2:
            "Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        },
        s6: {
          label: "Haftung",
          title: "Haftung für Inhalte & Links",
          p1:
            "Wir erstellen die Inhalte dieser Seiten mit größter Sorgfalt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß §§ 8 bis 10 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich; wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
          p2:
            "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
        },
        s7: {
          label: "Urheberrecht",
          title: "Urheberrecht",
          p1:
            "Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        },
        s8: {
          label: "Datenschutz",
          title: "Datenschutz auf einen Blick",
          p1:
            "Wir verarbeiten ausschließlich die Daten, die zur Kommunikation mit aktuellen und potenziellen Klienten nötig sind. Konkret: Name und E-Mail, wenn Sie einen Termin buchen oder uns schreiben, sowie Server-Logs (IP-Adresse, Anfrage) für sieben Tage zur Absicherung.",
          p2Pre:
            "Wir nutzen kein Analytics, keine Werbung und kein Tracking Dritter auf dieser Seite. Eine vollständige Datenschutzerklärung gemäß Art. 13/14 DSGVO erhalten Sie unter ",
          p2LinkText: "contact@tramuntanalabs.com",
          p2Post: ".",
        },
      },
    },
  },
};

/* Locale persistence helper — shared across pages via localStorage. */
window.PL_LOCALE_KEY = "pl-locale";
window.getPLLocale = function () {
  try {
    const v = localStorage.getItem(window.PL_LOCALE_KEY);
    return v === "de" ? "de" : "en";
  } catch (e) {
    return "en";
  }
};
window.setPLLocale = function (v) {
  try {
    localStorage.setItem(window.PL_LOCALE_KEY, v === "de" ? "de" : "en");
  } catch (e) {}
};
