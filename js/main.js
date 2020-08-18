
const questions =  [question("If we don't want to allow a floating div to the left side of an element, which css property will we use ?", ["margin", "float", "padding", "clear"], "clear"),
question("What does CSS stand for?", ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], "Cascading Style Sheets"),
question("If we want define style for an unique element, then which css selector will we use ?", ["id", "class", "text", "name"], "id")]
let answer = "";
let correct_questions = 0;
let index = 0;
document.addEventListener("DOMContentLoaded", () => {
loadQuestion();
})

const  loadQuestion = () => {
  if (index === questions.length) {
    loadAnswers();
    return;
  }
const questions_copy = [...questions];
  document.querySelector("#question").innerHTML = questions_copy[index].question;
  loadOptions(questions_copy[index].options, questions_copy[index].answer);
}

const loadOptions = (options, answer) => {
  let buttons = "";
  options.forEach((e, i) => {
    buttons += `<button class="answer-button">${e}</button>`
  })
  document.querySelector(".options").innerHTML = buttons;
  buttonCheck(answer);
}

const buttonCheck = (rightAnswer) => {
  document.querySelectorAll(".answer-button").forEach(option => {
    option.onclick = function () {
      answer = option.textContent;
      if (answer === rightAnswer)
      {
        correct_questions++;
      }
      index++;
      loadQuestion();
    }
  })

}


const loadAnswers = () => {
  const answer = document.querySelector("#result");
  answer.style.display = "block";
  document.querySelector("#q").style.display = "none";
  document.querySelector("#result span").innerHTML = `${correct_questions} of ${questions.length}`
}
