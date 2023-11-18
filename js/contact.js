$(function () {
    "use strict";

    // Inicializa el validador
    $('#contact-form').validator();

    // Cuando se envía el formulario
    $('#contact-form').on('submit', function (e) {
        // Evita que el formulario se envíe de manera predeterminada
        e.preventDefault();

        // Si la validación del formulario es exitosa
        if (!e.isDefaultPrevented()) {
            // Construye el mensaje de WhatsApp con los datos del formulario
            var name = $('#InputName').val();
            var email = $('#InputEmail').val();
            var subject = $('#InputSubject').val();
            var message = $('#InputMessage').val();

            // Construye la URL de WhatsApp
            var whatsappUrl = 'https://api.whatsapp.com/send?phone=51987654321&text=' +
                encodeURIComponent('Nombre: ' + name + '\nCorreo: ' + email + '\nAsunto: ' + subject + '\nMensaje: ' + message);

            // Abre una nueva ventana o pestaña del navegador con la URL de WhatsApp
            window.open(whatsappUrl, '_blank');
        }
    });
});
