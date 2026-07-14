import { useState, type FormEvent } from 'react';
import { BadgeCheck, Building2, CheckCircle2, FileText, Handshake, Send, ShieldCheck, UsersRound } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/Ui';
import { contact } from '../data';
import type { Language } from '../types';

export function Membership({ lang }: { lang: Language }) {
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
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(lang === 'ar' ? 'طلب عضوية مدرسة في LECIM' : "Demande d'adhésion LECIM")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const benefits = [
    [ShieldCheck, 'تمثيل مؤسسي موحد', 'Représentation institutionnelle'],
    [BadgeCheck, 'دعم الجودة والاعتراف', 'Appui qualité et reconnaissance'],
    [UsersRound, 'تدريب القيادات والمعلمين', 'Formation des cadres et enseignants'],
    [FileText, 'أدلة ونماذج وسياسات', 'Guides, modèles et politiques'],
    [Handshake, 'فرص الشراكات والمشروعات', 'Opportunités de partenariat'],
    [Building2, 'الظهور في دليل المدارس', 'Présence dans l’annuaire'],
  ] as const;

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'العضوية' : 'Adhésion'} title={lang === 'ar' ? 'انضم إلى شبكة وطنية تعمل من أجل مدرسة أقوى' : 'Rejoignez un réseau national engagé pour des écoles plus fortes'} text={lang === 'ar' ? 'عضوية الرابطة تمنح المدرسة صوتًا مؤسسيًا وخدمات تطوير وفرص تعاون وتمثيل.' : 'L’adhésion offre une représentation institutionnelle, des services de développement et des opportunités de coopération.'} />
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow={lang === 'ar' ? 'مزايا العضوية' : 'Avantages'} title={lang === 'ar' ? 'قيمة عملية للمدرسة وقيادتها وطلابها' : 'Une valeur concrète pour l’établissement'} />
          <div className="values-grid values-grid--three">
            {benefits.map(([Icon, ar, fr]) => <div className="value-card value-card--large" key={ar}><Icon size={25} /><strong>{lang === 'ar' ? ar : fr}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container membership-layout">
          <div className="membership-steps">
            <span className="eyebrow">{lang === 'ar' ? 'شروط ومسار الانضمام' : 'Conditions et parcours'}</span>
            <h2>{lang === 'ar' ? 'إجراءات واضحة وشفافة' : 'Une procédure claire et transparente'}</h2>
            {(lang === 'ar'
              ? ['أن تكون المؤسسة تعليمية قائمة أو في طور الترخيص.', 'الالتزام برسالة الرابطة وقيمها ولوائحها.', 'تقديم الوثائق القانونية والتربوية الأساسية.', 'الخضوع لمراجعة أولية وزيارة عند الحاجة.', 'صدور قرار العضوية واستكمال الرسوم المعتمدة.']
              : ["Être un établissement en activité ou en cours d’autorisation.", 'Adhérer à la mission, aux valeurs et aux règlements de la Ligue.', 'Fournir les pièces légales et pédagogiques requises.', 'Accepter une revue initiale et, si nécessaire, une visite.', 'Recevoir la décision et finaliser les frais approuvés.']
            ).map((item, index) => <div className="membership-step" key={item}><span>{index + 1}</span><p>{item}</p></div>)}
          </div>

          <form className="form-card" onSubmit={submit}>
            <div className="form-card__head"><Building2 /><div><h2>{lang === 'ar' ? 'طلب انضمام مدرسة' : "Demande d'adhésion"}</h2><p>{lang === 'ar' ? 'أدخل البيانات الأولية وسيتواصل فريق الرابطة معكم.' : 'Renseignez les informations initiales et notre équipe vous contactera.'}</p></div></div>
            <div className="form-grid">
              <label><span>{lang === 'ar' ? 'اسم المدرسة' : "Nom de l’établissement"}</span><input name="school_name" required /></label>
              <label><span>{lang === 'ar' ? 'المدينة / المنطقة' : 'Ville / région'}</span><input name="location" required /></label>
              <label><span>{lang === 'ar' ? 'اسم المسؤول' : 'Nom du responsable'}</span><input name="contact_name" required /></label>
              <label><span>{lang === 'ar' ? 'رقم الهاتف' : 'Téléphone'}</span><input name="phone" type="tel" required /></label>
              <label><span>{lang === 'ar' ? 'البريد الإلكتروني' : 'E-mail'}</span><input name="email" type="email" /></label>
              <label><span>{lang === 'ar' ? 'المراحل التعليمية' : 'Niveaux enseignés'}</span><input name="levels" required /></label>
              <label className="form-grid__full"><span>{lang === 'ar' ? 'ملاحظات أو معلومات إضافية' : 'Informations complémentaires'}</span><textarea name="message" rows={4} /></label>
            </div>
            <button className="button button--primary button--full" type="submit"><Send size={18} /> {lang === 'ar' ? 'إرسال الطلب' : 'Envoyer la demande'}</button>
            {sent && <p className="form-success"><CheckCircle2 size={18} /> {lang === 'ar' ? 'تم تجهيز الطلب للإرسال. شكرًا لكم.' : 'Votre demande est prête à être envoyée. Merci.'}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
