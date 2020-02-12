//set button id on click to hide first modal
$("#log-in").on( "click", function() {
        $('#sign-in-page').modal('hide');  
});
//trigger next modal
$("#log-in").on( "click", function() {
        $('#sign-up-page').modal('show');  
});

//set button id on click to hide first modal
$("#log-out").on( "click", function() {
        $('#sign-up-page').modal('hide');  
});
//trigger next modal
$("#log-out").on( "click", function() {
        $('#sign-in-page').modal('show');  
});