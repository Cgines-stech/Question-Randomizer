/* script.js */
const allQuestions = [
  "What inspires you most in your work?",
  "Describe a challenge you overcame.",
  "What are your goals for this year?",
  // Add remaining 147 questions here...
];

function getRandomQuestions(n) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function renderQuestions() {
  const questions = getRandomQuestions(3);
  const container = document.getElementById("questionsContainer");
  container.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";

    // Store the question itself in a hidden input so it is submitted
    const hiddenQuestionInput = document.createElement("input");
    hiddenQuestionInput.type = "hidden";
    hiddenQuestionInput.name = `question${i}`;
    hiddenQuestionInput.value = q;

    div.innerHTML = `
      <label for="answer${i}">${q}</label>
      <textarea id="answer${i}" name="answer${i}" rows="4" required></textarea>
    `;

    div.appendChild(hiddenQuestionInput);
    container.appendChild(div);
  });
}

renderQuestions();