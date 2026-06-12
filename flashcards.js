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

// ============================================
// RUNTIME FLASHCARDS — render + flip (.flipped) + navigare + audio WAV
// Markup aliniat la CSS-ul lecției (.flashcard-controls / .flashcard-btn)
// flipCard() comută clasa .flipped → CSS dezvăluie traducerea (.flashcard.flipped .ro)
// ============================================
let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Click pe card pentru traducere · 🔊 pentru pronunție · butoanele pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (card && card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
