import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
   this.store.findRecord("post", params['id']);
  },
  actions: {
    addPost(){
      let post = this.modelFor(this.routeName);
      post.save().then((savedPost) => {
        this.transitionTo('posts.post', savedPost);
      });
    }
  }
});
