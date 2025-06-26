const typingElem = document.getElementById("typing");
const texts = ["Frontend developer", "UI-UX Designer"];
let textIndex = 0;
let idx = 0;
let isDeleting = false;

function typeAndDelete() {
  const currentText = texts[textIndex];
  typingElem.textContent = currentText.slice(0, idx);

  if (!isDeleting) {
    if (idx < currentText.length) {
      idx++;
      setTimeout(typeAndDelete, 70);
    } else {
     
      setTimeout(() => {
        isDeleting = true;
        setTimeout(typeAndDelete, 50);
      }, 900);
    }
  } else {
    if (idx > 0) {
      idx--;
      setTimeout(typeAndDelete, 40);
    } else {
     
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeAndDelete, 300);
    }
  }
}

window.onload = typeAndDelete;

gsap.registerPlugin(ScrollTrigger);


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
    } else {
      menu.classList.add('show');
      menu.classList.remove('hide');
      body.classList.add('mobile-menu-open');
    }
  }
 
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
