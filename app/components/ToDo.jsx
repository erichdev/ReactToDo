var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var toDoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return (
      <div className={toDoClassName} onClick={() => {
        this.props.onToggle(id);
      }}>
      <div>
        <input type="checkbox" checked={completed}/>
      </div>
      <div>
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
      </div>
    </div>
  );
}
});

module.exports = ToDo;
