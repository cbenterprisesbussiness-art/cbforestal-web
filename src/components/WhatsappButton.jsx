import { company } from '../shared/siteContent';

export default function WhatsappButton() {
  if (!company.hasWhatsapp) {
    return null;
  }

  return (
    <a
      href={company.whatsapp}
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      💬
    </a>
  );
}
