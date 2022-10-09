function getEmailValue() {
  var signupEmail = document.getElementById("sign-up-email").value;
  var signupUsername = document.getElementById("signup-username").value;
  var signupPass = document.getElementById("signup-password").value;

  // var signupInfoArr = [signupEmail,signupUsername,signupPass]
  localStorage.setItem("Email", signupEmail);
  localStorage.setItem("Password", signupPass);
  // console.log(signupInfoArr)
  // console.log(signupEmail)
  // console.log(signupUsername)
  // console.log(signupPass)
  return { signupEmail, signupUsername, signupPass };
}

var signupEmail = localStorage.getItem("Email");
var signupPass = localStorage.getItem("Password");
// console.log(signupEmail);
// console.log(signupPass);

function loginSuccessfull() {
  var main = document.querySelector(".main-login");
  main.remove();
  var successfulLoginDiv = document.querySelector(".sucessfull-login");
  // div styling
  successfulLoginDiv.style.backgroundColor = "white";
  successfulLoginDiv.style.color = "black";
  successfulLoginDiv.style.width = "40%";
  successfulLoginDiv.style.marginTop = "97px";
  successfulLoginDiv.style.marginLeft = "100px";
  successfulLoginDiv.style.padding = "20px";
  successfulLoginDiv.style.borderRadius = "13px";
  successfulLoginDiv.style.opacity = "0.8";
  var successfulLoginh1 = document.createElement("h1");

  var successfulLoginDivText = document.createTextNode(
    "You're successfully sign up"
  );
  successfulLoginh1.appendChild(successfulLoginDivText);
  successfulLoginDiv.appendChild(successfulLoginh1);
}

function getValuesucessfull() {
  getEmailValue();
  loginSuccessfull();
}
var credential = document.getElementsByClassName("credential1")[0];
console.log(credential);
var logInAnchr = document.querySelector(".login-a");
function login1() {
  // debugger
  // window.location.href = "/dashboard.html"

  if (signupEmail === null && signupPass === null) {
    alert("Plz register first");
  }
  if (
    signupEmail === document.querySelector("#login-email").value &&
    signupPass === document.querySelector("#login-pass").value
  ) {
    // debugger
    // window.location.href = "dashboard.html";
    logInAnchr.href = "dashboard.html";
    console.log(document.querySelector("#login-email").value);
    console.log(document.querySelector("#login-pass").value);

    // alert("login");
  }
  if (
    signupEmail !== document.querySelector("#login-email").value ||
    signupPass !== document.querySelector("#login-pass").value
  ) {
    // debugger
    // var loginDiv = document.querySelector(".login-form-form")
    // var credential = document.createElement("div")
    // credential.className = "credential1"
    // console.log(credential)
    // var credentialText = document.createTextNode("Credential not match")
    // credential.appendChild(credentialText)
    // loginDiv.appendChild(credential)
    alert("Credential not match");
  }
}
var loginDiv = document.querySelector(".login-form-form");
console.log(loginDiv);
// collaspe button
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Quiz Question

function Question(a, b, c, d, e, f) {
  this.question = a;
  this.option1 = b;
  this.option2 = c;
  this.option3 = d;
  this.option4 = e;
  this.correctOp = f;
}

var htmlQuestionArr = [
  new Question(
    "1- What do you understand by HTML?",
    "HTML describes the structure of a webpage",
    " HTML is the standard markup language mainly used to create web pages",
    "HTML consists of a set of elements that helps the browser how to view the content",
    " All of the above",
    "option4"
  ),
  new Question(
    "2: Who is the father of HTML?",
    "Rasmus Lerdorf",
    "Tim Berners-Lee",
    " Brendan Eich",
    "Sergey Brin",
    "option2"
  ),
  new Question(
    "3: HTML stands for ___",
    "HyperText Markup Language",
    "HyperText Machine Language",
    " HyperText Marking Language",
    " HighText Marking Language",
    "option1"
  ),
  new Question(
    "4: Which is used to read an HTML page and render it?",
    "Web server",
    "Web network",
    "Web browser",
    "Web matrix",
    "option3"
  ),
  new Question(
    "5: Which tag is used for inserting the largest heading in HTML?",
    "head",
    "<h1>",
    "<h6>",
    "heading",
    "option2"
  ),
];
// console.log(htmlQuestionArr);
var queDiv = document.querySelector(".question");
var question = document.querySelector(".que-text");
var inputOption = document.querySelectorAll(".opt-text");
var radio = document.getElementsByName("opt");
var right = 0;
var wrong = 0;
// console.log(question);
index = 0;
function startHtmlQuiz() {
  deSelect();
  // clearCount()
  question.innerHTML = htmlQuestionArr[index].question;
  inputOption[0].innerText = htmlQuestionArr[index].option1;
  inputOption[1].innerText = htmlQuestionArr[index].option2;
  inputOption[2].innerText = htmlQuestionArr[index].option3;
  inputOption[3].innerText = htmlQuestionArr[index].option4;
  return;
}

// go to quiz page function
function goToQuiz() {
  window.location.href = "htmlquiz.html";
}
//  console.log(document.querySelector(".task-name"))
startHtmlQuiz();

function correctAns() {
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i].value;
    }
  }
}
// console.log(checkButton())

function checkAnswer() {
  // var ans =  correctAns()

  if (correctAns() === htmlQuestionArr[index].correctOp) {
    right++;
    // console.log(right)
  } else {
    wrong++;
    // console.log(wrong)
    // console.log(htmlQuestionArr[index].correctOp)
  }
  index++;
  if (index < 5) {
    // alert("stop")
    // return
    // sec = 30;
    // countdown()
    startHtmlQuiz();
  } else if (index === 5) {
    result();
  }
}
function result() {
  queDiv.innerHTML = "";
  // console.log(right)
  // console.log(wrong)
  // console.log(htmlQuestionArr.length)
  var percentage = (right / htmlQuestionArr.length) * 100;
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
      htmlQuestionArr.length +
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

function deSelect() {
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radio[i].checked = false;
    }
  }
}

var min = 00;
var sec = 30;
var secSingleDigit = 09;
var count = document.querySelector(".countdown-sec");
function countdown() {
  var timer = window.setInterval(() => {
    count.innerHTML = sec;
    // clearInterval(timer)
    // if (sec < 10) {
    //   count.innerHTML = "0" + sec;
    // }
    sec--;
    if (sec === -1) {
      clearInterval(timer)
      sec = 30;
      if (index < 5) {
        checkAnswer();
        // startHtmlQuiz();
        countdown();
      } else if (index === 5) {
        result();
      }
      // index++
      // startHtmlQuiz()
      // countdown()
    }
    // console.log(sec);
  }, 1000);
  return timer;
}
// var timer = countdown();
// console.log(timer);
// countdown();

var timer = countdown();
console.log(timer);
function clearCount(timer) {
  clearInterval(timer);
  sec = 30;
  // countdown()
}
