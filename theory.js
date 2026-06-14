// ============================================
// TEORIE - Atelier B1: Finalsätze (damit / um... zu)
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare B1 · Satzbau
// Propozițiile finale (de scop). Sursă: EasyDeutsch Satzbau L8.5
// ============================================

const theoryHTML = `
    <!-- 0: Intro + cast + notice diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🎯 1. Ce sunt Finalsätze (propozițiile de scop)?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae / a</code> pentru <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe / o</code> pentru <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue / u</code> pentru <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 La ce întrebare răspund?</h4>
                <p>Cu un <strong>Finalsatz</strong> (propoziție finală) exprimi un <strong>scop</strong>, o <strong>intenție</strong> sau un <strong>țel</strong> — <em>de ce / pentru ce</em> faci ceva. Răspund la întrebările:</p>
                <p style="margin-top: 8px; text-align: center; font-size: 1.05rem;"><strong style="color: #047857;">Wozu? · Wofür? · Zu welchem Zweck? · Mit welcher Absicht? · Mit welchem Ziel?</strong></p>
                <p style="margin-top: 8px;">(La ce? · Pentru ce? · În ce scop? · Cu ce intenție? · Cu ce țel?)</p>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Două unelte pentru același scop</h4>
                <p>Există <strong>două</strong> moduri de a construi un Finalsatz — și amândouă se traduc la fel în română (<em>„ca să..." / „pentru a..."</em>):</p>
                <ul>
                    <li><strong style="color: #047857;">damit</strong> — un Nebensatz normal (verbul pleacă la <strong>sfârșit</strong>)</li>
                    <li><strong style="color: #047857;">um … zu</strong> — o construcție cu infinitiv (<strong>zu + Infinitiv</strong> la sfârșit)</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de">Andreea lernt jeden Tag, <strong>damit sie die Prüfung besteht</strong>.</p>
                <p class="ro">Andreea învață în fiecare zi, <strong>ca să treacă examenul</strong>.</p>
            </div>
            <div class="example-box">
                <p class="de">Andreea lernt jeden Tag, <strong>um die Prüfung zu bestehen</strong>.</p>
                <p class="ro">Andreea învață în fiecare zi, <strong>pentru a trece examenul</strong>.</p>
            </div>
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <p style="margin: 0;">👆 Aceeași idee, două forme. În secțiunile următoare înveți <strong>cum</strong> se construiește fiecare și — cel mai important — <strong>când</strong> ai voie să folosești <code>um … zu</code>.</p>
            </div>
        </div>
    </div>

    <!-- 1: damit -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🔗 2. Finalsätze cu „damit"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-damit.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 „damit" introduce un Nebensatz → verbul conjugat la SFÂRȘIT</h4>
                <p>După <strong>damit</strong> ordinea e cea de la orice propoziție subordonată: mai întâi <strong>subiectul</strong>, apoi restul, iar <strong>verbul conjugat pleacă la final</strong>. Între cele două propoziții pui mereu <strong>virgulă</strong>.</p>
            </div>

            <div class="example-box">
                <p class="de">Ich arbeite so viel, <strong>damit</strong> ich mir den Urlaub <strong>leisten kann</strong>.</p>
                <p class="ro">Muncesc atât de mult, ca să-mi pot permite concediul.</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <h4>📍 Poziția propoziției cu „damit"</h4>
                <p>De obicei Nebensatz-ul stă <strong>după</strong> propoziția principală, dar îl poți și <strong>muta în față</strong>. Dacă situația e clară, poate sta chiar <strong>singur</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Poziție</th><th>Exemplu</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td class="verb">damit DUPĂ</td><td>Ich arbeite so viel, <strong>damit ich mir den Urlaub leisten kann</strong>.</td><td class="ro-text">Muncesc atât de mult, ca să-mi pot permite concediul.</td></tr>
                    <tr><td class="verb">damit ÎN FAȚĂ</td><td><strong>Damit ich mir den Urlaub leisten kann</strong>, arbeite ich so viel.</td><td class="ro-text">Ca să-mi pot permite concediul, muncesc atât de mult.</td></tr>
                    <tr><td class="verb">damit SINGUR</td><td>— Wofür arbeitest du so viel? — <strong>Damit ich mir den Urlaub leisten kann.</strong></td><td class="ro-text">— Ca să-mi pot permite concediul.</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Când muți propoziția cu <strong>damit</strong> în față, nu uita: pe locul 2 din propoziția principală rămâne tot <strong>verbul</strong> — de aceea spunem „..., <strong>arbeite ich</strong> so viel" (verb înainte de subiect). E regula „verbul mereu pe poziția 2". 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: um zu -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>♾️ 3. Finalsätze cu „um … zu"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-um-zu.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 „um … zu" = construcție cu infinitiv (FĂRĂ subiect propriu)</h4>
                <p><strong>um</strong> stă imediat după virgulă, iar <strong>zu + Infinitiv</strong> merge la <strong>sfârșitul</strong> propoziției. Construcția <strong>NU are subiect propriu</strong> — îl împrumută de la propoziția principală.</p>
            </div>

            <div class="example-box">
                <p class="de">Ich arbeite so viel, <strong>um</strong> mir den Urlaub leisten <strong>zu können</strong>.</p>
                <p class="ro">Muncesc atât de mult, pentru a-mi putea permite concediul.</p>
            </div>

            <div class="theory-box" style="background: #fef2f2; border-color: #ef4444;">
                <h4>⚠️ REGULA DE AUR: același subiect în ambele propoziții!</h4>
                <p>Poți folosi <strong>um … zu</strong> <strong>NUMAI dacă subiectul</strong> din propoziția principală e <strong>același</strong> cu cel al acțiunii-scop. Cu <strong>damit</strong> nu există această restricție — merge mereu.</p>
            </div>
            <div class="example-box">
                <p class="de">✅ <strong>Andreea</strong> lernt viel, um <strong>(Andreea)</strong> die Prüfung zu bestehen.</p>
                <p class="ro">Andreea învață mult ca să treacă examenul. <em>(același subiect → um zu OK)</em></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Atenție la verbele cu prefix separabil: <strong>zu</strong> se bagă ÎNTRE prefix și verb! „ein<strong>zu</strong>kaufen", „an<strong>zu</strong>rufen", „auf<strong>zu</strong>stehen". Ex: „Ich gehe in die Stadt, um <strong>einzukaufen</strong>." 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Vergleich -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⚖️ 4. „damit" sau „um … zu"? — cum alegi</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-vergleich.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🧭 Întrebarea cheie: subiectul e ACELAȘI?</h4>
                <ul>
                    <li><strong style="color: #047857;">Același subiect</strong> → poți folosi <strong>amândouă</strong> (um … zu e mai elegant/mai scurt).</li>
                    <li><strong style="color: #dc2626;">Subiecte diferite</strong> → <strong>NUMAI damit</strong>. „um … zu" e interzis.</li>
                </ul>
            </div>

            <table class="theory-table">
                <thead><tr><th>Situație</th><th>Propoziția-scop</th><th>Forme corecte</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Wozu braucht Mihai ein Auto?<br><span class="ro-translation">La ce-i trebuie lui Mihai o mașină?</span></td><td>Mihai kann in den Urlaub fahren.<br><span class="ro-translation">(același subiect: Mihai)</span></td><td>Mihai braucht ein Auto, <strong>um</strong> in den Urlaub <strong>zu fahren</strong>. <br>= Mihai braucht ein Auto, <strong>damit</strong> er in den Urlaub <strong>fahren kann</strong>.</td></tr>
                    <tr><td class="verb">Wozu baut China einen Staudamm?<br><span class="ro-translation">La ce construiește China un baraj?</span></td><td>Die Menschen können den Strom nutzen.<br><span class="ro-translation">(subiecte diferite: China ↔ Menschen)</span></td><td>China baut einen Staudamm, <strong>damit die Menschen den Strom nutzen können</strong>. <br><span style="color:#dc2626;">✗ „um … zu" NU e posibil (subiect diferit).</span></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Truc de verificare: pune mental subiectul în propoziția cu „um zu". Dacă e <strong>același</strong> ca în prima → merge. Dacă ar fi <strong>altcineva</strong> → ai nevoie de <strong>damit</strong>. „China baut..." dar „<strong>oamenii</strong> folosesc curentul" — alt subiect, deci damit! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Besonderheiten -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🚫 5. Besonderheiten — verbele modale wollen / möchten / sollen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-besonderheiten.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #fef2f2; border-color: #ef4444;">
                <h4>⚠️ wollen, möchten, sollen NU pot sta într-un Finalsatz</h4>
                <p>Aceste modale exprimă <strong>ele însele</strong> un scop / o intenție / un țel — deci ar fi o repetare. În Finalsatz le <strong>înlocuiești cu „können"</strong> sau le <strong>scoți complet</strong>.</p>
            </div>

            <div class="example-box">
                <p class="de">— Wofür brauche ich viel Geld? — Ich <strong>will</strong> viel reisen.</p>
                <p class="ro">— Pentru ce îmi trebuie mulți bani? — Vreau să călătoresc mult.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Soluție</th><th>Finalsatz corect</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td class="verb">will → können</td><td>Ich brauche viel Geld, um viel reisen <strong>zu können</strong>.</td><td class="ro-text">Îmi trebuie mulți bani ca să pot călători mult.</td></tr>
                    <tr><td class="verb">will → scos</td><td>Ich brauche viel Geld, um viel <strong>zu reisen</strong>.</td><td class="ro-text">Îmi trebuie mulți bani ca să călătoresc mult.</td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <p style="margin:0;">❌ INTERZIS: <span style="text-decoration: line-through;">..., um viel reisen <strong>zu wollen</strong>.</span> &nbsp;|&nbsp; <span style="text-decoration: line-through;">..., damit ich viel reisen <strong>will</strong>.</span></p>
            </div>
        </div>
    </div>

    <!-- 5: Mini-ghid -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🗺️ 6. Mini-ghid: alege în 3 pași</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-ghid.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>✅ Pasul 1 — Subiectul e același?</h4>
                <p><strong>DA</strong> → poți folosi <code>um … zu</code> (sau damit). &nbsp; <strong>NU</strong> → folosești obligatoriu <code>damit</code>.</p>
            </div>
            <div class="theory-box">
                <h4>✅ Pasul 2 — Ai un modal wollen/möchten/sollen?</h4>
                <p>Da → înlocuiește-l cu <strong>können</strong> sau scoate-l. (müssen rămâne ca atare: „..., um nicht laufen <strong>zu müssen</strong>".)</p>
            </div>
            <div class="theory-box">
                <h4>✅ Pasul 3 — Pune verbul la locul corect</h4>
                <p><code>damit</code> → verbul conjugat la <strong>sfârșit</strong> (..., damit er fahren <strong>kann</strong>). <br><code>um … zu</code> → <strong>zu + Infinitiv</strong> la sfârșit (..., um <strong>zu fahren</strong>).</p>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>📝 Recapitulare (Zusammenfassung)</h4>
                <ul>
                    <li>Finalsätze = scop / intenție / țel (Wozu? Wofür?).</li>
                    <li>Se fac cu <strong>damit</strong> (Nebensatz, verb la final) sau <strong>um … zu</strong> (infinitiv).</li>
                    <li><strong>um … zu</strong> doar la <strong>același subiect</strong>; subiecte diferite → <strong>damit</strong>.</li>
                    <li><strong>wollen / möchten / sollen</strong> nu pot sta în Finalsatz → können / scoase.</li>
                </ul>
            </div>
        </div>
    </div>
`;

(function () {
    function injectTheory() {
        const container = document.getElementById('theory-container');
        if (container) container.innerHTML = theoryHTML;
    }
    if (document.readyState !== 'loading') { injectTheory(); }
    else { document.addEventListener('DOMContentLoaded', injectTheory); }
})();
