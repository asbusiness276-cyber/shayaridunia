export function generateSlug(shayari: { id: number; text: string; language: string; category: string }): string {
  // Extract first 5 words of the first line
  const firstLine = shayari.text.split('\n')[0]
    .replace(/[^\w\s\u0900-\u097F]/gi, '') // Keep alphanumeric and Hindi chars
    .trim()
    .split(/\s+/)
    .slice(0, 5)
    .join('-');

  // Create a base slug: e.g. "teri-muskan-se-best-love-shayari-hindi"
  const baseSlug = `${firstLine}-best-${shayari.category}-shayari-${shayari.language}`;
  
  // Clean up any double dashes, lowercase the english parts
  const cleanSlug = baseSlug.replace(/-+/g, '-').toLowerCase();

  // Always append the ID at the end so we can easily look it up
  return `${cleanSlug}-${shayari.id}`;
}

export function getIdFromSlug(slug: string): number {
  const parts = slug.split('-');
  return parseInt(parts[parts.length - 1], 10);
}
