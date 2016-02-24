import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('dashboard');
  this.route('login');
  this.route('users');
  this.route('user', {path: "/users/:user_id"});
  this.route('signup');
  this.route('programs', function() {
    this.route('program', {path: ':program_id'});
    this.route('new');
  });
  this.route('posts', function(){
    this.route('post', {path: ':post_id'});
    this.route('new');
  });
});

export default Router;
