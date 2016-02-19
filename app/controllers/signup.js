import Ember from 'ember';

export default Ember.Controller.extend({
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    this.get('model'),
    this.set('newUser', '')
  }
});
