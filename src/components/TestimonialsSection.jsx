import SectionHeading from './SectionHeading';
import { testimonials } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-light">
      <div className="container">
        <SectionHeading label={testimonials.label} title={testimonials.title} />
        <div className="testimonios-grid">
          {testimonials.items.map((item) => (
            <article key={item.author} className="testimonio" data-reveal>
              <div className="testimonial-head">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.author.slice(0, 1)}
                </div>
                <div>
                  <div className="testimonio-author">{item.author}</div>
                  <div className="testimonio-loc">{item.location}</div>
                </div>
              </div>
              <p className="testimonio-text">{t(item.text)}</p>
              <div className="testimonial-badge">{t(item.badge)}</div>
              <div className="stars">★★★★★</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
