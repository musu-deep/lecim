import { useState, type FormEvent } from 'react';
import { CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react';
import { contact } from '../data';
import { PageHero } from '../components/Ui';
import type { Language } from '../types';

export function Contact({ lang }: { lang: Language }) {
  const [sent, setSent] = useState(false);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (endpoint) {
      const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setSent(true);
      return;
    }
    const body = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(lang === 'ar' ? 'رسالة من موقع LECIM' : 'Message depuis le site LECIM')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'تواصل معنا' : 'Contact'} title={lang === 'ar' ? 'نحن قريبون من المدارس والشركاء والمجتمع' : 'À l’écoute des établissements, partenaires et communautés'} text={lang === 'ar' ? 'للاستفسارات والعضوية والشراكات وخدمات المدارس، تواصل مع فريق الرابطة.' : 'Pour les demandes, adhésions, partenariats et services aux écoles, contactez notre équipe.'} />
      <section className="section section--soft">
        <div className="container contact-grid">
          <div className="contact-details">
            <div className="contact-card"><MapPin /><div><strong>{lang === 'ar' ? 'العنوان' : 'Adresse'}</strong><p>{lang === 'ar' ? contact.addressAr : contact.addressFr}</p></div></div>
            <div className="contact-card"><Mail /><div><strong>{lang === 'ar' ? 'البريد الإلكتروني' : 'E-mail'}</strong><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
            <div className="contact-card"><Phone /><div><strong>{lang === 'ar' ? 'الهاتف' : 'Téléphone'}</strong>{contact.phones.map((phone) => <a href={`tel:${phone.replace(/\s/g, '')}`} key={phone}>{phone}</a>)}</div></div>
            <div className="contact-card"><Clock3 /><div><strong>{lang === 'ar' ? 'ساعات العمل' : 'Horaires'}</strong><p>{lang === 'ar' ? 'الاثنين – الجمعة: 08:00 – 17:00' : 'Lundi – vendredi : 08h00 – 17h00'}</p></div></div>
          </div>

          <form className="form-card" onSubmit={submit}>
            <div className="form-card__head"><Send /><div><h2>{lang === 'ar' ? 'أرسل رسالة' : 'Envoyer un message'}</h2><p>{lang === 'ar' ? 'سنعود إليك عبر بيانات التواصل المدخلة.' : 'Notre équipe vous répondra via les coordonnées fournies.'}</p></div></div>
            <div className="form-grid">
              <label><span>{lang === 'ar' ? 'الاسم' : 'Nom'}</span><input name="name" required /></label>
              <label><span>{lang === 'ar' ? 'الجهة / المدرسة' : 'Organisation / école'}</span><input name="organization" /></label>
              <label><span>{lang === 'ar' ? 'البريد الإلكتروني' : 'E-mail'}</span><input name="email" type="email" required /></label>
              <label><span>{lang === 'ar' ? 'رقم الهاتف' : 'Téléphone'}</span><input name="phone" type="tel" /></label>
              <label className="form-grid__full"><span>{lang === 'ar' ? 'موضوع الرسالة' : 'Objet'}</span><select name="subject"><option>{lang === 'ar' ? 'استفسار عام' : 'Demande générale'}</option><option>{lang === 'ar' ? 'عضوية مدرسة' : 'Adhésion'}</option><option>{lang === 'ar' ? 'شراكة أو مشروع' : 'Partenariat / projet'}</option><option>{lang === 'ar' ? 'الامتحانات' : 'Examens'}</option></select></label>
              <label className="form-grid__full"><span>{lang === 'ar' ? 'الرسالة' : 'Message'}</span><textarea name="message" rows={5} required /></label>
            </div>
            <button className="button button--primary button--full" type="submit"><Send size={18} /> {lang === 'ar' ? 'إرسال الرسالة' : 'Envoyer'}</button>
            {sent && <p className="form-success"><CheckCircle2 size={18} /> {lang === 'ar' ? 'تم تجهيز الرسالة للإرسال.' : 'Votre message est prêt à être envoyé.'}</p>}
          </form>
        </div>
      </section>
      <section className="map-placeholder"><div><MapPin size={34} /><strong>Abobo, Abidjan</strong><span>Côte d’Ivoire</span></div></section>
    </>
  );
}
