import fs from 'node:fs';
import path from 'node:path';

export default function handler(_request, response) {
  const logoPath = path.join(process.cwd(), 'public', 'assets', 'lecim-logo-official.b64.txt');
  const base64Logo = fs.readFileSync(logoPath, 'utf8').trim();
  const logoBuffer = Buffer.from(base64Logo, 'base64');

  response.setHeader('Content-Type', 'image/png');
  response.setHeader('Content-Length', String(logoBuffer.length));
  response.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  response.status(200).send(logoBuffer);
}
