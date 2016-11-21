init();



function init() {

    //avilables annimations :


    /*resMenuFadeIn
    resMenuBounceIn
    resMenuBounceInLeft
    resMenuBounceInRight
    resMenuBounceInUp
    resMenuBounceInDown*/

    annimationEntrance = 'fadeIn'

    if ($('#resMenu').hasClass('resMenuFadeIn')) {

        annimationEntrance = 'fadeIn';

    } else if ($('#resMenu').hasClass('resMenuBounceIn')) {
        annimationEntrance = 'bounceIn';

    } else
    if ($('#resMenu').hasClass('resMenuBounceInLeft')) {
        annimationEntrance = 'bounceInLeft';

    } else if ($('#resMenu').hasClass('resMenuBounceInRight')) {
        annimationEntrance = 'bounceInRight';

    } else if ($('#resMenu').hasClass('resMenuBounceInUp')) {
        annimationEntrance = 'bounceInUp';

    } else if ($('#resMenu').hasClass('resMenuBounceInDown')) {
        annimationEntrance = 'bounceInDown';

    }


    annimationExit = annimationEntrance.replace("In", "Out");

    console.log(annimationEntrance, annimationExit);


};

function CreateMobileMenu() {
    $('#resMenu li:not(".resMenuDisableMobile") a').clone().appendTo('#resMenuMobileContainer');
}

function empty() {
    $('#resMenuMobileContainer').empty();
}


$('#resMenuMobileButton').click(function() {



    //launch mobile menu

    if ($('#resMenuMobileContainer').hasClass(annimationEntrance)) {
        $('#resMenuMobileContainer').removeClass(annimationEntrance);
        $('#resMenuMobileContainer').addClass('animated active ' + annimationExit);
        $('#resMenuMobileContainer a').each(function() {
            $(this).addClass('animated ' + annimationExit)
        });
        empty();


    } else if ($('#resMenuMobileContainer').hasClass(annimationExit)) {
        CreateMobileMenu();
        $('#resMenuMobileContainer').removeClass(annimationExit);
        $('#resMenuMobileContainer').addClass('animated active ' + annimationEntrance);
        $('#resMenuMobileContainer a').each(function() {
            $(this).addClass(annimationEntrance + ' animated')
        });
    } else {
        CreateMobileMenu();
        $('#resMenuMobileContainer').addClass('animated active ' + annimationEntrance);
        $('#resMenuMobileContainer a').each(function() {
            $(this).addClass(annimationEntrance + ' animated')
        });
    }


    $(this).toggleClass('icon-menu icon-cancel');


});
