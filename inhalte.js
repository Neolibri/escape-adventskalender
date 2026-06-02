/* =====================================================================
   INHALTE  –  HIER stehen deine Texte (Hinweise + Lösungen, 24 Tage)
   =====================================================================

   Für jeden Tag gibt es:
     titel    : optionaler Titel ("" = es wird automatisch "Tag X" angezeigt)
     hinweis1 : 1. Hinweis
     hinweis2 : 2. Hinweis
     loesung  : die Lösung

   Die Texte stehen zwischen Schräg-Anführungszeichen (Backticks ` `).
   Zeilenumbruch: <br>   Absatz: <br><br>   Fett: <b>...</b>
   ===================================================================== */

const INHALTE = {

  1: {
    titel: "",
    hinweis1: `Die erste Ziffer verlangt eine mathematische Operation. 78 geteilt durch 2 ergibt keine einstellige Zahl. Überlege, mit welchem Verfahren du eine mehrstellige Zahl auf eine einzelne Ziffer reduzierst.`,
    hinweis2: `Für die zweite Ziffer musst du die Fenster an der Nordseite der Station zählen. Der Text beschreibt, dass du nach draußen gehst. Für die dritte Ziffer erinnere dich daran, was Sarah über den letzten Funkkontakt gesagt hat.`,
    loesung: `Erste Ziffer: „Die Breite, auf der wir stehen, geteilt durch zwei." Die Station Boreal liegt auf 78 Grad nördlicher Breite. 78 geteilt durch 2 ergibt 39. Da das Schloss nur einstellige Ziffern zulässt, bildest du die Quersumme: 3 + 9 = 12, dann noch einmal: 1 + 2 = 3.<br><br>Zweite Ziffer: „Die Anzahl der Fenster an der Nordseite der Station." Im Text wird beschrieben, dass du nach draußen gehst und genau 5 Fenster zählst. Die Ziffer lautet 5.<br><br>Dritte Ziffer: „Die Tage des Schweigens, als ihr kamt." Sarah hat im Prolog erwähnt, dass seit neun Tagen kein Funkkontakt bestand. Die Ziffer lautet 9.<br><br><b>Der Code lautet: 3-5-9.</b><br><br>Nach dem Öffnen findest du Elenas erste Einträge, die noch in Klartext verfasst sind, sowie die chiffrierten Seiten, die in den kommenden Tagen eine Rolle spielen. Merke dir den Hinweis „etwas unter dem Eis", er taucht später wieder auf.`
  },

  2: {
    titel: "",
    hinweis1: `„Zwischen Welle und Berg" beschreibt eine Position genau in der Mitte zweier Himmelsrichtungen. Welche Gradzahlen gehören zu Welle und Berg? Berechne den Mittelpunkt.`,
    hinweis2: `Der Kompass zeigt 47 Grad zu viel an. Das musst du ausgleichen: Addiere den Korrekturwert zu deiner gewünschten Richtung, damit der defekte Kompass dir die passende Anzeige liefert.`,
    loesung: `Der defekte Kompass zeigt dauerhaft auf 47 Grad statt auf 0 Grad (Norden). Die Abweichung beträgt also 47 Grad. Dieser Wert dient als Korrekturwert für alle Richtungsangaben.<br><br>Schritt 1: „Zwischen Welle und Berg" bedeutet den Mittelpunkt zwischen Süden (180°) und Westen (270°). Der Mittelpunkt liegt bei (180 + 270) ÷ 2 = 225 Grad. Diese Richtung entspricht Südwesten.<br><br>Schritt 2: Da der Kompass 47 Grad zu viel anzeigt, musst du die Anzeige anpassen. Um tatsächlich nach 225 Grad zu gehen, musst du auf dem defekten Kompass 272 Grad anpeilen (225 + 47 = 272).<br><br><b>Die Antwort:</b> Du musst nach Südwesten (225 Grad) gehen, was auf dem defekten Kompass einer Anzeige von 272 Grad entspricht. Merke dir diese Richtung. Der Kompass bleibt in deinem Inventar und wird für spätere Orientierungsrätsel gebraucht.<br><br>Zusätzlicher Hinweis: Die Reihenfolge der Symbole (Stern, Sonne, Welle, Berg) und ihre Zuordnung zu Himmelsrichtungen taucht später erneut auf. Halte die Zuordnungstabelle griffbereit.`
  },

  3: {
    titel: "",
    hinweis1: `Beginne nicht mit Regel 1, sondern mit Regel 4. Sie legt einen Gegenstand eindeutig fest. Von dort aus kannst du mit Regel 2 die diagonale Position bestimmen.`,
    hinweis2: `Nachdem du Metallring (Südost) und Feder (diagonal gegenüber) platziert hast, bleiben nur noch zwei Ecken und zwei Gegenstände. Regel 3 verrät dir, welche Ecke „Westen" enthält.`,
    loesung: `Die vier Gegenstände müssen den vier Eckpunkten der Station zugeordnet werden. Gehe die Regeln Schritt für Schritt durch:<br><br>Regel 4 (beginne hier): Der Metallring liegt an der Südost-Ecke. Das steht fest.<br><br>Regel 2: Die Feder liegt gegenüber dem Metallring. Diagonal von Südost ist Nordwest. Also liegt die Feder an der Nordwest-Ecke.<br><br>Regel 3: Das Holzstäbchen liegt an einer Ecke, die „Westen" enthält. Übrig sind Nordost und Südwest. Nur Südwest enthält „Westen". Also liegt das Holzstäbchen an der Südwest-Ecke.<br><br>Regel 1: Der Stein liegt an einer Ecke, die „Norden" enthält. Die letzte freie Ecke ist Nordost. Also liegt der Stein an der Nordost-Ecke.<br><br>Nun liest du die Zahlenwerte in der Reihenfolge Nordwest, Nordost, Südost, Südwest ab:<br><br><b>Ecke — Gegenstand — Zahlenwert</b><br>Nordwest — Feder — 1<br>Nordost — Stein — 3<br>Südost — Metallring — 7<br>Südwest — Holzstäbchen — 4`
  },

  4: {
    titel: "",
    hinweis1: `Übersetze zunächst nur den Ausgangswert 1.013 Ziffer für Ziffer mit der Tabelle. Dann berechne die drei weiteren Werte (jeweils +5) und übersetze auch diese.`,
    hinweis2: `Die einzelnen Buchstabengruppen ergeben für sich noch kein Wort. Übersetze alle vier Zahlenwerte vollständig und schreibe die Buchstaben lückenlos hintereinander. Suche dann nach deutschen Wörtern in der Gesamtfolge.`,
    loesung: `Das Barometer liefert keine einzelne Zahl, sondern eine durchgehende Ziffernkette: 1025345. Übersetze sie Ziffer für Ziffer mithilfe der Tabelle auf dem Ziffernblatt:<br><br>1 = S<br>0 = T<br>2 = U<br>5 = E<br>3 = R<br>4 = M<br>5 = E<br><br>Zusammengesetzt ergibt sich: S T U E R M E.<br><br>Auf den ersten Blick liest sich das als STUERME. Der Kniff steckt in der Anweisung unter der Tabelle: Ein doppeltes E steht für einen Umlaut. Das „UE" in der Mitte wird also zu einem Ü zusammengezogen.<br><br>Wendest du diese Regel an, wird aus STUERME das Wort STÜRME. Jede Ziffer der Kette liefert genau einen Buchstaben, und die Umlaut-Regel macht aus der sperrigen Schreibweise ein klares deutsches Wort.<br><br><b>Die Nachricht lautet: STÜRME.</b><br><br>Ein schwerer Polarsturm zieht auf. Du hast wenig Zeit, die Station sturmfest zu machen. Die Konsequenz dieser Warnung zeigt sich am 5. Dezember.<br><br>Behalte alles, was ihr eingesammelt habt: das geöffnete Logbuch, den defekten Kompass, die vier Objekte aus dem Schnee (Stein, Feder, Metallring, Holzstäbchen) und die Zahlencodes 359, 1.374 sowie die Richtungsangabe 225 Grad. Das kommt alles wieder.`
  },

  5: {
    titel: "",
    hinweis1: `Die Inschrift spricht davon, wie der Wind auf der Nordhalbkugel um ein Hoch kreist. Das ist der Uhrzeigersinn. Beginne beim Polarstern (Stern) und ordne alle vier Symbole im Uhrzeigersinn: Stern, Sonne, Welle, Berg.`,
    hinweis2: `„Kehre die Reihenfolge um" bedeutet: Drehe die gesamte Sequenz um. Aus Stern, Sonne, Welle, Berg wird Berg, Welle, Sonne, Stern. Die Positionen 2 und 3 dieser umgekehrten Reihenfolge bilden das mittlere Paar.`,
    loesung: `Die vier Hebel tragen die Symbole Stern (0°), Sonne (90°), Welle (180°) und Berg (270°). Im Uhrzeigersinn ab Norden ergibt sich die Reihenfolge: Stern, Sonne, Welle, Berg.<br><br>Die Anweisung verlangt, diese Reihenfolge umzukehren: Berg, Welle, Sonne, Stern.<br><br>Das „mittlere Paar" der umgekehrten Reihenfolge sind die Positionen 2 und 3: Welle und Sonne.<br><br><b>Du betätigst also genau zwei Hebel, in dieser Reihenfolge: zuerst Welle, dann Sonne.</b><br><br>Die Tür entriegelt sich mit einem hörbaren mechanischen Klacken. Im Inneren erwarten euch die Überreste der Station Polaris, unberührt seit Jahrzehnten.`
  },

  6: {
    titel: "",
    hinweis1: `Das Polybios-Quadrat funktioniert wie ein Koordinatensystem. Die erste Ziffer jedes Paares gibt die Zeile an, die zweite die Spalte. Beginne mit dem ersten Paar: 43 = Zeile 4, Spalte 3.`,
    hinweis2: `Wenn du alle Buchstaben hast, bilde zwei Wörter. Der Schrägstrich in der verschlüsselten Nachricht trennt die Wörter.`,
    loesung: `<b>Entschlüsselung des ersten Worts:</b><br>43 = Zeile 4, Spalte 3 = S<br>44 = Zeile 4, Spalte 4 = T<br>11 = Zeile 1, Spalte 1 = A<br>44 = Zeile 4, Spalte 4 = T<br>24 = Zeile 2, Spalte 4 = I<br>34 = Zeile 3, Spalte 4 = O<br>33 = Zeile 3, Spalte 3 = N<br>Erstes Wort: STATION<br><br><b>Entschlüsselung des zweiten Worts:</b><br>35 = Zeile 3, Spalte 5 = P<br>34 = Zeile 3, Spalte 4 = O<br>31 = Zeile 3, Spalte 1 = L<br>11 = Zeile 1, Spalte 1 = A<br>42 = Zeile 4, Spalte 2 = R<br>24 = Zeile 2, Spalte 4 = I<br>43 = Zeile 4, Spalte 3 = S<br>Zweites Wort: POLARIS<br><br><b>Die Nachricht lautet: STATION POLARIS.</b><br><br>Hintergrundinfo: Station Polaris wurde 1971 als geowissenschaftliche Außenstation errichtet und 1974 aufgegeben. Offizielle Berichte sprechen von „logistischen Schwierigkeiten". Die wahren Gründe lagen offenbar tiefer, im wörtlichen Sinne.`
  },

  7: {
    titel: "",
    hinweis1: `Vergleiche Voigts Aussage mit den Aussagen der anderen beiden. Wo war Voigt am 15. November laut seiner eigenen Angabe, und wo war er laut Brandt?`,
    hinweis2: `Wenn Brandt die Wahrheit sagt, war Voigt im Funkraum, also in der Station. Voigt selbst behauptet, draußen gewesen zu sein. Beides könnte passen, wenn sie verschiedene Tageszeiten meinen. Aber nimm Lenz dazu: Als Lenz abends aufwachte, waren Brandt und Voigt beide drinnen. Das stützt Brandt, und es sägt an Voigts Version.`,
    loesung: `Die systematische Prüfung der drei Aussagen:<br><br><b>Annahme 1: Brandt lügt.</b><br>Wenn Brandt lügt, sagen Voigt und Lenz die Wahrheit. Doch Lenz sagt, er habe Voigt am Nachmittag selbst am Funkgerät gesehen. Voigt behauptet, den ganzen Tag draußen gewesen zu sein. Diese beiden angeblich wahren Aussagen widersprechen sich direkt. Lenz kann Voigt nicht gleichzeitig drinnen am Funkgerät sehen, während Voigt den ganzen Tag draußen war. Widerspruch. Brandt kann nicht der Lügner sein.<br><br><b>Annahme 2: Voigt lügt.</b><br>Voigt behauptet, den ganzen Tag draußen gewesen zu sein. Brandt und Lenz sagen beide unabhängig voneinander, dass Voigt am Nachmittag im Funkraum saß. Wenn Voigt lügt und tatsächlich am Funkgerät war, greifen die Aussagen von Brandt und Lenz sauber ineinander, ohne dass ein Widerspruch entsteht. Passt.<br><br><b>Annahme 3: Lenz lügt.</b><br>Wenn Lenz lügt, hat er Voigt nicht am Funkgerät gesehen. Doch Brandt sagt unabhängig, dass Voigt im Funkraum war, und niemand widerspricht Brandt sonst. Damit müsste Voigts Aussage wahr sein, er sei den ganzen Tag draußen gewesen. Das kollidiert direkt mit Brandt. Es würden also zwei Personen lügen, Lenz und Brandt. Es kann nur einer lügen. Widerspruch.<br><br><b>Ergebnis: Voigt lügt.</b><br><br>Merke dir den Namen Voigt. Er taucht in späteren Dokumenten erneut auf.`
  },

  8: {
    titel: "",
    hinweis1: `Das Gitter auf dem Foto funktioniert wie eine einfache Tabelle. Zeile 3, Spalte 2 bedeutet: Gehe in die dritte Reihe und dort zum zweiten Buchstaben.`,
    hinweis2: `Wenn du alle fünf Buchstaben hast, lies sie zusammen. Das Wort beschreibt einen geografischen Begriff, der zu einem Ort unter dem Eis passt.`,
    loesung: `Elenas Koordinaten auf der Rückseite des Fotos verweisen auf folgende Buchstaben im Gitter:<br><br>Zeile 3, Spalte 2 = U<br>Zeile 1, Spalte 5 = E<br>Zeile 4, Spalte 1 = L<br>Zeile 2, Spalte 4 = I<br>Zeile 5, Spalte 3 = C<br><br>Die Buchstaben in der angegebenen Reihenfolge: U, E, L, I, C.<br><br>Liest du sie als Wort, kommt erst einmal nur „UELIC" heraus. Der Kniff ist Elenas Notationsgewohnheit: Sie schreibt Ü oft als UE. Nimm U und E also als zusammengehörig. Aus UE plus L, I, C wird, richtig umgestellt: LÜCKE.<br><br><b>Lösung: LÜCKE.</b><br><br>Dieser Hinweis sagt dir: Irgendwo im Eis gibt es eine Spalte, einen Riss, eine Öffnung, die weiterführt. Die genauen Koordinaten dieser Lücke werden in den kommenden Tagen entschlüsselt. Halte das Foto und den defekten Kompass bereit. Beides wird am 9. Dezember wieder wichtig.`
  },

  9: {
    titel: "",
    hinweis1: `Waagerechte Streifen führen zu einem Symbol mit geraden Kanten. Das Muster, das zum Kreis führt, beginnt mit einem Buchstaben aus der zweiten Hälfte des Alphabets (N bis Z). Diagonalschraffur führt zu einem Symbol mit vier gleich langen Seiten.`,
    hinweis2: `Von den drei fehlenden Verbindungen hat V1 ein Muster, dessen Name mit einem Buchstaben aus der ersten Hälfte des Alphabets beginnt (A bis M). Punktraster führt zu einem Symbol ohne Ecken.`,
    loesung: `Punktraster → Kreis<br>Diagonalschraffur → Raute<br>Waagerechte Streifen → Quadrat<br>Diagonalschraffur → Raute<br>Waagerechte Streifen → Quadrat`
  },

  10: {
    titel: "",
    hinweis1: `Lies die Zahlen immer als Zeile zuerst, dann Spalte. Das erste Paar 14 bedeutet Zeile 1, Spalte 4. Suche die Zelle, in der sich Zeile und Spalte treffen.`,
    hinweis2: ``,
    loesung: `Schritt 1: Die fünf Zahlenpaare auf dem Zettel: 14, 15, 13, 25, 15. Jedes Paar ist eine Koordinate: erste Ziffer Zeile, zweite Ziffer Spalte.<br><br>Schritt 2: Jedes Paar im Quadrat nachschlagen:<br>14 → Zeile 1, Spalte 4 → D<br>15 → Zeile 1, Spalte 5 → E<br>13 → Zeile 1, Spalte 3 → C<br>25 → Zeile 2, Spalte 5 → K<br>15 → Zeile 1, Spalte 5 → E<br><br>Die fünf gefundenen Buchstaben der Reihe nach: D, E, C, K, E.<br><br>Zusammengesetzt ergeben sie das Wort <b>DECKE</b>. Elenas Botschaft lautet: DECKE.`
  },

  11: {
    titel: "",
    hinweis1: `Berechne den Nahrungsverbrauch getrennt: 4 Sturmtage × 3 Personen × 0,3 Rationen = 3,6 Rationen. 9 Normaltage × 3 Personen × 0,5 Rationen = 13,5 Rationen. Addiere beides und ziehe es von 18 ab.`,
    hinweis2: `Beim Brennstoff: 4 Sturmtage × 7 Liter + 9 Normaltage × 4 Liter. Vergleiche mit 45 Liter. Falls es nicht reicht, berechne, wie viele Normaltage du streichst (je 4 Liter Ersparnis pro gestrichenem Tag).`,
    loesung: `Aufgabe 1: Nahrungsverbrauch Sturmtage: 4 × 3 × 0,3 = 3,6 Rationen. Normaltage: 9 × 3 × 0,5 = 13,5 Rationen. Gesamt: 3,6 + 13,5 = 17,1 Rationen. Verfügbar: 18. Restration: 18 − 17,1 = 0,9. Ganzzahliger Anteil: 0.<br><br>Aufgabe 2: Konserven nur an Normaltagen. 9 Normaltage, Bedarf pro Tag: 2 Dosen (aufgerundet für 3 Personen). 12 Dosen ÷ 2 = 6 Tage. Ganzzahliger Anteil: 6.<br><br>Aufgabe 3: Brennstoffverbrauch Sturmtage: 4 × 7 = 28 Liter. Normaltage: 9 × 4 = 36 Liter. Gesamt: 28 + 36 = 64 Liter. Verfügbar: 45 Liter. Defizit: 64 − 45 = 19 Liter. Pro abgeschaltetem Normaltag spart ihr 4 Liter. 19 ÷ 4 = 4,75, aufgerundet 5 Normaltage Abschaltung nötig. Ganzzahliger Anteil: 5.<br><br>Aufgabe 4: Tablettenbedarf: 3 × 13 = 39. Verfügbar: 30. Es fehlen 39 − 30 = 9 Tabletten. Ganzzahliger Anteil: 9.<br><br><b>Der vierstellige Code lautet: 0659.</b><br><br>Diese Zahlenfolge wird am 13. Dezember als Zugangscode relevant. Merke sie dir.`
  },

  12: {
    titel: "",
    hinweis1: `Zeichne das 8×8-Gitter: 8 Zeilen (A bis H), 8 Spalten (1 bis 8). Markiere alle 14 blockierten Felder. Markiere die drei Pflichtfelder (C3, E5, G6) besonders. Denke daran: rechts, unten und links sind erlaubt, aber nicht nach oben. Kein Feld darf doppelt betreten werden.`,
    hinweis2: `Plane den Weg in Etappen. Versuche zuerst, von A1 nach C3 zu kommen. Dann von C3 nach E5. Dann über G6 nach H8. Wenn du links gehen musst, achte darauf, dass du dir keinen Rückweg verbaust.`,
    loesung: `Etappe 1 (A1 → C3): A1 → A2 → A3 → B3 → C3<br><br>Etappe 2 (C3 → E5): C3 → D3 → D4 → E4 → E5<br><br>Etappe 3 (E5 → G6 → H8): E5 → E6 → F6 → G6 → H6 → H7 → H8 (Ziel)`
  },

  13: {
    titel: "",
    hinweis1: `Prüfe jede Spur einzeln. Achte genau darauf, wo der Faden gefunden wurde und welche Kleidungsstücke tatsächlich in Kontakt mit dem Schrank gekommen sein könnten.`,
    hinweis2: `Vergleiche jedes Merkmal mit der Ausrüstungsliste der drei Personen. Wer hat ölige Hände, wer trägt etwas Ausgefranstes in Blau, und welches Sohlenprofil hinterlässt ein Zickzackmuster? Frage dich, ob auch nur eine einzige Spur zu jemand anderem als derselben Person passt.`,
    loesung: `Spur A (öliger Fingerabdruck): Marc arbeitet regelmäßig am Generator und hat ölverschmierte Hände. Du hast saubere Hände, Sarah trägt Thermohandschuhe. Spur A deutet auf Marc.<br><br>Spur B (blauer Faden): Sarah besitzt einen blauen Schal, aber dieser liegt im Schlafbereich. Marc trägt eine blaue Softshelljacke mit ausgefransten Ärmeln, die er ständig anhat. Ein abgerissener Faden von einer ausgefransten Jacke, die am Schrank hängen bleibt, ist wahrscheinlicher als ein Faden von einem Schal, der im Schlafraum liegt. Spur B deutet auf Marc.<br><br>Spur C (Zickzack-Schuhabdruck): Du hast Glattsohlenstiefel (ausgeschlossen), Sarah hat Blockmuster-Stiefel (ausgeschlossen). Marc hat Zickzackprofil-Stiefel. Spur C deutet auf Marc.<br><br><b>Alle drei Spuren deuten auf dieselbe Person. Die Lösung lautet M (für Marc).</b><br><br>Es liegt keine Inszenierung vor, weil sämtliche physischen Beweise zu Marcs Ausrüstung passen. Er hatte Zugang zum Versorgungsraum, und die öligen Finger zeigen, dass er ohne Handschuhe gearbeitet hat, vermutlich, weil er das Schloss so leiser aufbrechen konnte.`
  },

  14: {
    titel: "",
    hinweis1: `Zwei Symbole sind verwischt. Erschließe sie aus dem Wortkontext. Zeile 1 leitet eine Warnung ein, Zeile 3 ist ein kurzes Verbindungswort.`,
    hinweis2: `Setze zuerst alle eindeutigen Symbole ein. In Zeile 1 erhältst du T, ?, A, U. Welches deutsche Warnwort passt? Sobald du das verwischte Zeichen dort kennst, taucht es in weiteren Zeilen wieder auf.`,
    loesung: `Die vollständig entschlüsselten Zeilen lauten:<br><br>Zeile 1: TRAU<br>Zeile 2: NIE<br>Zeile 3: DER<br>Zeile 4: LIST<br>Zeile 5: HIER<br>Zeile 6: TUNNEL<br><br><b>Die Botschaft der Zeilen 1 bis 5 lautet: TRAU NIE DER LIST HIER.</b> Eine unbekannte Person warnt dich davor, den gelegten Spuren und Anschuldigungen in der Station zu vertrauen. Jemand inszeniert hier eine Täuschung, und diese Warnung deutet bereits auf die falschen Fährten hin, die am 16. Dezember entlarvt werden. Wer auch immer die Nachricht geschrieben hat, kannte das Symbolsystem und wollte unentdeckt bleiben.<br><br><b>Das Versteck bestimmen:</b> Zeile 6 ist von den Botschaftszeilen abgesetzt und nennt den Ort des nächsten Beweisstücks: TUNNEL. Das nächste Beweisstück liegt also in den Tunneln unter der Station. Halte diesen Hinweis fest, denn er führt dich direkt zum Geschehen am 15. Dezember.`
  },

  15: {
    titel: "",
    hinweis1: `Vergleiche die Schneebedeckung der vier Gegenstände. Berücksichtige, dass der Westwind leichte Gegenstände nach Osten verschieben konnte.`,
    hinweis2: `Arbeite mit der Zeitleiste: Schneefall ab 01:30, Ende 04:00. Blut gefriert in Minuten und bleibt liegen, Kaffee braucht länger. Welcher Gegenstand zeigt am wenigsten Schnee und muss daher zuletzt gefallen sein?`,
    loesung: `<b>Frage A (Chronologische Reihenfolge):</b><br>Zuerst (1): Gegenstand 4 (der Zettel). Das Papier steckt halb unter dem Schnee am nördlichen Rand. Es wurde am stärksten eingeschneit und lag daher am längsten dort. Marc hat ihn vermutlich beim Losrennen verloren.<br>Dann (2): Gegenstand 2 (die Thermosflasche). Sie liegt am westlichen Rand, der Wind kam aus Westen. Wäre sie früh gefallen, wäre der ausgelaufene Kaffee stärker eingeschneit. Die teilweise sichtbare braune Verfärbung zeigt, dass sie nach dem Zettel, aber vor dem Kampf fiel.<br>Dann (3): Gegenstand 3 (der Kompass). Er liegt genau in der Mitte der aufgewühlten Fläche und wurde dort während des Kampfes oder Sturzes fallen gelassen. Das gesprungene Glas deutet auf einen heftigen Aufprall.<br>Zuletzt (4): Gegenstand 1 (der blutige Stoffstreifen). Er liegt am östlichen Rand, am weitesten vom Wind entfernt, und zeigt kaum Schneebedeckung. Das Blut war noch frisch, als der Streifen dort landete. Er wurde nach dem Kampf abgerissen, vermutlich als provisorischer Verband, und dann verworfen.<br>Erste Ziffer des Codes: 1 (Gegenstand 1 = blutiger Stoffstreifen war zuletzt).<br><br><b>Frage B (Anzahl Personen):</b> Nur ein Satz Fußspuren führt von der Station zur aufgewühlten Fläche. Aber die aufgewühlte Zone zeigt Abdrücke, die auf mindestens zwei Personen hindeuten. Die zweite Person kam aus einer anderen Richtung oder war bereits vor Ort. Antwort: 2 Personen. Zweite Ziffer des Codes: 2.<br><br><b>Frage C (Himmelsrichtung Tunnel 3):</b> Die Tunnelkarte vom 12. Dezember zeigt das Tunnelsystem unter der Station Polaris. Der Zugang zu Tunnel 3 befindet sich ausgehend von Polaris in Richtung Osten (die Markierung Süd innerhalb des Tunnels ist ein Wegpunkt, kein Richtungshinweis für den Zugang selbst). Antwort: Ost = 2. Dritte Ziffer des Codes: 2.`
  },

  16: {
    titel: "",
    hinweis1: `Achte genau auf Zeitangaben. Prüfe außerdem, ob „das Funkgerät ist kaputt" und „die Sendeeinheit ist defekt" dasselbe bedeuten.`,
    hinweis2: `Gehe jeden Prüfpunkt einzeln durch und entscheide, ob dein Tagebuch ihn eindeutig widerlegt oder nur teilweise abdeckt. Eine Beobachtung zu einem einzigen Zeitpunkt widerlegt keine Aussage über eine ganze Nacht.`,
    loesung: `<b>P1: „Sarah war am 10. Dezember um 02:00 Uhr im Funkraum."</b> Marc behauptet (M1), Sarah sei gegen 02:00 Uhr im Funkraum gewesen. Sarah bestreitet das (S1). Dein Tagebuch (T1) vermerkt, dass du um ca. 02:15 Uhr beide Schlafsäcke als belegt gesehen hast. Zwischen 02:00 und 02:15 Uhr liegen fünfzehn Minuten. Sarah könnte theoretisch um 02:00 Uhr kurz aufgestanden und um 02:15 Uhr bereits wieder im Schlafsack gewesen sein. Dein Tagebuch widerlegt Marcs Behauptung nicht zweifelsfrei, es dokumentiert nur einen einzigen Zeitpunkt. → P1 ist UNKLAR.<br><br><b>P2: „Sarah hat am 10. Dezember in das Funkgerät gesprochen (gesendet)."</b> Marc behauptet (M1), Sarah habe in das Funkgerät gesprochen. Dein Tagebuch (T2) zeigt: Am 11. Dezember hast du die Sendeeinheit persönlich untersucht und als defekt eingestuft. Am 12. Dezember hast du den Empfänger überprüft und als funktionsfähig bestätigt. Selbst wenn Sarah am Gerät gewesen wäre, hätte sie damit nicht senden können. → P2 ist FALSCH.<br><br><b>P3: „Sarah war am 12. Dezember allein in den Tunneln."</b> Marc behauptet (M2), Sarah sei am 12. Dezember allein in den Tunneln gewesen. Sarah widerspricht (S2). Dein Tagebuch (T3) bestätigt eindeutig, dass du die Vorratskammer gemeinsam mit Sarah durchsucht hast und Marc im Korridor wartete. Sarah war nachweislich bei dir und konnte nicht gleichzeitig in den Tunneln sein. → P3 ist FALSCH.<br><br><b>P4: „Das Funkgerät ist komplett kaputt, auch der Empfänger."</b> Sarah behauptet (S3): „Das Funkgerät ist kaputt, komplett. Man kann damit weder senden noch empfangen." Dein Tagebuch (T2) widerspricht: Die Sendeeinheit war defekt, aber der Empfänger funktionierte. Sarahs Aussage, das Gerät sei komplett kaputt, ist nachweislich falsch. → P4 ist FALSCH.<br><br><b>P5: „Sarah lag die gesamte Nacht des 10. Dezember im Schlafsack."</b> Sarah behauptet (S1), sie habe die ganze Nacht im Schlafsack gelegen. Dein Tagebuch (T1) bestätigt nur einen einzigen Kontrollpunkt um 02:15 Uhr. Du hast nicht die gesamte Nacht über wach gelegen. Sarahs Aussage „die ganze Nacht" lässt sich weder bestätigen noch widerlegen. → P5 ist UNKLAR.<br><br><b>P6: „Marc hat die Notizbucheinträge gezielt gefälscht, um Sarah zu belasten."</b> Zwei von Marcs drei überprüfbaren Behauptungen (P2 und P3) sind nachweislich falsch. Das Notizbuch lag unter dem Sendepult, genau dort, wo es gefunden werden musste. Die Formulierung im dritten Eintrag (M3) liest sich wie eine vorbereitete Anklage. All das deutet stark auf eine gezielte Fälschung hin. Allerdings lügt auch Sarah nachweislich bei P4. Marcs Fälschungsabsicht ist hochwahrscheinlich, aber ohne sein Geständnis oder einen direkten Beweis nicht zweifelsfrei bewiesen. → P6 ist UNKLAR.<br><br><b>Auswertung:</b> Eindeutig FALSCH sind P2, P3 und P4 = 3 Punkte. UNKLAR bleiben P1, P5 und P6 = 3 Punkte.`
  },

  17: {
    titel: "",
    hinweis1: `Setze zuerst die acht bekannten Symbole in alle drei Zeilen ein und markiere die unbekannten mit Fragezeichen. Zeile 1 lautet dann: U, R, A, L, T, ?, S. Welches deutsche Wort mit sieben Buchstaben beginnt mit U, R, A, L, T und endet auf S? Es beschreibt etwas sehr Altes.`,
    hinweis2: `Das gesuchte Wort in Zeile 1 lautet URALTES. Der fehlende Buchstabe an Position 6 ist E. Übertrage E auf Zeile 2 und Zeile 3. In Zeile 2 steht dann: ?, U, N, K, E, L. Welches Sechsbuchstabenwort endet auf U, N, K, E, L?`,
    loesung: `Entschlüsselung der drei Zeilen:<br><br>Zeile 1: URALTES<br>Zeile 2: DUNKEL<br>Zeile 3: GETARNT<br><br><b>Die Botschaft lautet: URALTES DUNKEL GETARNT.</b><br><br>Etwas Uraltes liegt im Dunkeln verborgen, getarnt unter dem Eis. Die leuchtenden Runen sind eine Warnung oder eine Wegbeschreibung, hinterlassen von einer Zivilisation, die vor Jahrtausenden wusste, was hier begraben liegt.`
  },

  18: {
    titel: "",
    hinweis1: `Sortiere die fünf Messpunkte nach ihrer Umdrehungszahl. Der Punkt mit den meisten Umdrehungen pro Minute ist dem Zentrum am nächsten. Welchen Rang hat Gamma in dieser Reihenfolge?`,
    hinweis2: `Für Aufgabe C nutze das inverse Quadratgesetz: Wenn sich die Feldstärke vervierfacht (von 24 auf 96), halbiert sich der Abstand zum Zentrum. Delta liegt 50 m von der Station entfernt. Wenn d der Abstand von der Station zum Zentrum ist und Delta auf dieser Linie liegt, dann ist der Abstand von Delta zum Zentrum gleich d minus 50. Setze das gleich d geteilt durch 2 und löse nach d auf.`,
    loesung: `<b>Rangfolge nach Nähe zum Zentrum:</b><br>Delta (24 U/min), am nächsten<br>Beta (18 U/min)<br>Alpha (12 U/min)<br>Gamma (6 U/min)<br>Epsilon (2 U/min), am weitesten entfernt.<br><br><b>Himmelsrichtung:</b> Die drei stärksten Messpunkte liegen in Richtung Nord, Nordost und Nordnordost. Delta (Nordnordost) zeigt die höchste Feldstärke. Das magnetische Zentrum liegt in Richtung Nordnordost (NNO) von der Station.<br><br><b>Entfernungsberechnung:</b> Am Messpunkt Delta (50 m von der Station) beträgt die Umdrehungszahl 24. Am Zentrum wäre sie theoretisch 96. Die Feldstärke vervierfacht sich (96 ÷ 24 = 4). Nach dem inversen Quadratgesetz halbiert sich dabei der Abstand zum Zentrum (Faktor √4 = 2). Der Abstand von Delta zum Zentrum ist also halb so groß wie der Abstand von der Station zum Zentrum. Mit d = Abstand Station–Zentrum gilt: d − 50 = d ÷ 2. Aufgelöst: d = 100 m. Das Zentrum liegt etwa 100 m von der Station entfernt in Richtung NNO.<br><br><b>Dreistelliger Code:</b><br>Erste Ziffer: Rang von Gamma = 4<br>Zweite Ziffer: NNO = 4<br>Dritte Ziffer: Erste Ziffer von 100 = 1<br><b>Der Code lautet: 441.</b>`
  },

  19: {
    titel: "",
    hinweis1: `Lies die drei Lücken genau. Eine Lücke verlangt eine physikalische Beschreibung, eine verlangt ein Muster, und eine verlangt den Namen einer Organisation. Welches Fragment beschreibt was?`,
    hinweis2: `Achte auf die Grammatik. Lücke 1 endet mit „...weist [LÜCKE] auf", das Fragment muss also grammatikalisch an „weist" anschließen. Lücke 2 folgt auf „...folgt [LÜCKE]", verlangt also einen Dativ. Lücke 3 braucht einen Organisationsnamen als Subjekt.`,
    loesung: `Lücke 1 (offizieller Brief, beschreibt physikalische Eigenschaften): Fragment Y passt. „...strukturelle Regelmäßigkeiten, die auf künstlichen Ursprung hindeuten..." ergänzt die Beschreibung der Feldstärken und schließt grammatikalisch korrekt an „weist" an.<br><br>Lücke 2 (Dr. Frosts Notizen, beschreibt die Anordnung der Runen): Fragment X passt. „...einem mathematischen Muster, das der Fibonacci-Folge entspricht..." erklärt, welchem System die Runenanordnung folgt, und steht im korrekten Dativ nach „folgt".<br><br>Lücke 3 (Formular, nennt den Auftraggeber): Fragment Z passt. „...Abteilung 7, Direktorat für strategische Ressourcen, nicht das Arktische Forschungsinstitut..." enthüllt den wahren Auftraggeber.<br><br><b>Dreistelliger Code: 213.</b>`
  },

  20: {
    titel: "",
    hinweis1: `Beginne mit den eindeutigsten Zuordnungen. Welcher Gegenstand ist der einzige, der schmal genug für Vertiefung 4 (3 cm, gezahnt, schmal und tief) ist? Und welcher Gegenstand besteht aus durchsichtigem Material und gehört logischerweise vor eine durchsichtige Rückwand?`,
    hinweis2: `Nachdem du Vertiefung 4 und 3 zugeordnet hast, betrachte Vertiefung 5: Die Besonderheit lautet „Rillen passen zu konzentrischen Kreisen". Welcher Gegenstand hat konzentrische Rillen? Für die letzten beiden Vertiefungen hilft dir das Stichwort „magnetisch" bei Vertiefung 2.`,
    loesung: `Vertiefung 1 (4 cm, glatt, Kerbe oben): Kompass (4 cm, rund, Metall/Glas). Die Kerbe oben dient zur Ausrichtung der klemmenden Nadel. → K<br><br>Vertiefung 2 (6 cm, gerillt, magnetisch): Eisbehälter (6 cm, Metall, zylindrisch). Passt im Durchmesser und haftet magnetisch. → E<br><br>Vertiefung 3 (5 cm, glatt, durchsichtige Rückwand): Kristalllinse (5 cm, durchsichtiger Kristall). Eine durchsichtige Rückwand ergibt nur Sinn mit einem durchsichtigen Gegenstand. → L<br><br>Vertiefung 4 (3 cm, gezahnt, schmal und tief): Schlüsselbart (2 cm breit, länglich, Metall). Der einzige Gegenstand, der schmal genug ist. Die gezahnten Ränder passen zum Schlüsselprofil. → S<br><br>Vertiefung 5 (7 cm, gerillt, Rillen passen zu konzentrischen Kreisen): Metallscheibe (7 cm, konzentrische Rillen). Perfekte Passform. → M<br><br><b>Fünfstelliger Code: K, E, L, S, M → KELSM.</b>`
  },

  21: {
    titel: "",
    hinweis1: `Die Zahlen unter den Hebeln geben die Reihenfolge der Aktivierung an: B (Zahl 1) → D (Zahl 2) → A (Zahl 3) → C (Zahl 4). Überlege nun für jeden Hebel: Welche Eigenschaft hatten die eingesetzten Inventar-Gegenstände? Rund, eckig oder länglich, oder durchsichtig.`,
    hinweis2: `Von den fünf Gegenständen, die am 20. Dezember eingesetzt wurden, waren drei rund (Kompass, Eisbehälter, Metallscheibe), einer länglich (Schlüsselbart) und einer durchsichtig (Kristalllinse). Frosts Notiz verlangt aber nicht die Mehrheit, sondern die Eigenschaft des letzten Inventar-Gegenstands, den du an diesem Tag eingesetzt hast. Überprüfe also die Einsetz-Reihenfolge am 20. Dezember.`,
    loesung: `Reihenfolge der Aktivierung: B → D → A → C (Zahlen aufsteigend: 1, 2, 3, 4).<br><br>Position der Hebel: Der letzte eingesetzte Gegenstand am 20. Dezember war die Metallscheibe (Vertiefung 5). Die Metallscheibe ist rund, also Position O. Damit stehen alle vier Hebel auf O (oben).<br><br>Code für die Klappe: Summe aller Zahlen unter den Hebeln = 1 + 2 + 3 + 4 = 10. Anzahl der Hebel in Position O = 4. Ergebnis: 10 × 4 = 40. Da ein dreistelliger Code verlangt wird, lautet er: <b>040</b>.`
  },

  22: {
    titel: "",
    hinweis1: `Es handelt sich um ein magisches Quadrat. Jede Zeile, jede Spalte und jede Diagonale ergibt dieselbe Summe. Du kennst bereits drei vollständige Werte in einer Linie, die Diagonale von rechts oben nach links unten (16 + 15 + 14). Welche Summe ergibt das?`,
    hinweis2: `Die Diagonale von rechts oben nach links unten lautet: 16 + 15 + 14 = 45. Also ist die magische Summe S = 45. Nutze diese Summe, um die fehlenden Werte zu berechnen. Zeile 1: 18 + ? + 16 = 45. Spalte 1: 18 + ? + 14 = 45. Spalte 3: 16 + ? + 12 = 45.`,
    loesung: `Die magische Summe beträgt 45 (jede Zeile, Spalte und Diagonale ergibt 45).<br><br>Schritt 1: Diagonale von rechts oben nach links unten: 16 + 15 + 14 = 45. Damit steht S = 45 fest.<br>Schritt 2: Zeile 1: 18 + ? + 16 = 45, also Zeile 1/Spalte 2 = 11.<br>Schritt 3: Spalte 1: 18 + ? + 14 = 45, also Zeile 2/Spalte 1 = 13.<br>Schritt 4: Spalte 3: 16 + ? + 12 = 45, also Zeile 2/Spalte 3 = 17.<br>Schritt 5: Zeile 3: 14 + ? + 12 = 45, also Zeile 3/Spalte 2 = 19.<br><br><b>Die korrekte Belegung:</b><br>Zeile 1: 18 | 11 | 16<br>Zeile 2: 13 | 15 | 17<br>Zeile 3: 14 | 19 | 12<br><br><b>Dreistelliger Code:</b><br>Erste Ziffer: Einerziffer von 11 = 1<br>Zweite Ziffer: Einerziffer von 13 = 3<br>Dritte Ziffer: Einerziffer von 19 = 9<br><b>Dreistelliger Code: 139.</b>`
  },

  23: {
    titel: "",
    hinweis1: `Vergleiche jedes Zitat wörtlich mit den Textstellen aus früheren Tagen. Das Zitat über die Fibonacci-Folge stammt aus einem wissenschaftlichen Kontext. Das Zitat über Abteilung 7 steht in einem offiziellen Dokument. Und die abgehackten Wortfetzen klingen nach dem verzerrten Funksignal.`,
    hinweis2: `Im Prolog empfing Marc die Worte „… Koordinaten … nicht verlassen … die Symbole … unter dem Eis …" über Funk. Am 19. Dezember wurde Dokument B (Dr. Frosts Notizen) rekonstruiert, das die Fibonacci-Folge erwähnt. Dokument C (Projektformular) enthielt den Auftraggeber Abteilung 7.`,
    loesung: `Zitat 1 („Die Anordnung folgt einem mathematischen Muster, das der Fibonacci-Folge entspricht") = Quelle B (Dr. Frosts Labornotizen, 19. Dezember)<br><br>Zitat 2 („Auftraggeber: Abteilung 7, Direktorat für strategische Ressourcen") = Quelle C (Projektformular AURORA INTERIOR, 19. Dezember)<br><br>Zitat 3 („Koordinaten … nicht verlassen … die Symbole … unter dem Eis") = Quelle A (Funkspruch vom 1. Dezember, Prolog)<br><br><b>Dreistelliger Code: 231.</b>`
  },

  24: {
    titel: "",
    hinweis1: `Arbeite jede Stelle einzeln ab. Für Stelle 1 lies den Prolog erneut: Welches Wort stand auf der Eisscholle? Für Stelle 2 brauchst du den dreistelligen Code vom 18. Dezember.`,
    hinweis2: `Stelle 4 fragt nach dem Gegenstand in Vertiefung 3 am 20. Dezember. Das war die Kristalllinse (L = 3). Stelle 6 verlangt die letzte Ziffer des Codes vom 23. Dezember (231, letzte Ziffer = 1).`,
    loesung: `Stelle 1: Das Wort auf der Eisscholle lautete FOLGEN. F = 6.<br>Stelle 2: Code vom 18. Dezember = 441. Mittlere Ziffer: 4.<br>Stelle 3: Code vom 19. Dezember = 213. Erste Ziffer: 2.<br>Stelle 4: Vertiefung 3 am 20. Dezember = Kristalllinse. L = 3.<br>Stelle 5: Zeilensumme vom 22. Dezember = 45. Einerziffer: 5.<br>Stelle 6: Code vom 23. Dezember = 231. Letzte Ziffer: 1.<br><br><b>Finaler sechsstelliger Code: 642351.</b>`
  }

};
