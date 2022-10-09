function Question(a, b, c, d, e, f) {
  this.question = a;
  this.option1 = b;
  this.option2 = c;
  this.option3 = d;
  this.option4 = e;
  this.correctOp = f;
}
var jsQuestionArr = [
  new Question(
    "1- Inside which HTML element do we put the JavaScript?",
    "<javascript>",
    "<js>",
    "<src>",
    "<script>",
    "option4"
  ),
  new Question(
    "2: Where is the correct place to insert a JavaScript?",
    "Both the head section and the body section are correct",
    "The head section",
    "The body section",
    "None of the above",
    "option1"
  ),
  new Question(
    "3:Is it necessary for the external script file to contain a <script> tag?",
    "Yes",
    "No",
    "Depends on the type of include",
    "None of the above",
    "option2"
  ),
  new Question(
    "4: What is the correct syntax for referring to an external script called 'gfg.js'?",
    "<script name='gfg.js'>",
    "<script href='gfg.js'>",
    "<script src='gfg.js'>",
    "None of these",
    "option3"
  ),
  new Question(
    "5: How many ways are there with which we can declare a variable in javascript?",
    "Only one",
    "Three",
    "Infinitely many",
    "None of the above",
    "option2"
  ),
  new Question(
    "6: Is a variable named 'apple' same as 'Apple' in javascript?",
    "Yes",
    "No",
    "Only when we use 'strict'",
    "None of the above",
    "option2"
  ),
  new Question(
    "7: Que 1: Javascript is a _____ language.",
    "Programming",
    "Application",
    " Scripting",
    " None of the above",
    "option3"
  ),
  new Question(
    "8: JavaScript is a _____ Side Scripting Language.",
    "Server",
    "Browser",
    "text-transform",
    "ISP",
    "option2"
  ),
  new Question(
    "9:  How do you find the number with the highest value of x and y? ?",
    "ceil(x,y)",
    "Math.ceil(x,y)",
    "top(x,y)",
    "Math.max(x,y)",
    "option4"
  ),
  new Question(
    "10: Which event occurs when the user clicks on an HTML element? ?",
    "onClick",
    "onChange",
    "onMouseClick",
    "onMouseOut",
    "option1"
  ),
];
var queDiv = document.querySelector(".js-question");
var question = document.querySelector(".js-que-text");
var inputOption = document.querySelectorAll(".js-opt-text");
var radio = document.getElementsByName("js-opt");
console.log(queDiv);
console.log(question);
console.log(inputOption);
console.log(radio);
var right = 0;
var wrong = 0;
index = 0;

function startJsQuiz() {
  deSelect();
  question.innerHTML = jsQuestionArr[index].question;
  inputOption[0].innerText = jsQuestionArr[index].option1;
  inputOption[1].innerText = jsQuestionArr[index].option2;
  inputOption[2].innerText = jsQuestionArr[index].option3;
  inputOption[3].innerText = jsQuestionArr[index].option4;
  return;
}

// go to quiz page function
function goToJsQuiz() {
  window.location.href = "jsquiz.html";
}

function correctAns() {
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].value;
    }
  }
}
function checkAnswer() {
    // var ans =  correctAns()
  
    if (correctAns() === jsQuestionArr[index].correctOp) {
      right++;
      // console.log(right)
    } else {
      wrong++;
      // console.log(wrong)
      // console.log(htmlQuestionArr[index].correctOp)
    }
    index++;
    if (index < 10) {
      startJsQuiz()
    } else if (index === 10) {
      queDiv.innerHTML = "";
      // console.log(right)
      // console.log(wrong)
      // console.log(htmlQuestionArr.length)
      var percentage = (right / jsQuestionArr.length) * 100;
      // console.log(percentage)
      var remarks;
      if (percentage > 70) {
        remarks = "Passed";
      } else {
        remarks = "Fail";
      }
      var resultCrdDiv = document.createElement("div");
      resultCrdDiv.className = "result-card";
      var resultCrdh1 = document.createElement("h1");
      resultCrdh1.className = "result-card-h1";
      var resultCrdh2 = document.createElement("h2");
      resultCrdh2.className = "result-card-h2";
      var h2Text = document.createTextNode(
        "Your score is " +
          percentage +
          "% (" +
          right +
          "/" +
          jsQuestionArr.length +
          ")"
      );
      if (percentage > 70) {
        remarks = "Passed";
        resultCrdh1.className = "result-card-h1-passed";
      } else {
        remarks = "Fail";
        resultCrdh1.className = "result-card-h1-fail";
      }
      var h1Text = document.createTextNode(`${remarks}`);
      // h1Text.style.color = "red"
      resultCrdDiv.appendChild(resultCrdh1);
      resultCrdDiv.appendChild(resultCrdh2);
      resultCrdh2.appendChild(h2Text);
      resultCrdh1.appendChild(h1Text);
      queDiv.appendChild(resultCrdDiv);
    }
    return [right, wrong];
  }
  
  function deSelect() {
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        radio[i].checked = false;
      }
    }
  }
  startJsQuiz()


// timer countdown
var min = 00;
var sec = 30;
var secSingleDigit = 09;
var count = document.querySelector(".countdown-sec-js");
function countdown() {
  var timer = window.setInterval(() => {
    count.innerHTML = sec;
    if (sec < 10) {
      count.innerHTML = "0" + sec;
    }
    sec--;
    if (sec === -1) {
      clearInterval(timer);
      sec = 30;
      if (index < 10) {
        checkAnswer();
        // startJsQuiz();
        countdown();
      } else if (index === 5) {
        result();
      }
    }
    console.log(sec);
  }, 1000);
}
// countdown();

var timer = countdown();
console.log(timer);
function clearCount(timer) {
  clearInterval(timer);
  sec = 30;
  // countdown()
}