const routes = {
  home: () => `
    <section class="hero">
      <h1>Technical work that ships.</h1>
      <p>I build practical software systems, clean up complexity, and deliver useful products quickly.</p>
    </section>

    <section class="grid">
      <article class="card">
        <h2>About</h2>
        <p>Hi, I’m Ash Mercer. I focus on engineering execution: debugging messy systems, turning rough ideas into stable features, and getting projects over the finish line.</p>
      </article>

      <article class="card">
        <h2>Highlights</h2>
        <div class="kpis">
          <div class="kpi"><strong>20+</strong><span>Automation and tooling tasks delivered</span></div>
          <div class="kpi"><strong>Fast</strong><span>Prototype-to-deploy workflow</span></div>
          <div class="kpi"><strong>Reliable</strong><span>Documentation-first and maintainable code</span></div>
        </div>
      </article>
    </section>
  `,

  projects: () => `
    <section class="card">
      <h2>Projects</h2>
      <div class="project-list">
        <article class="project">
          <h3>Portfolio SPA</h3>
          <p>Single-page portfolio with client-side routing, responsive layout, and zero framework overhead.</p>
          <div class="tags"><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span><span class="tag">GitHub Pages</span></div>
        </article>

        <article class="project">
          <h3>Workflow Automation Toolkit</h3>
          <p>Scripts and integrations that reduce repetitive team operations and speed up delivery cycles.</p>
          <div class="tags"><span class="tag">CLI</span><span class="tag">APIs</span><span class="tag">Automation</span></div>
        </article>

        <article class="project">
          <h3>Debug & Recovery Playbooks</h3>
          <p>Repeatable incident triage steps and environment setup guidance for quick handoffs and fewer regressions.</p>
          <div class="tags"><span class="tag">Ops</span><span class="tag">Docs</span><span class="tag">Reliability</span></div>
        </article>
      </div>
    </section>
  `,

  contact: () => `
    <section class="card">
      <h2>Contact</h2>
      <p>If you need something built, fixed, or shipped, I can help.</p>
      <p>Email: <a href="mailto:ashmercerAMG@gmail.com">ashmercerAMG@gmail.com</a></p>
      <a class="btn" href="mailto:ashmercerAMG@gmail.com?subject=Portfolio%20Inquiry">Start a conversation</a>
    </section>
  `
};

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' }
];

function currentRoute() {
  const hash = location.hash.replace('#', '');
  return routes[hash] ? hash : 'home';
}

function renderNav(active) {
  const nav = document.getElementById('nav');
  nav.innerHTML = navItems
    .map(item => `<a href="#${item.key}" class="${item.key === active ? 'active' : ''}">${item.label}</a>`)
    .join('');
}

function render() {
  const route = currentRoute();
  const app = document.getElementById('app');
  app.innerHTML = routes[route]();
  renderNav(route);
  app.focus();
}

function setupMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('hashchange', render);
setupMobileMenu();
render();
