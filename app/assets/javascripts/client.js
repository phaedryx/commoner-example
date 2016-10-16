const $          = require('jquery');
const React      = require('react');
const ReactDOM   = require('react-dom');
const Components = require('componentManifest');

$(document).ready(() => {
  $('.component').each(function() {
    var component = $(this).data('component');
    var params    = $(this).data('params');

    ReactDOM.render(
      React.createElement(Components[component], params),
      this
    )
  });
});
