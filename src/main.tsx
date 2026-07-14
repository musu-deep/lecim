import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

const generatedAssetPaths = {
  hero: '/assets/hero-campus.jpg',
  classroom: '/assets/classroom-group.jpg',
} as const;

const generatedObjectUrls: string[] = [];

async function loadGeneratedPng(path: string) {
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  const bytes = await response.arrayBuffer();
  const objectUrl = URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));
  generatedObjectUrls.push(objectUrl);
  return objectUrl;
}

async function normalizeGeneratedImages() {
  try {
    const [heroUrl, classroomUrl] = await Promise.all([
      loadGeneratedPng(generatedAssetPaths.hero),
      loadGeneratedPng(generatedAssetPaths.classroom),
    ]);

    const override = document.createElement('style');
    override.dataset.lecimImageFix = 'true';
    override.textContent = `
      .hero::after,
      .hero__visual::before {
        background-image: url("${heroUrl}") !important;
      }

      .hero__image-frame,
      .hero__visual::after,
      .vision-panel {
        background-image: url("${classroomUrl}") !important;
      }
    `;
    document.head.appendChild(override);
  } catch (error) {
    console.warn('LECIM image normalization skipped:', error);
  }
}

void normalizeGeneratedImages();
window.addEventListener(
  'pagehide',
  () => generatedObjectUrls.forEach((url) => URL.revokeObjectURL(url)),
  { once: true },
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
