// Gráficas para el dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Gráfica de turnos por día
    const appointmentsCtx = document.getElementById('appointmentsChart');
    
    if (appointmentsCtx) {
        const appointmentsChart = new Chart(appointmentsCtx, {
            type: 'bar',
            data: {
                labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
                datasets: [{
                    label: 'Turnos Programados',
                    data: [12, 15, 10, 14, 18, 8],
                    backgroundColor: '#4a6fa5',
                    borderColor: '#3a5982',
                    borderWidth: 1
                }, {
                    label: 'Turnos Atendidos',
                    data: [10, 13, 9, 12, 15, 6],
                    backgroundColor: '#4ecdc4',
                    borderColor: '#3aa89d',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5
                        }
                    }
                }
            }
        });
    }
    
    // Gráfica de tipos de consulta
    const consultationTypesCtx = document.getElementById('consultationTypesChart');
    
    if (consultationTypesCtx) {
        const consultationTypesChart = new Chart(consultationTypesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Clínica General', 'Pediatría', 'Cardiología', 'Ginecología', 'Odontología'],
                datasets: [{
                    data: [35, 25, 15, 15, 10],
                    backgroundColor: [
                        '#4a6fa5',
                        '#6d9dc5',
                        '#4ecdc4',
                        '#ff6b6b',
                        '#ffd166'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
});