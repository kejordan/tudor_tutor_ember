import Ember from 'ember';

export default Ember.Route.extend({

    model(){
      return "Your name";
    },
    actions:{
  getCurrentUser(){
    this.store.findRecord('user', 'me').then((user => {
      this.transitionTo('users/user_id');
    }));
  }
}
});
