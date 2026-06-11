// ============================================
// VERB-KONJUGATION - Atelier B1: Finalsätze (verbele modale)
// 5 modale relevante la Besonderheiten: können · müssen · wollen · möchten · sollen
// Verificat PONS. Präteritum = IMPERFECT (Regula 12).
// ============================================

const verbsData = [
    {
        inf: 'können', ro: 'a putea', typ: 'modal (neregulat)', aux: 'haben', part: 'gekonnt',
        praes: [
            ['ich','kann','pot'],['du','kannst','poți'],['er/sie/es','kann','poate'],
            ['wir','können','putem'],['ihr','könnt','puteți'],['sie/Sie','können','pot / puteți']
        ],
        praet: [
            ['ich','konnte','puteam'],['du','konntest','puteai'],['er/sie/es','konnte','putea'],
            ['wir','konnten','puteam'],['ihr','konntet','puteați'],['sie/Sie','konnten','puteau']
        ],
        perf: [
            ['ich','habe gekonnt','am putut'],['du','hast gekonnt','ai putut'],['er/sie/es','hat gekonnt','a putut'],
            ['wir','haben gekonnt','am putut'],['ihr','habt gekonnt','ați putut'],['sie/Sie','haben gekonnt','au putut']
        ],
        note: '✅ Modalul „salvator": în Finalsatz, wollen/möchten/sollen se înlocuiesc cu <strong>können</strong>. Cu alt verb, Perfekt cu Ersatzinfinitiv: Ich habe schwimmen <strong>können</strong> (NU gekonnt).'
    },
    {
        inf: 'müssen', ro: 'a trebui (să)', typ: 'modal (neregulat)', aux: 'haben', part: 'gemusst',
        praes: [
            ['ich','muss','trebuie (să)'],['du','musst','trebuie (să)'],['er/sie/es','muss','trebuie (să)'],
            ['wir','müssen','trebuie (să)'],['ihr','müsst','trebuie (să)'],['sie/Sie','müssen','trebuie (să)']
        ],
        praet: [
            ['ich','musste','trebuia (să)'],['du','musstest','trebuia (să)'],['er/sie/es','musste','trebuia (să)'],
            ['wir','mussten','trebuia (să)'],['ihr','musstet','trebuia (să)'],['sie/Sie','mussten','trebuia (să)']
        ],
        perf: [
            ['ich','habe gemusst','a trebuit'],['du','hast gemusst','a trebuit'],['er/sie/es','hat gemusst','a trebuit'],
            ['wir','haben gemusst','a trebuit'],['ihr','habt gemusst','a trebuit'],['sie/Sie','haben gemusst','a trebuit']
        ],
        note: '✅ Singurul modal care are voie în Finalsatz: <strong>um nicht ... zu müssen</strong> (Ich nehme ein Taxi, um nicht laufen zu müssen).'
    },
    {
        inf: 'wollen', ro: 'a vrea', typ: 'modal (neregulat)', aux: 'haben', part: 'gewollt',
        praes: [
            ['ich','will','vreau'],['du','willst','vrei'],['er/sie/es','will','vrea'],
            ['wir','wollen','vrem'],['ihr','wollt','vreți'],['sie/Sie','wollen','vor / vreți']
        ],
        praet: [
            ['ich','wollte','voiam'],['du','wolltest','voiai'],['er/sie/es','wollte','voia'],
            ['wir','wollten','voiam'],['ihr','wolltet','voiați'],['sie/Sie','wollten','voiau']
        ],
        perf: [
            ['ich','habe gewollt','am vrut'],['du','hast gewollt','ai vrut'],['er/sie/es','hat gewollt','a vrut'],
            ['wir','haben gewollt','am vrut'],['ihr','habt gewollt','ați vrut'],['sie/Sie','haben gewollt','au vrut']
        ],
        note: '🚫 NU în Finalsatz (exprimă deja un scop) → înlocuiește cu <strong>können</strong> sau scoate-l: „..., um viel zu reisen".'
    },
    {
        inf: 'möchten', ro: 'a dori (politicos)', typ: 'modal (neregulat)', aux: 'haben', part: 'gemocht',
        praes: [
            ['ich','möchte','aș dori'],['du','möchtest','ai dori'],['er/sie/es','möchte','ar dori'],
            ['wir','möchten','am dori'],['ihr','möchtet','ați dori'],['sie/Sie','möchten','ar dori']
        ],
        praet: [
            ['ich','wollte','voiam'],['du','wolltest','voiai'],['er/sie/es','wollte','voia'],
            ['wir','wollten','voiam'],['ihr','wolltet','voiați'],['sie/Sie','wollten','voiau']
        ],
        perf: [
            ['ich','habe gewollt','am vrut'],['du','hast gewollt','ai vrut'],['er/sie/es','hat gewollt','a vrut'],
            ['wir','haben gewollt','am vrut'],['ihr','habt gewollt','ați vrut'],['sie/Sie','haben gewollt','au vrut']
        ],
        note: '🚫 NU în Finalsatz → können / scos. <strong>möchten</strong> = formă politicoasă (Konjunktiv II) și NU are trecut propriu — la trecut se folosește <strong>wollte</strong> (de aceea tabelele Präteritum/Perfekt arată formele lui wollen).'
    },
    {
        inf: 'sollen', ro: 'a trebui (să) / a se cuveni', typ: 'modal (neregulat)', aux: 'haben', part: 'gesollt',
        praes: [
            ['ich','soll','ar trebui (să)'],['du','sollst','ar trebui (să)'],['er/sie/es','soll','ar trebui (să)'],
            ['wir','sollen','ar trebui (să)'],['ihr','sollt','ar trebui (să)'],['sie/Sie','sollen','ar trebui (să)']
        ],
        praet: [
            ['ich','sollte','trebuia (să)'],['du','solltest','trebuia (să)'],['er/sie/es','sollte','trebuia (să)'],
            ['wir','sollten','trebuia (să)'],['ihr','solltet','trebuia (să)'],['sie/Sie','sollten','trebuia (să)']
        ],
        perf: [
            ['ich','habe gesollt','a trebuit'],['du','hast gesollt','a trebuit'],['er/sie/es','hat gesollt','a trebuit'],
            ['wir','haben gesollt','a trebuit'],['ihr','habt gesollt','a trebuit'],['sie/Sie','haben gesollt','a trebuit']
        ],
        note: '🚫 NU în Finalsatz (exprimă o cerință/scop venit de la altcineva) → înlocuiește cu <strong>können</strong> sau scoate-l.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#6b7280;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe modale</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Sunt exact modalele din regula Besonderheiten: <strong>wollen, möchten, sollen</strong> NU au voie în Finalsatz (→ können / scoase), iar <strong>müssen</strong> rămâne.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Toate modalele sunt <strong>neregulate</strong> și fac Perfekt cu <strong>haben</strong>. Ține minte cheia lecției: în propoziția de scop, <strong>wollen/möchten/sollen → können</strong> (sau le scoți), dar <strong>müssen</strong> rămâne. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = (v.typ.indexOf('tare') === 0 || v.typ.indexOf('modal') === 0 || v.typ.indexOf('neregulat') === 0) ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
