// =============================
// WORTLISTE
// =============================
const words = [
    { word: "Lamine Yamal", tip: "Talent" },
    { word: "Cristiano Ronaldo", tip: "Portugal" },
    { word: "Lionel Messi", tip: "Argentinien" },
    { word: "Kylian Mbappé", tip: "Schnelligkeit" },
    { word: "Erling Haaland", tip: "Torjäger" },
    { word: "Robert Lewandowski", tip: "Faust" },
    { word: "Neymar", tip: "5" },
    { word: "Kevin De Bruyne", tip: "Assists" },
    { word: "Mohamed Salah", tip: "König" },
    { word: "Sadio Mané", tip: "Kabine" },
    { word: "Harry Kane", tip: "titellos" },
    { word: "Karim Benzema", tip: "Band" },
    { word: "Virgil van Dijk", tip: "TOTY" },
    { word: "Jan Oblak", tip: "Torwart" },
    { word: "Joshua Kimmich", tip: "6" },
    { word: "Marco Reus", tip: "Cover" },
    { word: "Son Heung-min", tip: "Hamburg" },
    { word: "Luka Modrić", tip: "Kapitän" },
    { word: "Toni Kroos", tip: "Passspiel" },
    { word: "Trent Alexander-Arnold", tip: "Flanke" },
    { word: "Alisson Becker", tip: "Brasilien" },
    { word: "Sergio Ramos", tip: "brutal" },
    { word: "Paulo Dybala", tip: "Jubel" },
    { word: "Zlatan Ibrahimović", tip: "stark" },
    { word: "Gianluigi Donnarumma", tip: "Mario" },
    { word: "Romelu Lukaku", tip: "wandern" },
    { word: "Jadon Sancho", tip: "wasted Talent" },
    { word: "Phil Foden", tip: "Tattoo" },
    { word: "Raheem Sterling", tip: "Laufen" },
    { word: "Joshua Zirkzee", tip: "Downfall" },
    { word: "Frenkie de Jong", tip: "Bruder" },
    { word: "Matthijs de Ligt", tip: "Grätschen" },
    { word: "Christian Pulisic", tip: "USA" },
    { word: "Ansu Fati", tip: "wasted Talent" },
    { word: "Pedri", tip: "magisch" },
    { word: "Vinícius Júnior", tip: "overrated" },
    { word: "Philippe Coutinho", tip: "teuer" },
    { word: "Gerard Piqué", tip: "King" },
    { word: "Ederson", tip: "Brasilien" },
    { word: "Raphaël Varane", tip: "2018" },
    { word: "Ciro Immobile", tip: "Italien" },
    { word: "Dominik Szoboszlai", tip: "Traumtore" },
    { word: "Leroy Sané", tip: "Ragebait" },
    { word: "Kingsley Coman", tip: "verletzungsanfällig" },
    { word: "Kai Havertz", tip: "Deutschland" },
    { word: "Antonio Rüdiger", tip: "Verrückt" },
    { word: "Nicolò Barella", tip: "Italien" },
    { word: "Marco Asensio", tip: "Real" },
    { word: "Rodri", tip: "Ballon Dor" },
    { word: "Mason Mount", tip: "England" },
    { word: "Jorginho", tip: "Italien" },
    // 50 NEUE (Trainer + Talente)
    { word: "Jude Bellingham", tip: "Loch" },
    { word: "Jamal Musiala", tip: "10er" },
    { word: "Florian Wirtz", tip: "Talent" },
    { word: "Bukayo Saka", tip: "schnell" },
    { word: "Bernardo Silva", tip: "Technik" },
    { word: "Antoine Griezmann", tip: "Flop" },
    { word: "Victor Osimhen", tip: "Corona" },
    { word: "Khvicha Kvaratskhelia", tip: "Stutzen" },
    { word: "Achraf Hakimi", tip: "Madrid" },
    { word: "Theo Hernández", tip: "Geld" },
    { word: "Declan Rice", tip: "Real Madrid" },
    { word: "Martin Ødegaard", tip: "Haaland" },
    { word: "Rafael Leão", tip: "lustig" },
    { word: "Gavi", tip: "Mentality" },
    { word: "João Félix", tip: "wasted Talent" },
    { word: "Darwin Núñez", tip: "Geld" },
    { word: "Marcus Rashford", tip: "Comeback" },
    { word: "Bruno Fernandes", tip: "Kapitän" },
    { word: "Thomas Müller", tip: "Raumdeuter" },
    { word: "Manuel Neuer", tip: "Legende" },
    { word: "Ilkay Gündogan", tip: "BVB" },
    { word: "Xavi Simons", tip: "teuer" },
    { word: "Lennart Karl", tip: "Talent" },
    { word: "Rodrigo Mora", tip: "Talent" },
    { word: "Assan Ouedraogo", tip: "gross" },
    { word: "Pep Guardiola", tip: "Tiki-Taka" },
    { word: "Jürgen Klopp", tip: "Comeback" },
    { word: "Carlo Ancelotti", tip: "Augenbraue" },
    { word: "Thomas Tuchel", tip: "Taktik" },
    { word: "Zinedine Zidane", tip: "glatt" },
    { word: "Diego Simeone", tip: "Schwein" },
    { word: "Mikel Arteta", tip: "Guardiola" },
    { word: "Erik ten Hag", tip: "kurz" },
    { word: "Hansi Flick", tip: "Triple" },
    { word: "Julian Nagelsmann", tip: "Hammer" },
    { word: "Luis Enrique", tip: "American Football" },
    { word: "Xabi Alonso", tip: "Real" },
    { word: "Didier Deschamps", tip: "WM" },
    { word: "Sir Alex Ferguson", tip: "Aura" },
    { word: "Unai Emery", tip: "Clip" },
    { word: "Vincent Kompany", tip: "underrated Transfer" },
    { word: "Edin Terzić", tip: "Magisch" },
    { word: "Sebastian Hoeneß", tip: "Cap" },
    { word: "Oliver Glasner", tip: "Kristall" },
    { word: "José Mourinho", tip: "Europa League" }
];

// =============================
// Variablen
// =============================
let playerCount = 0;
let playerNames = [];
let currentPlayer = 0;
let selectedWord = null;
let imposterIndexes = [];
let imposterWithTip = null;

// =============================
// Spielerfelder generieren
// =============================
function createNameInputs() {
    const container = document.getElementById("nameInputs");
    container.innerHTML = "";

    playerCount = parseInt(document.getElementById("playerCount").value);

    if (isNaN(playerCount) || playerCount < 3) {
        alert("Mindestens 3 Spieler erforderlich!");
        return;
    }

    for (let i = 0; i < playerCount; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Name Spieler " + (i + 1);
        input.id = "player" + i;
        container.appendChild(input);
    }
}

// =============================
// Runde starten
// =============================
function startRound() {
    playerNames = [];

    for (let i = 0; i < playerCount; i++) {
        const input = document.getElementById("player" + i);
        if (!input || input.value.trim() === "") {
            alert("Bitte alle Spielernamen ausfüllen!");
            return;
        }
        playerNames.push(input.value.trim());
    }

    startNewGameRound();

    document.getElementById("setupScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
}

// =============================
// Neue Runde vorbereiten
// =============================
function startNewGameRound() {
    selectedWord = words[Math.floor(Math.random() * words.length)];

    let imposterCount = playerCount >= 5 ? 2 : 1;
    imposterIndexes = [];
    while (imposterIndexes.length < imposterCount) {
        let r = Math.floor(Math.random() * playerCount);
        if (!imposterIndexes.includes(r)) {
            imposterIndexes.push(r);
        }
    }

    imposterWithTip = imposterIndexes[Math.floor(Math.random() * imposterIndexes.length)];

    currentPlayer = 0;
    showPlayer();
}

// =============================
// Spieler anzeigen
// =============================
function showPlayer() {
    document.getElementById("playerName").innerText = playerNames[currentPlayer];
    document.getElementById("roleText").innerText = "Klicke auf 'Wort anzeigen'";
    document.getElementById("roleText").style.color = "black";
    document.getElementById("wordText").innerText = "";
    document.getElementById("nextButton").classList.remove("hidden");
}

// =============================
// Wort anzeigen
// =============================
function revealWord() {
    const roleText = document.getElementById("roleText");
    const wordText = document.getElementById("wordText");

    if (imposterIndexes.includes(currentPlayer)) {
        roleText.innerText = "IMPOSTER";
        roleText.style.color = "red";

        if (currentPlayer === imposterWithTip) {
            wordText.innerText = "Tipp: " + selectedWord.tip;
        } else {
            wordText.innerText = "Versuche dein Glück!";
        }

    } else {
        roleText.innerText = "CREWMATE";
        roleText.style.color = "#4fc3f7";
        wordText.innerText = selectedWord.word;
    }
}

// =============================
// Nächster Spieler
// =============================
function nextPlayer() {
    currentPlayer++;

    if (currentPlayer >= playerCount) {
        // Letzter Spieler war fertig – Final Screen anzeigen
        document.getElementById("gameScreen").classList.add("hidden");
        document.getElementById("finalScreen").classList.remove("hidden");
    } else {
        // Nächster Spieler anzeigen
        showPlayer();
    }
}

// =============================
// Spiel beenden / neu starten
// =============================
function endGame() {
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("finalScreen").classList.add("hidden");
    document.getElementById("setupScreen").classList.remove("hidden");

    document.getElementById("nameInputs").innerHTML = "";
    playerNames = [];
    playerCount = 0;
    currentPlayer = 0;
    imposterIndexes = [];
    imposterWithTip = null;
    selectedWord = null;
}

function restartGame() {
    if (playerNames.length === playerCount && playerCount > 0) {
        startNewGameRound();
        document.getElementById("finalScreen").classList.add("hidden");
        document.getElementById("gameScreen").classList.remove("hidden");
    } else {
        endGame();
    }
}
