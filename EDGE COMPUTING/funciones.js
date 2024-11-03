document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class en el header
            this.classList.toggle('active');
            
            // Obtener el contenido
            const content = this.nextElementSibling;
            
            // Toggle show class en el contenido
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                // Opcional: cerrar otros acordeones abiertos
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('show');
                });
                document.querySelectorAll('.accordion-header').forEach(item => {
                    item.classList.remove('active');
                });
                
                content.classList.add('show');
                this.classList.add('active');
            }
        });
    });
});
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const estadoCivil = document.querySelector('input[name="estadoCivil"]:checked');
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;
    const profesion = document.getElementById('profesion').value;

    if (!nombre || !email || !password || !estadoCivil || !edad || !ciudad || !profesion) {
        document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger">Por favor, complete todos los campos.</div>';
        return;
    }

    // Aquí puedes agregar más validaciones si es necesario

    document.getElementById('mensaje').innerHTML = '<div class="alert alert-success">Formulario enviado correctamente.</div>';

    // Redirigir a la página de inicio después de 2 segundos
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
});