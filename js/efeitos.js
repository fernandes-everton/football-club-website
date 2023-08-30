$(document).ready(function(){

				$(".thumbnails").owlCarousel({
					
					margin: 15,
					nav: true,
					navText: ["<<<", ">>>"],
					responsive: {
						0: {
							items: 1
						},
						480: {
							items: 3
						},
						1000: {
							items: 4
						}
					}
				});
			});