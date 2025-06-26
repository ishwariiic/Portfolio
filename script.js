const typingElem = document.getElementById("typing");
const texts = ["Frontend developer", "UI-UX Designer"];
let textIndex = 0;
let idx = 0;
let isDeleting = false;
let typingTimeout;

function typeAndDelete() {
  if (!typingElem) return;
  const currentText = texts[textIndex];
  typingElem.textContent = currentText.slice(0, idx);

  if (!isDeleting) {
    if (idx < currentText.length) {
      idx++;
      typingTimeout = setTimeout(typeAndDelete, 70);
    } else {
      typingTimeout = setTimeout(() => {
        isDeleting = true;
        typingTimeout = setTimeout(typeAndDelete, 50);
      }, 900);
    }
  } else {
    if (idx > 0) {
      idx--;
      typingTimeout = setTimeout(typeAndDelete, 40);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingTimeout = setTimeout(typeAndDelete, 300);
    }
  }
}

window.onload = () => {
  clearTimeout(typingTimeout);
  idx = 0;
  textIndex = 0;
  isDeleting = false;
  typeAndDelete();
};

gsap.registerPlugin(ScrollTrigger);

// Section titles
if (window.gsap) {
  gsap.utils.toArray('.gsap-fadeup').forEach(el => {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });

  // Timeline items (left)
  gsap.utils.toArray('.gsap-fadeleft').forEach((el, i) => {
    gsap.from(el, {
      x: -80,
      opacity: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // Project cards (right)
  gsap.utils.toArray('.gsap-faderight').forEach((el, i) => {
    gsap.from(el, {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // Contact/socials
  gsap.utils.toArray('.gsap-fadein').forEach(el => {
    gsap.from(el, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });
  });

  function toggleMobileMenu() {
    const menu = document.getElementById("mobileNavMenu");
    const body = document.body;
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      menu.classList.add('hide');
      body.classList.remove('mobile-menu-open');
      // Remove overlay if exists
      const overlay = document.getElementById('mobileMenuOverlay');
      if (overlay) overlay.remove();
    } else {
      menu.classList.add('show');
      menu.classList.remove('hide');
      body.classList.add('mobile-menu-open');
      // Add overlay
      if (!document.getElementById('mobileMenuOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'mobileMenuOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.08)';
        overlay.style.zIndex = '9998';
        overlay.onclick = toggleMobileMenu;
        document.body.appendChild(overlay);
      }
    }
  }

  // Close menu when a link is clicked
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById("mobileNavMenu");
      menu.classList.remove('show');
      menu.classList.add('hide');
      document.body.classList.remove('mobile-menu-open');
    });
  });
}
