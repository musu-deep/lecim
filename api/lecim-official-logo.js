import fs from 'node:fs';
import path from 'node:path';

export default function handler(_req, res) {
  try {
    const source = path.join(process.cwd(), 'public', 'assets', 'lecim-logo-official-full.png.b64');
    const base64 = fs.readFileSync(source, 'utf8').trim();
    const image = Buffer.from(base64, 'base64');
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.status(200).send(image);
  } catch {
    res.status(404).end();
  }
}
