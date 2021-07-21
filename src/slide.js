$(function () {
    $('.rev_slider').slick({
        arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow:1  
				}
			}
		]
	});
});