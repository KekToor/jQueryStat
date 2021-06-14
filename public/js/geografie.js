$(document).ready(function () {
    let defaultColor = $('svg').attr('fill');
    let cityColor = $('#gruppe').attr('fill');
    let lastfill = $("svg").attr('fill');
    console.log(cityColor);
    $('#mapa ellipse, #mapa rect').on('click', function () {
        $('#mapa ellipse, #mapa rect').css({ 'fill': cityColor });
        $(this).css('fill', 'teal');
    })

    $("path").on('click', function () { //on click on path
        if (lastfill == 'rgb(255, 255, 0)') { //if lastfill is yellow
            $(this).css({ 'fill': 'black' }); //set the color to black
            lastfill = "#7c7c7c"; //set lastfill to grey
            $("h1").html("nope");
        } else {
            $("path").css('fill', $("svg").attr('fill')); //revert all to grey
            $(this).css({ 'fill': 'yellow' }); //set current to yellow
            lastfill = "rgb(255, 255, 0)"; //set last fill to yellow
            $("h1").html($(this).attr('name')); //set h1 to name of path
        }
    });
    $("path").on('mouseover', function () { //on mouse over on path
        lastfill = $(this).css('fill');
        if (lastfill == 'rgb(255, 255, 0)') { //if lastfill is yellow
            $(this).css({ 'fill': 'goldenrod' }); //set path to blackish yellow
        } else {
            $(this).css({ 'fill': 'black' }); //set path to black
        }
    });
    $("path").on('mouseout', function () { //on mouse out on path set previous color
        $(this).css({ 'fill': lastfill });
    });

    $('#mestaS').on('click', function(){
        $('#mapa ellipse, #mapa rect').toggle(350);
    })

    $('path').on
})