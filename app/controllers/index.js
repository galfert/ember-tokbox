var IndexController = Ember.Controller.extend({

  apiKey: "44757802",
  sessionId: "1_MX40NDc1NzgwMn5-U2F0IE1heSAxMCAxNjo1OTo0MiBQRFQgMjAxNH4wLjYyMzU5NDd-fg",
  token: "T1==cGFydG5lcl9pZD00NDc1NzgwMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz04NmM3YjAzY2E0MjI3M2FjOWI4MWY1YjU0NTc0MjNkYTA3ZTg1OTBhOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9MV9NWDQwTkRjMU56Z3dNbjUtVTJGMElFMWhlU0F4TUNBeE5qbzFPVG8wTWlCUVJGUWdNakF4Tkg0d0xqWXlNelU1TkRkLWZnJmNyZWF0ZV90aW1lPTEzOTk4OTI5Nzkmbm9uY2U9MC40MTc4NjMyOTUwODM0OTkzJmV4cGlyZV90aW1lPTE0MDI0ODQ5NjAmY29ubmVjdGlvbl9kYXRhPQ==",

  actions: {
    initSession: function() {
      OT.setLogLevel(OT.DEBUG);

      // Listen for exceptions
      OT.on("exception", function(event) {
        console.log('exception', event.message);
      });

      var session = OT.initSession(this.apiKey, this.sessionId);
      this.session = session;

      var events = ['connectionCreated', 'connectionDestroyed',
                    'sessionConnected', 'sessionDisconnected',
                    'streamCreated', 'streamDestroyed'];

      // events.forEach(function(eventName) {
      //   session.on(eventName, function(event) {
      //     console.log('event '+eventName, event);
      //   });
      // });

      session.on("streamCreated", function(event) {
        Ember.run(function() {
          // console.log('subscribing to event.stream', event.stream);
          session.subscribe(event.stream);
        });
      });

      // session.on("signal", function(event) {
      //   console.log("Signal sent from connection " + event);
      // });
    },

    joinSession: function() {
      this.session.connect(this.token, function(error) {
        if (error) {
          console.log('error while connecting', error);
        } else {
          console.log('connected');
          var publisher = OT.initPublisher(null, null, function() {
            if (error) {
              console.log('error initializing publisher', error);
            } else {
              console.log('publisher initialized successfully');
            }
          });
          console.log('initialized publisher', publisher);
          this.session.publish(publisher);
          console.log('published');
          console.log('publisher stream', publisher.stream);
        }
      }.bind(this));
    },

    leaveSession: function() {
    }
  }
});

export default IndexController;
