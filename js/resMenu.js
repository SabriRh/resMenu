
function CreateMobileMenu() {
	$('#resMenu li:not(".resMenuDisableMobile") a').clone().appendTo('#resMenuMobileContainer');
}

function empty() {
	$('#resMenuMobileContainer #resMenu li a').remove();
}


$('#resMenuMobileButton').click(function (){














//launch mobile menu

	if ($('#resMenuMobileContainer').hasClass('fadeIn')){
		$('#resMenuMobileContainer').removeClass('fadeIn');
		$('#resMenuMobileContainer').addClass('animated active fadeOut');
		$('#resMenuMobileContainer a').each(function(){
			$('this').addClass('animated fadeout')
		});
		empty();


	}
	else if ($('#resMenuMobileContainer').hasClass('fadeOut')){
		CreateMobileMenu();
		$('#resMenuMobileContainer').removeClass('fadeOut');
		$('#resMenuMobileContainer').addClass('animated active fadeIn');
		$('#resMenuMobileContainer a').each(function(){
			$('this').addClass('fadeIn animated')
		});
	}
	else{
		CreateMobileMenu();
		$('#resMenuMobileContainer').addClass('animated active fadeIn');
		$('#resMenuMobileContainer a').each(function(){
			$('this').addClass('fadeIn animated')
		});
	}


}
);
