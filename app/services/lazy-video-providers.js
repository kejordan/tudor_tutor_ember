import Ember from 'ember';
import youtube from 'ember-lazy-video/lazy-video-providers/youtube';

export default Ember.Object.extend({
  getUrl: function(provider, endpoint, videoId, opts) {
    var params;
    opts = (typeof opts === "undefined") ? {} : opts;
    params = Ember.$.param(opts);
    return this.get(provider)[endpoint](videoId) + '?' + params;
  },
  youtube: youtube,
});