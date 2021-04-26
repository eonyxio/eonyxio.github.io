/**
 * Eonyx contact form.
 *
 * (c) Eonyx
 */

function sendMessage(e) {
    if (!document.forms[0].checkValidity()) {
        document.forms[0].reportValidity()
        return
    }

    $('#contact-loading').removeClass('hide')

    let name = $('#name').val()
    let email = $('#email').val()
    let phone = $('#phone').val()
    let message = $('#message').val()

    fetch('https://script.google.com/macros/s/AKfycbyXhkQEBIeyYlrGilH2ClsoyBWqKJ2A7aUHrSZbbBVoprrfsfEKW4XVshaVSf2i68d4/exec',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'name=' + encodeURIComponent(name)
                + '&email=' + encodeURIComponent(email)
                + '&message=' + encodeURIComponent(message)
                + '&phone=' + encodeURIComponent(phone)
        })
        .then(r => r.text())
        .then(d => {
            $('#contact-loading').addClass('hide')
            if (d == 'success') {
                $('#contact-success').removeClass('hide')
                $('#name').val('')
                $('#email').val('')
                $('#phone').val('')
                $('#message').val('')
            } else {
                $('#contact-error').removeClass('hide')
            }
        })
}
