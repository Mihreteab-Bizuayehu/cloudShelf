import { useEffect, useState } from "react";
import Card from "./Card";
type Product = {
  title: string;
  thumbnail: string;
  price: number;
};
function Product() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
     const fetchProducts = async () => {
       const response = await fetch(`https://dummyjson.com/products`);
       const results = await response.json();
       setProducts(results.products);
       console.log(typeof results.products[0].id);
     };
    fetchProducts();
  
  },[])

  return (
    <div className="product-container">
      <h1>Featured Products:</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Card
              key={index}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
            />
          ))
        ) : (
          <div>Product Not Found</div>
        )}
      </div>
    </div>
  );
}

export default Product;