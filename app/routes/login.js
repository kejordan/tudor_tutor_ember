import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { service } = Ember.inject;


export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: service('session'),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
