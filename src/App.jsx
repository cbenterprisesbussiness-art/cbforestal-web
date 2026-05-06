import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FencesPage from './pages/FencesPage';
import ZonesPage from './pages/ZonesPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import WorksPage from './pages/WorksPage';
import ServiceLandingPage from './pages/ServiceLandingPage';
import { useLanguage } from './shared/LanguageContext';
import {
  company,
  desbroceBarcelonaPath,
  legalPages,
  pageMeta,
  podaBarcelonaPath,
  serviceLandingPages,
  services,
  talaBarcelonaPath,
} from './shared/siteContent';

function RouteEffects() {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const elementId = location.hash.slice(1);
    const scrollToElement = () => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.requestAnimationFrame(scrollToElement);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/'];
    document.documentElement.lang = lang;
    document.title = meta.title[lang];

    const description = meta.description[lang];
    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    const ensureMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
        document.head.appendChild(element);
      }

      return element;
    };

    const ensureLink = (selector, attributes) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement('link');
        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
        document.head.appendChild(element);
      }

      return element;
    };

    ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute('content', description);
    ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', meta.title[lang]);
    ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute(
      'content',
      description,
    );
    ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', 'website');
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale' }).setAttribute(
      'content',
      lang === 'ca' ? 'ca_ES' : 'es_ES',
    );
    ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', canonicalUrl);
    ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute(
      'content',
      `${window.location.origin}/og-cover.png`,
    );
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute(
      'content',
      'summary_large_image',
    );
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute(
      'content',
      meta.title[lang],
    );
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute(
      'content',
      description,
    );
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute(
      'content',
      `${window.location.origin}/og-cover.png`,
    );
    ensureLink('link[rel="canonical"]', { rel: 'canonical' }).setAttribute('href', canonicalUrl);
  }, [lang, location.pathname]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: company.name,
      url: company.website,
      email: company.email,
      image: `${window.location.origin}/og-cover.png`,
      areaServed: company.serviceAreas,
      knowsAbout: services.map((service) => service.title[lang]),
      description: pageMeta['/'].description[lang],
      serviceType: services.map((service) => service.title[lang]),
    };

    let script = document.head.querySelector('#local-business-schema');

    if (!script) {
      script = document.createElement('script');
      script.id = 'local-business-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [lang]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/cerramientos" element={<FencesPage />} />
          <Route path="/zonas" element={<ZonesPage />} />
          <Route path="/trabajos" element={<WorksPage />} />
          <Route path={podaBarcelonaPath} element={<ServiceLandingPage content={serviceLandingPages[podaBarcelonaPath]} />} />
          <Route path={talaBarcelonaPath} element={<ServiceLandingPage content={serviceLandingPages[talaBarcelonaPath]} />} />
          <Route path={desbroceBarcelonaPath} element={<ServiceLandingPage content={serviceLandingPages[desbroceBarcelonaPath]} />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/privacidad" element={<LegalPage content={legalPages.privacy} />} />
          <Route path="/aviso-legal" element={<LegalPage content={legalPages.legalNotice} />} />
          <Route path="/cookies" element={<LegalPage content={legalPages.cookies} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
