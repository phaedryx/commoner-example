const $        = require('jquery');
const React    = require('react');
const ReactDOM = require('react-dom');
const Hello    = require('./components/Hello');

$(document).ready(function() {
  ReactDOM.render(<Hello name={ 'World' } />, document.getElementById('render-target'))
})
