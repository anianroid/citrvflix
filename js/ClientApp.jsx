// ClientApp is the place for browser stuff
// Server side rendering or to interact with the browser, just messing with the browser and be assured that does not affect the node
// Example : For Google Analytics code this would be a great place
// Install and use grounds keeper to remove code when shipping to production

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  // module is a webpack thing : specific to webpack
  module.hot.accept('./App', () => {
    renderApp();
  });
}
