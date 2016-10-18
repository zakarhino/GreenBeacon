//initialize app module, include services and auth dependencies

angular.module('app', ['app.auth', 'app.queue', 'app.services', 'ngRoute'])

.config(function($routeProvider){

	$routeProvider
		.when('/signin', {
			templateUrl: 'app/auth/signin.html',
			controller: 'AuthController'
		})
		.when('/tickets', {
			templateUrl: 'app/queue/queue.html',
			 controller: 'QueueController'
		})
		// .when('/help', {
		// 	templateUrl: 'app/helpform/helpform.html',
		// 	controller: 'FormController'
		// })
		.otherwise({
			redirectTo: '/tickets'
		})
		


})



































// app obj

//init
	//1. selectors
	//2. listeners
	//3. call fetch

//fetch - get /tickets ->
	//1. call helper funciton ->
		//renderTicket
			//1. render text, id, username
			//2. handle checking for isClaimed; isSolved -> render at the bottom

//send ticket - post req ->
	//1. grab data from form;
	//2. call fetch()


//claim ticket - put req ->
	//1. send property to ticket object with id


//solve ticket - put req ->
	//1. send property to ticket object with id
