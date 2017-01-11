app.controller('MainController', ['$scope', function($scope) {
	$scope.program = {
		series: "Sherlock", 
	    series_img: "images/sherlock.jpg", 
	    genre: "Crime drama", 
	    season: 3, 
	    episode: "The Empty Hearse", 
	    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", 
	    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
	};
	$scope.newProgram = {
	    series: "Atlanta",
	    series_img: "https://assets.fxnetworks.com/cms/prod/web_cast_donaldglover_atlanta_570x698.jpg?resize=270:*",
	    genre: " 	Comedy-drama",
	    season: 1,
	    episode: "Nobody Beats the Biebs",
	    description: "Ayyye, okay! We got celebs in the building balling for the kids. I love me some Justin Bieber. Man, Paper Boi stay hating tho haha.",
	    datetime: new Date(2016, 11, 31, 21, 00, 00, 00)
	};
}]);