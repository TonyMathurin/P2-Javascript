// Ask the user for their name and store it in a variable
let naam = prompt("Wat is je naam?");

// Select the <h1> element by its ID and update its text
document.getElementById("welkomstTekst").textContent =
    "Hallo " + naam + ", welkom bij mijn eerste JavaScript-pagina!";

// Log the name to the browser console
console.log(naam);
