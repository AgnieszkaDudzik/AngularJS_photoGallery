angular.module('photoApp', [])
.controller('MainCtrl', [function() {
	var self = this;
	self.images = [
{id: 1, src: 'imgs/Germany/IMG_2553.JPG'},
{id: 2, src: 'imgs/Germany/IMG_2568.JPG'},
{id: 3, src: 'imgs/Germany/IMG_2570.JPG'},
{id: 4, src: 'imgs/Germany/IMG_2572.JPG'},
{id: 5, src: 'imgs/Germany/IMG_2588.JPG'},
{id: 6, src: 'imgs/Germany/IMG_2578.JPG'},

	];

	self._Index = 1;



	self.currentImage = function(index){
		self._Index = index;
	};
}]);

