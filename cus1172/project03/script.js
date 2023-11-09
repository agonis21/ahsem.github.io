var USERNAME = "";
var USERTIME = "";
var USER_CURR_QUESTION = 1; //starts at first question
var USER_TOTAL_QUESTIONS = 9; 
var USER_NUM_RIGHT = 0;

var question_object = {
    questionTitle: "",
    correctResponse: "",
    userGivenResponse: "",
    isResponseCorrect: false
}

var QUESTIONS = [
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

    var question = ALL_questions[Math.floor(Math.random()*ALL_questions.length)];


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
    //boolean variable
    var isAnswerCorrect = checkAnswer();

    //add to the list for final results
    QUESTIONS.push(question_object);

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


var MCQ_questions = [
    {
    
        questionTitle: "What does HTML stand for?",

        isMultipleChoice: true,
        isMultipleImageChoice: false,
        isShortResponse: false,

        multipleChoiceOptions: [
            {
                "option": "Hypertext Markup Language"
            },
            {
                "option": "HypoTenuse More Lamb"
            }
        ],
        correctMultipleChoiceOption: "Hypertext Markup Language",

        
        multipleImageChoiceURLOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }, 
            {
                "option": ""
            }, 
            {
                "option": ""
            }
        ],

        correctMultipleImageChoiceURLOption: "",
        correctShortResponseAnswer: ""
    },

    {
    
        questionTitle: "What does CSS stand for?",

        isMultipleChoice: true,
        isMultipleImageChoice: false,
        isShortResponse: false,

        multipleChoiceOptions: [
            {
                "option": "Hypertext Markup Language"
            },
            {
                "option": "Cascading Style Sheets"
            }
        ],
        correctMultipleChoiceOption: "Cascading Style Sheets",

        
        multipleImageChoiceURLOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }, 
            {
                "option": ""
            }, 
            {
                "option": ""
            }
        ],

        correctMultipleImageChoiceURLOption: "",
        correctShortResponseAnswer: ""
    }, 

    {
    
        questionTitle: "What does JS stand for?",

        isMultipleChoice: true,
        isMultipleImageChoice: false,
        isShortResponse: false,

        multipleChoiceOptions: [
            {
                "option": "Hypertext Markup Language"
            },
            {
                "option": "HypoTenuse More Lamb"
            },
            {
                "option": "JavaScript"
            }
        ],
        correctMultipleChoiceOption: "JavaScript",

        
        multipleImageChoiceURLOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }, 
            {
                "option": ""
            }, 
            {
                "option": ""
            }
        ],

        correctMultipleImageChoiceURLOption: "",
        correctShortResponseAnswer: ""
    }
];

var SR_questions = [
    {
    
        questionTitle: "What is the 3-letter abbreviation of Extensible Markup Language?",

        isMultipleChoice: false,
        isMultipleImageChoice: false,
        isShortResponse: true,

        multipleChoiceOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }
        ],
        correctMultipleChoiceOption: "",

        
        multipleImageChoiceURLOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }, 
            {
                "option": ""
            }, 
            {
                "option": ""
            }
        ],

        correctMultipleImageChoiceURLOption: "",
        correctShortResponseAnswer: "XML"
    },

    {
    
        questionTitle: "What is the tag for importing stylesheets?",

        isMultipleChoice: false,
        isMultipleImageChoice: false,
        isShortResponse: true,

        multipleChoiceOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }
        ],
        correctMultipleChoiceOption: "",

        
        multipleImageChoiceURLOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }, 
            {
                "option": ""
            }, 
            {
                "option": ""
            }
        ],

        correctMultipleImageChoiceURLOption: "",
        correctShortResponseAnswer: "<link>"
    },
];

var MIC_questions = [
    {
    
        questionTitle: "Which one is the CSS logo?",

        isMultipleChoice: false,
        isMultipleImageChoice: true,
        isShortResponse: false,

        multipleChoiceOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }
        ],
        correctMultipleChoiceOption: "",

        
        multipleImageChoiceURLOptions: [
            {
                "option": "https://logowik.com/content/uploads/images/123_css3.jpg"
            },
            {
                "option": "https://logowik.com/content/uploads/images/javascript.jpg"
            }, 
            {
                "option": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_neObRKceqsRc3POqgFFfVDrX9jDzDyDXWYYvg71XVT_dNidaPafD_bqKOJYmogSvh0&usqp=CAU"
            }
        ],

        correctMultipleImageChoiceURLOption: "https://logowik.com/content/uploads/images/123_css3.jpg",
        correctShortResponseAnswer: ""
    }, 

    {
    
        questionTitle: "Which one is the HTML logo?",

        isMultipleChoice: false,
        isMultipleImageChoice: true,
        isShortResponse: false,

        multipleChoiceOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }
        ],
        correctMultipleChoiceOption: "",

        
        multipleImageChoiceURLOptions: [
            {
                "option": "https://logowik.com/content/uploads/images/123_css3.jpg"
            },
            {
                "option": "https://logowik.com/content/uploads/images/javascript.jpg"
            }, 
            {
                "option": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_neObRKceqsRc3POqgFFfVDrX9jDzDyDXWYYvg71XVT_dNidaPafD_bqKOJYmogSvh0&usqp=CAU"
            }
        ],

        correctMultipleImageChoiceURLOption: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_neObRKceqsRc3POqgFFfVDrX9jDzDyDXWYYvg71XVT_dNidaPafD_bqKOJYmogSvh0&usqp=CAU",
        correctShortResponseAnswer: ""
    },

    {
    
        questionTitle: "Which one is the JS logo?",

        isMultipleChoice: false,
        isMultipleImageChoice: true,
        isShortResponse: false,

        multipleChoiceOptions: [
            {
                "option": ""
            },
            {
                "option": ""
            }
        ],
        correctMultipleChoiceOption: "",

        
        multipleImageChoiceURLOptions: [
            {
                "option": "https://logowik.com/content/uploads/images/123_css3.jpg"
            },
            {
                "option": "https://logowik.com/content/uploads/images/javascript.jpg"
            }, 
            {
                "option": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_neObRKceqsRc3POqgFFfVDrX9jDzDyDXWYYvg71XVT_dNidaPafD_bqKOJYmogSvh0&usqp=CAU"
            }
        ],

        correctMultipleImageChoiceURLOption: "https://logowik.com/content/uploads/images/javascript.jpg",
        correctShortResponseAnswer: ""
    }
]

var ALL_questions = [...MCQ_questions, ...SR_questions, ...MIC_questions];
console.log(ALL_questions.length);