var questions = [
    {
        question: "What does CSS stand for _______",
        correctAns: "Cascading Style Sheets",
        options:[
            "Colorful Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
        ]
    },
    {
        question: "what does AI stand for _______",
        correctAns: "Artificial intelligence",
        options:[
            "Assure intelligence",
            "Absolute intelligence",
            "Accurate intelligence",
            "Artificial intelligence",
        ]
    },
    {
        question: "What is the meaning of Laravel _______",
        correctAns: "Laravel is a web application framework with expressive, elegant syntax.",
        options:[
            "Hometext Preprocessor",
            "executable Multiple Language",
            "Laravel is a web application framework with expressive, elegant syntax.",
            "Structured Query Language",
        ]
    },
    {
        question: "what does graphic design stand for _______",
        correctAns: "the art and practice of planning and projecting ideas and experiences with visual and textual content",
        options:[
            "the art and practice of planning and projecting ideas and experiences with visual and textual content",
            "Effective programing",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ]
    },
    {
        question: "What does JS stand for _______",
        correctAns: "JavaScript",
        options:[
            "JavaScript",
            "JeStand",
            "Just Stand",
            "Jet Sport",
        ]
    },

]

var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var optionsParent = document.getElementById("optionsParent");

var indexVal = 0;
var marks = 0;

function renderQuestion() {
    var que = questions[indexVal];
    displayQuestion.innerHTML = que.question;
    totalQuestionNumber.innerHTML = questions.length;
    currentQuestionNumber.innerHTML = indexVal + 1;
    
    optionsParent.innerHTML = "";

    for (var i = 0; i < que.options.length; i++) {
        optionsParent.innerHTML += ` <div class="col-md-6 my-3 ">
        <button onclick="checkcorrectAns('${que.correctAns}', '${que.options[i]}')" class="btn btn-primary py-2 rounded-5 w-100 custom_btn" >${que.options[i]}</button>
       </div>`;
        
    }

}
function nextQue(){
    indexVal++;
    renderQuestion()
}

function checkcorrectAns(correctAns, selectedOption){
    console.log(correctAns, selectedOption)
if(correctAns == selectedOption){
    marks = marks + 1;
}
console.log(marks);
nextQue()
}
renderQuestion();

