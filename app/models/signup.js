import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('email'),
  password: DS.attr('password'),
});
