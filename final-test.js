// ============================================
// TEST FINAL - Atelier A2: Arbeit & Job
// Claudia Toth · 15 întrebări (job suchen + bei der Arbeit + Bewerbung + traducere)
// ============================================

const finalTestData = [
    // 🎯 damit sau um zu? (4)
    { type: 'multiple', category: '🎯 damit / um zu', question: 'Poți folosi „um … zu" NUMAI atunci când:', options: ['subiectul e ACELAȘI în ambele propoziții', 'subiectele sunt diferite', 'propoziția e la trecut', 'există un verb modal'], correct: 'subiectul e ACELAȘI în ambele propoziții', explanation: 'um … zu cere același subiect. Subiecte diferite → numai damit.' },
    { type: 'luckentext', category: '🎯 damit / um zu', question: 'Completează (subiect diferit: die Patienten):', sentence: 'Florian spricht langsam, <strong>______</strong> die Patienten ihn verstehen.', translation: 'subiect diferit → ?', accept: ['damit'], correct: 'damit', explanation: 'Subiect diferit (die Patienten) → numai damit.' },
    { type: 'luckentext', category: '🎯 damit / um zu', question: 'Completează (urmează zu + Infinitiv, același subiect):', sentence: 'Ich lerne viel, <strong>______</strong> die Prüfung zu bestehen.', translation: 'zu + Infinitiv → ?', accept: ['um'], correct: 'um', explanation: '„zu bestehen" + același subiect → um … zu.' },
    { type: 'multiple', category: '🎯 damit / um zu', question: '„damit" introduce:', options: ['un Nebensatz (verbul conjugat la final)', 'un Infinitivsatz (zu + Infinitiv)', 'o propoziție principală', 'o întrebare'], correct: 'un Nebensatz (verbul conjugat la final)', explanation: 'damit = conjuncție subordonatoare → verbul conjugat pleacă la final.' },

    // 🔧 Topica & zu (4)
    { type: 'luckentext', category: '🔧 Topica & zu', question: 'Completează (verb separabil: einkaufen):', sentence: 'Mihai geht in die Stadt, um <strong>______</strong>.', translation: 'zu se bagă între prefix și verb', accept: ['einzukaufen'], correct: 'einzukaufen', explanation: 'La verbe separabile, zu stă ÎNTRE prefix și verb: ein-zu-kaufen.' },
    { type: 'luckentext', category: '🔧 Topica & zu', question: 'Completează (damit → verb conjugat la final):', sentence: 'Ich arbeite viel, damit ich ein Auto kaufen <strong>______</strong>.', translation: 'können, persoana ich', accept: ['kann'], correct: 'kann', explanation: 'damit → verbul conjugat (kann) pleacă la sfârșit.' },
    { type: 'multiple', category: '🔧 Topica & zu', question: 'La „um … zu", grupul „zu + Infinitiv" stă:', options: ['la sfârșitul propoziției', 'pe poziția 2', 'imediat după „um"', 'la început'], correct: 'la sfârșitul propoziției', explanation: 'um (după virgulă) … zu + Infinitiv (la sfârșit).' },
    { type: 'luckentext', category: '🔧 Topica & zu', question: 'Completează (um … zu, verbul vergessen):', sentence: 'Andreea wiederholt alles, um nichts <strong>______</strong>.', translation: 'zu + Infinitiv', accept: ['zu vergessen'], correct: 'zu vergessen', explanation: 'um nichts zu vergessen (zu + Infinitiv la final).' },

    // 🚫 Besonderheiten (3)
    { type: 'multiple', category: '🚫 Besonderheiten', question: 'Care verb modal NU poate sta într-un Finalsatz?', options: ['wollen', 'müssen', 'können', 'haben (nu e modal)'], correct: 'wollen', explanation: 'wollen/möchten/sollen exprimă ele însele un scop → interzise. können și müssen sunt OK.' },
    { type: 'luckentext', category: '🚫 Besonderheiten', question: 'Completează (NU „wollen" → modalul „salvator"):', sentence: 'Ich brauche Geld, um viel reisen zu <strong>______</strong>.', translation: 'wollen → ?', accept: ['können'], correct: 'können', explanation: 'wollen se înlocuiește cu können (sau scoți modalul: „um viel zu reisen").' },
    { type: 'multiple', category: '🚫 Besonderheiten', question: 'Care modal RĂMÂNE permis în Finalsatz?', options: ['müssen', 'wollen', 'möchten', 'sollen'], correct: 'müssen', explanation: 'müssen are voie: „..., um nicht laufen zu müssen". wollen/möchten/sollen — nu.' },

    // 🗣️ Traducere (4)
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (același subiect → um zu):', ro: 'Învăț germană ca să lucrez în Germania.', accept: ['ich lerne deutsch um in deutschland zu arbeiten', 'um in deutschland zu arbeiten'], correct: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.', explanation: 'Același subiect (ich) → um … zu.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (subiect diferit → damit):', ro: 'Vorbesc rar ca să mă înțelegi.', accept: ['ich spreche langsam damit du mich verstehst', 'damit du mich verstehst'], correct: 'Ich spreche langsam, damit du mich verstehst.', explanation: 'Subiect diferit (du) → damit + verb conjugat la final.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (um zu):', ro: 'Mihai cumpără legume ca să gătească o supă.', accept: ['mihai kauft gemüse um eine suppe zu kochen', 'um eine suppe zu kochen'], correct: 'Mihai kauft Gemüse, um eine Suppe zu kochen.', explanation: 'Același subiect (Mihai) → um … zu.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (subiect diferit → damit):', ro: 'Părinții economisesc ca să poată studia copiii lor.', accept: ['die eltern sparen damit ihre kinder studieren können', 'damit ihre kinder studieren können'], correct: 'Die Eltern sparen, damit ihre Kinder studieren können.', explanation: 'Subiecte diferite (Eltern ↔ Kinder) → numai damit.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre Finalsätze (damit / um … zu).</p>
            <ul class="test-info-list">
                <li>🎯 damit / um zu (4) · 🔧 Topica & zu (4) · 🚫 Besonderheiten (3) · 🗣️ Traducere (4)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #6b7280;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
