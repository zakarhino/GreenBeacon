//Queue controller

angular.module('app.queue', [])

.controller('QueueController', ['$scope', 'Tickets', function($scope, Tickets){

  //call getTickets from Tickets factory
  $scope.data = {};

  var initializeQueue = function() {
    Tickets.getTickets()
      .then(function(tickets){
        console.log("inside initialize ", tickets)
        $scope.data.tickets = tickets.data;
      })
      .catch(function(error){
        console.error(error);
      })
  }

$scope.ticket = {};
  $scope.addTicket = function () {
    console.log('inside addTicket module ', $scope.ticket)
    Tickets.addTicket($scope.ticket)
    .then(function () {
      $scope.ticket = {};
      initializeQueue();
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  initializeQueue();

}])
