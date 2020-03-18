$('.next').on('click', function () {
    event.preventDefault();
    $('.subscription-step-2').show();
    $('.subscription-step-1').hide();
});

$('.prev').on('click', function () {
    event.preventDefault();
    $('.subscription-step-2').hide();
    $('.subscription-step-1').show();
});

$('.success').on('click', function () {
    event.preventDefault();
    $('.subscription-step-3').show();
    $('.subscription-step-1').hide();
});