const main = document.querySelector('.main');

for (let i = 0; i < 10; i++) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = `https://picsum.photos/200/300?random=${i}`;
  img.alt = 'Card image';
  card.appendChild(img);

  const description = document.createElement('div');
  description.classList.add('card-description');

  const p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, elit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.';
  description.appendChild(p);

  card.appendChild(description);
  main.appendChild(card);
}