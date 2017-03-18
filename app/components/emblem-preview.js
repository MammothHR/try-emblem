import Component from 'ember-component';
import service from 'ember-service/inject';
import { isBlank } from 'ember-utils';

export default Component.extend({
  result: null,

  compiler: service('compiler'),

  loading: false,

  actions: {
    textChanged(value) {
      const compiler = this.get('compiler');

      if (this.get('loading')) {
        return;
      }

      this.setProperties({
        loading: true,
        result: null
      });

      const result = compiler.compile(value);

      this.setProperties({
        loading: false,
        result
      });
    }
  },
});
