var USERNAME = "";
var USERTIME = "";
var USER_CURR_QUESTION = 1; //starts at first question
var USER_TOTAL_QUESTIONS = 3; 
var USER_NUM_RIGHT = 0;
var QUESTIONS = [
    {
        questionTitle: "What is the weather?",
        correctResponse: "agf",
        userGivenResponse: "bluh",
        isResponseCorrect: false,
    }, 
    {
        questionTitle: "What is the weather?",
        correctResponse: "agf",
        userGivenResponse: "bluh",
        isResponseCorrect: true,
    }, 
    {
        questionTitle: "What is the weather?",
        correctResponse: "agf",
        userGivenResponse: "bluh",
        isResponseCorrect: false,
    }
];

// beginQuiz() is triggered based on button click 
// on "BEGIN QUIZ", used HTML attribute onclick

function beginQuiz(){
    var beginQuizBtn = document.querySelector("button#beginQuizBtn");
    var userNameInput = document.querySelector("input#userNameInput");
    var userNameLabel = document.querySelector("span#userNameLabel");

    USERNAME = userNameInput.value;

    if (USERNAME.length > 1) {
        userNameLabel.innerHTML = "Quiz will begin promptly.";


        // removing the name input container
        document.querySelector("div#introContainer").remove();

        renderQuestion();

    } else {
        userNameLabel.innerHTML = "Your name must be at least one character.";
    }

    return false;
}

//https://vahid.blog/post/2021-03-19-how-to-use-handlebars.js-for-templating/
function renderQuestion(){


    let htemplate = document.querySelector("#htemplate").innerHTML;
    let htemplate_function = Handlebars.compile(htemplate);
    let htemplate_object = {
        name: USERNAME,
        currentQuestionsCount: USER_CURR_QUESTION,
        totalQuestionsCount: USER_TOTAL_QUESTIONS, 
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
    //boolean variable
    var isAnswerCorrect = checkAnswer();

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




















function nextQuestion(){
    //removes content from div#questionResultRender
    document.querySelector("div#questionResultRender").innerHTML = "";

    if (USER_CURR_QUESTION < USER_TOTAL_QUESTIONS) {
        USER_CURR_QUESTION += 1;
    }

    if (USER_CURR_QUESTION == USER_TOTAL_QUESTIONS) {
        renderFinalResult();
    }

    renderQuestion();
}



function renderQuestionResult(isAnswerCorrect){
    let htemplate = document.querySelector("#resultTemplate").innerHTML;
    let htemplate_function = Handlebars.compile(htemplate);
    let htemplate_object = {
        isAnswerCorrect: isAnswerCorrect
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


