var readlinesync = require("readline-sync");

var score = 0;

console.log("Welcome to the Marvel Cinematic Universe(MCU) quiz \n");

var username = readlinesync.question("May I have your name please: ")


console.log("\n Welcome "+username)

console.log("Just enter the correct option number. All the Best! \n")

function play(question , answer) {

  var userAnswer = readlinesync.question(question);

  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    score += 1;
    console.log("Correct Answer")
  }

  else
  console.log("WRONG ANSWER");

  console.log("\n ----------------- \n")

}

var questions = [{
  question: "Q1: Thor’s hammer Mjolnir is made of metal from the heart of a dying what? \n 1. Star \t 2. Comet \n 3. Planet \t 4. Asteroid \n ",
  answer: "1"
},
{
  question: "Q2: What is the name of the villain in Marvel Studios’ Ant-Man? \n 1. The Wasp \t 2. Hornet \n 3. Yellow Jacket \t 4. Ghost \n ",
  answer: "3"
},
{
  question: "Q3: What is the name of the set of documents that regulate the activities of enhanced persons? \n 1. Stark Accords \t 2. Paris Accords \n 3. S.H.I.E.L.D. Accords \t 4. Sokovia Accords \n ",
  answer: "4"
},
{
  question: "Q4: In the post-credits scene of Marvel Studios’ The Avengers, what type of restaurant are the Avengers shown eating at? \n 1. Pizza \t 2. Shawarma \n 3. Sushi \t 4. Fried Chicken \n ",
  answer: "2"
},
{
  question: "Q5: In Marvel Studios’ Thor: Ragnarok, Thor reunited with the Hulk on this planet. \n 1. Asgard \t 2. Sakaar \n 3. Xandar \t 4. Berhert \n ",
  answer: "2"
},
{
   question: "Q6: What does the “E” in S.H.I.E.L.D. stand for? \n 1. Enforcement \t 2. Extraterrestrial \n 3. Extermination \t 4. Expansion \n ",
  answer: "1"
},
{
  question: "Q7: Where did Thanos find the Soul Stone? \n 1. Vormir \t 2. Knowhere \n 3. Earth \t 4. Nidavellir \n ",
  answer: "1"
},
{
  question: "Q8: Who of the following is not part of the Black Order in Marvel Studios’ Avengers: Infinity War? \n 1. Proxima Midnight \t 2. Ebony Maw \n 3. Cull Obsidian \t 4. Ulysses Klaue \n ",
  answer: "4"
},
{
  question: "Q9: Thor has a new weapon in Marvel Studios’ Avengers: Infinity War. What is it called? \n 1. Mjolnir \t 2. Stormbreaker \n 3. Stormbringer \t 4. Tesseract \n ",
  answer: "2"
},
{
    question: "Q10: Finally, how many movies are there in the Marvel Cinematic Universe so far, including Marvel Studios’ Avengers: Endgame? \n 1. 15 \t 2. 18 \n 3. 20 \t 4. 22 \n ",
  answer: "4"
}]

for(var i = 0 ; i < questions.length ; i ++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("YOU GOT " + score + " OUT OF 10 CORRECT,")
console.log("Thank You for playing!")
