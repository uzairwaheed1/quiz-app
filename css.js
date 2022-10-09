function Question(a, b, c, d, e, f) {
  this.question = a;
  this.option1 = b;
  this.option2 = c;
  this.option3 = d;
  this.option4 = e;
  this.correctOp = f;
}
var cssQuestionArr = [
  new Question(
    "1- What does CSS stand for?",
    "Cascade sheets style",
    "Color and style sheets",
    "Cascading style sheets",
    "Coded Style Sheet",
    "option3"
  ),
  new Question(
    "2: Which of the following is the correct syntax to add the external stylesheet in CSS?",
    "Rasmus Lerdorf<style src = quiz.css>",
    "<style src = 'quiz.cs'>",
    "<stylesheet> quiz.css </stylesheet>",
    "<link rel='stylesheet' type='quiz/css' href='quiz.css'>",
    "option4"
  ),
  new Question(
    "3:Which of the below CSS properties is used to change the background color of CSS ?",
    "bg color",
    "color-background",
    "background-color",
    "color",
    "option3"
  ),
  new Question(
    "4: Which of the below CSS class is used to change the text color of CSS ?",
    "background-color",
    "color",
    "color-background",
    "None of the above",
    "option2"
  ),
  new Question(
    "5: Which of the below is the correct syntax to put a line over text in CSS?",
    "text-decoration: line",
    "text-decoration: none",
    "text-decoration: overline",
    "text-decoration: underline",
    "option3"
  ),
  new Question(
    "6: Which below property of CSS is used to set the indentation of the first line in a block of text ?",
    "text-indent property",
    "text-underlne-property",
    "text-decoration none",
    "text-overflow property",
    "option1"
  ),
  new Question(
    "7: Which of the below CSS properties represent the order of flex items in the grid container ?",
    "order",
    "float",
    "overflow",
    "All of the above",
    "option1"
  ),
  new Question(
    "8: How do we set the default width of the font in CSS ?",
    "font-stretch",
    "font-weight",
    "text-transform",
    "font-variant",
    "option1"
  ),
  new Question(
    "9: Which element is used to represent the transparency of an element in CSS ?",
    "Hover",
    "Opacity",
    "Transparent",
    "Overlay",
    "option2"
  ),
  new Question(
    "10: Which of the below CSS property is used to add a stroke in the text ?",
    "text-stroke",
    "text-transform",
    "text-decoration",
    "None of the above",
    "option1"
  ),
];

var queDiv = document.querySelector(".css-question");
var question = document.querySelector(".css-que-text");
var inputOption = document.querySelectorAll(".css-opt-text");
var radio = document.getElementsByName("css-opt");
console.log(queDiv);
console.log(question);
console.log(inputOption);
console.log(radio);
var right = 0;
var wrong = 0;
index = 0;

function startCssQuiz() {
  deSelect();
  question.innerHTML = cssQuestionArr[index].question;
  inputOption[0].innerText = cssQuestionArr[index].option1;
  inputOption[1].innerText = cssQuestionArr[index].option2;
  inputOption[2].innerText = cssQuestionArr[index].option3;
  inputOption[3].innerText = cssQuestionArr[index].option4;
  return;
}

// go to quiz page function
function goToCssQuiz() {
  window.location.href = "cssquiz.html";
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

  if (correctAns() === cssQuestionArr[index].correctOp) {
    right++;
    // console.log(right)
  } else {
    wrong++;
    // console.log(wrong)
    // console.log(htmlQuestionArr[index].correctOp)
  }
  index++;
  if (index < 10) {
    startCssQuiz();
  } else if (index === 10) {
    queDiv.innerHTML = "";
    // console.log(right)
    // console.log(wrong)
    // console.log(htmlQuestionArr.length)
    var percentage = (right / cssQuestionArr.length) * 100;
    // console.log(percentage)
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
        cssQuestionArr.length +
        ")"
    );
    var remarks;
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
startCssQuiz();

// timer countdown
var min = 00;
var sec = 30;
var secSingleDigit = 09;
var count = document.querySelector(".countdown-sec-css");
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
        startCssQuiz();
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
