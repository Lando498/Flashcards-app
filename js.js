const flashcard = document.getElementById("flashcard");
var raiseTween = new Tween(flashcard.style, 'top', Tween.linear, 0, -5, 0.1, 'px');
var lowerTween = new Tween(flashcard.style, 'top', Tween.linear, -5, 0, 0.1, 'px');

const skip = document.getElementById("skip")
const answerbox = document.getElementById("answer")
const box = document.getElementById("questionsanswers")
const q1e = document.getElementById("q1")
const q2e = document.getElementById("q2")
const q3e = document.getElementById("q3")
const q4e = document.getElementById("q4")
const q5e = document.getElementById("q5")
const q6e = document.getElementById("q6")
const q7e = document.getElementById("q7")
const q8e = document.getElementById("q8")
const q9e = document.getElementById("q9")
const q10e = document.getElementById("q10")
const q11e = document.getElementById("q11")
const q12e = document.getElementById("q12")
const q13e = document.getElementById("q13")
const q14e = document.getElementById("q14")
const q15e = document.getElementById("q15")
const a1e = document.getElementById("a1")
const a2e = document.getElementById("a2")
const a3e = document.getElementById("a3")
const a4e = document.getElementById("a4")
const a5e = document.getElementById("a5")
const a6e = document.getElementById("a6")
const a7e = document.getElementById("a7")
const a8e = document.getElementById("a8")
const a9e = document.getElementById("a9")
const a10e = document.getElementById("a10")
const a11e = document.getElementById("a11")
const a12e = document.getElementById("a12")
const a13e = document.getElementById("a13")
const a14e = document.getElementById("a14")
const a15e = document.getElementById("a15")
let q1 = ""
let q2 = ""
let q3 = ""
let q4 = ""
let q5 = ""
let q6 = ""
let q7 = ""
let q8 = ""
let q9 = ""
let q10 = ""
let q11 = ""
let q12 = ""
let q13 = ""
let q14 = ""
let q15 = ""
let a1 = ""
let a2 = ""
let a3 = ""
let a4 = ""
let a5 = ""
let a6 = ""
let a7 = ""
let a8 = ""
let a9 = ""
let a10 = ""
let a11 = ""
let a12 = ""
let a13 = ""
let a14 = ""
let a15 = ""
let currentindex = 1
flashcard.addEventListener("mouseenter", (event) => {
    raiseTween.start();
});
flashcard.addEventListener("mouseleave", (event) => {
    lowerTween.start();
});

    function updateFlashcardText() {
            if (currentindex > 15){
        currentindex = 1
    }
    let currentQuestion;
    switch (currentindex) {
        case 1: currentQuestion = q1; break;
        case 2: currentQuestion = q2; break;
        case 3: currentQuestion = q3; break;
        case 4: currentQuestion = q4; break;
        case 5: currentQuestion = q5; break;
        case 6: currentQuestion = q6; break;
        case 7: currentQuestion = q7; break;
        case 8: currentQuestion = q8; break;
        case 9: currentQuestion = q9; break;
        case 10: currentQuestion = q10; break;
        case 11: currentQuestion = q11; break;
        case 12: currentQuestion = q12; break;
        case 13: currentQuestion = q13; break;
        case 14: currentQuestion = q14; break;
        case 15: currentQuestion = q15; break;
    }
    document.getElementById("flashcard-text").textContent = currentQuestion;

}

function updateValue(e) {
    updateFlashcardText()
    const id = e.target.id;
    switch (id) {
        case "q1": q1 = e.target.value; break;
        case "q2": q2 = e.target.value; break;
        case "q3": q3 = e.target.value; break;
        case "q4": q4 = e.target.value; break;
        case "q5": q5 = e.target.value; break;
        case "q6": q6 = e.target.value; break;
        case "q7": q7 = e.target.value; break;
        case "q8": q8 = e.target.value; break;
        case "q9": q9 = e.target.value; break;
        case "q10": q10 = e.target.value; break;
        case "q11": q11 = e.target.value; break;
        case "q12": q12 = e.target.value; break;
        case "q13": q13 = e.target.value; break;
        case "q14": q14 = e.target.value; break;
        case "q15": q15 = e.target.value; break;
        case "a1": a1 = e.target.value; break;
        case "a2": a2 = e.target.value; break;
        case "a3": a3 = e.target.value; break;
        case "a4": a4 = e.target.value; break;
        case "a5": a5 = e.target.value; break;
        case "a6": a6 = e.target.value; break;
        case "a7": a7 = e.target.value; break;
        case "a8": a8 = e.target.value; break;
        case "a9": a9 = e.target.value; break;
        case "a10": a10 = e.target.value; break;
        case "a11": a11 = e.target.value; break;
        case "a12": a12 = e.target.value; break;
        case "a13": a13 = e.target.value; break;
        case "a14": a14 = e.target.value; break;
        case "a15": a15 = e.target.value; break;
    }
}

q1e.addEventListener("change", updateValue);
q2e.addEventListener("change", updateValue);
q3e.addEventListener("change", updateValue);
q4e.addEventListener("change", updateValue);
q5e.addEventListener("change", updateValue);
q6e.addEventListener("change", updateValue);
q7e.addEventListener("change", updateValue);
q8e.addEventListener("change", updateValue);
q9e.addEventListener("change", updateValue);
q10e.addEventListener("change", updateValue);
q11e.addEventListener("change", updateValue);
q12e.addEventListener("change", updateValue);
q13e.addEventListener("change", updateValue);
q14e.addEventListener("change", updateValue);
q15e.addEventListener("change", updateValue);
a1e.addEventListener("change", updateValue);
a2e.addEventListener("change", updateValue);
a3e.addEventListener("change", updateValue);
a4e.addEventListener("change", updateValue);
a5e.addEventListener("change", updateValue);
a6e.addEventListener("change", updateValue);
a7e.addEventListener("change", updateValue);
a8e.addEventListener("change", updateValue);
a9e.addEventListener("change", updateValue);
a10e.addEventListener("change", updateValue);
a11e.addEventListener("change", updateValue);
a12e.addEventListener("change", updateValue);
a13e.addEventListener("change", updateValue);
a14e.addEventListener("change", updateValue);
a15e.addEventListener("change", updateValue);


answerbox.addEventListener("change", answered);

function answered(e) {
    
    let correctAnswer;
    switch (currentindex) {
        case 1: correctAnswer = a1; break;
        case 2: correctAnswer = a2; break;
        case 3: correctAnswer = a3; break;
        case 4: correctAnswer = a4; break;
        case 5: correctAnswer = a5; break;
        case 6: correctAnswer = a6; break;
        case 7: correctAnswer = a7; break;
        case 8: correctAnswer = a8; break;
        case 9: correctAnswer = a9; break;
        case 10: correctAnswer = a10; break;
        case 11: correctAnswer = a11; break;
        case 12: correctAnswer = a12; break;
        case 13: correctAnswer = a13; break;
        case 14: correctAnswer = a14; break;
        case 15: correctAnswer = a15; break;
    }
    if (e.target.value === correctAnswer) {
    confetti({
    position: { x: window.innerWidth / 2, y:  window.innerHeight },
    count: 300,			// Number of particles
    size: 1,			// Size of the particles
    velocity: 450,		// Initial particle velocity
    fade: false			// Particles fall off the screen, or fade out
});
        e.target.value = ""
        currentindex += 1
        updateFlashcardText()
    }
}

skip.addEventListener("click", (event) => {
            currentindex += 1
        updateFlashcardText()
});
var entertween = new Tween(box.style, 'left', Tween.linear, -485, -15, 0.3, 'px');
var leavetween = new Tween(box.style, 'left', Tween.linear, -15, -485, 0.3, 'px');
let cooldown = false

function cooldownend(){
    cooldown = false
}
box.addEventListener("mouseenter", (event) => {
    if (cooldown == false) {
    cooldown = true
    entertween.start();
    window.setTimeout(cooldownend, 2000)
    }
});
box.addEventListener("mouseleave", (event) => {
    leavetween.start();
});
