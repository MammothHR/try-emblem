import Service from 'ember-service';
import Emblem from 'npm:emblem';

const { compile, VERSION } = Emblem['default'];

export default Service.extend({
  version: VERSION,

  lastError: null,

  compile(text) {
    try {
      const compiled = compile(text);

      this.set('lastError', null);

      compiled.replace(/</g, '&gt;').
               replace(/>/g, '&lt;');
      return compiled;

    } catch (e) {
      this.set('lastError', e.message);
    }
  },
});
