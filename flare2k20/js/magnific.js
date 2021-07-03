$(document).ready(function(){
			$('.thumbnails').magnificPopup({
				delegate: 'li a',
				type:'image',
				gallery: {
					enabled: true,
					preload: [1,1]
				},
				mainClass: 'mfp-with-zoom',
				zoom: {
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function(openerElement) {
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			});

			$("#year").text((new Date).getFullYear());
		});