//quiz questions
var React = require('react');
var ReactDOM = require('react-dom');
var quiz = {
  name: "How much do you know about the Strawhat Crew?",
  statement: 'Lets Find Out!',
  questions:
 [

  //question 1
  {
    question: 'Who was the first member of the Strawhat Pirates?',
    options: ['Sanji', 'Zoro', 'Nami', 'Chopper'],
    answer: 1
  },
  //question 2
  {
    question: "Who had Luffy's hat first?",
    options: ['Shanks', 'Gol D. Roger', 'Portagas D. Ace', 'Rayleigh'],
    answer: 1
  },
  //question 3
  {
    question: 'Who is Brook searching for?',
    options: ['Laboon', 'The Rumble Pirates', 'Dracule Mihawk', 'Kaido the Beast'],
    answer: 0
  },
  //question 4
  {
    question: 'Who is the current user of the Mera Mera no mi?',
    options: ['Monkey D. Dragon', 'Ivankov', 'Sabo', 'Portagas D. Ace'],
    answer: 2
  },
  //question 5
  {
    question: "Which of the following crewmembers have not eaten a devil's fruit when they joined?",
    options: ['Brook', 'Zoro', 'Luffy', 'Robin'],
    answer: 1
  },
  //question 6
  {
    question: 'Which Strawhat crew member has had thier bounty for the longest time?',
    options: ['Robin', 'Sanji', 'Nami', 'Franky'],
    answer: 0
  },
  //question 7
  {
    question: 'What does Franky use to fuel his cyborg body?',
    options: ['Oil', 'Devil Fruits', 'Cola', 'Tea'],
    answer: 2
  },
  //question 8
  {
    question: "What is Luffy's Favorite Food",
    options: ['Meat', 'Foie Gras', 'Grand Slam', 'Fish'],
    answer: 0
  },
  // question 9
  {
    question: "Which crewmate has a family member in the Marines?",
    options: ['Zoro', 'Usopp', 'Nami', 'Luffy'],
    answer: 3
  },
  //question 10
  {
    question: 'Which crewmate did Luffy fight with before they joined the crew?',
    options: ['Robin', 'Nami', 'Franky', 'Zoro'],
    answer: 2
  }
]
};

//variables
var questionNum = -1;
var correctAnswerTotal = 0;
var formValue;



//gets input value and increases correctAnswerTotal by 1 if answered correctly. Then checks to see if all the questions have been finished.
function getInputValue(formValue) {
  if ( Number(formValue) === quiz.questions[questionNum].answer) {
    correctAnswerTotal++;
	}
  questionNum++;
  renderQuiz();
}

//when the start quiz button his hit, this function hides the intro HTML and shows the actual questions

//once the quiz has been completed this function shows the user the score,


function startTheQuizOver() {
    questionNum = 0;
    correctAnswerTotal = 0;
    renderQuiz();
}


var App = React.createClass({
 getInitialState: function() {
  return {
   answer: null
  };
 },
 changeAnswer: function(answer) {
  this.setState({
   answer: answer
  });
 },
 submitAnswer: function() {
  this.props.answerCallback(this.state.answer);
 },
 render: function() {
 if (questionNum === -1) {
  return <StartPrompt quiz={this.props.quiz} startOverCallback={this.props.startOverCallback} />
  } else if (questionNum === quiz.questions.length) {
   return <EndPrompt correctAnswerTotal={this.props.correctAnswerTotal} startOverCallback={this.props.startOverCallback}/>
  } else {
   var currentQuestion = this.props.quiz.questions[questionNum];
   return <QuestionComponent currentQuestion={currentQuestion} changeAnswer={this.changeAnswer} submitAnswer={this.submitAnswer} hasAnswer={this.state.answer !== null} />
  }
  return (
    <div></div>
  )
 }
})




function renderQuiz() {

 ReactDOM.render(
  <App questionNum={questionNum} correctAnswerTotal={correctAnswerTotal} quiz={quiz} startOverCallback={startTheQuizOver} answerCallback={getInputValue} />,
  document.querySelector('.Container')
 );
}
renderQuiz();
