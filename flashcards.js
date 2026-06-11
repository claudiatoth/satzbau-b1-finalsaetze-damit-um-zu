// ============================================
// FLASHCARDS - Atelier B1: Finalsätze (damit / um... zu)
// Claudia Toth · 32 carduri: konnektoren + concepte + exemple + reguli
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Konnektoren & Fragewörter (8) ===
    { de: "damit", ro: "ca să... (conjuncție; verbul conjugat pleacă la final)", audio: "audio/letters/damit.wav" },
    { de: "um ... zu", ro: "pentru a... / ca să... (construcție cu infinitiv)", audio: "audio/letters/um-zu.wav" },
    { de: "Wozu?", ro: "La ce? / În ce scop?", audio: "audio/letters/wozu.wav" },
    { de: "Wofür?", ro: "Pentru ce?", audio: "audio/letters/wofuer.wav" },
    { de: "Zu welchem Zweck?", ro: "În ce scop?", audio: "audio/letters/zu-welchem-zweck.wav" },
    { de: "Mit welcher Absicht?", ro: "Cu ce intenție?", audio: "audio/letters/mit-welcher-absicht.wav" },
    { de: "Mit welchem Ziel?", ro: "Cu ce țel?", audio: "audio/letters/mit-welchem-ziel.wav" },
    { de: "der Zweck · die Zwecke", ro: "scopul · scopurile", audio: "audio/letters/der-zweck.wav" },

    // === Begriffe (concepte) (8) ===
    { de: "der Finalsatz · die Finalsätze", ro: "propoziția finală (de scop) · propozițiile finale", audio: "audio/letters/der-finalsatz.wav" },
    { de: "der Nebensatz · die Nebensätze", ro: "propoziția subordonată (verb la final) · subordonatele", audio: "audio/letters/der-nebensatz.wav" },
    { de: "der Infinitivsatz · die Infinitivsätze", ro: "propoziția infinitivală (um zu) · infinitivalele", audio: "audio/letters/der-infinitivsatz.wav" },
    { de: "der Hauptsatz · die Hauptsätze", ro: "propoziția principală · principalele", audio: "audio/letters/der-hauptsatz.wav" },
    { de: "das Ziel · die Ziele", ro: "țelul · țelurile", audio: "audio/letters/das-ziel.wav" },
    { de: "die Absicht · die Absichten", ro: "intenția · intențiile", audio: "audio/letters/die-absicht.wav" },
    { de: "die Konjunktion · die Konjunktionen", ro: "conjuncția · conjuncțiile", audio: "audio/letters/die-konjunktion.wav" },
    { de: "das Subjekt · die Subjekte", ro: "subiectul · subiectele", audio: "audio/letters/das-subjekt.wav" },

    // === Beispielsätze (exemple) (8) ===
    { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", ro: "Învăț germană ca să lucrez în Germania.", audio: "audio/letters/bsp-deutsch-arbeiten.wav" },
    { de: "Andreea lernt viel, um die Prüfung zu bestehen.", ro: "Andreea învață mult ca să treacă examenul.", audio: "audio/letters/bsp-pruefung.wav" },
    { de: "Mihai kauft Gemüse, um eine Suppe zu kochen.", ro: "Mihai cumpără legume ca să gătească o supă.", audio: "audio/letters/bsp-suppe.wav" },
    { de: "Ich gehe in die Stadt, um einzukaufen.", ro: "Mă duc în oraș ca să fac cumpărături (zu între prefix și verb).", audio: "audio/letters/bsp-einkaufen.wav" },
    { de: "Florian spricht langsam, damit die Patienten ihn verstehen.", ro: "Florian vorbește rar ca pacienții să-l înțeleagă (subiect diferit).", audio: "audio/letters/bsp-florian.wav" },
    { de: "Ich gebe dir den Schlüssel, damit du die Tür öffnen kannst.", ro: "Îți dau cheia ca să poți deschide ușa (subiect diferit).", audio: "audio/letters/bsp-schluessel.wav" },
    { de: "Die Eltern sparen, damit ihre Kinder studieren können.", ro: "Părinții economisesc ca să poată studia copiii lor.", audio: "audio/letters/bsp-eltern.wav" },
    { de: "Ich stehe früh auf, um den Bus nicht zu verpassen.", ro: "Mă trezesc devreme ca să nu pierd autobuzul.", audio: "audio/letters/bsp-bus.wav" },

    // === Regeln (reguli) (8) ===
    { de: "gleiches Subjekt: um ... zu", ro: "același subiect → poți folosi um... zu (mai scurt/elegant)", audio: "audio/letters/regel-gleiches-subjekt.wav" },
    { de: "anderes Subjekt: nur damit", ro: "subiect diferit → NUMAI damit (um zu interzis)", audio: "audio/letters/regel-anderes-subjekt.wav" },
    { de: "zu + Infinitiv am Ende", ro: "la um... zu: zu + infinitiv la sfârșitul propoziției", audio: "audio/letters/regel-zu-infinitiv.wav" },
    { de: "konjugiertes Verb am Ende", ro: "la damit: verbul conjugat pleacă la sfârșit", audio: "audio/letters/regel-verb-ende.wav" },
    { de: "nicht: wollen, möchten, sollen", ro: "aceste modale NU pot sta în Finalsatz → können sau scoase", audio: "audio/letters/regel-modale.wav" },
    { de: "aber: um nicht ... zu müssen", ro: "müssen RĂMÂNE (e voie): um nicht laufen zu müssen", audio: "audio/letters/regel-muessen.wav" },
    { de: "einzukaufen, anzurufen, aufzustehen", ro: "verbe separabile: zu se bagă ÎNTRE prefix și verb", audio: "audio/letters/regel-separabile.wav" },
    { de: "Komma vor um / vor damit", ro: "mereu virgulă înainte de um și de damit", audio: "audio/letters/regel-komma.wav" }
];
