'use strict';

/**
 * Produces the PIN module's HTML markup.
 */

// NPM.
var React = require('react');
var ReactDOMServer = require('react-dom/server');

// Local.
var Widget = require('./views/widget.js');

module.exports = {
  getHTML: function getHTML() {
    var App = React.createFactory(Widget);
    return ReactDOMServer.renderToStaticMarkup(App());
  }
};