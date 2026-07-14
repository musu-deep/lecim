import { Link } from 'react-router-dom';
import type { Language } from '../types';

export function NotFound({ lang }: { lang: Language }) {
  return <section className="not-found"><div><strong>404</strong><h1>{lang === 'ar' ? 'الصفحة غير موجودة' : 'Page introuvable'}</h1><p>{lang === 'ar' ? 'قد يكون الرابط قد تغير أو حُذف.' : 'Le lien a peut-être été modifié ou supprimé.'}</p><Link className="button button--primary" to={`/${lang}`}>{lang === 'ar' ? 'العودة للرئيسية' : "Retour à l’accueil"}</Link></div></section>;
}
