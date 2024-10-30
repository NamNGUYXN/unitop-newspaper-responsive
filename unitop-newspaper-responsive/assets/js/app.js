$('#navbar-toggle').click(function () {
    $('ul#main-menu').stop(false, true).slideToggle(400);
    $('.sub-menu').slideUp();
    $('.sub-menu-toggle').children().removeClass();
    $('.sub-menu-toggle').children().addClass('fa-solid fa-plus');
});

$('#search-toggle').click(function () {
    $('form#search').stop(false, true).toggle(400);
});

$('.sub-menu-toggle').click(function () {
    $(this).next('.sub-menu').stop(false, true).slideToggle(400);

    if ($(this).children().hasClass('fa-solid fa-plus')) {
        $(this).children().removeClass()
        $(this).children().addClass('fa-solid fa-minus')
    } else {
        $(this).children().removeClass()
        $(this).children().addClass('fa-solid fa-plus')
    }
});

$(window).scroll(function () {
    if ($('#navbar-toggle').css('display') != 'none') {
        $('ul#main-menu').slideUp();
        $('.sub-menu').slideUp();
        $('form#search').hide();
    } else {
        $('ul#main-menu').removeAttr('style');
        $('.sub-menu').removeAttr('style');
    }

    $('.sub-menu-toggle').children().removeClass();
    $('.sub-menu-toggle').children().addClass('fa-solid fa-plus');
});

$(window).resize(function () {
    $(window).scroll();
});