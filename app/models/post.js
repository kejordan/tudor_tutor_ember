import DS from 'ember-data';

export default DS.Model.extend({
    program: DS.belongsTo('program'),
    title: DS.attr('string'),
    postContent: DS.attr('string')
});
