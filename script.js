const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });
}

const shareButton = document.getElementById('share-button');
if (shareButton) {
  shareButton.addEventListener('click', async () => {
    const feedback = document.getElementById('share-feedback');
    const shareData = {
      title: 'Invitación de cumpleaños · Belén Jazmín',
      text: 'Te invito a celebrar mis cumpleaños. ¡Será un día inolvidable!',
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        feedback.textContent = '¡Gracias por compartir la invitación!';
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(window.location.href);
        feedback.textContent = 'Enlace copiado. ¡Ya puedes enviarlo a tus invitados!';
      } else {
        feedback.textContent = 'Copia el enlace de esta página desde la barra del navegador para compartirlo.';
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        feedback.textContent = 'Puedes compartir esta invitación copiando el enlace de la página.';
      }
    }
  });
}
