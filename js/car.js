$(document).ready(function(){
    // variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    $($surface).toggleClass("moveRight");
    $($car).toggleClass("suspension");

    const cars = ['images/car/car_off_lights.png'];

    // Keypress Event
    $(document).on('keypress',function(e){
        if(e.which == 13){
            $($surface).toggleClass("moveRight");
            $($car).toggleClass("suspension");
        }
    });

    $(document).on('keypress',function(e){
        if(e.which == 119){
            if(flag){
                flag = false;
                $img.attr('src',cars[0]);
            } else {
                flag = true;
                $img.attr('src',cars[1]);
            }
        }
    });
});