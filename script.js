/* script.js */
const allQuestions = [
  "If you could live anywhere in the world, where would it be?",
  "Do you have any pets? Tell us about them.",
  "What's the most unique place you've ever traveled to?",
  "What's a quirky habit or ritual you have that makes you happy?",
  "Have you ever performed in public? What did you do?",
  "What's a talent you have that not many people know about?",
  "What was your very first paid job?",
  "What's the most unusual job you've ever had?",
  "What's the most challenging project you've ever worked on?"
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