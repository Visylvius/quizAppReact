var QuestionComponent = React.createClass({

 render: function() {
  return (
   <div><p>{this.props.currentQuestion.question}</p><ul> {this.props.currentQuestion.options.map(function(e, index) {
    return <li key={e + index}><input name="answer" type="radio" onClick={this.props.changeAnswer.bind(null, index)} />{e}</li>
   }, this)}</ul><button disabled={!this.props.hasAnswer} onClick={this.props.submitAnswer}>submit answer</button></div>
  )
 }
})
