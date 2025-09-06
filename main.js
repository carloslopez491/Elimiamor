document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-message-btn');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('background-music');
    
    // Elementos de la galería de fotos
    const photos = document.querySelectorAll('.photo');
    const totalPhotos = photos.length;
    let currentPhotoIndex = 0;

    // Elementos de animación
    const heartRainContainer = document.getElementById('heart-rain-container');
    const teAmoAnimation = document.querySelector('.te-amo-animation');

    // Función principal para la transición de la página
    function showContentAndPlayMusic() {
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
        
        audio.play().catch(e => {
            console.error("No se pudo reproducir la música: ", e);
        });

        openBtn.style.display = 'none';
        document.querySelector('.subtitle').style.display = 'none';
        
        // Iniciar todas las animaciones
        startPhotoFade();
        startHeartRain();
        showTeAmoAnimation();
    }

    // Animación de fotos con fundido
    function startPhotoFade() {
        setInterval(() => {
            // Ocultar la foto actual
            photos[currentPhotoIndex].classList.add('hidden-photo');
            
            // Avanzar al siguiente índice
            currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
            
            // Mostrar la siguiente foto
            photos[currentPhotoIndex].classList.remove('hidden-photo');
            
        }, 3000); // Cambia de foto cada 3 segundos
    }

    // Animación de lluvia de corazones
    function startHeartRain() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️😍'; // Puedes cambiarlo a '💖' o '✨'

            // Posición aleatoria en la parte superior
            heart.style.left = `${Math.random() * 50}vw`; 
            // Retraso para que no caigan todos al mismo tiempo
            heart.style.animationDelay = `${Math.random() * 5}s`; 
            
            heartRainContainer.appendChild(heart);

            // Eliminar el corazón cuando termina su animación
            heart.addEventListener('animationend', () => {
                heart.remove();
            });

        }, 100000); // Crea un nuevo corazón cada 0.5 segundos
    }

    // Animación del texto "Te quiero"
    function showTeAmoAnimation() {
        setTimeout(() => {
            teAmoAnimation.classList.remove('hidden-animation');
        }, 15000); // Muestra la animación después de 15 segundos
    }

    openBtn.addEventListener('click', showContentAndPlayMusic);

    // Animación de latido para el botón (opcional)
    setInterval(() => {
        openBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            openBtn.style.transform = 'scale(1)';
        }, 300);
    }, 1000);
});
