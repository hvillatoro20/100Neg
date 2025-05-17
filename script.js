// Datos de las ideas de negocio
const businessIdeas = [
    {
        id: 1,
        title: "App de aprendizaje de idiomas con IA",
        description: "Clases personalizadas basadas en el nivel del usuario",
        category: "tecnologia",
        model: "Modelo: Suscripción mensual/anual",
        advice: `
            <h3>Consejos para implementar esta idea:</h3>
            <p>Para desarrollar una app de aprendizaje de idiomas con IA, comienza por identificar tu mercado objetivo: ¿serán estudiantes, profesionales o viajeros? Realiza encuestas para entender sus necesidades específicas de aprendizaje.</p>
            
            <p>El MVP (Producto Mínimo Viable) podría ser una app con un idioma principal y funciones básicas como lecciones diarias y seguimiento de progreso. Usa APIs de reconocimiento de voz existentes para reducir costos de desarrollo.</p>
            
            <p>Para validar el mercado, crea una landing page explicando tu propuesta de valor y ofreciendo acceso anticipado a cambio de feedback. Mide el interés a través de registros o pre-ventas.</p>
            
            <p>El modelo de suscripción funciona bien, pero considera también una versión freemium con funciones básicas gratuitas y contenido premium de pago. Para diferenciarte, podrías enfocarte en dialectos específicos o jerga profesional.</p>
            
            <p>Asociaciones con escuelas de idiomas o empresas que necesiten capacitar empleados pueden ser excelentes canales de distribución. Mide métricas clave como tasa de finalización de lecciones y retención a 30 días.</p>
        `,
        checklist: [
            "Realiza un estudio de competencia de apps similares",
            "Desarrolla un prototipo con 3-5 lecciones básicas",
            "Implementa un sistema de feedback dentro de la app",
            "Crea un plan de marketing de contenidos para atraer usuarios",
            "Establece métricas claras de éxito y mejora continua"
        ]
    },
    {
        id: 2,
        title: "Marketplace para freelancers de blockchain",
        description: "Conexión entre empresas y talento especializado en crypto",
        category: "tecnologia",
        model: "Modelo: Comisión por proyecto (10-20%)",
        advice: `
            <h3>Consejos para implementar esta idea:</h3>
            <p>Un marketplace para freelancers de blockchain debe resolver un problema clave: la dificultad que tienen las empresas para encontrar talento calificado en este nicho técnico. Comienza por investigar las habilidades más demandadas (Solidity, desarrollo de smart contracts, auditoría de seguridad).</p>
            
            <p>Tu MVP podría ser un directorio simple con perfiles verificados y un sistema de reseñas. Prioriza la verificación de habilidades, quizás mediante pruebas técnicas o certificaciones reconocidas en la industria.</p>
            
            <p>Para validar el concepto, participa en foros de blockchain como Reddit o Discord, ofreciendo conectar gratis a las primeras 20 empresas con freelancers. Esto te dará feedback valioso.</p>
            
            <p>El modelo de comisión es estándar, pero considera niveles premium para freelancers (perfiles destacados, acceso a más proyectos). También podrías ofrecer servicios adicionales como contratos inteligentes para pagos en crypto.</p>
            
            <p>Construye confianza con sistemas de reputación robustos y posiblemente un sistema de depósito en garantía. Las métricas clave incluirán tasa de éxito de proyectos, tiempo promedio para contratación y NPS (Net Promoter Score).</p>
        `,
        checklist: [
            "Identifica las 5 habilidades blockchain más demandadas",
            "Crea un proceso de verificación de freelancers",
            "Desarrolla contratos estándar para protección de ambas partes",
            "Establece alianzas con comunidades crypto",
            "Implementa un sistema de resolución de disputas"
        ]
    },
    {
        id: 3,
        title: "Software de gestión de energía para hogares",
        description: "Monitorea y optimiza el consumo eléctrico",
        category: "tecnologia",
        model: "Modelo: Venta de licencia + SaaS",
        advice: `
            <h3>Consejos para implementar esta idea:</h3>
            <p>Un software de gestión energética para hogares debe ofrecer a los usuarios claros ahorros en su factura eléctrica. Comienza por investigar las regulaciones locales sobre medición de energía y privacidad de datos.</p>
            
            <p>El MVP podría integrarse con dispositivos IoT existentes (como termostatos inteligentes) en lugar de requerir hardware propio. Ofrece visualizaciones claras del consumo por aparatos y recomendaciones personalizadas.</p>
            
            <p>Para validar el mercado, asociarte con compañías eléctricas que busquen ofrecer valor agregado a sus clientes. Ellos podrían ser tus primeros canales de distribución.</p>
            
            <p>El modelo híbrido de venta de licencia (para usuarios avanzados) más suscripción SaaS (para funciones premium) permite escalar. Considera también white label para utilities.</p>
            
            <p>Enfócate en la facilidad de instalación y uso. Las métricas clave incluirán porcentaje de ahorro generado para usuarios y tasa de retención después del primer año.</p>
        `,
        checklist: [
            "Investiga compatibilidad con dispositivos IoT populares",
            "Desarrolla algoritmos de recomendación de ahorro",
            "Crea dashboard intuitivo para usuarios no técnicos",
            "Establece alianzas con proveedores de energía",
            "Implementa sistema de alertas por consumo anómalo"
        ]
    },
    // Continuar con las demás 97 ideas...
    // Nota: En una implementación real, aquí irían todas las 100 ideas
    // con el mismo formato de objeto que las primeras 3 mostradas
];

// Función para cargar las ideas en el grid
function loadIdeas(category = 'all') {
    const container = document.getElementById('ideas-container');
    container.innerHTML = '';
    
    const filteredIdeas = category === 'all' 
        ? businessIdeas 
        : businessIdeas.filter(idea => idea.category === category);
    
    filteredIdeas.forEach(idea => {
        const ideaCard = document.createElement('article');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `
            <div class="idea-category">${formatCategory(idea.category)}</div>
            <div class="idea-content">
                <h3 class="idea-title">${idea.title}</h3>
                <p class="idea-description">${idea.description}</p>
                <span class="idea-model">${idea.model}</span>
            </div>
        `;
        
        ideaCard.addEventListener('click', () => openModal(idea));
        container.appendChild(ideaCard);
    });
}

// Función para formatear la categoría
function formatCategory(category) {
    const categories = {
        'tecnologia': 'Tecnología',
        'ecommerce': 'E-commerce',
        'salud': 'Salud',
        'sostenibilidad': 'Sostenibilidad',
        'educacion': 'Educación'
    };
    return categories[category] || category;
}

// Función para abrir el modal con los detalles
function openModal(idea) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <span class="modal-category">${formatCategory(idea.category)}</span>
        <h2>${idea.title}</h2>
        <span class="modal-model">${idea.model}</span>
        <div class="modal-advice">
            ${idea.advice}
        </div>
        <div class="checklist">
            <h3>Checklist de Acción</h3>
            <ul>
                ${idea.checklist.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modalOverlay.classList.add('active');
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cargar todas las ideas al inicio
    loadIdeas();
    
    // Filtros por categoría
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadIdeas(button.dataset.category);
        });
    });
    
    // Cerrar modal
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});