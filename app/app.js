import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  modulePrefix:  config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  rootElement: config.rootElement,
  Resolver,
  customEvents: {
    paste: 'paste'
  }
});

loadInitializers(App, config.modulePrefix);

export default App;