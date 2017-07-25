import Component from 'ember-component';
import service from 'ember-service/inject';
import { isBlank, isPresent } from 'ember-utils';

export default Component.extend({
  result: null,
  code: null,

  compiler: service('compiler'),

  loading: false,

  didInsertElement() {
    const code = this.get('code');

    if (isPresent(code)) {
      this._compileText(code);
    }
  },

  actions: {
    textChanged(value) {
      this._compileText(value);

      this.set('code', value);
    }
  },

  _compileText(text) {
    const compiler = this.get('compiler');

    if (this.get('loading')) {
      return;
    }

    this.setProperties({
      loading: true,
      result: null
    });

    const result = compiler.compile(text);

    this.setProperties({
      loading: false,
      result
    });
  }
});
