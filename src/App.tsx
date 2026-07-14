import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Exams } from './pages/Exams';
import { Home } from './pages/Home';
import { Media } from './pages/Media';
import { Membership } from './pages/Membership';
import { NotFound } from './pages/NotFound';
import { Partners } from './pages/Partners';
import { Policies } from './pages/Policies';
import { Projects } from './pages/Projects';
import { Schools } from './pages/Schools';
import { Services } from './pages/Services';
import type { Language } from './types';

function LanguageRoutes({ lang }: { lang: Language }) {
  return (
    <Layout lang={lang}>
      <Routes>
        <Route index element={<Home lang={lang} />} />
        <Route path="about" element={<About lang={lang} />} />
        <Route path="schools" element={<Schools lang={lang} />} />
        <Route path="services" element={<Services lang={lang} />} />
        <Route path="exams" element={<Exams lang={lang} />} />
        <Route path="projects" element={<Projects lang={lang} />} />
        <Route path="membership" element={<Membership lang={lang} />} />
        <Route path="media" element={<Media lang={lang} />} />
        <Route path="contact" element={<Contact lang={lang} />} />
        <Route path="partners" element={<Partners lang={lang} />} />
        <Route path="policies" element={<Policies lang={lang} />} />
        <Route path="*" element={<NotFound lang={lang} />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  const location = useLocation();
  const first = location.pathname.split('/').filter(Boolean)[0];
  if (first !== 'ar' && first !== 'fr') return <Navigate to="/ar" replace />;
  const lang = first as Language;
  const nestedPath = location.pathname.replace(`/${lang}`, '') || '/';
  return (
    <Routes>
      <Route path={`/${lang}/*`} element={<LanguageRoutes lang={lang} />} />
      <Route path="*" element={<Navigate to={`/${lang}${nestedPath}`} replace />} />
    </Routes>
  );
}
