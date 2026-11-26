// 1. Maak de twee variabelen aan: een string met "20" en een getal 10
let tekstGetal = "20"; // Dit is een string (tekst) omdat er aanhalingstekens omheen staan
let echtGetal = 10;   // Dit is een number (getal)

// 2. Probeer twee getallen bij elkaar op te tellen
let somGetallen = echtGetal + 5;
console.log("Optellen van getallen (10 + 5):", somGetallen); 
// Verwacht resultaat: 15 (gewone wiskunde)

// 3. Probeer de string en het getal bij elkaar op te tellen
let somTekstEnGetal = tekstGetal + echtGetal;
console.log("Optellen van string en getal ('20' + 10):", somTekstEnGetal); 
// Verwacht resultaat: "2010" (JavaScript plakt de tekst en het getal aan elkaar vast!)