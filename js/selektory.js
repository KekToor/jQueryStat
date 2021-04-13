$( document ).ready(function() {
    $('.fa-chevron-down').hide();
    $('h2').on('click', function(){
        $(this).nextAll().slideToggle(800);
        $(this).children('.fa').toggleClass('fa-chevron-down fa-chevron-up');
    })
});