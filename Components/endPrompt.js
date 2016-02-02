var EndPrompt = React.createClass({
 render: function(){
  return (
   <div>Nice job! You got {this.props.correctAnswerTotal} correct!<button onClick={this.props.startOverCallback}>start quiz over</button></div>
  )
 }
})
