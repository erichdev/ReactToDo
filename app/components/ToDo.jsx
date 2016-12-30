var React = require('react');

var ToDo = React.createClass({
  render: function () {
    var {text} = this.props;

    return (
      <div>
        {text}
      </div>
    );
  }
});

module.exports = ToDo;
