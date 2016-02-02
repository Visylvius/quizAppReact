var StartPrompt = React.createClass({
 render: function() {
  return (
   <div>{this.props.quiz.name} {this.props.quiz.statement}<button onClick=           {this.props.startOverCallback}>start quiz</button></div>
  )
 }
})
