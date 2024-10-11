fetch('/api/manhwa')
  .then(response => response.json())
  .then(data => {
    const manhwaList = document.getElementById('manhwa-list');
    data.forEach(manhwa => {
      const manhwaElement = document.createElement('div');
      manhwaElement.className = 'manhwa-item';
      manhwaElement.innerHTML = `
        <h2>${manhwa.title}</h2>
        <p><strong>Genre:</strong> ${manhwa.genre}</p>
        <p>${manhwa.description}</p>
      `;
      manhwaList.appendChild(manhwaElement);
    });
  });