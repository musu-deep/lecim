import { useMemo, useState } from 'react';
import { BadgeCheck, Building2, MapPin, Search, ShieldQuestion } from 'lucide-react';
import { schools } from '../data';
import { EmptyState, PageHero, SectionHeading } from '../components/Ui';
import type { Language } from '../types';

export function Schools({ lang }: { lang: Language }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'all' | 'recognized' | 'progress'>('all');

  const filtered = useMemo(() => schools.filter((school) => {
    const haystack = `${school.name.ar} ${school.name.fr} ${school.city} ${school.region}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    const matchesStatus = status === 'all' || (status === 'recognized' ? school.recognized : !school.recognized);
    return matchesQuery && matchesStatus;
  }), [query, status]);

  return (
    <>
      <PageHero eyebrow={lang === 'ar' ? 'دليل المدارس' : 'Annuaire'} title={lang === 'ar' ? 'تعرّف على المدارس الأعضاء في مختلف مناطق كوت ديفوار' : 'Découvrez les établissements membres à travers la Côte d’Ivoire'} text={lang === 'ar' ? 'دليل رقمي قابل للبحث، يوضح موقع المدرسة ومراحلها وحالة الاعتراف.' : 'Un annuaire consultable indiquant la localisation, les niveaux et le statut de reconnaissance.'} />
      <section className="section section--soft">
        <div className="container">
          <div className="directory-toolbar">
            <label className="search-field">
              <Search size={20} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={lang === 'ar' ? 'ابحث باسم المدرسة أو المدينة أو المنطقة' : 'Rechercher par école, ville ou région'} />
            </label>
            <div className="filter-tabs" role="group" aria-label={lang === 'ar' ? 'تصفية المدارس' : 'Filtrer les écoles'}>
              <button className={status === 'all' ? 'active' : ''} onClick={() => setStatus('all')}>{lang === 'ar' ? 'الكل' : 'Toutes'}</button>
              <button className={status === 'recognized' ? 'active' : ''} onClick={() => setStatus('recognized')}>{lang === 'ar' ? 'معترف بها' : 'Reconnues'}</button>
              <button className={status === 'progress' ? 'active' : ''} onClick={() => setStatus('progress')}>{lang === 'ar' ? 'قيد الاستكمال' : 'En cours'}</button>
            </div>
          </div>

          {filtered.length ? (
            <div className="school-grid">
              {filtered.map((school) => (
                <article className="school-card" key={school.id}>
                  <div className="school-card__top">
                    <span className="school-card__icon"><Building2 size={23} /></span>
                    <span className={`status-badge ${school.recognized ? 'status-badge--success' : 'status-badge--pending'}`}>
                      {school.recognized ? <BadgeCheck size={15} /> : <ShieldQuestion size={15} />}
                      {school.recognized ? (lang === 'ar' ? 'معترف بها' : 'Reconnue') : (lang === 'ar' ? 'قيد الاستكمال' : 'En cours')}
                    </span>
                  </div>
                  <h3>{lang === 'ar' ? school.name.ar : school.name.fr}</h3>
                  <p><MapPin size={17} /> {school.city} • {school.region}</p>
                  <dl><div><dt>{lang === 'ar' ? 'المراحل' : 'Niveaux'}</dt><dd>{lang === 'ar' ? school.level.ar : school.level.fr}</dd></div></dl>
                </article>
              ))}
            </div>
          ) : <EmptyState title={lang === 'ar' ? 'لا توجد نتائج مطابقة' : 'Aucun résultat'} text={lang === 'ar' ? 'جرّب تعديل كلمات البحث أو حالة الاعتراف.' : 'Modifiez votre recherche ou le filtre de statut.'} />}

          <p className="directory-note">{lang === 'ar' ? 'ملاحظة: البيانات الحالية نموذج أولي، وتُستبدل بقاعدة بيانات المدارس الرسمية عند اعتمادها.' : 'Note : les données affichées sont provisoires et seront remplacées par la base officielle après validation.'}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={lang === 'ar' ? 'خدمة المدارس' : 'Service établissements'} title={lang === 'ar' ? 'هل بيانات مدرستك غير موجودة أو تحتاج تحديثًا؟' : 'Votre établissement est absent ou ses données doivent être mises à jour ?'} text={lang === 'ar' ? 'يمكن لمسؤول المدرسة تقديم طلب إضافة أو تحديث، مع إرفاق المستندات الأساسية.' : 'Le responsable peut soumettre une demande d’ajout ou de mise à jour avec les pièces justificatives.'} />
          <div className="info-banner"><Building2 size={28} /><div><strong>{lang === 'ar' ? 'نموذج تحديث بيانات المدارس' : 'Formulaire de mise à jour'}</strong><p>{lang === 'ar' ? 'الخدمة مهيأة للربط بلوحة إدارة مركزية وقاعدة بيانات المدارس.' : 'Le service est prêt à être relié à un tableau de bord et à une base de données centralisée.'}</p></div></div>
        </div>
      </section>
    </>
  );
}
