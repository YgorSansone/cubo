$(document).ready( ()=> {

    // Abir fechar menu LISTENER
    $('#btnMenu').click(toogleMenu);
    $('#menuContent').click(toogleMenu);

    //Create buttons Listeners
    var buttons = $('.cube-btn');

    for(var i =0; i < buttons.length; i++) {
        var btn = buttons[i];
        $(btn).click( (e) => {
            var face = buttons.index(e.currentTarget) + 1;
            showFace(face);
        });
    }
    $("#showhide").change( ()=> {
        $('.login').toggleClass('on');
        var isOn = $('.login').hasClass('on');
        $('#pass').attr('type', isOn ? 'text' : 'password' );
    });

    $('#pass').on('input', (e) => {
        console.log(e);
        if ( e.currentTarget.value ) {
            $('.login').addClass('night');
        } else {
            $('.login').removeClass('night');
        }
    });
});


// Abir fechar menu
function toogleMenu() {
    $('body').toggleClass('menu-open');
}

function showFace (face) {
    console.log(face);
    $(document).find('#cube').attr('class', 'cube');
    $(document).find('#cube').addClass('face'+face);
}