# Sistema de Gestión - Consultorio Médico HEKO PORÂ

Sistema web para la gestión integral del consultorio médico comunitario "Heko Porã", desarrollado con HTML, Bootstrap y CSS.

## Estructura del Proyecto

\`\`\`
proyecto/
├── index.html                          # Página de login
├── dashboard.html                      # Panel principal con estadísticas
├── pages/
│   ├── pacientes/
│   │   ├── listado.html               # Lista de pacientes
│   │   └── formulario.html            # Formulario ABM pacientes
│   ├── medicos/
│   │   ├── listado.html               # Lista de médicos
│   │   └── formulario.html            # Formulario ABM médicos
│   ├── especialidades/
│   │   ├── listado.html               # Lista de especialidades
│   │   └── formulario.html            # Formulario ABM especialidades
│   ├── turnos/
│   │   ├── listado.html               # Lista de turnos/citas
│   │   └── formulario.html            # Formulario reserva de turnos
│   └── atenciones/
│       ├── listado.html               # Lista de atenciones médicas
│       └── formulario.html            # Formulario registro de atenciones
├── css/
│   └── styles.css                      # Estilos personalizados del sistema
├── js/
│   └── login.js                        # Script de login
└── README.md                           # Este archivo
\`\`\`

## Módulos del Sistema

### 1. Pacientes
- Gestión completa de pacientes del consultorio
- Datos personales, contacto e información médica
- Estados: Activo, Suspendido

### 2. Médicos
- Registro de profesionales médicos
- Especialidades, horarios de atención
- Estados: Disponible, Con Licencia, Retirado

### 3. Especialidades
- Catálogo de áreas médicas del consultorio
- Clínica General, Pediatría, Cardiología, Ginecología, Odontología, etc.

### 4. Turnos
- Reserva y gestión de citas médicas
- Modalidades: Presencial y Virtual
- Estados: Pendiente, Confirmado, Presente, Atendido, Cancelado

### 5. Atenciones Médicas
- Registro de consultas realizadas
- Diagnósticos y observaciones médicas
- Vinculado a turnos atendidos

## Características

- **Diseño Responsivo**: Adaptable a móviles, tablets y escritorio
- **Navegación Intuitiva**: Sidebar con acceso rápido a todos los módulos
- **Interfaz Limpia**: Bootstrap 5 con estilos personalizados
- **Estructura Modular**: Cada módulo en su propia carpeta
- **Sin Datos**: Listo para conectar base de datos

## Tecnologías

- HTML5
- CSS3
- Bootstrap 5.3.0
- JavaScript (Vanilla)

## Cómo Usar

1. Abrir `index.html` en el navegador
2. Ingresar cualquier usuario y contraseña
3. Navegar entre los módulos usando el sidebar
4. Los formularios están listos para integración con backend

## Navegación

- **Login** → Dashboard
- **Dashboard** → Acceso a todos los módulos
- **Cada Módulo** → Listado y Formulario
- **Sidebar** → Navegación global en todas las páginas

## Notas para Desarrollo

- Los formularios están preparados pero no envían datos
- Las tablas están vacías esperando conexión a base de datos
- El sistema valida campos requeridos en frontend
- Preparado para implementar validaciones del lado servidor

## Estados del Sistema

### Pacientes
- Activo
- Suspendido (3 cancelaciones consecutivas)

### Médicos
- Disponible
- Con Licencia (con fecha límite)
- Retirado

### Turnos
- Pendiente
- Confirmado
- Presente
- Atendido
- Cancelado

## Próximos Pasos

1. Conectar con base de datos (Sybase)
2. Implementar Node.js backend
3. Agregar validaciones de negocio
4. Implementar restricciones automáticas
5. Agregar funcionalidades extras (calendario, notificaciones, reportes)

---

**Consultorio Médico Comunitario "Heko Porã"**  
Sistema desarrollado para Programación 4 e Informática 4 - 2025
