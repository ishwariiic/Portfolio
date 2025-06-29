
document.addEventListener('DOMContentLoaded', function() {
    const animatedGrid = document.getElementById('animated-grid');
    let offsetX = 0;
    let offsetY = 0;
    const animationSpeed = 40;
    let direction = 'diagonal-down-right';

    function animateGrid() {
        if (direction === 'right' || direction === 'diagonal-down-right' || direction === 'diagonal-up-right') {
            offsetX = (offsetX + 0.25) % 32;
        } else if (direction === 'left' || direction === 'diagonal-down-left' || direction === 'diagonal-up-left') {
            offsetX = (offsetX - 0.25 + 32) % 32;
        }

        if (direction === 'down' || direction === 'diagonal-down-right' || direction === 'diagonal-down-left') {
            offsetY = (offsetY + 0.25) % 64;
        } else if (direction === 'up' || direction === 'diagonal-up-right' || direction === 'diagonal-up-left') {
            offsetY = (offsetY - 0.25 + 64) % 64;
        }

        if (animatedGrid) {
            animatedGrid.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
        }
    }

    
    const interval = setInterval(animateGrid, animationSpeed);

   
    window.addEventListener('beforeunload', function() {
        clearInterval(interval);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.group img');
    
    projectImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            console.error('Failed to load image:', this.src);
        });
        
       
     
        img.style.transition = 'opacity 0.3s ease-in-out';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

  
    const sections = document.querySelectorAll('.space-y-16 > div');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
           
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});


const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


(function() {
  const openBtn = document.getElementById('open-terminal-btn');
  const modal = document.getElementById('fake-terminal-modal');
  const closeBtn = document.getElementById('close-terminal-btn');
  const terminalBody = document.getElementById('terminal-body');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');

  if (!openBtn || !modal || !closeBtn || !terminalBody || !terminalForm || !terminalInput) return;

 
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem."
  ];

  const commands = [
    'help', 'about', 'projects', 'contact', 'clear', 'joke', 'tech'
  ];

  const responses = {
    help: `Available commands:<br> <span style='color:#7fff7f'>about</span>, <span style='color:#7fff7f'>projects</span>, <span style='color:#7fff7f'>contact</span>, <span style='color:#7fff7f'>joke</span>, <span style='color:#7fff7f'>tech</span>, <span style='color:#7fff7f'>clear</span>, <span style='color:#7fff7f'>help</span>`,
    about: `I'm Ishwari — a front-end developer who loves mixing clean code with chaotic creativity.  <br>Currently decoding life and pixels as a 3rd-year student at VIIT, Pune.<br>🛠️ I specialize in building:<br>- Responsive UIs that don't break on mobile (usually 👀)<br>- Fun, fast, and functional web apps`,
    projects: `EatFit: Personalized food ordering with AI recommendations.<br>Secure Together-a platform to report non-emergency issues`,
    contact: `Email: <a href='mailto:ishwarichaudhari841@email.com' style='color:#7fff7f'>ishwarichaudhari841@email.com</a><br>LinkedIn: <a href='https://www.linkedin.com/in/ishwariii-c-90751a260' target='_blank' style='color:#7fff7f'>LinkedIn</a><br>GitHub: <a href='https://github.com/ishwariiic' target='_blank' style='color:#7fff7f'>Github</a>`,
    joke: () => jokes[Math.floor(Math.random() * jokes.length)],
    tech: `My tech-stack: <span style='color:#7fff7f'>'Tailwaind-CSS', 'JavaScript', 'React', 'Figma'</span>`,
    clear: '',
    default: `Command not found. Type <span style='color:#7fff7f'>help</span> for a list of commands.`
  };

  function printToTerminal(text, isCommand = false) {
    const div = document.createElement('div');
    div.innerHTML = (isCommand ? `<span style='color:#7fff7f'>guest@portfolio:~$</span> ${text}` : text);
    terminalBody.appendChild(div);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function handleCommand(cmd) {
    const command = cmd.trim().toLowerCase();
    if (command === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }
    printToTerminal(cmd, true);
    
    const foundCmd = Object.keys(responses).find(key => key.toLowerCase() === command);
    if (foundCmd) {
      if (foundCmd === 'joke') printToTerminal(responses.joke());
      else printToTerminal(responses[foundCmd]);
    } else {
      printToTerminal(responses.default);
    }
  }

 
  terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const val = terminalInput.value.trim().toLowerCase();
      if (!val) return;
      const match = commands.find(cmd => cmd.toLowerCase().startsWith(val));
      if (match) terminalInput.value = match;
    }
  });

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    setTimeout(() => terminalInput.focus(), 100);
    printToTerminal('Welcome to Ishwari\'s Portfolio Terminal! Type <span style="color:#7fff7f">help</span> to get started.');
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    terminalBody.innerHTML = '';
    terminalInput.value = '';
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      terminalBody.innerHTML = '';
      terminalInput.value = '';
    }
  });

  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = terminalInput.value;
    if (value.trim() !== '') {
      handleCommand(value);
      terminalInput.value = '';
    }
  });
})();


(function() {
  const codeCard = document.querySelector('.code-card');
  const openBtn = document.getElementById('open-terminal-btn');
  if (codeCard && openBtn) {
    codeCard.style.cursor = 'pointer';
    codeCard.addEventListener('click', function() {
      openBtn.click();
    });
  }
})(); 