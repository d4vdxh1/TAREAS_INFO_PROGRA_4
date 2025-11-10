// Manejo del login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Validación simple (en un sistema real, esto se haría en el servidor)
            if (username && password) {
                // Redirigir al dashboard
                window.location.href = 'pages/dashboard.html';
            } else {
                alert('Por favor, complete todos los campos');
            }
        });
    }
    initializeMobileMenu();
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Funciones de utilidad
function formatDate(date) {
    return new Date(date).toLocaleDateString('es-ES');
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.querySelector('.main-content .p-4').prepend(alertDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

// Manejo de formularios CRUD
function handleFormSubmit(formId, successMessage) {
    const form = document.getElementById(formId);
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar los datos al servidor
            // Por ahora, solo mostramos un mensaje de éxito
            showAlert(successMessage, 'success');
            
            // Resetear formulario
            form.reset();
        });
    }
}

// Validación de formularios
function validateRequiredFields(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}


// Manejo del menú hamburguesa para móviles

function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    
    // Crear elementos del menú móvil si no existen
    if (!mobileToggle) {
        createMobileMenuElements();
    }
    
    // Configurar evento del botón hamburguesa
    const toggleBtn = document.getElementById('mobileMenuToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-open');
            mobileOverlay.classList.toggle('active');
            toggleBtn.classList.toggle('active'); // ← AGREGAR
        });
    }
    
    // Cerrar menú al hacer clic en el overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            sidebar.classList.remove('mobile-open');
            mobileOverlay.classList.remove('active');
            toggleBtn.classList.remove('active'); // ← AGREGAR
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (en móviles)
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                mobileOverlay.classList.remove('active');
                toggleBtn.classList.remove('active'); // ← AGREGAR
            }
        });
    });
}

function createMobileMenuElements() {
    // Crear botón hamburguesa
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'mobileMenuToggle';
    toggleBtn.className = 'mobile-menu-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    
    // Insertar elementos en el DOM
    document.body.appendChild(toggleBtn);
    document.body.appendChild(overlay);
}

