
 		var map;
      // Create a new blank array for all the listing markers.
      var markers = [];
      function initMap() {
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13

        });
      
 var locations = [
  {title: 'Central Park', location: {lat: 40.783060, lng: -73.965366}},
          {title: 'The Museum of Modern Art', location: {lat: 40.761433, lng: -73.977622,}},
          {title: 'Time Square', location: {lat: 40.758888, lng: -73.985197}},
          {title: '5th avenue ', location: {lat: 40.731412, lng: -73.996985}},
          {title: 'Washington Square Park', location: {lat: 40.730823, lng: -73.997332}},
  ];
 
 
 
 var ViewModel = function() {
  var self = this;
  
  self.filter = ko.observable('');
  
  self.items = ko.observableArray(locations);
  console.log(locations);
  
  self.filteredItems = ko.computed(function() {
    var filter = self.filter();
    if (!filter) { return self.items(); }
    return self.items().filter(function(i) { return i.title.indexOf(filter) > -1; });
  });
};

ko.applyBindings(new ViewModel());