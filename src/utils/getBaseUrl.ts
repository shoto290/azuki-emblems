export function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Côté client
    return window.location.origin;
  }

  // Côté serveur
  if (process.env.VERCEL_URL) {
    // Déploiement Vercel
    return `https://${process.env.VERCEL_URL}`;
  }

  // Environnement de développement ou autre hébergeur
  return `http://localhost:${process.env.PORT || 3000}`;
}
