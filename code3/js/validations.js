// Validaciones específicas para formularios
document.addEventListener('DOMContentLoaded', function() {
    // Validación de formulario de turnos
    const specialtySelect = document.getElementById('specialtySelect');
    const doctorSelect = document.getElementById('doctorSelect');
    
    if (specialtySelect && doctorSelect) {
        specialtySelect.addEventListener('change', function() {
            updateDoctorsBySpecialty(this.value);
        });
    }
    
    // Validación de fecha y hora para turnos
    const appointmentDate = document.getElementById('appointmentDate');
    const appointmentTime = document.getElementById('appointmentTime');
    
    if (appointmentDate) {
        // Establecer fecha mínima como hoy
        const today = new Date().toISOString().split('T')[0];
        appointmentDate.min = today;
    }
});

// Actualizar médicos según especialidad seleccionada
function updateDoctorsBySpecialty(specialtyId) {
    const doctorSelect = document.getElementById('doctorSelect');
    
    if (!doctorSelect) return;
    
    // Limpiar opciones actuales
    doctorSelect.innerHTML = '<option value="">Seleccione médico...</option>';
    
    // Simulación de datos (en un sistema real, esto vendría de una API)
    const doctorsBySpecialty = {
        '1': [
            { id: 1, name: 'Dr. Carlos López' },
            { id: 2, name: 'Dr. Roberto García' }
        ],
        '2': [
            { id: 3, name: 'Dra. Ana Martínez' },
            { id: 4, name: 'Dra. Laura Fernández' }
        ],
        '3': [
            { id: 5, name: 'Dr. Roberto Silva' }
        ],
        '4': [
            { id: 6, name: 'Dra. María Fernández' },
            { id: 7, name: 'Dra. Sofía Rodríguez' }
        ],
        '5': [
            { id: 8, name: 'Dr. Javier Mendoza' },
            { id: 9, name: 'Dra. Patricia Gómez' }
        ]
    };
    
    const doctors = doctorsBySpecialty[specialtyId] || [];
    
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
    });
}

// Validación de formulario de pacientes
function validatePatientForm() {
    const form = document.getElementById('patientForm');
    
    if (!form) return true;
    
    // Validar que la fecha de nacimiento sea válida
    const birthDate = form.querySelector('input[type="date"]');
    if (birthDate && birthDate.value) {
        const birth = new Date(birthDate.value);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        
        if (age < 0 || age > 120) {
            alert('La fecha de nacimiento no es válida');
            birthDate.focus();
            return false;
        }
    }
    
    // Validar formato de documento
    const documentInput = form.querySelector('input[type="text"]');
    if (documentInput && documentInput.value) {
        const docPattern = /^[0-9.,-]+$/;
        if (!docPattern.test(documentInput.value)) {
            alert('El formato del documento no es válido');
            documentInput.focus();
            return false;
        }
    }
    
    return true;
}

// Validación de formulario de médicos
function validateDoctorForm() {
    const form = document.getElementById('doctorForm');
    
    if (!form) return true;
    
    // Validar horarios
    const timeInputs = form.querySelectorAll('input[type="time"]');
    let validSchedule = true;
    
    timeInputs.forEach(input => {
        if (input.value) {
            const time = input.value.split(':');
            const hours = parseInt(time[0]);
            
            // Validar que esté en horario laboral razonable
            if (hours < 6 || hours > 22) {
                validSchedule = false;
            }
        }
    });
    
    if (!validSchedule) {
        alert('Los horarios deben estar entre las 06:00 y 22:00');
        return false;
    }
    
    return true;
}