// ============================================
// EXERCIȚII - Atelier B1: Finalsätze (damit / um... zu)
// Claudia Toth · 5 exerciții cu rezolvări complete + Schreibwerkstatt
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă): accept-urile sunt fără umlaut și acceptăm tastarea pe mobil.
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: damit sau um … zu? (structura + subiectul decid) — 8 itemi
// ============================================
const ex1Data = [
    { id: 'a', text: 'Andreea steht früh auf, ____ pünktlich zu sein.', a: 'um', b: 'damit', correct: 'um', expl: '„zu sein" (zu+Infinitiv) → um. Același subiect (Andreea).' },
    { id: 'b', text: 'Florian spricht langsam, ____ die Patienten ihn verstehen.', a: 'um', b: 'damit', correct: 'damit', expl: 'Subiect diferit (die Patienten) → numai damit.' },
    { id: 'c', text: 'Mihai kauft frisches Gemüse, ____ eine gute Suppe zu kochen.', a: 'um', b: 'damit', correct: 'um', expl: '„zu kochen" + același subiect (Mihai) → um … zu.' },
    { id: 'd', text: 'Ich gebe dir den Schlüssel, ____ du die Tür öffnen kannst.', a: 'um', b: 'damit', correct: 'damit', expl: 'Subiect diferit (du) + verb conjugat „kannst" → damit.' },
    { id: 'e', text: 'Carolina geht in den Park, ____ schöne Fotos zu machen.', a: 'um', b: 'damit', correct: 'um', expl: '„zu machen" + același subiect (Carolina) → um … zu.' },
    { id: 'f', text: 'Die Eltern sparen Geld, ____ ihre Kinder studieren können.', a: 'um', b: 'damit', correct: 'damit', expl: 'Subiect diferit (die Kinder) → numai damit.' },
    { id: 'g', text: 'Ich lerne Deutsch, ____ in Deutschland zu arbeiten.', a: 'um', b: 'damit', correct: 'um', expl: '„zu arbeiten" + același subiect → um … zu.' },
    { id: 'h', text: 'Der Lehrer wiederholt die Regel, ____ alle sie verstehen.', a: 'um', b: 'damit', correct: 'damit', expl: 'Subiect diferit (alle) → damit.' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>⚖️ Alege „um" sau „damit".</strong><br>
        Indiciu: dacă urmează <em>zu + Infinitiv</em> și subiectul e <strong>același</strong> → <strong>um</strong>. Dacă subiectul e <strong>diferit</strong> (alt cineva face acțiunea-scop) → <strong>damit</strong>.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="margin-right:14px;"><input type="radio" name="ex1-${it.id}" value="${it.a}"> ${it.a}</label>
                <label><input type="radio" name="ex1-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex1-${it.id}"]:checked`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct} — ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Pune verbul la locul corect (topica finalsatz) — 7 itemi
// ============================================
const ex2Data = [
    { id: 'a', prompt: 'Ich arbeite viel, damit ich mir ein Auto ____ . <em>(kaufen + können)</em>', hint: 'damit → verbul conjugat la SFÂRȘIT', correct: 'kaufen kann', accept: ['kaufen kann', 'kaufen koennen kann'] },
    { id: 'b', prompt: 'Ich arbeite viel, um mir ein Auto ____ . <em>(kaufen + können)</em>', hint: 'um … zu → zu + Infinitiv la sfârșit', correct: 'kaufen zu können', accept: ['kaufen zu können', 'zu kaufen'] },
    { id: 'c', prompt: 'Andreea wiederholt alles, damit sie nichts ____ . <em>(vergessen)</em>', hint: 'damit → verb conjugat la final', correct: 'vergisst', accept: ['vergisst'] },
    { id: 'd', prompt: 'Andreea wiederholt alles, um nichts ____ . <em>(vergessen)</em>', hint: 'um … zu → zu + Infinitiv', correct: 'zu vergessen', accept: ['zu vergessen'] },
    { id: 'e', prompt: 'Mihai geht in die Stadt, um ____ . <em>(einkaufen)</em>', hint: 'verb separabil: zu între prefix și verb!', correct: 'einzukaufen', accept: ['einzukaufen'] },
    { id: 'f', prompt: 'Wir sprechen leise, damit das Baby ____ . <em>(schlafen)</em>', hint: 'damit → verb conjugat la final', correct: 'schläft', accept: ['schläft'] },
    { id: 'g', prompt: 'Florian ruft an, um einen Termin ____ . <em>(vereinbaren)</em>', hint: 'um … zu → zu + Infinitiv', correct: 'zu vereinbaren', accept: ['zu vereinbaren'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧩 Pune verbul (din paranteză) la forma și locul corect.</strong><br>
        <em>damit</em> → verb conjugat la sfârșit · <em>um … zu</em> → <em>zu + Infinitiv</em> la sfârșit (la verbe separabile: <strong>ein<u>zu</u>kaufen</strong>).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex2-${it.id}" placeholder="forma corectă...">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Transformă „damit" → „um … zu" (același subiect) — 7 itemi
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich spare Geld, damit ich reisen kann.', hint: 'rescrie cu um … zu', correct: 'Ich spare Geld, um reisen zu können.', accept: ['ich spare geld um reisen zu können', 'um reisen zu können', 'ich spare geld um zu reisen', 'um zu reisen'] },
    { id: 'b', prompt: 'Andreea lernt viel, damit sie die Prüfung besteht.', hint: 'rescrie cu um … zu', correct: 'Andreea lernt viel, um die Prüfung zu bestehen.', accept: ['andreea lernt viel um die prüfung zu bestehen', 'um die prüfung zu bestehen'] },
    { id: 'c', prompt: 'Mihai kauft Gemüse, damit er eine Suppe kocht.', hint: 'rescrie cu um … zu', correct: 'Mihai kauft Gemüse, um eine Suppe zu kochen.', accept: ['mihai kauft gemüse um eine suppe zu kochen', 'um eine suppe zu kochen'] },
    { id: 'd', prompt: 'Ich gehe zum Arzt, damit ich gesund werde.', hint: 'rescrie cu um … zu', correct: 'Ich gehe zum Arzt, um gesund zu werden.', accept: ['ich gehe zum arzt um gesund zu werden', 'um gesund zu werden'] },
    { id: 'e', prompt: 'Carolina übt jeden Tag, damit sie besser fotografiert.', hint: 'rescrie cu um … zu', correct: 'Carolina übt jeden Tag, um besser zu fotografieren.', accept: ['carolina übt jeden tag um besser zu fotografieren', 'um besser zu fotografieren'] },
    { id: 'f', prompt: 'Ich stehe früh auf, damit ich den Bus nicht verpasse.', hint: 'rescrie cu um … zu (negație: um … nicht zu)', correct: 'Ich stehe früh auf, um den Bus nicht zu verpassen.', accept: ['ich stehe früh auf um den bus nicht zu verpassen', 'um den bus nicht zu verpassen'] },
    { id: 'g', prompt: 'Wir sparen, damit wir ein Haus kaufen können.', hint: 'rescrie cu um … zu', correct: 'Wir sparen, um ein Haus kaufen zu können.', accept: ['wir sparen um ein haus kaufen zu können', 'um ein haus kaufen zu können', 'um ein haus zu kaufen'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🔄 Rescrie propoziția cu „um … zu" (subiectul e același în ambele).</strong><br>
        Poți scrie propoziția întreagă SAU doar partea cu „um … zu".
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="... um ... zu ...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Besonderheiten — corectează modalul (wollen/möchten/sollen) — 6 itemi
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich brauche viel Geld, um viel reisen zu ____ . <em>(NU „wollen"!)</em>', hint: 'wollen → können (sau scoți modalul)', correct: 'können', accept: ['können'] },
    { id: 'b', prompt: 'Andreea lernt, um die Prüfung zu ____ . <em>(NU „möchten"!)</em>', hint: 'fără modal: pune verbul de bază (bestehen)', correct: 'bestehen', accept: ['bestehen'] },
    { id: 'c', prompt: 'Mihai spart, damit er ein Restaurant eröffnen ____ . <em>(NU „will"!)</em>', hint: 'will → kann (damit + können)', correct: 'kann', accept: ['kann'] },
    { id: 'd', prompt: 'Ich nehme ein Taxi, um nicht zu Fuß gehen zu ____ . <em>(„nu trebui")</em>', hint: 'müssen RĂMÂNE (e voie): zu müssen', correct: 'müssen', accept: ['müssen'] },
    { id: 'e', prompt: 'Wir üben viel, um gut Deutsch zu ____ . <em>(NU „sollen"!)</em>', hint: 'fără modal: verbul de bază (sprechen)', correct: 'sprechen', accept: ['sprechen'] },
    { id: 'f', prompt: 'Florian macht eine Fortbildung, damit er mehr ____ . <em>(NU „will" — verdienen + können)</em>', hint: 'will → kann: ... verdienen kann', correct: 'verdienen kann', accept: ['verdienen kann'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🚫 Repară Finalsatz-ul: wollen / möchten / sollen NU au voie aici.</strong><br>
        Înlocuiește-le cu <strong>können</strong> sau pune verbul de bază. Atenție: <strong>müssen</strong> are voie (rămâne)!
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="forma corectă...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană cu Finalsatz — 8 itemi
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Învăț germană ca să lucrez în Germania. (același subiect → um zu)', correct: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.', accept: ['ich lerne deutsch um in deutschland zu arbeiten', 'um in deutschland zu arbeiten'] },
    { id: 'b', ro: 'Vorbesc rar ca să mă înțelegi. (subiect diferit → damit)', correct: 'Ich spreche langsam, damit du mich verstehst.', accept: ['ich spreche langsam damit du mich verstehst', 'damit du mich verstehst'] },
    { id: 'c', ro: 'Mihai cumpără legume ca să gătească o supă. (um zu)', correct: 'Mihai kauft Gemüse, um eine Suppe zu kochen.', accept: ['mihai kauft gemüse um eine suppe zu kochen', 'um eine suppe zu kochen'] },
    { id: 'd', ro: 'Economisesc bani ca să-mi pot cumpăra o mașină. (um zu)', correct: 'Ich spare Geld, um mir ein Auto kaufen zu können.', accept: ['ich spare geld um mir ein auto kaufen zu können', 'um mir ein auto kaufen zu können', 'um ein auto zu kaufen'] },
    { id: 'e', ro: 'Părinții economisesc ca să poată studia copiii lor. (subiect diferit → damit)', correct: 'Die Eltern sparen, damit ihre Kinder studieren können.', accept: ['die eltern sparen damit ihre kinder studieren können', 'damit ihre kinder studieren können'] },
    { id: 'f', ro: 'Mă trezesc devreme ca să prind trenul. (um zu)', correct: 'Ich stehe früh auf, um den Zug zu erreichen.', accept: ['ich stehe früh auf um den zug zu erreichen', 'um den zug zu erreichen', 'um den zug zu bekommen'] },
    { id: 'g', ro: 'Andreea repetă tot ca să nu uite nimic. (um … nicht zu)', correct: 'Andreea wiederholt alles, um nichts zu vergessen.', accept: ['andreea wiederholt alles um nichts zu vergessen', 'um nichts zu vergessen'] },
    { id: 'h', ro: 'Îți dau cheia ca să poți deschide ușa. (subiect diferit → damit)', correct: 'Ich gebe dir den Schlüssel, damit du die Tür öffnen kannst.', accept: ['ich gebe dir den schlüssel damit du die tür öffnen kannst', 'damit du die tür öffnen kannst'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Tradu în germană cu un Finalsatz (damit / um … zu).</strong><br>
        Indiciul din paranteză îți spune care formă se potrivește.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie propoziția în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    html += schreibwerkstattHTML();
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

// ===== SCHREIBWERKSTATT — Trimite textul Claudiei (Google Form) =====
function schreibwerkstattHTML() {
    return `
    <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 28px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
        <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
        <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
        <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 560px; margin-left: auto; margin-right: auto; line-height: 1.55;">
            Scrie <strong>5-6 propoziții despre scopurile tale</strong> (de ce înveți germană, de ce muncești, de ce economisești...) folosind <strong>damit</strong> și <strong>um … zu</strong>. Încearcă măcar <strong>2 propoziții cu subiect diferit</strong> (acolo unde e obligatoriu damit). Îți răspund personal pe email. 🦋
        </p>
        <a href="https://forms.gle/dvQxgScS8ETCzSAY9" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
            Trimite textul Claudiei →
        </a>
        <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
            ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
        </p>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
