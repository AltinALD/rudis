// Modal Popup for Discount
window.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('discount-modal');
  const closeModal = document.getElementById('close-modal');
  const modalCta = document.getElementById('modal-cta');
  if (!sessionStorage.getItem('visited')) {
    modal.classList.add('active');
    sessionStorage.setItem('visited', 'true');
  }
  closeModal.onclick = () => modal.classList.remove('active');
  modalCta.onclick = () => {
    modal.classList.remove('active');
    document.querySelector('.menu').scrollIntoView({behavior:'smooth'});
  };
  window.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('active');
  };

  // Menu Tabs
  const tabs = document.querySelectorAll('.menu-tab');
  const lists = document.querySelectorAll('.menu-list');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      lists.forEach(list => {
        if (list.dataset.category === tab.dataset.category) {
          list.style.display = '';
        } else {
          list.style.display = 'none';
        }
      });
    });
  });

  // Gallery Lightbox
  const galleryImgs = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.getElementById('close-lightbox');
  galleryImgs.forEach(img => {
    img.addEventListener('click', function() {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });
  closeLightbox.onclick = () => lightbox.classList.remove('active');
  lightbox.onclick = (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  };

  // Hamburger Menu & Side Nav Overlay
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const sideNavOverlay = document.querySelector('.side-nav-overlay');
  hamburger.onclick = () => {
    navLinks.classList.add('open');
    sideNavOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  sideNavOverlay.onclick = () => {
    navLinks.classList.remove('open');
    sideNavOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
      navLinks.classList.remove('open');
      sideNavOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    };
  });

  // Smooth Scroll for Nav Links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Contact Form (optional: prevent default for demo)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting us!');
      contactForm.reset();
    });
  }

  // Hero Background Slideshow
  const heroImgs = document.querySelectorAll('.hero-bg-img');
  let heroIdx = 0;
  setInterval(() => {
    heroImgs[heroIdx].classList.remove('active');
    heroIdx = (heroIdx + 1) % heroImgs.length;
    heroImgs[heroIdx].classList.add('active');
  }, 5000);
}); 