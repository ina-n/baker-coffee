
//Iamge Gallery

$(window).load(function(){
    var $container = $('.foodGallery');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.galleryFilter a').click(function(){
        $('.galleryFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});

// Simple Form Validation 

function validateReservation(form){
    var reservDate = form.datepicker.value;
    var reservTime = form.reservTime.value;
    var reservPerson = form.person.value;

    if(reservDate.length === 0 && reservTime.length === 0 && reservPerson.length === 0 ){
        document.getElementById('datepicker').focus();
        document.getElementById('time').focus();
        document.getElementById('persons').focus();
        document.getElementById('error').innerHTML = "Oops! You are missing some info";

        return false;
    }

    return true;
}
