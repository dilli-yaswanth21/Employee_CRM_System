// ================= QUESTIONS =================
const questions = [
  {
    question: "Which tag is used to define the largest heading in HTML?",
    options: ["heading", "h6", "h1", "head"],
    answer: 2
  },
  {
    question: "Which HTML attribute is used to open a link in a new tab?",
    options: ["target='_blank'", "href='new'", "link='new'", "open='tab'"],
    answer: 0
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    question: "What does 'display: none' do?",
    options: [
      "Hides element but keeps space",
      "Removes element completely",
      "Makes element transparent",
      "Moves element off screen"
    ],
    answer: 1
  },
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    answer: 2
  },
  {
    question: "What will typeof null return?",
    options: ["null", "object", "undefined", "number"],
    answer: 1
  },
  {
    question: "Which jQuery method is used to hide elements?",
    options: ["hide()", "invisible()", "display(false)", "remove()"],
    answer: 0
  },
  {
    question: "What does $(document).ready() do?",
    options: [
      "Runs after page fully loaded",
      "Runs before HTML loads",
      "Runs only after CSS loads",
      "Runs when user clicks"
    ],
    answer: 0
  },
  {
    question: "Which keyword is used to define a method in C#?",
    options: ["function", "method", "void", "define"],
    answer: 2
  }
];

// ================= LOAD QUIZ =================
function loadQuiz() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  questions.forEach((q, index) => {
    let optionsHTML = "";

    q.options.forEach((opt, i) => {
      optionsHTML += `
        <div>
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </div>
      `;
    });

    container.innerHTML += `
      <div class="card p-3 mt-3">
        <h5>${index + 1}. ${q.question}</h5>
        ${optionsHTML}
      </div>
    `;
  });
}

// ================= SCORE =================
function calculateScore() {
  let score = 0;

  questions.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);

    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  return score;
}

// ================= RESULT + SAVE =================
function showResult(score) {
  let total = questions.length;
  let percentage = (score / total) * 100;

  let grade = "";
  if (percentage >= 80) grade = "A";
  else if (percentage >= 60) grade = "B";
  else grade = "C";

  let message = "";
  switch (true) {
    case (percentage >= 80):
      message = "Excellent";
      break;
    case (percentage >= 60):
      message = "Good";
      break;
    default:
      message = "Needs Improvement!";
  }

  document.getElementById("result").innerHTML = `
    <div class="alert alert-info">
      <h4>Score: ${score}/${total}</h4>
      <h5>Percentage: ${percentage.toFixed(2)}%</h5>
      <h5>Grade: ${grade}</h5>
      <p>${message}</p>
    </div>
  `;

  // ✅ SAVE PER EMPLOYEE (FIXED)
  let selectedId = localStorage.getItem("selectedEmployee");

  if (selectedId) {
    let results = JSON.parse(localStorage.getItem("results")) || {};

    results[selectedId] = {
      score: score,
      percentage: percentage,
      grade: grade
    };

    localStorage.setItem("results", JSON.stringify(results));
  }
}

// ================= EVENTS =================
document.addEventListener("DOMContentLoaded", () => {
  loadQuiz();

  document.getElementById("submitQuiz").addEventListener("click", () => {
    let score = calculateScore();
    showResult(score);
  });

  $("#submitQuiz").click(function () {
    console.log("jQuery working!"); 
  });
});