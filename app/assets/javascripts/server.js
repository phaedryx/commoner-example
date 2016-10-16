const React          = require('react');
const ReactDOMServer = require('react-dom/server');
const Components     = require('componentManifest');

global.render = function(name, params) {
  return ReactDOMServer.renderToString(
    React.createElement(Components[name], params, null)
  );
}
