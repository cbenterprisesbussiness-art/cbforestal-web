import { useEffect } from 'react';
import { useLanguage } from '../shared/LanguageContext';

export default function FAQSection({ label, title, items, schemaId }) {
  const { t } = useLanguage();
  const safeSchemaId = schemaId
    ?.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]/g, '-');

  useEffect(() => {
    if (!items?.length || !safeSchemaId) {
      return undefined;
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: t(item.question),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(item.answer),
        },
      })),
    };

    let script = document.getElementById(safeSchemaId);

    if (!script) {
      script = document.createElement('script');
      script.id = safeSchemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [items, safeSchemaId, t]);

  if (!items?.length) {
    return null;
  }

  return (
    <section className="section section-cream">
      <div className="container">
        <div className="section-heading">
          {label ? <span className="section-label">{t(label)}</span> : null}
          <h2 className="section-title">{t(title)}</h2>
        </div>
        <div className="faq-grid">
          {items.map((item) => (
            <article key={item.question.ca} className="faq-card" data-reveal>
              <h3>{t(item.question)}</h3>
              <p>{t(item.answer)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
