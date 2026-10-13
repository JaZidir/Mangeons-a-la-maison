// Service worker minimal : permet l'installation comme une appli.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(
    fetch(e.request).catch(() =>
      new Response("<p style='font-family:sans-serif;padding:24px'>Pas de connexion internet. Réessaie quand tu seras connecté.</p>",
        { headers: { "Content-Type": "text/html; charset=utf-8" } })
    )
  );
});
