const DEFAULT_HEADING = "Welcome to JavaScript Lab";
const DEFAULT_BG = "#f0f2f5";
const DEFAULT_FONT_SIZE = 16;

let currentFontSize = DEFAULT_FONT_SIZE;
const backgrounds = ["#9a6b66", "#2ae9b1", "#52cca3", "#bdc3c7"];
let bgIndex = 0;

const heading = document.getElementById('labHeading');
const textInput = document.getElementById('textInput');
const paragraph = document.getElementById('labParagraph');
const body = document.body;

document.getElementById('btnHeading').addEventListener('click', changeHeadingText);
document.getElementById('btnBackground').addEventListener('click', changeBackgroundColor);
document.getElementById('btnFontSize').addEventListener('click', increaseParagraphFontSize);
document.getElementById('btnTogglePara').addEventListener('click', toggleParagraphVisibility);
document.getElementById('btnReset').addEventListener('click', resetPageContent);

function changeHeadingText() {
    const userInput = textInput.value.trim();
    if (userInput !== "") {
        heading.innerText = userInput;
    }
}

function changeBackgroundColor() {
    body.style.backgroundColor = backgrounds[bgIndex];
    bgIndex = (bgIndex + 1) % backgrounds.length;
}

function increaseParagraphFontSize() {
    currentFontSize += 4;
    paragraph.style.fontSize = currentFontSize + "px";
}

function toggleParagraphVisibility() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

function resetPageContent() {
    heading.innerText = DEFAULT_HEADING;
    textInput.value = "";

    body.style.backgroundColor = DEFAULT_BG;
    bgIndex = 0;
    
    currentFontSize = DEFAULT_FONT_SIZE;
    paragraph.style.fontSize = DEFAULT_FONT_SIZE + "px";
    paragraph.style.display = "block";
}