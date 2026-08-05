const state = { manifest: null, activePath: null };

const navigation = document.querySelector('#navigation');
const article = document.querySelector('#article');
const loading = document.querySelector('#loading');
const errorBox = document.querySelector('#error');
const breadcrumbs = document.querySelector('#breadcrumbs');
const search = document.querySelector('#search');
const sidebar = document.querySelector('#sidebar');

marked.setOptions({ gfm: true, breaks: false });

async function loadManifest() {
  const response = await fetch('content/index.json', { cache: 'no-store' });
  if (!response.ok) throw new Error('Manifest yüklenemedi');
  state.manifest = await response.json();
  renderNavigation();
  await openFromHash();
}

function renderNavigation(query = '') {
  const needle = query.trim().toLocaleLowerCase('tr');
  navigation.innerHTML = '';

  state.manifest.groups.forEach(group => {
    const items = group.items.filter(item => {
      const haystack = `${item.title} ${item.description || ''}`.toLocaleLowerCase('tr');
      return !needle || haystack.includes(needle);
    });

    if (!items.length) return;

    const section = document.createElement('section');
    section.className = 'nav-group';
    section.innerHTML = `<div class="nav-title">${escapeHtml(group.title)}</div>`;

    items.forEach(item => {
      const button = document.createElement('button');
      button.className = `nav-link${item.path === state.activePath ? ' active' : ''}`;
      button.innerHTML = `
        <span class="nav-icon">${escapeHtml(item.icon || '•')}</span>
        <span class="nav-text">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.description || '')}</span>
        </span>`;
      button.addEventListener('click', () => {
        location.hash = encodeURIComponent(item.path);
        sidebar.classList.remove('open');
      });
      section.appendChild(button);
    });

    navigation.appendChild(section);
  });
}

async function openFromHash() {
  const requested = decodeURIComponent(location.hash.slice(1));
  const allItems = state.manifest.groups.flatMap(group =>
    group.items.map(item => ({ ...item, groupTitle: group.title }))
  );
  const selected = allItems.find(item => item.path === requested) || allItems[0];
  if (!selected) return;

  state.activePath = selected.path;
  renderNavigation(search.value);
  breadcrumbs.textContent = `${selected.groupTitle} / ${selected.title}`;
  document.title = `${selected.title} · Faruk Knowledge Base`;

  loading.hidden = false;
  article.hidden = true;
  errorBox.hidden = true;

  try {
    const response = await fetch(selected.file, { cache: 'no-store' });
    if (!response.ok) throw new Error('İçerik bulunamadı');
    const markdown = await response.text();
    article.innerHTML = marked.parse(markdown);
    article.hidden = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
  } catch (error) {
    console.error(error);
    errorBox.hidden = false;
  } finally {
    loading.hidden = true;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

search.addEventListener('input', event => renderNavigation(event.target.value));
window.addEventListener('hashchange', openFromHash);

document.querySelector('#menuButton').addEventListener('click', () => sidebar.classList.toggle('open'));
document.addEventListener('click', event => {
  if (window.innerWidth <= 860 && !sidebar.contains(event.target) && !event.target.closest('#menuButton')) {
    sidebar.classList.remove('open');
  }
});

const savedTheme = localStorage.getItem('fkb-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
document.querySelector('#themeButton').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('fkb-theme', next);
});

loadManifest().catch(error => {
  console.error(error);
  loading.hidden = true;
  errorBox.hidden = false;
});
