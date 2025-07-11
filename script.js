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
  "What's the most challenging project you've ever worked on?",
  "What is your favorite office supply?",
  "If you could master any skill overnight, what would it be?",
  "What's your favorite holiday? Least favorite?",
  "What's the skill you'd most like to develop or improve?",  
  "What's a book or resource that has significantly impacted your personal growth?",
  "What's the biggest lesson you've learned in the past year?",
  "What's one habit you've developed that has positively impacted your life?",
  "What's the best piece of advice you've received for personal development?",
  "What's the professional advice you've most often given to others?",  
  "What's a quote or mantra that inspires you?",
  "How do you maintain a work-life balance?",
  "What's one thing you do every day for your personal growth?",
  "Do you feel good or bad when you have a day where you do nothing? Why?",
  "Who has been your biggest inspiration and why?",
  "What's the most inspiring book you've ever read or movie you've seen?",
  "Where is your happy place?",
  "Who is a historical figure you find inspiring and why?",
  "What's an act of kindness that inspired you?",
  "What's the most inspirational place you've visited?",
  "Who is an artist or musician that inspires you?",
  "What's the most useful app on your phone?",
  "What's a piece of technology you can't live without?",
  "What's the coolest tech innovation you've seen recently?",
  "What is your favorite way to communicate at work? Email, video, Slack, text, call?",
  "What's the most futuristic tech you hope to see in your lifetime?",
  "What's a recent development in your field or our industry that excites you?",
  "What's a recent piece of good news you've heard?",
  "What's a scientific discovery that fascinates you?",  
  "What's your favorite TV series of all time?",
  "Who's your favorite celebrity and why?",
  "What's your favorite movie quote?",
  "What's your favorite book series?",
  "Who's your favorite musician or band?",
  "What's the most recent movie you watched and loved?",
  "What's your favorite game?",
  "What's the last book you read?",
  "What are your favorite podcasts?",  
  "What's the most memorable concert or live performance you've attended?",
  "What's your favorite hobby, and how did you get into it?",
  "What hobby have you always wanted to try but haven't yet?",
  "Do you collect anything? If so, what?",
  "Do you have any DIY projects you're working on?",
  "What could you teach anyone to make?",
  "What's your favorite sport to watch or play?",
  "What's the most challenging hobby you've ever taken up?",
  "If you had a day to volunteer, where would you spend it?",
  "What's the most interesting place you've ever visited?",
  "If you could travel anywhere in the world, where would you go?",
  "What's your vacation vibe? Beach lounge, mountain spa, culture excursion, city lights, sporty getaway, or staycation?",
  "What's your favorite travel memory?",
  "How do you like to document your travels?",
  "What's the longest trip you've ever been on?",
  "What's your go-to comfort food?",
  "If you had to eat one cuisine for the rest of your life, what would it be?",
  "What's the best meal you've ever had?",
  "What's your favorite restaurant?",
  "What's your signature dish to cook?",
  "What's the weirdest food you've ever tried?",
  "Do you prefer sweet or savory foods?",
  "What's your go-to drink order?",
  "What's the best food you've tried while traveling?",
  "What's your favorite snack?",
  "What was your favorite subject in school?",
  "What's your favorite childhood movie or TV show?",
  "Did you ever win a ribbon, medal, or trophy as a kid? In what?",
  "Did you have a favorite superhero or character?",
  "If you could have any animal, even mythical, as a tame pet, what would you choose?",
  "Would you rather travel to the past or the future?",
  "Would you rather be able to fly or be invisible?",
  "Would you rather live in the city or the countryside?",
  "Would you rather have unlimited free time or unlimited money?",
  "Would you rather be able to speak all languages or play all instruments?",
  "Would you rather have a personal chef or a personal trainer?",
  "Would you rather be always a little too hot or a little too cold?",
  "Would you rather explore space or the deep sea?",
  "Would you rather be famous or be the best friend of someone famous?",
  "Would you rather always have to sing instead of speak or dance everywhere you go?",
  "Would you rather live without music or without movies?",
  "Would you rather be a master of every skill or know everything?",
  "Would you rather have more time or more money?",
  "Would you rather fight one horse-sized duck or a hundred duck-sized horses?",
  "If you could change one thing about the world, what would it be?",
  "If you could meet your future self, what would you ask?",
  "If you could meet your past self, what would you share?",
  "What's the most significant challenge you've overcome?",
  "What's something you're passionate about and why?",
  "If you could have any job, regardless of pay, what would it be?",
  "What's the best thing you've ever done?",
  "What's one thing you still want to accomplish in your lifetime?",
  "What is your everyday superpower?",
  "What's the weirdest food you've ever eaten?",
  "If you could transform into any animal, which would you choose and why?",
  "What's your favorite go-to joke or pun?",
  "Can you recite any part of a poem or verse by heart? Share it now!",    
  "If you had a time machine, what event would you love to witness in person?",  
  "If you could only listen to one song for the rest of your life, what would it be?",
  "What's the funniest prank you've ever pulled or had pulled on you?",    
  "If you could create your own reality TV show, what would it be about?",
  "If you were a professional wrestler, what would your stage name be?",
  "What's your favorite ridiculous conspiracy theory?",
  "If you could turn anything into an Olympic sport, what would you win gold in?",  
  "If you could live in any movie universe, which one would it be and why?",
  "Cats or dogs?",
  "Netflix or HBO?",
  "Text or call?",
  "Beach or mountains?",
  "Book or movie?",
  "Ice cream or cake?",
  "Pancakes or waffles?",
  "Pizza or burgers?",
  "Music or podcasts?",
  "Sneakers or sandals?",
  "Mac or PC?",
  "Early bird or night owl?",
  "Is a hotdog a sandwich?",
  "Dark mode or light mode?",
  "Best day of the week?",
  "Favorite word?",
  "If you could have any superpower, what would it be?",
  "If you could live in any fictional world, where would you live?",
  "If you won the lottery, what’s the first thing you’d do?",
  "If you could time travel, where and when would you go?",
  "If you could meet any historical figure, who would it be?",
  "If you could switch lives with anyone for a day, who would it be?",
  "If you could speak any language fluently, which one would you choose?",  
  "If you could instantly become an expert in any field, what would it be?",
  "If you could teleport anywhere in the world right now, where would you go?",  
  "If you could relive any moment in your life, what would it be?",
  "Would you want to feel zero pain if given the chance permanently?",
  "If you could erase one thing from existence, even the memory of the thing, what would it be?",
  "If you had an animal or plant renamed for you, what would it be?",
  "If you could make any one species go extinct, what would it be? Any?",
  "You can anonymously send one text of <160 characters to everyone’s phone in the world. What does it say?",
  "If you had to prove you were human and not an AI in 5 minutes via a text conversation, how would you do it?"
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