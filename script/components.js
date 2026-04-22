class AppNavbar extends HTMLElement {
  connectedCallback() {
    // Robust path detection
    const path = window.location.pathname;
    let basePath = './';
    
    // Check depth based on known directory structure
    if (path.includes('/homelab/') || path.includes('/research/') || path.includes('/articles/')) {
      basePath = '../../';
    } else if (path.includes('/content/')) {
      basePath = '../';
    }

    const currentPath = path.split('/').pop() || 'index.html';

    const menuItems = [
      { name: 'Home', url: basePath + 'index.html', match: 'index.html' },
      { name: 'About Me', url: basePath + 'content/about.html', match: 'about.html' },
      { name: 'Experience & Skills', url: basePath + 'content/experience_skill.html', match: 'experience_skill.html' },
      { name: 'My Certificate', url: basePath + 'content/certificate.html', match: 'certificate.html' },
      { name: 'Project & Home Lab', url: basePath + 'content/project_homelab.html', match: 'project_homelab.html' },
      { name: 'Services', url: basePath + 'content/professional_services.html', match: 'professional_services.html' },
      { name: 'Learning Roadmap', url: basePath + 'content/learning_roadmap.html', match: 'learning_roadmap.html' },
      { name: 'Article & Research', url: basePath + 'content/article_research.html', match: 'article_research.html' }
    ];

    let navLinksHTML = '';
    menuItems.forEach(item => {
      const isActive = currentPath === item.match ? 'navtab-active' : '';
      navLinksHTML += `
      <ul class="navbar-nav mr-auto">
          <li class="nav-item navbar-url">
              <a class="navbar-url-active ${isActive}" href="${item.url}">${item.name}</a>
          </li>
      </ul>`;
    });

    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light navbar-library fixed-top navbar-fixed-top">
        <div class="container">
            <button
                class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                ${navLinksHTML}
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <button class="btn btn-sm btn-outline-secondary" id="darkModeToggle" title="Toggle Dark Mode">
                           <i class="fas fa-moon"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    // Dark Mode Logic
    const toggleBtn = this.querySelector('#darkModeToggle');
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      htmlEl.setAttribute('data-bs-theme', 'dark');
      bodyEl.classList.add('dark-mode');
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-bs-theme');
      if (currentTheme === 'dark') {
        htmlEl.setAttribute('data-bs-theme', 'light');
        bodyEl.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        htmlEl.setAttribute('data-bs-theme', 'dark');
        bodyEl.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });

    // Rebind scroll event for navbar glassmorphism
    const nav = this.querySelector('.navbar-fixed-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > nav.offsetHeight) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <footer>
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="mb-0 text-muted">&copy; ${year} - by Ervinda Pratama</p>
                </div>
            </div>
        </div>
    </footer>
    `;
  }
}

customElements.define('app-navbar', AppNavbar);
customElements.define('app-footer', AppFooter);
