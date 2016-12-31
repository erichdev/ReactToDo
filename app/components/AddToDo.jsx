var React = require('react');

var AddToDo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var toDoText = this.refs.toDoText.value;

    if (toDoText.length > 0){
      this.refs.toDoText.value = '';
      this.props.onAddToDo(toDoText);
    }
    else {
      this.refs.toDoText.focus();
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add item" ref="toDoText"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;
