import Ember from 'ember';
import App from 'app';
App.SessionsNewRoute = Ember.Route.extend({
  events: {
    createSession: function() {
      var router = this;
      var loginOrEmail = this.controller.get('loginOrEmail');
      var password = this.controller.get('password');
      if (!Ember.isEmpty(loginOrEmail) && !Ember.isEmpty(password)) {
        $.post('/session', {
          session: { login_or_email: loginOrEmail, password: password }
        }, function(data) {
          var authToken = data.session.auth_token;
          App.Store.authToken = authToken;
          App.Auth = Ember.Object.create({
            authToken: data.session.auth_token,
            accountId: data.session.account_id
          });
          router.transitionTo('index');
        });
      }
    }
  }
});
