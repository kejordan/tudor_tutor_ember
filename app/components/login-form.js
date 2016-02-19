import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate: function(){
      let { identification, password } = this.getProperties('identification', 'password');
        return this.get('session').authenticate('authenticator:devise', identification, password).then(()=>{
               console.log(this.get("session.isAuthenticated"));
             }).catch((reason) => {
          this.set('errorMessage', reason.error);
      });
    }
  }
});
