import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
   this.store.findRecord("program", params['id']);
  },
});
