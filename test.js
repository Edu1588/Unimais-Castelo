import http from 'http';
http.get('http://localhost:3000/api/unimais/wp-json/wc/store/products?per_page=100&page=1', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const products = JSON.parse(data);
      const with8 = products.filter(p => p.images.length === 8);
      console.log("Products with 8 images:", with8.length);
      console.log("Products with <= 8 images:", products.filter(p => p.images.length <= 8).length);
    } catch(e) {
      console.error(e);
    }
  });
}).on('error', console.error);
