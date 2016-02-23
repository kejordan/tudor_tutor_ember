import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController:
  Ember.inject.controller('application'),
    actions: {
      setCurrentUser(user){
        user = this.store.createRecord('user', {email: user._internalModel._data.email, password: user._internalModel._data.email});
        this.get('applicationController').set('CurrentUser', user);
      }
    }
});
