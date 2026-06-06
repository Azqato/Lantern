// Shared navigation — included by every HTML page via <script src="nav.js">
(function () {
  const navHTML = `
    <nav style="background:white;border-bottom:1px solid #ebe7e1;position:sticky;top:0;z-index:50;box-shadow:0 1px 3px rgba(0,0,0,.06)">
      <div style="max-width:1280px;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between">
        <a href="index.html" style="display:flex;align-items:center;gap:0.5rem;text-decoration:none;opacity:1;transition:opacity .15s" onmouseover="this.style.opacity='.75'" onmouseout="this.style.opacity='1'">
          <div style="width:2rem;height:2rem;background:#6b6652;border-radius:50%;display:flex;align-items:center;justify-content:center">
            <span style="color:white;font-family:Georgia,Garamond,serif;font-weight:bold;font-size:1rem">L</span>
          </div>
          <span style="font-family:Georgia,Garamond,serif;font-size:1.25rem;font-weight:bold;color:#2a2622">Lantern</span>
        </a>

        <div style="display:flex;align-items:center;gap:2rem">
          <a href="index.html"    class="lantern-nav-link" data-page="index.html">Profile</a>
          <a href="feed.html"     class="lantern-nav-link" data-page="feed.html">Feed</a>
          <a href="search.html"   class="lantern-nav-link" data-page="search.html">Search</a>
          <a href="lists.html"    class="lantern-nav-link" data-page="lists.html">Lists</a>
          <a href="cohorts.html"  class="lantern-nav-link" data-page="cohorts.html">Cohorts</a>
        </div>

        <button
          style="padding:.5rem 1rem;border-radius:.375rem;font-weight:500;color:#6b6652;background:transparent;border:none;cursor:pointer;transition:background .15s"
          onmouseover="this.style.background='#f5f5f1'"
          onmouseout="this.style.background='transparent'">
          Sign In
        </button>
      </div>
    </nav>`;

  const root = document.getElementById('nav-root');
  if (root) root.outerHTML = navHTML;

  // Active link styling
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.lantern-nav-link').forEach(link => {
    Object.assign(link.style, {
      fontSize: '.875rem', fontWeight: '500', textDecoration: 'none', transition: 'color .15s'
    });
    const isActive = link.dataset.page === page || (page === '' && link.dataset.page === 'index.html');
    link.style.color = isActive ? '#6b6652' : '#8b8772';
    if (isActive) {
      link.style.borderBottom = '2px solid #6b6652';
      link.style.paddingBottom = '2px';
    }
    if (!isActive) {
      link.addEventListener('mouseover', () => link.style.color = '#2a2622');
      link.addEventListener('mouseout',  () => link.style.color = '#8b8772');
    }
  });
})();
