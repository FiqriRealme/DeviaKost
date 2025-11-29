
  document.getElementById('year').textContent = new Date().getFullYear();

  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');

  function openLightbox(src){
    lbImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('active');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.clickable').forEach(el => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => {
      const foundImg = el.tagName === 'IMG' ? el : el.querySelector('img');
      if(foundImg) openLightbox(foundImg.src);
    });
  });

  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox || e.target === lbImg){
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeLightbox();
  });

  // Tambahkan di script yang sudah ada
document.addEventListener('DOMContentLoaded', function() {
  const galleryRows = document.querySelectorAll('.gallery-row');
  
  galleryRows.forEach(gallery => {
    // Add swipe indicators
    let isScrolling;
    
    gallery.addEventListener('scroll', function() {
      // Clear timeout saat scroll
      window.clearTimeout(isScrolling);
      
      // Set timeout untuk detect scroll end
      isScrolling = setTimeout(function() {
        gallery.classList.remove('scrolling');
      }, 66);
      
      gallery.classList.add('scrolling');
    });
  });
});

// Tambahkan di script yang sudah ada
document.addEventListener('DOMContentLoaded', function() {
    const mapIframes = document.querySelectorAll('.map-box iframe');
    
    mapIframes.forEach(iframe => {
        // Force reload iframe jika tidak load
        setTimeout(() => {
            if (iframe.contentWindow && iframe.contentWindow.document.body.innerHTML === '') {
                const src = iframe.src;
                iframe.src = '';
                setTimeout(() => {
                    iframe.src = src;
                }, 100);
            }
        }, 2000);
        
        // Tambahkan class loaded ketika iframe selesai load
        iframe.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
});

