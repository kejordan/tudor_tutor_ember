import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('program');
  },
  actions: {
    addProgram(){
      let program = this.modelFor(this.routeName);
      program.save();
    }
  }
});
