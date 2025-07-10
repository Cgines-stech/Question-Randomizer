/* script.js */
const allQuestions = [
  "What inspires you most in your work?",
  "Describe a challenge you overcame.",
  "What are your goals for this year?",
  "Who has been the most influential person in your career and why?",
  "What's one project you're particularly proud of?",
  "How do you stay motivated during tough times?",
  "What's your favorite way to unwind after a long day?",
  "What advice would you give to your younger self?",
  "If you could learn any new skill instantly, what would it be?",
  "What's one thing most people don't know about you?",
  "Describe your perfect workday.",
  "How do you define success?",
  "What's your favorite quote or motto?",
  "What do you love most about your job?",
  "If you could have any superpower, what would it be and why?",
  "What's your favorite memory at work?",
  "What do you enjoy doing outside of work?",
  "What's a fun fact about yourself?",
  "What's something on your bucket list?",
  "How do you handle stress or pressure?"
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