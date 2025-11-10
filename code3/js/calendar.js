// Funcionalidad del calendario
document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.getElementById('calendar');
    
    if (calendarElement) {
        generateCalendar();
    }
});

function generateCalendar() {
    const calendar = document.getElementById('calendar');
    if (!calendar) return;
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Obtener primer día del mes y número de días
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Ajustar para lunes como primer día de la semana
    let startDay = firstDay === 0 ? 6 : firstDay - 1;
    
    // Nombres de los meses
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    // Crear estructura del calendario
    let calendarHTML = `
        <div class="text-center mb-3">
            <h6 class="mb-0">${monthNames[currentMonth]} ${currentYear}</h6>
        </div>
        <div class="calendar-weekdays d-grid mb-2" style="grid-template-columns: repeat(7, 1fr); gap: 2px;">
            <div class="text-center text-muted small">Lun</div>
            <div class="text-center text-muted small">Mar</div>
            <div class="text-center text-muted small">Mié</div>
            <div class="text-center text-muted small">Jue</div>
            <div class="text-center text-muted small">Vie</div>
            <div class="text-center text-muted small">Sáb</div>
            <div class="text-center text-muted small">Dom</div>
        </div>
        <div class="calendar-days d-grid" style="grid-template-columns: repeat(7, 1fr); gap: 2px;">
    `;
    
    // Agregar celdas vacías para días antes del primer día del mes
    for (let i = 0; i < startDay; i++) {
        calendarHTML += `<div class="calendar-day"></div>`;
    }
    
    // Agregar días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate() && currentMonth === today.getMonth();
        const hasAppointments = Math.random() > 0.7; // Simulación para demo
        
        calendarHTML += `
            <div class="calendar-day ${isToday ? 'today' : ''} ${hasAppointments ? 'has-appointments' : ''}">
                ${day}
            </div>
        `;
    }
    
    calendarHTML += `</div>`;
    
    calendar.innerHTML = calendarHTML;
}