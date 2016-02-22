import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('users');
  this.route('user', {path: "/users/:user_id"});
  this.route('signup');
  this.route('dashboard');
  this.route('program');
});

export default Router;
