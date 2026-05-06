import { useEffect } from 'react';
import { useLanguage } from '../shared/LanguageContext';

export default function FAQSection({ label, title, items, schemaId }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!items?.length || !schemaId) {
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

    let script = document.head.querySelector(`#${schemaId}`);

    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [items, schemaId, t]);

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
