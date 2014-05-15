export default Ember.Controller.extend({

  apiKey: "44757802",
  sessionId: "1_MX40NDc1NzgwMn5-U2F0IE1heSAxMCAxNjo1OTo0MiBQRFQgMjAxNH4wLjYyMzU5NDd-fg",
  token: "T1==cGFydG5lcl9pZD00NDc1NzgwMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz04NmM3YjAzY2E0MjI3M2FjOWI4MWY1YjU0NTc0MjNkYTA3ZTg1OTBhOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9MV9NWDQwTkRjMU56Z3dNbjUtVTJGMElFMWhlU0F4TUNBeE5qbzFPVG8wTWlCUVJGUWdNakF4Tkg0d0xqWXlNelU1TkRkLWZnJmNyZWF0ZV90aW1lPTEzOTk4OTI5Nzkmbm9uY2U9MC40MTc4NjMyOTUwODM0OTkzJmV4cGlyZV90aW1lPTE0MDI0ODQ5NjAmY29ubmVjdGlvbl9kYXRhPQ==",

  iframeSrc: function() {
    return 'tokbox.html?sessionId=%@1&token=%@2'.fmt(this.get('sessionId'), this.get('token'));
  }.property('sessionId', 'token')

});
