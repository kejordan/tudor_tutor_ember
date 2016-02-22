import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser:null,
  session: Ember.inject.service('session'),

  updateCurrentUser: function () {
    if (this.get("session.isAuthenticated")) {
      this.get('store').findRecord('user', 'me').then((user) => {
        user = this.store.createRecord('user', {email: user._internalModel._data.email, password: user._internalModel._data.password});
        this.set('currentUser', user);
      });
    }
  }.on('init')
});