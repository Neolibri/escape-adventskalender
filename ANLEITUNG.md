# Escape-Adventskalender – Anleitung

Eine kleine App (PWA) für deinen Escape-Room-Adventskalender. Pro Tag können
die Leute **1. Hinweis**, **2. Hinweis** und **Lösung** aufklappen. Darüber
liegt eine Übersicht mit allen Tagen **1.–24. Dezember**.

Komplett kostenlos über **GitHub Pages**. Kein Google Drive, kein Server, keine
laufenden Kosten.

---

## Was liegt in diesem Ordner?

| Datei / Ordner        | Wofür                                                              |
|-----------------------|--------------------------------------------------------------------|
| `index.html`          | Die App selbst                                                     |
| `js/inhalte.js`       | **HIER deine Texte eintragen** (Hinweise + Lösungen, 24 Tage)      |
| `js/config.js`        | Einstellungen: Titel, Farben (grob), Testmodus, Freischaltung      |
| `css/styles.css`      | Design im Detail (Farben, Rundungen, Schrift)                     |
| `js/app.js`           | Technik – musst du normalerweise nicht anfassen                   |
| `manifest.json`, `service-worker.js` | Machen die Seite zur installierbaren App           |
| `icons/`              | App-Icons (Platzhalter, kannst du später austauschen)             |
| `qr-generator.html`   | Erzeugt alle QR-Codes, wenn deine Adresse steht                   |

---

## 1) Deine Texte eintragen

Öffne `js/inhalte.js` mit einem beliebigen Texteditor. Für jeden Tag stehen
dort vier Felder. Trage einfach deine echten Texte zwischen die
Anführungszeichen ein:

```js
1: {
  titel:    "Der verschwundene Schlüssel",
  hinweis1: "Schau dir die Zahlen auf Seite 3 genauer an.",
  hinweis2: "Lies nur jede zweite Zahl.",
  loesung:  "Der Code lautet 7-2-9."
},
```

- `titel` darf leer sein: `titel: ""`
- Zeilenumbruch im Text: `<br>`
- Fett: `<b>...</b>`
- Bild einfügen: lege es in einen neuen Ordner `bilder/` und schreibe
  `<img src="bilder/tag1.jpg">` in den Text.

> Wenn du mir die Texte schickst, trage ich sie auch gern für dich ein.

---

## 2) Einstellungen (`js/config.js`)

- `titel` / `untertitel` – die Überschrift oben.
- `testmodus: true` – **alle Tage offen, egal welches Datum** (zum Ausprobieren).
  Vor dem Echteinsatz im Dezember auf `false` stellen.
- `freischaltungNachDatum: true` – Tag X öffnet erst am X. Dezember.
- `jahr: 2026` – auf das Jahr stellen, in dem der Kalender läuft.
- `theme: { ... }` – schnelle Farbwahl. Feiner geht es oben in `css/styles.css`.

---

## 3) Design später anpassen (wenn dein Cover da ist)

**Cover einsetzen:** Bild (z.B. `cover.jpg`) in den Ordner `icons/` legen.
In `index.html` die Zeile mit `<div class="cover" ...>` ersetzen durch:

```html
<div class="cover"><img src="icons/cover.jpg" alt="Cover"></div>
```

**Farben:** in `css/styles.css` ganz oben im Block `:root` ändern – oder
schneller in `js/config.js` unter `theme`.

**App-Icon:** `icons/icon-192.png` und `icons/icon-512.png` durch eigene
Bilder gleicher Größe ersetzen.

---

## 4) Online stellen mit GitHub Pages (kostenlos)

1. Auf <https://github.com> ein kostenloses Konto anlegen (falls nicht vorhanden).
2. Oben rechts **+ → New repository**. Name z.B. `escape-adventskalender`,
   auf **Public** lassen, **Create repository**.
3. Auf der neuen Seite **„uploading an existing file“** anklicken und
   **den kompletten Inhalt dieses Ordners** hineinziehen (alle Dateien und
   die Ordner `js`, `css`, `icons`). **Commit changes**.
4. Im Repository oben auf **Settings → Pages**.
5. Unter **Branch** `main` und `/ (root)` wählen, **Save**.
6. Nach ~1 Minute erscheint dort deine Adresse, z.B.
   `https://deinname.github.io/escape-adventskalender/`.

Diese Adresse ist deine fertige App. Öffne sie zum Testen am Handy.

> Wichtig: Nach Änderungen an den Dateien lädst du die geänderten Dateien
> wieder im Repository hoch (gleicher Weg). Im `service-worker.js` zusätzlich
> die Zeile `const CACHE = "adventskalender-v1";` hochzählen (`v2`, `v3` …),
> damit alle die neue Version bekommen.

---

## 5) QR-Codes erstellen

1. Öffne `qr-generator.html` (Doppelklick öffnet sie im Browser).
2. Trage oben **deine GitHub-Pages-Adresse** ein (mit `/` am Ende).
3. **QR-Codes erzeugen** klicken.
4. Du bekommst:
   - **Haupt-Code** → öffnet die Übersicht (z.B. vorne ins Buch).
   - **Tag 1 … Tag 24** → springen direkt zum jeweiligen Tag (auf die
     jeweilige Buchseite).
5. Einzeln als PNG herunterladen, oder **„Alle drucken / als PDF speichern“**.

---

## So fühlt es sich für deine Gäste an

QR-Code scannen → die App öffnet sich im Vollbild → sie sehen die Übersicht
oder direkt den Tag → tippen auf **1. Hinweis**, später **2. Hinweis**, und
zum Schluss **Lösung**. Optional „Zum Startbildschirm hinzufügen“, dann liegt
der Kalender wie eine echte App auf dem Handy.
