const ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
};

const SOCIAL_ICONS = {
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
  linkedin: ICONS.linkedin,
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  whatsapp: ICONS.whatsapp,
};

const PLATFORM_LABELS = {
  tiktok: 'TikTok',
  instagram: 'Instagram',
  facebook: 'Facebook',
  twitter: 'X',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  whatsapp: 'WhatsApp',
};

let currentConfig = null;
let previewLogoUrl = null;

function applyLogoStyle(style) {
  const header = document.querySelector('.profile-header');
  const logoStyle = style === 'flat' ? 'flat' : 'circle';
  if (header) header.dataset.logoStyle = logoStyle;
}

function applyLogo(url) {
  const logo = document.getElementById('logo');
  const photoRing = logo?.closest('.photo-ring');
  if (url) {
    logo.src = url;
    logo.dataset.hidden = 'false';
    if (photoRing) photoRing.dataset.hidden = 'false';
  } else {
    logo.removeAttribute('src');
    logo.dataset.hidden = 'true';
    if (photoRing) photoRing.dataset.hidden = 'true';
  }
}

function websiteHref(domain) {
  if (!domain) return '';
  const bare = domain.replace(/^https?:\/\//i, '').replace(/\/+$/, '');
  return bare ? `https://${bare}` : '';
}

function mapsHref(location) {
  if (!location) return '';
  const trimmed = location.trim();
  if (!trimmed) return '';

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  if (/^(maps\.app\.goo\.gl|goo\.gl\/maps|maps\.google\.|www\.google\.|google\.)/i.test(trimmed)) {
    return `https://${trimmed.replace(/^\/+/, '')}`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trimmed)}`;
}

function formatLocationDisplay(location) {
  if (!location) return '';
  const trimmed = location.trim();
  if (/^https?:\/\//i.test(trimmed) && /maps|goo\.gl|google\.(?:com|[a-z]{2,3})\/maps/i.test(trimmed)) {
    return 'Open in Maps';
  }
  if (/^(maps\.app\.goo\.gl|goo\.gl\/maps|maps\.google\.|www\.google\.|google\.)/i.test(trimmed)) {
    return 'Open in Maps';
  }
  return location;
}

function formatPhoneDisplay(phone) {
  if (!phone) return '';
  const n = phone.replace(/[\s\-().]/g, '');
  if (n.startsWith('+') && n.length > 4) {
    return `${n.slice(0, 3)} ${n.slice(3).replace(/(\d{3})(?=\d)/g, '$1 ').trim()}`;
  }
  return phone;
}

function whatsappHref(contact, social) {
  const wa = (social || []).find((s) => s.platform === 'whatsapp');
  if (wa?.url) return wa.url;
  const phone = contact?.phone?.replace(/\D/g, '');
  return phone ? `https://wa.me/${phone}` : '';
}

function socialUrl(social, platform) {
  return (social || []).find((s) => s.platform === platform)?.url || '';
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  return node;
}

function quickBtn(href, iconKey, label) {
  const a = el('a', 'quick-btn');
  a.href = href;
  a.setAttribute('aria-label', label);
  a.innerHTML = ICONS[iconKey];
  a.target = href.startsWith('http') ? '_blank' : '_self';
  if (href.startsWith('http')) a.rel = 'noopener noreferrer';
  return a;
}

function contactBlock(label, value, iconKey, href, external) {
  const Tag = href ? 'a' : 'div';
  const block = document.createElement(Tag);
  block.className = `contact-block${href ? '' : ' contact-block-static'}`;
  if (href) {
    block.href = href;
    if (external) {
      block.target = '_blank';
      block.rel = 'noopener noreferrer';
    }
  }

  const icon = el('div', 'contact-icon', ICONS[iconKey]);
  const body = el('div', 'contact-body');
  body.appendChild(el('span', 'contact-label', label));
  body.appendChild(el('span', 'contact-value', value));

  block.appendChild(icon);
  block.appendChild(body);

  if (external) {
    block.appendChild(el('span', 'contact-arrow', ICONS.external));
  }

  return block;
}

function buildVCard(config) {
  const { brandName, tagline, contact } = config;
  const lines = ['BEGIN:VCARD', 'VERSION:3.0', `FN:${brandName}`];
  if (tagline) lines.push(`TITLE:${tagline}`);
  if (contact?.phone) lines.push(`TEL;TYPE=CELL:${contact.phone}`);
  if (contact?.email) lines.push(`EMAIL:${contact.email}`);
  if (contact?.website) lines.push(`URL:${websiteHref(contact.website)}`);
  if (contact?.location) {
    lines.push(`ADR;TYPE=WORK:;;${contact.location};;;;`);
  }
  (config.social || []).forEach((s) => {
    if (s.url) lines.push(`URL:${s.url}`);
  });
  lines.push('END:VCARD');
  return lines.join('\r\n');
}

function downloadVCard(config) {
  const blob = new Blob([buildVCard(config)], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${config.slug || config.brandName || 'contact'}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
}

function render(config, logoUrl) {
  currentConfig = config;
  const theme = config.themeColor || '#C9A227';
  document.documentElement.style.setProperty('--theme', theme);
  document.documentElement.style.setProperty('--theme-soft', `${theme}26`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#17191C');
  document.title = `${config.brandName || 'Digital Card'} | Tapka.ma`;

  document.getElementById('brandName').textContent = config.brandName || 'Brand';
  document.getElementById('tagline').textContent = config.tagline || '';
  document.getElementById('statement').textContent = config.statement || '';

  applyLogoStyle(config.logoStyle);

  const taglineEl = document.getElementById('tagline');
  const statementEl = document.getElementById('statement');
  taglineEl.hidden = !config.tagline;
  statementEl.hidden = !config.statement;

  const logo = document.getElementById('logo');
  const photoRing = logo?.closest('.photo-ring');
  let src = logoUrl ?? null;
  if (!src && config.logo && !window.__PREVIEW_MODE__) {
    src = config.logo;
  }

  if (src) {
    logo.src = src;
    logo.alt = `${config.brandName || 'Brand'} photo`;
    logo.dataset.hidden = 'false';
    if (photoRing) photoRing.dataset.hidden = 'false';
  } else if (!window.__PREVIEW_MODE__) {
    logo.removeAttribute('src');
    logo.dataset.hidden = 'true';
    if (photoRing) photoRing.dataset.hidden = 'true';
  }

  const contact = {
    email: config.contact?.email?.trim?.() ?? config.contact?.email ?? '',
    phone: config.contact?.phone?.trim?.() ?? config.contact?.phone ?? '',
    website: config.contact?.website?.trim?.() ?? config.contact?.website ?? '',
    location: config.contact?.location?.trim?.() ?? config.contact?.location ?? '',
  };
  const social = config.social || [];

  const quickActions = document.getElementById('quickActions');
  quickActions.innerHTML = '';
  if (contact.phone) quickActions.appendChild(quickBtn(`tel:${contact.phone}`, 'phone', 'Call'));
  const wa = whatsappHref(contact, social);
  if (wa) quickActions.appendChild(quickBtn(wa, 'whatsapp', 'WhatsApp'));
  if (contact.email) quickActions.appendChild(quickBtn(`mailto:${contact.email}`, 'email', 'Email'));
  const li = socialUrl(social, 'linkedin');
  if (li) quickActions.appendChild(quickBtn(li, 'linkedin', 'LinkedIn'));

  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  if (contact.phone) {
    contactList.appendChild(
      contactBlock('Phone', formatPhoneDisplay(contact.phone), 'phone', `tel:${contact.phone}`),
    );
  }
  if (contact.email) {
    contactList.appendChild(
      contactBlock('Email', contact.email, 'email', `mailto:${contact.email}`),
    );
  }
  if (contact.website) {
    const href = websiteHref(contact.website);
    contactList.appendChild(
      contactBlock('Website', contact.website.replace(/^https?:\/\//i, ''), 'website', href, true),
    );
  }
  if (contact.location) {
    contactList.appendChild(
      contactBlock('Location', formatLocationDisplay(contact.location), 'location', mapsHref(contact.location), true),
    );
  }

  const socialSection = document.getElementById('socialSection');
  const socialGrid = document.getElementById('social');
  socialGrid.innerHTML = '';
  const listedSocial = social.filter((s) => s.url);
  if (listedSocial.length) {
    socialSection.hidden = false;
    listedSocial.forEach((s) => {
      const a = el('a', 'social-link');
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', PLATFORM_LABELS[s.platform] || s.platform);
      const iconWrap = el('span', 'social-link-icon');
      iconWrap.innerHTML = SOCIAL_ICONS[s.platform] || ICONS.website;
      const label = el('span', 'social-link-label');
      label.textContent = PLATFORM_LABELS[s.platform] || s.platform;
      a.appendChild(iconWrap);
      a.appendChild(label);
      socialGrid.appendChild(a);
    });
  } else {
    socialSection.hidden = true;
  }

  const saveBtn = document.getElementById('saveContact');
  const hasContact = contact.phone || contact.email || contact.website || contact.location;
  saveBtn.disabled = !hasContact;
  saveBtn.onclick = () => downloadVCard({ ...config, contact });
}

async function loadConfig() {
  const res = await fetch('config.json');
  if (!res.ok) throw new Error('Config not found');
  return res.json();
}

if (window.__PREVIEW_MODE__) {
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'PREVIEW_LOGO') {
      previewLogoUrl = e.data.logoUrl ?? null;
      applyLogo(previewLogoUrl);
    }
    if (e.data?.type === 'PREVIEW_CONFIG') {
      render(e.data.config, previewLogoUrl);
    }
  });
  window.parent.postMessage({ type: 'PREVIEW_READY' }, '*');
} else {
  loadConfig()
    .then((config) => render(config))
    .catch(() => {
      document.getElementById('brandName').textContent = 'Card not configured';
    });
}

window.TapkaCard = { render };
