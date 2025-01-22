const questions = [
    
    {
        Q:" HTML stands for ?",
        options:["HighText Machine Language", "HyperText and links Markup Language","HyperText Markup Language","None of these above"]
    },
    {
        Q:"Which of the following tag is used for inserting the largest heading in HTML?",
        options:["<h3>","<h1>","<h5>","<h6>"]
    },
    {
        Q:"HTML tags are enclosed in?",
        options:["# and #","{ and }","! and ?","< and >"]
    },
   
    {
        Q:"What are the types of unordered or bulleted list in HTML?",
        options:["disc, square, triangle","polygon, triangle, circle","disc, circle, square","All of the above"]
    },
    {
        Q:"The full form of CSS is ?",
        options:["Cascade style sheets","Color and style sheets","Cascading style sheets","None of the above"]
    },
    
    {
        Q:"Which of the following property is used as the shorthand property for the padding properties?",
        options:["padding-left","padding-right","padding","All of the above"]
    },
    {
        Q:" The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        options:["writing-mode","text-indent","word-break","None of the above"]
    },
    {
        Q:"The CSS property used to draw a line around the elements outside the border?",
        options:["border","outline","padding","line"]
    },
    {
        Q:" Which of the following is not a Java features?",
        options:["Dynamic","Architecture Neutral","Use of pointers","Object-oriented"]
    },
    {
        Q:"which is used to find and fix bugs in the Java programs?",
        options:["JVM","JRE","JDK","JDB"]
    },
    
    
    {
        Q: "Who developed Python Programming Language?",
        options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"]
    },
    {
        Q: "Which type of Programming does Python support?",
        options: ["object-oriented programming", "structured programming", "functional programming", "all of the mentioned"]
    },
    {
        Q: "Is Python code compiled or interpreted?",
        options: ["Python code is both compiled and interpreted", "Python code is neither compiled nor interpreted", "Python code is only compiled", "Python code is only interpreted"]
    },
    {
        Q: "4 + 3 % 5",
        options: ["7", "2", "4", "1"]
    },
    {
        Q: "Which of the following functions can help us to find the version of python that we are currently working on?",
        options: ["sys.version(1)", "sys.version(0)", "sys.version()", "sys.version"]
    },
];

const answers = ["HyperText Markup Language","<h6>","< and >","disc, square, triangle","Cascade style sheets","padding","writing-mode","outline","Use of pointers","JDK","Guido van Rossum", "all of the mentioned", "Python code is both compiled and interpreted", "7", "sys.version",];

const questionElement = document.querySelector("#ques");
const optionsElements = document.querySelectorAll(".box2");
const nextButton = document.querySelector("#next");
const scoreElement = document.querySelector(".score");

let currentQuestion = 0;
let score = 0;


function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.Q;

    optionsElements.forEach((optionElement, index) => {
        optionElement.textContent = question.options[index];
        optionElement.parentElement.style.backgroundColor = "transparent";
        optionElement.style.pointerEvents = "auto"; 
    });

    nextButton.style.display = "none"; 
}


function selectAnswer(selectedOption) {
    const selectedText = selectedOption.textContent;
    const correctAnswer = answers[currentQuestion];

    
    disableOptions();

    if (selectedText === correctAnswer) {
        selectedOption.parentElement.style.backgroundColor = "green";
        score++; 
    } else {
        selectedOption.parentElement.style.backgroundColor = "red";

    }

    updateScore(); 
    nextButton.style.display = "flex"; 
}


function disableOptions() {
    optionsElements.forEach((option) => {
        option.style.pointerEvents = "none"; 
    });
}


function updateScore() {
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
}


nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++; 
        displayQuestion(); 
    } else {
        localStorage.setItem("quizScore", score);
        localStorage.setItem("totalQuestions", questions.length);
        window.location.href = "final.html";  

    }
});




optionsElements.forEach((option) => {
    option.addEventListener("click", () => selectAnswer(option));
});


displayQuestion();
