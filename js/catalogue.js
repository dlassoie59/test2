const offers = [
  {title: "Pare-brise Audi A3", description: "Offre spéciale sur le pare-brise Audi A3", image: "images/audi_a3.jpg"},
  {title: "Filtre Volkswagen Golf", description: "Remise sur les filtres VW Golf", image: "images/vw_golf.jpg"}
];

const container = document.getElementById('offers-container');
offers.forEach(offer => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${offer.title}</h3><p>${offer.description}</p><img src="${offer.image}" alt="${offer.title}" width="200">`;
  container.appendChild(div);
});
