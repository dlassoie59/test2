let offers = JSON.parse(localStorage.getItem('offers') || '[]');

const form = document.getElementById('offer-form');
const list = document.getElementById('offers-list');

function renderList() {
  list.innerHTML = '';
  offers.forEach((offer, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${offer.title} - ${offer.description} <button onclick="deleteOffer(${index})">Supprimer</button>`;
    list.appendChild(li);
  });
}

function deleteOffer(index) {
  offers.splice(index, 1);
  localStorage.setItem('offers', JSON.stringify(offers));
  renderList();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newOffer = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    image: document.getElementById('image').value
  };
  offers.push(newOffer);
  localStorage.setItem('offers', JSON.stringify(offers));
  renderList();
  form.reset();
});

renderList();
