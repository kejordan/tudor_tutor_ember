import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
 // session: service('session'),
 //
 // actions: {
 //   authenticate() {
 //     debugger;
 //     let { identification, password } = this.getProperties('identification', 'password');
 //     return this.get('session').authenticate('authenticator:devise', identification, password).then(()=>{
 //       console.log("HELLO??");
 //     }).catch((reason) => {
 //       this.set('errorMessage', reason.error);
 //     });
 //   }
 // }
});
