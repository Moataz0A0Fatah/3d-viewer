// ============ SELECTOR ============
const PLACEHOLDER_URL = import.meta.env.BASE_URL + 'placeholder.png';

function buildSelector() {
  topicGrid.innerHTML = '';

  // Use IntersectionObserver so images only load when they scroll into view
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src && img.src !== src) {
          img.src = src;
        }
        observer.unobserve(img);
      }
    },
    { rootMargin: '200px' } // start loading 200px before visible
  );

  for (const topic of topics) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div class="topic-thumb">
        <img
          alt="${topic.title} thumbnail"
          width="480"
          height="320"
          decoding="async"
          data-src="${topic.thumbnailUrl}"
          src="${PLACEHOLDER_URL}"
          onerror="this.onerror=null; this.src='${PLACEHOLDER_URL}';"
        />
      </div>
      <div class="topic-body">
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
      </div>
    `;
    card.addEventListener('click', () => openTopic(topic));
    topicGrid.appendChild(card);

    // Lazy-load the real thumbnail
    const img = card.querySelector('img')!;
    observer.observe(img);
  }
}