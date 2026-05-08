const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
const GA4_ID = import.meta.env.VITE_GA4_ID;

let initialized = false;

function injectScript(src, attrs = {}) {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
  return script;
}

function initMetaPixel() {
  if (!META_PIXEL_ID || window.fbq) {
    return;
  }

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
}

function initGA4() {
  if (!GA4_ID || window.gtag) {
    return;
  }

  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID, { send_page_view: true });
}

export function initTracking() {
  if (initialized) return;
  initialized = true;
  initMetaPixel();
  initGA4();
}

export function trackPageView(pathname) {
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
  if (window.gtag && GA4_ID) {
    window.gtag('event', 'page_view', { page_path: pathname });
  }
}

export function trackLead({ service, sourcePath } = {}) {
  if (window.fbq) {
    window.fbq('track', 'Lead', service ? { content_name: service } : undefined);
  }
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      service: service || 'unspecified',
      page_path: sourcePath || window.location.pathname,
    });
  }
}

export function trackContactClick(channel) {
  if (window.fbq) {
    window.fbq('track', 'Contact', { channel });
  }
  if (window.gtag) {
    window.gtag('event', 'contact_click', { channel });
  }
}
