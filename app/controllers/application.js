import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser:null,
  session: Ember.inject.service('session'),
  actions: {
  updateCurrentUser: function () {
    if (this.get("session.isAuthenticated")) {
      this.get('store').findRecord('user', 'me').then((user) => {
        this.set("currentUser", this.store.createRecord('user', {email: user._internalMode._data.email}));
      });
    }
  }.on('init').transitionTo('users/user.id')

}
});
