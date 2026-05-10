'use strict';

// Detect platform from the user agent and tweak the hero CTA / highlight
// the most relevant download card.
(function () {
  const ua = navigator.userAgent || '';
  const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';

  let kind = 'win-installer';
  let label = 'Download for Windows';
  let sub = 'Signed installer';

  if (/Mac|Darwin/i.test(ua) || /Mac|Darwin/i.test(platform)) {
    // Try to distinguish Apple Silicon from Intel. The userAgent only
    // gives us "Intel Mac OS X" reliably; userAgentData has more.
    const isArm =
      (navigator.userAgentData && navigator.userAgentData.platform === 'macOS' &&
        /arm/i.test(navigator.userAgentData.architecture || '')) ||
      /arm64|aarch64/i.test(ua);
    kind = isArm ? 'mac-arm' : 'mac-x64';
    label = isArm ? 'Download for Mac (Apple Silicon)' : 'Download for Mac (Intel)';
    sub = '.dmg · signed & notarized';
  } else if (/Linux/i.test(ua) || /Linux/i.test(platform)) {
    // No Linux build yet; nudge to portable Windows or GitHub.
    kind = 'win-installer';
    label = 'No native Linux build · Get Windows/Mac';
    sub = 'See all downloads below';
  }

  const primary = document.getElementById('primaryDownload');
  const labelEl = document.getElementById('primaryDownloadLabel');
  const subEl = document.getElementById('primaryDownloadSub');
  const cards = document.querySelectorAll('.dl-card');
  const card = Array.from(cards).find((c) => c.dataset.platform === kind);

  if (primary && card) {
    primary.href = card.href;
    if (labelEl) labelEl.textContent = label;
    if (subEl) subEl.textContent = sub;
    card.classList.add('recommended');
  }

  // Fetch latest version from the GitHub API and stamp it in the hero.
  fetch('https://api.github.com/repos/dtsoden/n8n-export-app/releases/latest', {
    headers: { Accept: 'application/vnd.github+json' }
  })
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => {
      if (!j || !j.tag_name) return;
      const v = String(j.tag_name).replace(/^v/, '');
      const badge = document.getElementById('versionBadge');
      if (badge) badge.textContent = v;
    })
    .catch(() => { /* offline / rate-limited; leave the badge as 'latest' */ });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
