import {
  emotionHue,
  getEmotion,
  getQuotes,
  isLanguage,
  languages,
  QUOTES_PER_PAGE,
} from "../../../../../lib/shayari";

type RouteContext = {
  params: Promise<{ language: string; emotion: string; index: string }>;
};

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

function wrapText(value: string, maxLength = 27) {
  const paragraphs = value.split("\n");
  const lines: string[] = [];

  for (const paragraph of paragraphs) {
    const words = paragraph.split(/\s+/).filter(Boolean);
    let current = "";
    for (const word of words) {
      const proposal = current ? `${current} ${word}` : word;
      if (Array.from(proposal).length > maxLength && current) {
        lines.push(current);
        current = word;
      } else {
        current = proposal;
      }
    }
    if (current) lines.push(current);
  }

  return lines;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { language, emotion, index } = await params;
  if (!isLanguage(language)) return new Response("Not found", { status: 404 });

  const selectedEmotion = getEmotion(emotion);
  const quoteIndex = Number(index);
  if (
    !selectedEmotion ||
    !Number.isInteger(quoteIndex) ||
    quoteIndex < 1 ||
    quoteIndex > QUOTES_PER_PAGE
  ) {
    return new Response("Not found", { status: 404 });
  }

  const quote = getQuotes(language, selectedEmotion)[quoteIndex - 1];
  const hue = emotionHue(selectedEmotion.slug);
  const lines = wrapText(quote.text, language === "english" ? 29 : 25);
  const fontSize = lines.length <= 4 ? 62 : lines.length <= 6 ? 52 : 44;
  const lineHeight = Math.round(fontSize * 1.48);
  const totalHeight = (lines.length - 1) * lineHeight;
  const startY = 675 - totalHeight / 2;
  const textLines = lines
    .map(
      (line, lineIndex) =>
        `<tspan x="540" y="${Math.round(startY + lineIndex * lineHeight)}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  const languageLabel = languages[language].nativeLabel;
  const title = `${selectedEmotion.label[language]} · ${languageLabel}`;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(title)}</title>
  <desc id="description">${escapeXml(quote.text.replaceAll("\n", " "))}</desc>
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${hue}, 46%, 20%)"/>
      <stop offset="0.55" stop-color="hsl(${(hue + 24) % 360}, 50%, 30%)"/>
      <stop offset="1" stop-color="hsl(${(hue + 320) % 360}, 62%, 40%)"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.7">
      <stop offset="0" stop-color="hsl(${(hue + 42) % 360}, 85%, 78%)" stop-opacity="0.65"/>
      <stop offset="1" stop-color="hsl(${hue}, 60%, 30%)" stop-opacity="0"/>
    </radialGradient>
    <pattern id="lines" width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <line x1="0" y1="0" x2="0" y2="44" stroke="#fff" stroke-opacity="0.035" stroke-width="2"/>
    </pattern>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#120c16" flood-opacity="0.34"/>
    </filter>
  </defs>
  <rect width="1080" height="1350" rx="56" fill="url(#background)"/>
  <rect width="1080" height="1350" rx="56" fill="url(#glow)"/>
  <rect width="1080" height="1350" rx="56" fill="url(#lines)"/>
  <circle cx="940" cy="140" r="220" fill="none" stroke="#fff" stroke-opacity="0.12" stroke-width="2"/>
  <circle cx="940" cy="140" r="155" fill="none" stroke="#fff" stroke-opacity="0.1" stroke-width="2"/>
  <circle cx="120" cy="1210" r="210" fill="hsl(${(hue + 310) % 360}, 70%, 58%)" fill-opacity="0.16"/>
  <g filter="url(#shadow)">
    <rect x="78" y="78" width="${Math.min(490, 230 + Array.from(title).length * 13)}" height="58" rx="29" fill="#fff" fill-opacity="0.12" stroke="#fff" stroke-opacity="0.28"/>
    <text x="108" y="116" fill="#fff" fill-opacity="0.9" font-size="20" font-weight="700" letter-spacing="2" font-family="Arial, Noto Sans Devanagari, Noto Sans Gurmukhi, sans-serif">${escapeXml(title.toUpperCase())}</text>
  </g>
  <text x="1002" y="116" text-anchor="end" fill="#fff" fill-opacity="0.62" font-size="20" font-family="Georgia, serif">${String(quoteIndex).padStart(2, "0")} / 18</text>
  <text x="540" text-anchor="middle" fill="#fff" font-size="${fontSize}" font-weight="600" font-family="Georgia, Noto Serif Devanagari, Noto Serif Gurmukhi, Noto Sans Devanagari, Noto Sans Gurmukhi, serif">${textLines}</text>
  <line x1="410" y1="1082" x2="670" y2="1082" stroke="#fff" stroke-opacity="0.34"/>
  <text x="540" y="1152" text-anchor="middle" fill="#fff" fill-opacity="0.92" font-size="27" font-weight="700" letter-spacing="1" font-family="Georgia, serif">Shayari Dunia</text>
  <text x="540" y="1192" text-anchor="middle" fill="#fff" fill-opacity="0.54" font-size="16" letter-spacing="4" font-family="Arial, sans-serif">HAR EHSAAS · KHOOBSURAT ALFAAZ</text>
  <text x="540" y="1280" text-anchor="middle" fill="#fff" fill-opacity="0.35" font-size="15" font-family="Arial, sans-serif">shayaridunia.com</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Disposition": `inline; filename="${language}-${emotion}-${quoteIndex}.svg"`,
      "Content-Type": "image/svg+xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
