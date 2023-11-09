var USERNAME = "";
var USERTIME = "";
var USER_CURR_QUESTION = 1; //starts at first question
var USER_TOTAL_QUESTIONS = 9; 
var USER_NUM_RIGHT = 0;
var CURRENT_QUESTION = [];
var QUESTIONS = [
];

var question_object = {
    questionTitle: "",
    correctResponse: "",
    userGivenResponse: "",
    isResponseCorrect: false
};

var QUIZ_NAME = "";


// beginQuiz() is triggered based on button click 
// on "BEGIN QUIZ", used HTML attribute onclick

function beginQuiz(){
    var beginQuizBtn = document.querySelector("button#beginQuizBtn");
    var userNameInput = document.querySelector("input#userNameInput");
    var userNameLabel = document.querySelector("span#userNameLabel");

    USERNAME = userNameInput.value;

    if (USERNAME.length > 1) {
        userNameLabel.innerHTML = "Quiz will begin promptly.";

        // changing navigation bar text to quiz name
        QUIZ_NAME = document.querySelector("#selectQuiz").value;
        document.querySelector("#quizName").innerText = QUIZ_NAME;

        // removing the name input container
        document.querySelector("div#introContainer").remove();

        


        renderQuestion();

    } else {
        userNameLabel.innerHTML = "Your name must be at least one character.";
    }

    return false;
}






async function getRandomQuestion(){
    //questionType is either frontend or backend

    let mainURL = "http://localhost:3000/";

    if (QUIZ_NAME == "Front-end Quiz"){
       mainURL += "frontendquestions/random/";
    }

    if (QUIZ_NAME == "Back-end Quiz" ){
        mainURL += "backendquestions/random/";
    }

    const response = await fetch(
        mainURL,
        {
            method: 'GET'
        }
    );
    const data = await response.json();

    return data;
}




//https://vahid.blog/post/2021-03-19-how-to-use-handlebars.js-for-templating/
async function renderQuestion(){

    
    //var question = ALL_questions[Math.floor(Math.random()*ALL_questions.length)];
    var question = await getRandomQuestion();
    
    
    CURRENT_QUESTION = question;

    let htemplate = document.querySelector("#htemplate").innerHTML;
    let htemplate_function = Handlebars.compile(htemplate);
    let htemplate_object = {
        name: USERNAME,
        currentQuestionsCount: USER_CURR_QUESTION,
        totalQuestionsCount: USER_TOTAL_QUESTIONS, 

        questionTitle: question.questionTitle,

        isMultipleChoice: question.isMultipleChoice,
        multipleChoiceOptions: question.multipleChoiceOptions,
        correctMultipleChoiceOption: question.correctMultipleChoiceOption,

        isMultipleImageChoice: question.isMultipleImageChoice,
        multipleImageChoiceURLOptions: question.multipleImageChoiceURLOptions,

        correctMultipleImageChoiceURLOption: question.correctMultipleImageChoiceURLOption,

        isShortResponse: question.isShortResponse,
        correctShortResponseAnswer: question.correctShortResponseAnswer,

        category: "Technical blog",
        link: "https://vahid.blog",
        miscellaneous:
          "This part here can incorporate HTML tags like <strong>strong</strong> and <em>em</em> because the template displays it using triple curlies.",
      };
      
      let new_htemplate = htemplate_function(htemplate_object);

      document.querySelector("#outputRender").innerHTML = new_htemplate;


    // var data = {
    //     title: "Question T",
    //     uname: USERNAME
    // };

    // var handlebarsScript = document.querySelector("#handlebarsTemplate").innerHTML;
    // var template = Handlebars.compile(handlebarsScript);
    // var filled = template(data);

    // var handlebarsDivContainer = document.querySelector("#handlebarsDivContainer");
    // handlebarsDivContainer.innerHTML = filled;
}


function submitQuestion(){
    

    console.log(CURRENT_QUESTION);
    //add to the list for final results
    question_object.questionTitle = CURRENT_QUESTION.questionTitle;
    question_object.correctResponse =  getAnswerFromQuestion(CURRENT_QUESTION);
    question_object.userGivenResponse = getUserGivenAnswer(CURRENT_QUESTION);

    //boolean variable
    var isAnswerCorrect = (question_object.correctResponse == question_object.userGivenResponse);
    console.log("Correct Response: " + question_object.correctResponse);
    console.log("Given Response: " + question_object.userGivenResponse);
    console.log("isAnswerCorrect: " + isAnswerCorrect);
    question_object.isResponseCorrect = isAnswerCorrect;

    QUESTIONS.push({...question_object});

    console.log(QUESTIONS);

    if (isAnswerCorrect) {
        renderQuestionResult(true);
        USER_NUM_RIGHT += 1;
    } else {
        renderQuestionResult(false);
    }
}


// either returns true or false
function checkAnswer(){
    if (USER_CURR_QUESTION % 2 == 0) {
        return false;
    } else {
        return true;
    }
}


function getAnswerFromQuestion(question) {
    var answer = "";
    if (question.isMultipleChoice) {
        answer = question.correctMultipleChoiceOption;
    }

    if (question.isMultipleImageChoice){
        answer = question.correctMultipleImageChoiceURLOption;
    }

    if (question.isShortResponse) {
        answer = question.correctShortResponseAnswer;
    }

    return answer;
}


function getUserGivenAnswer(question_asked){
    var answer = "";
    if (question_asked.isMultipleChoice) {
        var options = document.querySelectorAll(".form-control > label");

        for (var i = 0; i < options.length; i++){
            if (options[i].querySelector("input").checked) {
                answer = options[i].querySelector("span").innerText;

                console.log(answer);
            }
        }
    }

    if (question_asked.isMultipleImageChoice){
        var options = document.querySelectorAll(".form-control > label");

        for (var i = 0; i < options.length; i++){
            if (options[i].querySelector("input").checked) {
                answer = options[i].querySelector("img").src;

                console.log(answer);
            }
        }
    }

    if (question_asked.isShortResponse) {
        var input_element = document.querySelector("#userGivenShortResponse");

        answer = input_element.value;

        console.log(answer);
    }

    return answer;
}













function nextQuestion(){
    //removes content from div#questionResultRender
    document.querySelector("div#questionResultRender").innerHTML = "";

    if (USER_CURR_QUESTION < USER_TOTAL_QUESTIONS + 1) {
        USER_CURR_QUESTION += 1;
        renderQuestion();
    }

    if (USER_CURR_QUESTION == USER_TOTAL_QUESTIONS + 1) {
        renderFinalResult();
    }

    
}



function renderQuestionResult(isAnswerCorrect){
    let correct_answer_praises = [
        "Good, you've got it right.",
        "That’s right, you are doing good today.",
        "Sensational! You are correct.",
        "Right on! You must have been practicing.",
        "Exactly right. You’ve got your brain in gear."
    ];

    let incorrect_answer_praises = [
        "Wrong answer. Better luck next time.",
        "Incorrect.",
        "Nice try, but that was the wrong answer.",
        "Not exactly.",
        "Incorrect, but good guess."
    ];

    let praise = function(){
        if (isAnswerCorrect){
            return correct_answer_praises[Math.floor(Math.random()*correct_answer_praises.length)];
        } else {
            return incorrect_answer_praises[Math.floor(Math.random()*incorrect_answer_praises.length)]
        }
    }

    let htemplate = document.querySelector("#resultTemplate").innerHTML;
    let htemplate_function = Handlebars.compile(htemplate);
    let htemplate_object = {
        isAnswerCorrect: isAnswerCorrect,
        praise: praise
      };
      
      let new_htemplate = htemplate_function(htemplate_object);

      document.querySelector("#questionResultRender").innerHTML = new_htemplate;
}

function renderFinalResult(){
    //removing output render
    document.querySelector("#outputRender").remove();

    let htemplate = document.querySelector("#finalResultTemplate").innerHTML;
    let htemplate_function = Handlebars.compile(htemplate);
    let htemplate_object = {
        name: USERNAME,
        currQuestionsCount: USER_CURR_QUESTION,
        correctQuestionsCount: USER_NUM_RIGHT,
        totalQuestionsCount: USER_TOTAL_QUESTIONS, 
        data: QUESTIONS,
        category: "Technical blog",
        link: "https://vahid.blog",
        miscellaneous:
          "This part here can incorporate HTML tags like <strong>strong</strong> and <em>em</em> because the template displays it using triple curlies.",
      };
      
      let new_htemplate = htemplate_function(htemplate_object);

      document.querySelector("#finalResultRender").innerHTML = new_htemplate;
}


