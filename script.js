const products = [
    { name: 'Product 1', price: 99, quantity: 5, image: 'https://cdn-icons-png.flaticon.com/128/9280/9280764.png' },
    { name: 'Product 2', price: 149, quantity: 10, image: 'https://cdn-icons-png.flaticon.com/128/9280/9280764.png' },
    { name: 'Product 3', price: 79, quantity: 2, image: 'https://cdn-icons-png.flaticon.com/128/9280/9280764.png' },
  ];
  
  const container = document.getElementById('productContainer');
  
  products.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: $${p.price}</p>
        <p>Quantity: ${p.quantity}</p>
      </div>
    `;
  });
  