import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
   this.store.findRecord("program", params['id']);
  },
  actions: {
    addProgram(){
      let program = this.modelFor(this.routeName);
      program.save().then((savedProgram) => {
        this.transitionTo('programs.program', savedProgram);
      });

    }
  }
});
