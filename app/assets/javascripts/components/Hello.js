const React = require('react');

const Hello = React.createClass({
  getInitialState: function() {
    return { name: this.props.name }
  },
  change: function(event) {
    this.setState({ name: event.target.value })
  },
  render: function() {
    return(
      <div>
        <p>Hello { this.state.name }!</p>
        <label>Greeting target: </label>
        <input type='text' onChange={ this.change } value={ this.state.name } />
      </div>
    )
  }
})

module.exports = Hello;
