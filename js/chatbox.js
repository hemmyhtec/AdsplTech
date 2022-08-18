$(document).ready(function() {
        $('.chat_icon').click(function(event) {
            $('.chat_box').toggleClass('active');
        });

        convForm = $('.conv-form-wrapper').convform({ selectInputStyle: 'disable' });
    })
    // $('.chat-button').on('click', function() {
    //     $('.chat-button').css({ "display": "block" });

//     $('.chat-box').css({ "visibility": "visible" });
// });

// $('.chat-box .chat-box-header p').on('click', function() {
//     $('.chat-button').css({ "display": "block" });
//     $('.chat-box').css({ "visibility": "hidden" });
// })