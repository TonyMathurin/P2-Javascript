const geboortejaarInput = prompt("In welk jaar ben je geboren?");
const geboortejaar = Number(geboortejaarInput);
const huidigJaar = new Date().getFullYear();

if (
    geboortejaarInput === null ||
    !Number.isInteger(geboortejaar) ||
    geboortejaar < 1900 ||
    geboortejaar > huidigJaar
) {
    console.log("Ongeldige invoer");
} else {
    const leeftijd = huidigJaar - geboortejaar;
    document.getElementById("leeftijdTekst").textContent =
        "Je bent ongeveer " + leeftijd + " jaar oud.";
    console.log(leeftijd);
}