import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('post');
  },
  actions: {
    addPost(){
      let post = this.modelFor(this.routeName);
      post.save();
    }
  }
});
