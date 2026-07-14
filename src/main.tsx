import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

const HERO_PARTS = 16;

async function loadSafeHeroImage() {
  try {
    const parts = await Promise.all(
      Array.from({ length: HERO_PARTS }, async (_, index) => {
        const response = await fetch(`/assets/hero-live.part${index}.txt`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`Unable to load hero image part ${index}`);
        }

        return (await response.text()).trim();
      }),
    );

    const binary = window.atob(parts.join(''));
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const objectUrl = URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));

    await new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = () => reject(new Error('Decoded hero image is invalid'));
      image.src = objectUrl;
    });

    document.documentElement.style.setProperty(
      '--hero-live-image',
      `url("${objectUrl}")`,
    );
    document.documentElement.classList.add('hero-image-ready');

    window.addEventListener('pagehide', () => URL.revokeObjectURL(objectUrl), {
      once: true,
    });
  } catch (error) {
    console.warn('LECIM live hero image could not be loaded:', error);
  }
}

void loadSafeHeroImage();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
