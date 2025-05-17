var question1 = "What does SDG stand for?";
var choices1 = ["Starell Direct Groomer", "Sustainable Development Goals", "Safety Destruction Group", "Scientific Device Gear"];
var answer1 = "Sustainable Development Goals";

var question2 = "How many SDGs are there?";
var choices2 = ["10", "15", "17", "20"];
var answer2 = "17";

var question3 = "How can you help prevent water pollution?";
var choices3 = ["Throw trash everywhere", "Support organizations", "Ignore advocacies", "Not doing anything"];
var answer3 = "Support organizations";

var question4 = "What can students do to help reduce water pollution?";
var choices4 = ["Throw trash in the river", "Use water responsibly", "Ignore leaking faucets", "Pour chemicals down the drain"];
var answer4 = "Use water responsibly";

var question5 = "What is the target year to achieve the SDGs?";
var choices5 = ["2023", "2028", "2030", "2025"];
var answer5 = "2030";

var currentQuestion = 1;
var score = 0;

function showQuestion() {
    var q = document.getElementById("question");
    var c = document.getElementById("choices");
    var nextBtn = document.getElementById("next-btn");

    if (currentQuestion === 1) {
        q.textContent = question1;
        c.innerHTML = '<button onclick="check(\'Starell Direct Groomer\')">Starell Direct Groomer</button><br>' +
                      '<button onclick="check(\'Sustainable Development Goals\')">Sustainable Development Goals</button><br>' +
                      '<button onclick="check(\'Safety Destruction Group\')">Safety Destruction Group</button><br>' +
                      '<button onclick="check(\'Scientific Device Gear\')">Scientific Device Gear</button>';
    } else if (currentQuestion === 2) {
        q.textContent = question2;
        c.innerHTML = '<button onclick="check(\'10\')">10</button><br>' +
                      '<button onclick="check(\'15\')">15</button><br>' +
                      '<button onclick="check(\'17\')">17</button><br>' +
                      '<button onclick="check(\'20\')">20</button>';
    } else if (currentQuestion === 3) {
        q.textContent = question3;
        c.innerHTML = '<button onclick="check(\'Throw trash everywhere\')">Throw trash everywhere</button><br>' +
                      '<button onclick="check(\'Support organizations\')">Support organizations</button><br>' +
                      '<button onclick="check(\'Ignore advocacies\')">Ignore advocacies</button><br>' +
                      '<button onclick="check(\'Not doing anything\')">Not doing anything</button>';
    } else if (currentQuestion === 4) {
        q.textContent = question4;
        c.innerHTML = '<button onclick="check(\'Throw trash in the river\')">Throw trash in the river</button><br>' +
                      '<button onclick="check(\'Use water responsibly\')">Use water responsibly</button><br>' +
                      '<button onclick="check(\'Ignore leaking faucets\')">Ignore leaking faucets</button><br>' +
                      '<button onclick="check(\'Pour chemicals down the drain\')">Pour chemicals down the drain</button>';
    } else if (currentQuestion === 5) {
        q.textContent = question5;
        c.innerHTML = '<button onclick="check(\'2023\')">2023</button><br>' +
                      '<button onclick="check(\'2028\')">2028</button><br>' +
                      '<button onclick="check(\'2030\')">2030</button><br>' +
                      '<button onclick="check(\'2025\')">2025</button>';
    }

    nextBtn.style.display = "none";
}

function check(selectedChoice) {
    var correctAnswer = "";
    if (currentQuestion === 1) {
        correctAnswer = answer1;
    } else if (currentQuestion === 2) {
        correctAnswer = answer2;
    } else if (currentQuestion === 3) {
        correctAnswer = answer3;
    } else if (currentQuestion === 4) {
        correctAnswer = answer4;
    } else if (currentQuestion === 5) {
        correctAnswer = answer5;
    }

    if (selectedChoice === correctAnswer) {
        score = score + 1;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is: " + correctAnswer);
    }

    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion <= 5) {
        showQuestion(); 
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("quiz-container").innerHTML = 
        "Quiz completed! Your score: " + score + " out of 5";
}

window.onload = showQuestion;
